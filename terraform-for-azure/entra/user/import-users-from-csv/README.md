# import-users-from-csv

## **WARNING!** 

The misuse of this plan can result in the modification of user attributes and potential impact of user access.  __Do not run this on your prod tenant.__   

## Description

This simple plan creates users from a csv export in a target entra domain.  This can be useful in testing/lab tenant scenarios where a tenant is setup from scratch.

The users instantiated in this example are disabled by default, as per the `accountEnabled` key in the CSV.

## Prerequisites

- Owner or Contrib within the sub
- azcli with a validated session
- a remote backend for the tf state and perms for your user
- tenant ID
  - **note:** in this case, we need to provide the tenant ID in the providers.tf which **does not** support vars from a data source.  Consequently, the value is being supplied by special reserved word `ARM_TENANT_ID` in the tf-init.sh

## Operation

1) fill out the required values in `tf-init.sh` and initialize the plan
1) fill out the required values in `./resources/user-export.csv`
1) run the plan and confirm the newly created users via the portal
