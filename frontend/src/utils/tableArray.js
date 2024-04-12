export const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];

export const TABLE_HEAD = [
  // "Id",
  "Name",
  "Contact No",
  "Email",
  "Invoice Count",
  "Total (LKR)",
  "Status",
  "Action",
];

export const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "Ananda Withana",
    email: "john@creative-tim.com",
    job: "Manager",
    org: "Organization",
    online: true,
    date: "23/04/18",
    status: "active",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Kumar Perera",
    email: "alexa@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: false,
    date: "23/04/18",
    status: "active",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Wasantha Darmapala",
    email: "laurent@creative-tim.com",
    job: "Executive",
    org: "Projects",
    online: false,
    date: "19/09/17",
    status: "active",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Nihan Ilhar",
    email: "michael@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: true,
    date: "24/12/08",
    status: "inactive",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Sumudu Perera",
    email: "richard@creative-tim.com",
    job: "Manager",
    org: "Executive",
    online: false,
    date: "04/10/21",
    status: "inactive",
  },
];

export const TABLE_HEAD_ESTIMATE = [
  "Quotation Number",
  "Customer",
  "Date",
  "Expired Date",
  "Sub Total (LKR)",
  "Discount (%)",
  "Total (LKR)",
  "Note",
  "Status",
  "Action",
];

export const TABLE_ROWS_ESTIMATE = [
  {
    number: "EST-00001",
    customer: "John Michael",
    date: "Feb 10, 2024",
    total: 100,
  },
  {
    number: "EST-00002",
    customer: "John Michael",
    date: "Feb 10, 2024",
    total: 200,
  },
  {
    number: "EST-00003",
    customer: "John Michael",
    date: "Feb 10, 2024",
    total: 300,
  },
];

export const TABLE_HEAD_CUSTOMER_RETURN = [
  // "ID",
  "Customer",
  "Date",
  "Reason",
  "Items Count",
  "Total (LKR)",
  "Status",
  "Action",
];

export const TABLE_HEAD_INVOICE = [
  "Invoice",
  "Customer",
  "Date",
  // "Expected Payment Date",
  "Total (LKR)",
  "Paid Amount (LKR)",
  "Balance (LKR)",
  "Action",
];

export const TABLE_ROWS_INVOICE = [
  {
    invoice: 2122,
    customer: "John Michael",
    date: "Feb 10, 2024",
    expected_date: "March 2, 2024",
    total: 4000.0,
    balance: 3000.0,
  },
  {
    invoice: 2133,
    customer: "Alexa Liras",
    date: "Feb 20, 2024",
    expected_date: "March 4, 2024",
    total: 5000.0,
    balance: 1000.0,
  },
];

// export const TABLE_HEAD_ITEM = ["Item", "Quantity", "Rate", "Amount"];

// export const TABLE_HEAD_ITEM = [
//   // "Id",
//   "Category",
//   "Description",
//   "Real Cost (LKR)",
//   "Cost (LKR)",
//   "Rate (LKR)",
//   "Qty Type",
//   "Qty",
//   "Action",
// ];

export const TABLE_HEAD_MOBILE_ITEM = [
  // "Id",
  "Category",
  "Description",
  "Real Cost (LKR)",
  "Cost (LKR)",
  "Rate (LKR)",
  "Qty Type",
  "Qty",
  "Action",
];

export const TABLE_HEAD_ITEM = [
  {
    name: "Category",
    selector: (row) => row.Item_Category,
    wrap: false,
    minWidth: "auto",
  },
  {
    name: "Description",
    selector: (row) => row.Description,
    wrap: false,
    minWidth: "auto",
  },
  {
    name: "Real Cost (LKR)",
    selector: (row) => row.Real_Cost,
    wrap: false,
    minWidth: "auto",
  },
  {
    name: "Cost (LKR)",
    selector: (row) => row.Cost,
    wrap: false,
    minWidth: "auto",
  },
  {
    name: "Rate (LKR)",
    selector: (row) => row.Rate,
    wrap: false,
    minWidth: "auto",
  },
  {
    name: "Qty Type",
    selector: (row) => row.Quantity_Type,
    wrap: false,
    minWidth: "auto",
  },
  { name: "Qty", selector: (row) => row.Qty, wrap: false, minWidth: "auto" },
  {
    name: "Action",
    // selector: (row) => row.Rate,
    wrap: false,
    minWidth: "auto",
  },
];

