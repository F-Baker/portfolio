resource "azurerm_resource_group" "this" {
  name     = "rg-${local.naming_convention}"
  location = var.location
}

# https://registry.terraform.io/providers/hashicorp/azuread/latest/docs/resources/application
resource "azuread_application" "this" {
  display_name = local.naming_convention
  owners       = [data.azuread_client_config.this.object_id]
}

# https://registry.terraform.io/providers/hashicorp/azuread/latest/docs/resources/service_principal
resource "azuread_service_principal" "this" {
  app_role_assignment_required = false
  client_id                    = azuread_application.this.client_id
  owners                       = [data.azuread_client_config.this.object_id]
}

# https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/role_assignment
resource "azurerm_role_assignment" "this" {
  # condition_version                = "2.0"
  principal_id                     = azuread_service_principal.this.object_id
  role_definition_name             = "Storage Blob Data Contributor"
  scope                            = azurerm_storage_account.this.id
  skip_service_principal_aad_check = true
}

# https://registry.terraform.io/providers/hashicorp/azuread/latest/docs/resources/service_principal_password
resource "azuread_service_principal_password" "this" {
  service_principal_id = azuread_service_principal.this.id
}

# https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/storage_account
resource "azurerm_storage_account" "this" {
  account_kind                      = "StorageV2"
  account_replication_type          = "LRS"
  account_tier                      = "Standard"
  default_to_oauth_authentication   = true
  infrastructure_encryption_enabled = false
  location                          = azurerm_resource_group.this.location
  min_tls_version                   = "TLS1_2"
  name                              = var.st_shortname
  resource_group_name               = azurerm_resource_group.this.name
  # shared_access_key_enabled         = false
  tags                              = local.tags

  blob_properties {
    versioning_enabled            = true
    change_feed_enabled           = true
    change_feed_retention_in_days = 90
    last_access_time_enabled      = true

    delete_retention_policy {
      days = 30
    }

    container_delete_retention_policy {
      days = 30
    }

  }

  sas_policy {
    expiration_period = "00.02:00:00"
    expiration_action = "Log"
  }
}

# https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/storage_container
resource "azurerm_storage_container" "this" {
  name                  = "stcon-${local.naming_convention}"
  storage_account_id    = azurerm_storage_account.this.id
  container_access_type = "private"
}
