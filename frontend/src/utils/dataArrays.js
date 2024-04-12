import {
  Square3Stack3DIcon,
  UserIcon,
  ChartBarIcon,
  PresentationChartLineIcon,
  BookOpenIcon,
  BuildingStorefrontIcon,
  ArchiveBoxXMarkIcon,
  UsersIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/24/outline";
import {
  ExpensesIcon,
  InvoiceIcon,
  QuotationIcon,
  ReportIcon,
  StockIcon,
  SupplierIcon,
  SupplierReturnIcon,
  DamageNoteIcon,
  StockCardIcon,
  WalletIcon,
  PLIcon,
} from "./icons";

const CustomerArray = [
  {
    title: "Manage Customers",
    link: "customers",
    icon: UserIcon,
  },
  {
    title: "Customer Credit Logs",
    link: "customer-credit-logs",
    icon: BookOpenIcon,
  },
];

const Stocks = [
  {
    title: "Manage Products",
    link: "products",
    icon: BuildingStorefrontIcon,
  },
  {
    title: "GRN",
    link: "grn",
    icon: PresentationChartLineIcon,
  },
  {
    title: "Damage Note",
    link: "damage-note",
    icon: ArchiveBoxXMarkIcon,
  },
  {
    title: "Customer Returns",
    link: "customer-returns",
    icon: ArchiveBoxXMarkIcon,
  },
];
const Suppliers = [
  {
    title: "Manage Suppliers",
    link: "supplier",
    icon: UsersIcon,
  },
  {
    title: "Supplier Credit Logs",
    link: "supplier-credit-logs",
    icon: BookOpenIcon,
  },
  {
    title: "Purchase Returns",
    link: "purchase-returns",
    icon: ArrowLeftCircleIcon,
  },
];
export const newNavigationItems = [
  {
    title: "Dashboard",
    link: "",
    icon: ChartBarIcon,
    children: 0,
  },
  {
    title: "Customers",
    link: "#",
    icon: UserIcon,
    children: CustomerArray,
  },
  {
    title: "Quotation",
    link: "quotation",
    icon: QuotationIcon,
    children: 0,
  },
  {
    title: "Invoices",
    link: "invoices",
    icon: InvoiceIcon,
    children: 0,
  },

  {
    title: "Stocks",
    link: "#",
    icon: StockIcon,
    children: Stocks,
  },

  {
    title: "Suppliers",
    link: "#",
    icon: SupplierIcon,
    children: Suppliers,
  },
  // {
  //   title: "Stock Card",
  //   link: "stock-card",
  //   icon: StockCardIcon,
  //   children: 0,
  // },
  {
    title: "Earnings & Expenses",
    link: "wallet",
    icon: WalletIcon,
    children: 0,
  },
  {
    title: "Reports",
    link: "reports",
    icon: ReportIcon,
    children: 0,
  },
];

export const gender = [
  {
    id: "Mr",
    key: "Mr",
  },
  {
    id: "Mrs",
    key: "Mrs",
  },
  {
    id: "Ms",
    key: "Ms",
  },
];

export const product_type = [
  {
    id: "1",
    key: "Item",
  },
  {
    id: "2",
    key: "Service",
  },
];

export const branches = [
  {
    id: 1,
    key: "Klautara",
  },
  {
    id: 2,
    key: "Colombo",
  },
];
