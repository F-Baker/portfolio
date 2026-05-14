resource "azurerm_resource_group" "this" {
  name     = "rg-${local.naming_convention}"
  location = var.location
  tags     = local.tags
}
