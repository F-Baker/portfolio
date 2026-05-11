# https://registry.terraform.io/providers/hashicorp/azuread/latest/docs/data-sources/domains
data "azuread_domains" "default" {
  only_initial = true
}
