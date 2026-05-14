locals {
  naming_convention = "${var.product_name}-${var.env}"
  tags = {
    env        = "${var.env}"
    product    = "${var.product_name}"
    managed_by = "opentofu"
  }
}
