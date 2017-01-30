import { Executor } from "@atomist/rug/operations/Executor"
import { Services, Service } from "@atomist/rug/model/Core"
import { Result, Status, Parameter } from "@atomist/rug/operations/RugOperation"

let params: Parameter[] = [
    {
        name: "spring_boot_version",
        displayName: "Spring Boot Version",
        description: "version of Spring Boot, e.g., 1.4.4.RELEASE",
        validInput: "a valid version of Spring Boot",
        pattern: "@any",
        required: false,
        default: "1.4.4.RELEASE"
    }
]

interface Parameters {
    spring_boot_version: string
}

var setSpringBootParentVersionExecutor: Executor = {
    description: "Set the Spring Boot version on the parent block in any pom in a project",
    name: "SetSpringBootParentVersionExecutor",
    tags: ["atomist/intent=set spring boot parent version", "atomist/private=false"],
    parameters: params,
    execute(services: Services, p:Parameters): Result {
      for (let s of services.services()) {
        s.editWith("atomist-rugs.spring-boot-editors.SetSpringBootParentVersion", {spring_boot_version: p.spring_boot_version})
      }
      return new Result(Status.Success, "OK")
    }
}
