# https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/resource_group
resource "azurerm_resource_group" "this" {
  name     = "rg-${local.naming_convention}"
  location = var.location
}

# https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/virtual_network
resource "azurerm_virtual_network" "vnet_a" {
  name                = "vnet-a-${local.naming_convention}"
  address_space       = ["${var.vnet_a_address_space}"]
  location            = azurerm_resource_group.this.location
  resource_group_name = azurerm_resource_group.this.name
  tags                = local.tags
}

# https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/subnet
resource "azurerm_subnet" "snet_a" {
  # 'AzureFirewallSubnet' to be used for the Azure Firewall resource
  name                 = "snet-a-${local.naming_convention}"
  resource_group_name  = azurerm_resource_group.this.name
  virtual_network_name = azurerm_virtual_network.vnet_a.name
  address_prefixes     = ["${var.snet_a_address_space}"]
}

resource "azurerm_virtual_network" "vnet_b" {
  name                = "vnet-b-${local.naming_convention}"
  address_space       = ["${var.vnet_b_address_space}"]
  location            = azurerm_resource_group.this.location
  resource_group_name = azurerm_resource_group.this.name
  tags                = local.tags
}

resource "azurerm_subnet" "snet_b" {
  name                 = "snet-b-${local.naming_convention}"
  resource_group_name  = azurerm_resource_group.this.name
  virtual_network_name = azurerm_virtual_network.vnet_b.name
  address_prefixes     = ["${var.snet_b_address_space}"]
}

# https://registry.terraform.io/providers/hashicorp/Azurerm/latest/docs/resources/virtual_network_peering
resource "azurerm_virtual_network_peering" "vnet_a_to_vnet_b" {
  name                      = "peer-a-to-b-${local.naming_convention}"
  resource_group_name       = azurerm_resource_group.this.name
  virtual_network_name      = azurerm_virtual_network.vnet_a.name
  remote_virtual_network_id = azurerm_virtual_network.vnet_b.id
}

resource "azurerm_virtual_network_peering" "vnet_b_to_vnet_a" {
  name                      = "peer-b-to-a-${local.naming_convention}"
  resource_group_name       = azurerm_resource_group.this.name
  virtual_network_name      = azurerm_virtual_network.vnet_b.name
  remote_virtual_network_id = azurerm_virtual_network.vnet_a.id
}
