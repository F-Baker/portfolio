# https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/password
resource "random_password" "password" {
  length      = 32
  min_numeric = 1
  min_special = 1
  min_upper   = 1
}

# https://registry.terraform.io/providers/hashicorp/azuread/latest/docs/resources/user
resource "azuread_user" "this" {
  for_each = tomap({ for user in local.imported_users : user.displayName => user })

  account_enabled       = each.value.accountEnabled
  display_name          = each.value.displayName
  force_password_change = true
  password              = random_password.password.result
  user_principal_name = format(
    "%s@%s",
    lower(each.value.displayName),
    local.domain_name
  )
}
