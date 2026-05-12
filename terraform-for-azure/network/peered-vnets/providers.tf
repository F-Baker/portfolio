terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~>4.62"
    }
    azuread = {
      source  = "hashicorp/azuread"
      version = "~>3.8"
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

provider "azurerm" {
  features {}
}
