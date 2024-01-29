import React, { useState } from "react";

export default function SellerAccount() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [sellerId, setSellerId] = useState("DSCFDD45");
  const [shopName, setShopName] = useState("");

  return (
    <div className="flex flex-col gap-[4vh] px-2 md:text-sm text-xl ">
      <div className="div_span12_fieldgroup ">
        <span className="lbl_span3 md:text-base text-3xl">Seller ID</span>
        <input
          type="text"
          className={
            sellerId ? " txt_span6   border-tl-2  " : " txt_span6 border-tl-1"
          }
          readOnly={true}
          value={sellerId}
        />
      </div>
      <div className="div_span12_fieldgroup ">
        <span className="lbl_span3 md:text-base text-3xl">Full Name</span>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className={
            fullName ? " txt_span6   border-tl-2  " : " txt_span6 border-tl-1"
          }
        />
      </div>
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3 ">Email address</span>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={
            email ? " txt_span6   border-tl-2  " : " txt_span6 border-tl-1"
          }
        />
      </div>
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3 ">Phone Number</span>
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className={
            contact ? " txt_span6   border-tl-2  " : " txt_span6 border-tl-1"
          }
        />
      </div>
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3">Display /Shop Name</span>
        <input
          type="text"
          value={shopName}
          onChange={(e) => setShopName(e.target.value)}
          className={
            shopName ? " txt_span6   border-tl-2  " : " txt_span6 border-tl-1"
          }
        />
      </div>
    </div>
  );
}
