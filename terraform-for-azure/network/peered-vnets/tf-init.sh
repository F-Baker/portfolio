#!/bin/bash
# use `source tf-init.sh``

set -a

TF_VAR_env="dev"
TF_VAR_location=""
TF_VAR_product_name="peered-vnets"
TF_VAR_snet_a_address_space="10.0.1.0/24"
TF_VAR_snet_b_address_space="11.0.1.0/24"
TF_VAR_vnet_a_address_space="10.0.0.0/16"
TF_VAR_vnet_b_address_space="11.0.0.0/16"
ARM_SUBSCRIPTION_ID="<redacted>"
ARM_TENANT_ID="<redacted>"
set +a

# https://developer.hashicorp.com/terraform/language/backend#partial-configuration
terraform init \
  -backend-config="container_name=<redacted>" \
  -backend-config="key=<redacted>" \
  -backend-config="resource_group_name=<redacted>" \
  -backend-config="storage_account_name=<redacted>"
