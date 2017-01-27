# Atomist 'spring-boot-editors'

[![Build Status](https://travis-ci.org/atomist-rugs/spring-boot-editors.svg?branch=master)](https://travis-ci.org/atomist-rugs/spring-boot-editors)
[![Slack Status](https://join.atomist.com/badge.svg)](https://join.atomist.com)

This [Rug](http://docs.atomist.com/) archive contains editors for [Spring Boot][spring-boot] projects.  Take a look inside the
`.atomist` folder.

[spring-boot]: https://projects.spring.io/spring-boot/

## Rugs

### AddDockerMavenBuild

The AddDockerMavenBuild Editor adds [Docker][docker] artifacts to an existing [Maven][maven] project.

[maven]: https://maven.apache.org/
[docker]: https://www.docker.com/

#### Prerequisites

Before running this Editor, you must have the following prerequisites
satisfied.

*   A git repository
*   The project must contain a Maven `pom.xml` in its root

#### Parameters

To run this editor, you must supply the following parameters.

*   `base_docker_repository`: Base name of the docker repository to push artifacts to (i.e. the address before the first '/')

#### Running

Run it as follows:

```
$ cd to/your/repo
$ rug edit atomist-rugs:spring-boot-editors:AddDockerMavenBuild \
    base_docker_repository=my-docker-repository \
```

This will amend your `pom.xml` to include the [Git Commit Id Maven Plugin][git-commit-id-maven-plugin], the [Docker Maven Plugin][docker-maven-plugin], the [Maven Dependency Plugin][maven-dependency-plugin] with appropriate settings to package using Docker. It will also add a working `Dockerfile` for your project. Finally it will amend the existing `README.md` with instructions for building and packaging for Docker. If you are happy with the change, commit the changes made by
the Editor and push the commit to GitHub.

[git-commit-id-maven-plugin]: https://mvnrepository.com/artifact/pl.project13.maven/git-commit-id-plugin
[docker-maven-plugin]: https://github.com/spotify/docker-maven-plugin
[maven-dependency-plugin]: https://mvnrepository.com/artifact/org.apache.maven.plugins/maven-dependency-plugin

### UpdateServicePort

The UpdateServicePort Editor sets the service port property in [Spring Boot][spring-boot] `application.properties` file and a corresponding [Docker][docker] Dockerfile setting.

[spring-boot]: https://projects.spring.io/spring-boot/
[docker]: https://www.docker.com/

#### Prerequisites

Before running this Editor, you must have the following prerequisites
satisfied.

*   A git repository
*   The project must contain a Spring Boot `src/main/resources/application.properties` file
*   The project must contain a `src/main/docker/Dockerfile` file

#### Parameters

To run this editor, you must supply the following parameters:

*   `service_port`: The port to switch the Spring Boot service to

#### Running

Run it as follows:

```
$ cd to/your/repo
$ rug edit atomist-rugs:spring-boot-editors:UpdateServicePort \
    service_port=8181 \
```

This will amend your `application.properties` and `Dockerfile` to specify the newly indicated service port. If you are happy with the change, commit the changes made by
the Editor and push the commit to GitHub.

### AddSpringBootProjectToExistingProject

The AddSpringBootProjectToExistingProject Editor adds an initial [Spring Boot][spring-boot] project into a subdirectory of an existing project.

[spring-boot]: https://projects.spring.io/spring-boot/

#### Prerequisites

Before running this Editor, you must have the following prerequisites
satisfied.

*   A git repository

#### Parameters

To run this editor, you must supply the following parameters:

Name | Required | Default | Description
-----|----------|---------|------------
project_base_directory
`project_base_directory` | Yes | |  A valid directory path for where your [Spring Boot][spring-boot] project will be created in the existing project.  
`project_name` | Yes | |  A valid GitHub repository name.  It must be 21 characters or less to avoid truncating name when the its Slack channel is created.
`artifact_id` | No | myartifact | Maven artifact ID, e.g., "fiddle-riddle".
`group_id` | No | mygroup |  Maven group ID, e.g., "com.pany.project".
`version` | No | 0.1.0-SNAPSHOT | [Semantic version][semver] of the project.
`description` | No | My new project | A brief description of the project.

[semver]: http://semver.org
[spring-boot]: https://projects.spring.io/spring-boot/

#### Running

Run it as follows:

```
$ cd to/your/repo
$ rug edit atomist-rugs:spring-boot-editors:AddSpringBootProjectToExistingProject \
    project_base_directory=mynewproject \
    project_name=pet-shop-app \
    artifact_id=pet-shop \
    group_id=uk.co.lndn \
    version=0.1.0-SNAPSHOT \
    description="Spring Boot application"
```

This will amend create a new [Spring Boot][spring-boot] project under the `mynewproject` directory in your existing project. If you are happy with the change, commit the changes made by
the Editor and push the commit to GitHub.

[spring-boot]: https://projects.spring.io/spring-boot/

### SetSpringBootParentVersion

The SetSpringBootParentVersion editor amends an existing `parent` block that specifies the current version of [Spring Boot][spring-boot] to a new, specified version.

[spring-boot]: https://projects.spring.io/spring-boot/

#### Prerequisites

Before running this editor, you must have the following prerequisites
satisfied.

*   A git repository

#### Parameters

To run this editor, you must supply the following parameters:

Name | Required | Default | Description
-----|----------|---------|------------
`spring_boot_version` | No | 1.4.4.RELEASE |  A valid  [Spring Boot][spring-boot] version.  

[spring-boot]: https://projects.spring.io/spring-boot/

#### Running

Run it as follows:

```
$ cd to/your/repo
$ rug edit atomist-rugs:spring-boot-editors:SetSpringBootParentVersion \
    spring_boot_version=1.4.4.RELEASE
```

This will amend the current [Spring Boot][spring-boot] `parent` blocks in all the `pom.xml` files that already have a `parent` block that specifies [Spring Boot][spring-boot] through the target project. If you are happy with the change, commit the changes made by
the editor and push the commit to GitHub.

[spring-boot]: https://projects.spring.io/spring-boot/

## Support

General support questions should be discussed in the `#support`
channel on our community Slack team
at [atomist-community.slack.com](https://join.atomist.com).

If you find a problem, please create an [issue][].

[issue]: https://github.com/atomist-rugs/spring-boot-editors/issues

## Development

You can build, test, and install the project locally with
the [Rug CLI][cli].

[cli]: https://github.com/atomist/rug-cli

```
$ rug test
$ rug install
```

To create a new release of the project, simply push a tag of the form
`M.N.P` where `M`, `N`, and `P` are integers that form the next
appropriate [semantic version][semver] for release.  For example:

[semver]: http://semver.org

```
$ git tag -a 1.2.3
```

The Travis CI build (see badge at the top of this page) will
automatically create a GitHub release using the tag name for the
release and the comment provided on the annotated tag as the contents
of the release notes.  It will also automatically upload the needed
artifacts.

---
Created by Atomist. Need Help? <a href="https://join.atomist.com/">Join our Slack team</a>
