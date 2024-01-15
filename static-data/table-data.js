const tDataPermissions = [
  "product_group",
  "brand",
  "role",
  "user",
  "supplier",
  "stock",
  "product_model",
  "product_category",
];

const tDataProductInSale = [
  {
    product: "Acer Aspire E 15 (Color:White) AS0017-2 Acer",
    quantity: 12,
    unit_price: 1000,
    sub_total: 12000,
  },
  {
    product: "Acer Aspire E 15 (Color:Black) AS0017-2 Acer",
    quantity: 2,
    unit_price: 1000,
    sub_total: 2000,
  },
  {
    product: "Apple Watch (T-30@q) BD",
    quantity: 4,
    unit_price: 2000,
    sub_total: 8000,
  },
  {
    product: "Apple Watch (T-30@q) BD",
    quantity: 4,
    unit_price: 2000,
    sub_total: 8000,
  },
  {
    product: "Apple Watch (T-30@q) BD",
    quantity: 4,
    unit_price: 2000,
    sub_total: 8000,
  },
  {
    product: "Apple Watch (T-30@q) BD",
    quantity: 4,
    unit_price: 2000,
    sub_total: 8000,
  },
  {
    product: "Apple Watch (T-30@q) BD",
    quantity: 4,
    unit_price: 2000,
    sub_total: 8000,
  },
];

const tDataRoles = [
  {
    id: 1,
    role: "superadmin",
    permissions: [
      "product_group_create",
      "product_group_read",
      "product_group_update",
      "product_group_delete",
      "product_category_read",
      "product_category_update",
      "product_category_delete",
      "product_model_create",
    ],
  },
  {
    id: 2,
    role: "Admin",
    permissions: [
      "product_group_create",
      "product_group_read",
      "product_group_update",
      "product_group_delete",
      "product_category_read",
      "product_category_update",
      "product_category_delete",
      "product_model_create",
    ],
  },
  {
    id: 3,
    role: "Manager",
    permissions: [
      "product_group_create",
      "product_group_read",
      "product_group_update",
      "product_group_delete",
      "product_category_read",
      "product_category_update",
      "product_category_delete",
      "product_model_create",
    ],
  },
];

const tDataUsers = [
  {
    id: 1,
    Username: "zidan",
    Name: "Zidan Talukdar",
    Email: "zidan@gmail.com",
    "Contact no.": "01711111111",
    Role: "Admin",
  },
  {
    id: 1,
    Username: "zidan",
    Name: "Zidan Talukdar",
    Email: "zidan@gmail.com",
    "Contact no.": "01711111111",
    Role: "Admin",
  },
  {
    id: 1,
    Username: "zidan",
    Name: "Zidan Talukdar",
    Email: "zidan@gmail.com",
    "Contact no.": "01711111111",
    Role: "Admin",
  },
];

export { tDataPermissions, tDataRoles, tDataUsers, tDataProductInSale };
