# https://developer.hashicorp.com/terraform/language/functions/file
# https://developer.hashicorp.com/terraform/language/functions/csvdecode
locals {
  domain_name    = data.azuread_domains.default.domains.0.domain_name
  imported_users = csvdecode(file("${path.module}/resources/user-export.csv"))
}