export const TABLE_ROW_ITEM = [
  {
    idItem: 1,
    Type: "1",
    Item_Category_idItem_Category: "Category 01",
    Description: "Description 01",
    Real_Cost: 500,
    Cost: 600,
    Rate: 300,
    Qty_Type: "Qty Type 01",
    Qty: 5,
  },
];

export const TABLE_HEAD_SERVICE = [
  // "Id",
  "Category",
  "Description",
  "Long Description",
  "Real Cost (LKR)",
  "Cost (LKR)",
  "Rate (LKR)",
  "Action",
];

export const TABLE_ROW_SERVICE = [
  {
    idItem: 1,
    Item_Category_idItem_Category: "Category 01",
    Type: "2",
    Description: "Description 01",
    Long_Description: "Long Description 01",
    Real_Cost: 500,
    Cost: 600,
    Rate: 300,
    Qty_Type: "Qty Type 01",
    Qty: 5,
  },
];

export const TABLE_HEAD_EXPENSE = ["Date", "Reason", "Amount", "Actions"];

export const DASHBOARD_CUSTOMER_CREDIT_HEAD = [
  {
    name: "DATE",
    selector: (row) => row.Date_Time,
  },
  {
    name: "CUSTOMER",
    selector: (row) => row.Customer_idCustomer,
  },
  {
    name: "CREDIT",
    selector: (row) => row.Total_Credit_Balance,
  },
];

export const DASHBOARD_CUSTOMER_CREDIT_ROW = [
  {
    date: "19-03-2024",
    customer: "Mr. Smith",
    total: 4566.0,
  },
  {
    date: "17-03-2024",
    customer: "Mr. John",
    total: 39577.0,
  },
  {
    date: "12-03-2024",
    customer: "Mr. Jason",
    total: 23454.0,
  },
  {
    date: "19-03-2024",
    customer: "Mr. David",
    total: 67755.0,
  },
  {
    date: "17-03-2024",
    customer: "Mr. Mike",
    total: 32412.0,
  },
];

export const DASHBOARD_SUPPLIER_CREDIT_HEAD = [
  {
    name: "DATE",
    selector: (row) => row.date,
  },
  {
    name: "SUPPLIER",
    selector: (row) => row.supplier,
  },
  {
    name: "CREDIT",
    selector: (row) => row.total,
  },
];

export const DASHBOARD_SUPPLIER_CREDIT_ROW = [
  {
    date: "19-03-2024",
    supplier: "Mr. Doe",
    total: 12345.67,
  },
  {
    date: "18-03-2024",
    supplier: "Mr. Smith",
    total: 5432.1,
  },
  {
    date: "17-03-2024",
    supplier: "Ms. Johnson",
    total: 9876.54,
  },
  {
    date: "16-03-2024",
    supplier: "Mr. Johnson",
    total: 6789.01,
  },
  {
    date: "15-03-2024",
    supplier: "Mr. Charlie",
    total: 23456.78,
  },
];

export const Debtors_Head = ["AGE", "CUSTOMER", "OPEN ITEMS", "BALANCE", ""];

export const Debtors_Item = [
  {
    age: 4,
    customer: "Janith Sameera",
    item: 2,
    balance: 5300,
    color: "#37AA3D",
  },
];

export const TABLE_HEAD_SUPPLIER = [
  // "Id",
  "Company Name",
  "Agent Name",
  "Contact No",
  "Email",
  "Address 1",
  "Address 2",
  "Address 3",
  "Status",
  "Action",
];

