# build-and-scan

## description

Trivy is a tool for scanning container images for CVEs.  This particular tool is a plugin offered directly from the Aquasec and integrates with ADO.

## resources

- <https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/docker-v2?view=azure-pipelines&tabs=yaml>
- <https://learn.microsoft.com/en-us/azure/devops/pipelines/build/variables?view=azure-devops&tabs=yaml>
- <https://learn.microsoft.com/en-us/azure/devops/repos/git/git-tags?view=azure-devops&tabs=browser>

## prereqs

- Sufficient privileges in your ADO instance to install plugins, manage pipelines
- trivy plugin for ADO: https://marketplace.visualstudio.com/items?itemName=AquaSecurityOfficial.trivy-official&targetId=604b6e5b-9096-437d-b263-6dd15bf3e650&utm_source=vstsproduct&utm_medium=ExtHubManageList

## operation

