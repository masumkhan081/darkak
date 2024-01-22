import AddCustomer from "@/components/page-partials/design/AddCustomer";
import AddExpense from "@/components/page-partials/design/AddExpense";
import PurchReturn from "@/components/page-partials/design/PurchReturn";
import AddDraft from "@/components/page-partials/design/AddDraft";
import AddQuotation from "@/components/page-partials/design/AddQuotation";
import AddSale from "@/components/page-partials/design/AddSale";
import EmailSetting from "@/components/page-partials/design/EmailSetting";
import EmailTemplate from "@/components/page-partials/design/EmailTemplate";
import SMSSetting from "@/components/page-partials/design/SMSSetting";
import SMSTemplate from "@/components/page-partials/design/SMSTemplate";
import SMTPSetting from "@/components/page-partials/design/SMTPSetting";
// import CreatePos from "@/components/page-partials/design/CreatePos";

import React from "react";

export default function page() {
  return (
    <div className="bg-slate-200   w-full  h-auto  flex flex-col justify-start ">
      <AddCustomer useForEdit={false} />
      <AddExpense />
      <PurchReturn />
      <AddDraft />
      <AddQuotation />
      <AddSale />
      <SMSSetting />
      <SMSTemplate />
      <SMTPSetting />
      <EmailSetting />
      <EmailTemplate />
      {/* <CreatePos /> */}
    </div>
  );
}