export const TABLE_ROWS_SUPPLIER = [
  {
    name: "supplier 01",
    contact1: "0113252369",
    contact2: "0112365741",
    address: "Colombo,Sri Lanka",
  },
  {
    name: "supplier 02",
    contact1: "0113252369",
    contact2: "0112365741",
    address: "Mathara,Sri Lanka",
  },
  {
    name: "supplier 03",
    contact1: "0113252369",
    contact2: "0112365741",
    address: "Galle,Sri Lanka",
  },
  {
    name: "supplier 01",
    contact1: "0113252369",
    contact2: "0112365741",
    address: "Colombo,Sri Lanka",
  },
  {
    name: "supplier 02",
    contact1: "0113252369",
    contact2: "0112365741",
    address: "Mathara,Sri Lanka",
  },
  {
    name: "supplier 03",
    contact1: "0113252369",
    contact2: "0112365741",
    address: "Galle,Sri Lanka",
  },
  {
    name: "supplier 01",
    contact1: "0113252369",
    contact2: "0112365741",
    address: "Colombo,Sri Lanka",
  },
  {
    name: "supplier 02",
    contact1: "0113252369",
    contact2: "0112365741",
    address: "Mathara,Sri Lanka",
  },
  {
    name: "supplier 03",
    contact1: "0113252369",
    contact2: "0112365741",
    address: "Galle,Sri Lanka",
  },
];

export const TABLE_HEAD_CUSTOMER_CREDIT_LOGS = [
  // "ID",
  // "Customer",
  "Date",
  "Credit Type",
  "Credit Amount (LKR)",
  "Debit Amount (LKR)",
  "Total Credit Balance (LKR)",
  // "Payment Type",
  "Payment Method",
  "Cheque Type",
  "Cheque Number",
  "Cheque Date",
  "Cheque Name",
  // "Action",
];

//TODO:Remove this after fetching the data from the database
export const TABLE_ROW_CUSTOMER_CREDIT_LOGS = [
  {
    Customer_idCustomer: 1,
    Date_Time: "2024-03-08",
    Type: "Credit",
    Credit: "$500.00",
    Debit: "-",
    Total_Credit_Balance: "$500.00",
    Payment_Type: "Payment",
    Payment_Method: "Credit Card",
    Cheque_Type: "-",
    Cheque_No: "-",
    Cheque_Date: "-",
    Cheque_Name: "-",
  },
  {
    Customer_idCustomer: 2,
    Date_Time: "2024-03-08",
    Type: "Credit",
    Credit: "$500.00",
    Debit: "-",
    Total_Credit_Balance: "$500.00",
    Payment_Type: "Payment",
    Payment_Method: "Credit Card",
    Cheque_Type: "-",
    Cheque_No: "-",
    Cheque_Date: "-",
    Cheque_Name: "-",
  },
  {
    Customer_idCustomer: 5,
    Date_Time: "2024-03-08",
    Type: "Credit",
    Credit: "$500.00",
    Debit: "-",
    Total_Credit_Balance: "$500.00",
    Payment_Type: "Payment",
    Payment_Method: "Credit Card",
    Cheque_Type: "-",
    Cheque_No: "-",
    Cheque_Date: "-",
    Cheque_Name: "-",
  },
];

export const TABLE_HEAD_SUPPLIER_CREDIT_LOGS = [
  // "ID",
  // "Supplier",
  "Date",
  "Credit Type",
  "Credit Amount (LKR)",
  "Debit Amount (LKR)",
  "Total Credit Balance (LKR)",
  "Payment Type",
  "Payment Method",
  "Cheque Type",
  "Cheque Number",
  "Cheque Date",
  "Cheque Name",
];

export const TABLE_HEAD_GRN = [
  // "ID",
  "Date",
  "Supplier",
  "Total Amount (LKR)",
  "Credit Balance Amount (LKR)",
  "Status",
  "Action",
];

export const TABLE_HEAD_SUPPLIER_RETURN = [
  // "ID",
  "Supplier",
  "Date",
  "Reason",
  "Items Count",
  "Total (LKR)",
  "Status",
  "Action",
];

export const TABLE_HEAD_DAMAGE_NOTE = [
  // "ID",
  "Date",
  "Reason",
  "Items Count",
  "Total Amount (LKR)",
  "Action",
];

export const TABLE_HEAD_STOCK_CARD = [
  // "ID",
  "Date",
  "Description",
  "Transaction Type",
  "Transaction ID",
  "Cost",
  "Real Cost",
  "Sell Price",
  "In Stock",
  "Out Stock",
  "SIH",
  // "Action",
];

export const TABLE_HEAD_EXPENSES = ["Date", "Note", "Category", "Amount"];
