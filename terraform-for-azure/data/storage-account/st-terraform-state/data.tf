# https://registry.terraform.io/providers/hashicorp/Azurerm/latest/docs/data-sources/subscription
data "azurerm_subscription" "this" {}

# https://registry.terraform.io/providers/hashicorp/azuread/latest/docs/data-sources/client_config
data "azuread_client_config" "this" {}
