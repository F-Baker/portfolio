terraform {
  required_providers {
    azuread = {
      source  = "hashicorp/azuread"
      version = "~>3.7"
    }
  }

  # populated via the tf-init.sh wrapper
  backend "azurerm" {
    use_cli              = true
    use_azuread_auth     = true
    resource_group_name  = ""
    storage_account_name = ""
    container_name       = ""
    key                  = ""
  }
}

# https://registry.terraform.io/providers/hashicorp/azuread/latest/docs
provider "azuread" {}
