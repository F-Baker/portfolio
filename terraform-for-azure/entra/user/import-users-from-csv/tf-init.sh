#!/bin/bash
# https://developer.hashicorp.com/terraform/language/backend#partial-configuration

terraform init \
  -backend-config="<redacted>" \
  -backend-config="<redacted>" \
  -backend-config="<redacted>" \
  -backend-config="<redacted>"

# export env vars
set -a

ARM_TENANT_ID="<redacted>"

set +a
