import {
  ActivitySquare,
  AreaChart,
  Barcode,
  Contact,
  CopyPlus,
  FileBox,
  FileCog,
  Group,
  Layers,
  LayoutGrid,
  Package,
  PackageSearch,
  Pocket,
  Send,
  Settings2,
  User,
  Users,
  Wrench,
  MessageCircleMore,
  MessageCircle,
  CircleDollarSign,
  FileCode2,
  PercentSquare,
  WalletCards,
  ShoppingCart,
  Warehouse,
  PackagePlus,
  Blocks,
  LayoutPanelLeft,
  Table,
  ListPlus,
  Settings,
  ScrollText,
  Undo2,
  SendToBack,
  Receipt,
  UserCog,
  FileBarChart2,
  FolderKanban,
  GanttChartSquare,
  MessageSquareDashed,
  ListTree,
  Framer,
  TableProperties,
} from "lucide-react";

const sidenav = [
  {
    id: 1,
    label: "Dashboard",
    icon: <AreaChart className="w-5 h-5" />,
    sub: false,
    to: "/dashboard",
  },
  {
    id: 12,
    label: "Product",
    icon: <PackageSearch className="w-5 h-5" />,
    sub: true,
    childs: [
      {
        id: 1200,
        label: "Add Product",
        icon: <CopyPlus className="w-5 h-5" />,
        to: "/products/create",
      },
      {
        id: 1201,
        label: "Manage Products",
        icon: <FileCog className="w-5 h-5" />,
        to: "/products",
      },

      {
        id: 1201,
        label: "New Campaign",
        icon: <Framer className="w-5 h-5" />,
        to: "/products/add-campaign",
      },
      {
        id: 1201,
        label: "Manage Compaigns",
        icon: <TableProperties className="w-5 h-5" />,
        to: "/products/campaigns",
      },
    ],
  },
  {
    id: 4,
    label: "Order & Reviews",
    icon: <Package className="w-5 h-5" />,
    sub: true,
    childs: [
      {
        id: 401,
        label: "Manage Orders",
        icon: <ListTree className="w-5 h-5" />,
        to: "/order-reviews/orders",
      },
      {
        id: 402,
        label: "Manage Reviews",
        icon: <MessageSquareDashed className="w-5 h-5" />,
        to: "/order-reviews/reviews",
      },
      {
        id: 403,
        label: "Customer Returns",
        icon: <Undo2 className="w-5 h-5" />,
        to: "/order-reviews/customer-return",
      },
    ],
  },

  {
    id: 3,
    label: "Finance",
    icon: <Receipt className="w-5 h-5" />,
    sub: true,
    childs: [
      {
        id: 301,
        label: "Account Statements",
        icon: <FileBarChart2 className="w-5 h-5" />,
        to: "/finance/account-statements",
      },
      {
        id: 302,
        label: "Order Overview",
        icon: <GanttChartSquare className="w-5 h-5" />,
        to: "/finance/order-overview",
      },
      {
        id: 302,
        label: "Transaction Overview",
        icon: <FolderKanban className="w-5 h-5" />,
        to: "/finance/transaction-overview",
      },
    ],
  },
  {
    id: 2,
    label: "Account & Settings",
    icon: <UserCog className="w-5 h-5" />,
    sub: true,
    childs: [
      {
        id: 201,
        label: "Profile",
        icon: <User className="w-5 h-5" />,
        to: "/account-setting/profile",
      },
      {
        id: 202,
        label: "Users",
        icon: <Users className="w-5 h-5" />,
        to: "/account-setting/users",
      },
      {
        id: 202,
        label: "Settings",
        icon: <Settings className="w-5 h-5" />,
        to: "/account-setting/settings",
      },
    ],
  },

  /*
  {
    id: 5,
    label: "Customer",
    icon: <Users className="w-5 h-5" />,
    sub: true,
    childs: [
      {
        id: 501,
        label: "Add Customer",
        icon: <CopyPlus className="w-5 h-5" />,
        to: "/customer/create",
      },
      {
        id: 502,
        label: "Manage Customers",
        icon: <FileCog className="w-5 h-5" />,
        to: "/customer",
      },
    ],
  },

  {
    id: 6,
    label: "Service",
    icon: <Wrench className="w-5 h-5" />,
    sub: true,
    childs: [
      {
        id: 601,
        label: "Add Service",
        icon: <CopyPlus className="w-5 h-5" />,
        to: "/services/create",
      },
      {
        id: 602,
        label: "Manage Services",
        icon: <FileCog className="w-5 h-5" />,
        to: "/services",
      },
    ],
  },

  {
    id: 7,
    label: "Product Group",
    icon: <Group className="w-5 h-5" />,
    sub: true,
    childs: [
      {
        id: 701,
        label: "Add Product Group",
        icon: <CopyPlus className="w-5 h-5" />,
        to: "/products/groups/create",
      },
      {
        id: 702,
        label: "Manage Product Groups",
        icon: <FileCog className="w-5 h-5" />,
        to: "/products/groups",
      },
    ],
  },
  {
    id: 8,
    label: "Brand",
    icon: <Pocket className="w-5 h-5" />,
    sub: true,
    childs: [
      {
        id: 801,
        label: "Add Brand",
        icon: <CopyPlus className="w-5 h-5" />,
        to: "/brands/create",
      },
      {
        id: 802,
        label: "Manage Brands",
        icon: <FileCog className="w-5 h-5" />,
        to: "/brands",
      },
    ],
  },
  {
    id: 9,
    label: "Product Category",
    icon: <LayoutGrid className="w-5 h-5" />,
    sub: true,
    childs: [
      {
        id: 901,
        label: "Add Product Category",
        icon: <CopyPlus className="w-5 h-5" />,
        to: "/products/categories/create",
      },
      {
        id: 902,
        label: "Manage Categories",
        icon: <FileCog className="w-5 h-5" />,
        to: "/products/categories",
      },
    ],
  },
  {
    id: 10,
    label: "Product Model",
    icon: <FileBox className="w-5 h-5" />,
    sub: true,
    childs: [
      {
        id: 1000,
        label: "Add Product Model",
        icon: <CopyPlus className="w-5 h-5" />,
        to: "/products/models/create",
      },
      {
        id: 1001,
        label: "Manage Models",
        icon: <FileCog className="w-1.0 h-1.0" />,
        to: "/products/models",
      },
    ],
  },

  {
    id: 13,
    label: "Purchases",
    icon: <ShoppingCart className="w-5 h-5" />,
    sub: true,
    childs: [
      {
        id: 1301,
        label: "Add (Barcode)",
        icon: <Barcode className="w-5 h-5" />,
        to: "/purchases/add-barcode",
      },
      {
        id: 1302,
        label: "Add (Bulk)",
        icon: <CopyPlus className="w-5 h-5" />,
        to: "/purchases/add-bulk",
      },
      {
        id: 1303,
        label: "View Stocks",
        icon: <ActivitySquare className="w-5 h-5" />,
        to: "/purchases/stocks",
      },
      {
        id: 1304,
        label: "Purchase Return",
        icon: <ActivitySquare className="w-5 h-5" />,
        to: "/purchases/purchase-return",
      },
    ],
  },
  {
    id: 18,
    label: "Sale",
    icon: <ShoppingCart className="w-5 h-5" />,
    sub: true,
    childs: [
      {
        id: 1801,
        label: "Add Sale",
        icon: <ListPlus className="w-5 h-5" />,
        to: "/sales/add-sale",
      },
      {
        id: 1802,
        label: "List of Sale",
        icon: <ScrollText className="w-5 h-5" />,
        to: "/sales",
      },
      {
        id: 1803,
        label: "Add Qoutation",
        icon: <ListPlus className="w-5 h-5" />,
        to: "/sales/add-quotation",
      },
      {
        id: 1804,
        label: "List of quotation",
        icon: <ScrollText className="w-5 h-5" />,
        to: "/sales/quotations",
      },
      {
        id: 1805,
        label: "Add Draft",
        icon: <ListPlus className="w-5 h-5" />,
        to: "/sales/add-draft",
      },
      {
        id: 1806,
        label: "List of drafts",
        icon: <ScrollText className="w-5 h-5" />,
        to: "/sales/drafts",
      },
      {
        id: 1807,
        label: "Sale return",
        icon: <Undo2 className="w-5 h-5" />,
        to: "/sales/sale-return",
      },
      {
        id: 1808,
        label: "Warranty",
        icon: <SendToBack className="w-5 h-5" />,
        to: "/sales/warranty",
      },
    ],
  },
  {
    id: 20,
    label: "Expense",
    icon: <CircleDollarSign className="w-5 h-5" />,
    sub: true,
    childs: [
      {
        id: 2001,
        label: "Add expense",
        icon: <MessageCircle className="w-5 h-5" />,
        to: "/expenses/add-expense",
      },
      {
        id: 2002,
        label: "List of expenses",
        icon: <Send className="w-5 h-5" />,
        to: "/expenses",
      },
    ],
  },
  {
    id: 19,
    label: "Payment account",
    icon: <CircleDollarSign className="w-5 h-5" />,
    sub: true,
    childs: [
      {
        id: 1901,
        label: "Add account",
        icon: <MessageCircle className="w-5 h-5" />,
        to: "/payment-accounts/add-account",
      },
      {
        id: 1902,
        label: "Manage accounts",
        icon: <Send className="w-5 h-5" />,
        to: "/payment-accounts",
      },
    ],
  },
  {
    id: 14,
    label: "Marketting",
    icon: <CircleDollarSign className="w-5 h-5" />,
    sub: true,
    childs: [
      {
        id: 1401,
        label: "Send SMS",
        icon: <MessageCircle className="w-5 h-5" />,
        to: "/marketting/send-sms",
      },
      {
        id: 1402,
        label: "Send Email",
        icon: <Send className="w-5 h-5" />,
        to: "/marketting/send-email",
      },
    ],
  },
  {
    id: 16,
    label: "Reports",
    icon: <FileCode2 className="w-5 h-5" />,
    sub: true,
    childs: [
      {
        id: 1601,
        label: "Sale Report",
        icon: <PercentSquare className="w-5 h-5" />,
        to: "/reports/sale",
      },
      {
        id: 1602,
        label: "Purchase Reports",
        icon: <WalletCards className="w-5 h-5" />,
        to: "/reports/purchase",
      },
      {
        id: 1603,
        label: "Profit & Loss Statement",
        icon: <WalletCards className="w-5 h-5" />,
        to: "/reports/profit-and-loss",
      },
      {
        id: 1604,
        label: "Item/Product Report",
        icon: <WalletCards className="w-5 h-5" />,
        to: "/reports/product",
      },
      {
        id: 1605,
        label: "Supplier Report",
        icon: <WalletCards className="w-5 h-5" />,
        to: "/reports/supplier",
      },
      {
        id: 1606,
        label: "Custromer Report",
        icon: <WalletCards className="w-5 h-5" />,
        to: "/reports/customer",
      },
      {
        id: 1607,
        label: "Payment Report",
        icon: <WalletCards className="w-5 h-5" />,
        to: "/reports/payment",
      },
    ],
  },
  {
    id: 15,
    label: "Settings",
    icon: <Settings className="w-5 h-5" />,
    sub: true,
    childs: [
      {
        id: 1501,
        label: "SMTP settings",
        icon: <Barcode className="w-5 h-5" />,
        to: "/settings/smtp",
      },
      {
        id: 1502,
        label: "SMS settings",
        icon: <CopyPlus className="w-5 h-5" />,
        to: "/settings/sms",
      },
      {
        id: 1503,
        label: "Email setting",
        icon: <ActivitySquare className="w-5 h-5" />,
        to: "/settings/email",
      },
      {
        id: 1504,
        label: "SMS Template",
        icon: <ActivitySquare className="w-5 h-5" />,
        to: "/settings/sms-template",
      },
      {
        id: 1505,
        label: "Email Template",
        icon: <ActivitySquare className="w-5 h-5" />,
        to: "/settings/email-template",
      },
    ],
  },
  */
];

export default sidenav;
