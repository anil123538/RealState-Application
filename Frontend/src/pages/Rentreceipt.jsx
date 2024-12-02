import React, { useState } from "react";
import "../style/rentReceipt.css";
import PhoneInput from "react-phone-input-2";
import QuickChart from "../components/QuickChat";
import RentreceiptFAQ from "../components/RentreceiptFAQ";
import ReceiptrentCcard from "../components/ReceiptrentCcard";

function Rentreceipt() {
  const [tenantName, setTenantName] = useState("");

  return (
    <>
      <QuickChart />
      <div className="container mb-5" style={{marginTop: "85px"}}>
        <div className="page-heading text-center">Create Rent Receipts</div>
        <div className="page-subheading" style={{ color: "#464646" }}>
          Looking for rent receipts for tax saving? Do it in a click by filling
          the form below, take the print of the generated pdf and you are done.
          Easy 😊
        </div>
        <div className="container d-flex justify-content-center align-items-center mb-3">
          <form className="mt-5 w-90" style={{ maxWidth: "800px" }}>
            <div className="row">
              <div className="rentrecipt-element mb-3 col-lg-6 col-md-6 col-sm-12">
                <label
                  htmlFor="rentrecipt-form-tenant_name-nbInput"
                  className="rentrecipt-form-label"
                  style={{
                    marginRight: "5px",
                    lineHeight: "25px",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#464646",
                  }}
                >
                  Tenant Name
                </label>
                <div className="form-group">
                  <input
                    type="text"
                    value={tenantName}
                    onChange={(e) => setTenantName(e.target.value)}
                    placeholder="Tenant's Name"
                    autoFocus
                    name="tenant_name"
                    autoComplete="off"
                    id="rentrecipt-form-tenant_name-nbInput"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="rentrecipt-element mb-3 col-lg-6 col-md-6 col-sm-12">
                <label
                  htmlFor="rentrecipt-form-tenant_name-nbInput"
                  className="rentrecipt-form-label"
                  style={{
                    marginRight: "5px",
                    lineHeight: "25px",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#464646",
                  }}
                >
                  Owner Name
                </label>
                <div className="form-group">
                  <input
                    type="text"
                    value={tenantName}
                    onChange={(e) => setTenantName(e.target.value)}
                    placeholder="Owner's Name"
                    autoFocus
                    name="tenant_name"
                    autoComplete="off"
                    id="rentrecipt-form-tenant_name-nbInput"
                    className="form-control"
                  />
                </div>
              </div>
              <div
                className="mb-3 col-lg-6 col-md-6 col-sm-12"
                style={{ border: "0 solid #e5e7eb" }}
              >
                <label
                  htmlFor="rentrecipt-form-tenant_name-nbInput"
                  className="rentrecipt-form-label"
                  style={{
                    marginRight: "5px",
                    lineHeight: "25px",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#464646",
                  }}
                >
                  Tenant Phone
                </label>
                <PhoneInput
                  country={"np"}
                  value=""
                  inputClass="form-control"
                  inputStyle={{ width: "100%" }}
                />
              </div>
              <div
                className="mb-3 col-lg-6 col-md-6 col-sm-12"
                style={{ border: "0 solid #e5e7eb" }}
              >
                <label
                  htmlFor="rentrecipt-form-tenant_name-nbInput"
                  className="rentrecipt-form-label"
                  style={{
                    marginRight: "5px",
                    lineHeight: "25px",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#464646",
                  }}
                >
                  Owner Phone
                </label>
                <PhoneInput
                  country={"np"}
                  value=""
                  inputClass="form-control"
                  inputStyle={{ width: "100%" }}
                />
              </div>
              <div className="rentrecipt-element mb-3 col-lg-6 col-md-6 col-sm-12">
                <label
                  htmlFor="rentrecipt-form-tenant_name-nbInput"
                  className="rentrecipt-form-label"
                  style={{
                    marginRight: "5px",
                    lineHeight: "25px",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#464646",
                  }}
                >
                  Rent
                </label>
                <div className="form-group">
                  <input
                    type="text"
                    value={tenantName}
                    onChange={(e) => setTenantName(e.target.value)}
                    placeholder="Monthly Rent in Rs."
                    autoFocus
                    name="tenant_name"
                    autoComplete="off"
                    id="rentrecipt-form-tenant_name-nbInput"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="rentrecipt-element mb-3 col-lg-6 col-md-6 col-sm-12">
                <label
                  htmlFor="rentrecipt-form-tenant_name-nbInput"
                  className="rentrecipt-form-label"
                  style={{
                    marginRight: "5px",
                    lineHeight: "25px",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#464646",
                  }}
                >
                  Owner PAN
                </label>
                <div className="form-group">
                  <input
                    type="text"
                    value={tenantName}
                    onChange={(e) => setTenantName(e.target.value)}
                    placeholder="Owner's PAN"
                    autoFocus
                    name="tenant_name"
                    autoComplete="off"
                    id="rentrecipt-form-tenant_name-nbInput"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="rentrecipt-element mb-3 col-lg-6 col-md-6 col-sm-12">
                <label
                  htmlFor="rentrecipt-form-tenant_name-nbInput"
                  className="rentrecipt-form-label"
                  style={{
                    marginRight: "5px",
                    lineHeight: "25px",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#464646",
                  }}
                >
                  Rented Property Address
                </label>
                <div className="form-group">
                  <input
                    type="text"
                    value={tenantName}
                    onChange={(e) => setTenantName(e.target.value)}
                    placeholder="Address of property as required in rent receipts"
                    autoFocus
                    name="tenant_name"
                    autoComplete="off"
                    id="rentrecipt-form-tenant_name-nbInput"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="rentrecipt-element mb-3 col-lg-6 col-md-6 col-sm-12">
                <label
                  htmlFor="rentrecipt-form-tenant_name-nbInput"
                  className="rentrecipt-form-label"
                  style={{
                    marginRight: "5px",
                    lineHeight: "25px",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#464646",
                  }}
                >
                  Owner Address
                </label>
                <div className="form-group">
                  <input
                    type="text"
                    value={tenantName}
                    onChange={(e) => setTenantName(e.target.value)}
                    placeholder="Current Adress of the owner as required in rental receipts"
                    autoFocus
                    name="tenant_name"
                    autoComplete="off"
                    id="rentrecipt-form-tenant_name-nbInput"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="rentrecipt-element mb-3 col-lg-6 col-md-6 col-sm-12">
                <label
                  htmlFor="rentrecipt-form-tenant_name-nbInput"
                  className="rentrecipt-form-label"
                  style={{
                    marginRight: "5px",
                    lineHeight: "25px",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#464646",
                  }}
                >
                  Receipt Start Date
                </label>
                <div className="form-group">
                  <input
                    type="text"
                    value={tenantName}
                    onChange={(e) => setTenantName(e.target.value)}
                    placeholder="Receipt Start Date"
                    autoFocus
                    name="tenant_name"
                    autoComplete="off"
                    id="rentrecipt-form-tenant_name-nbInput"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="rentrecipt-element mb-3 col-lg-6 col-md-6 col-sm-12">
                <label
                  htmlFor="rentrecipt-form-tenant_name-nbInput"
                  className="rentrecipt-form-label"
                  style={{
                    marginRight: "5px",
                    lineHeight: "25px",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#464646",
                  }}
                >
                  Receipt End Date
                </label>
                <div className="form-group">
                  <input
                    type="text"
                    value={tenantName}
                    onChange={(e) => setTenantName(e.target.value)}
                    placeholder="Receipt End Date"
                    autoFocus
                    name="tenant_name"
                    autoComplete="off"
                    id="rentrecipt-form-tenant_name-nbInput"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="rentrecipt-element mb-3 col-lg-6 col-md-6 col-sm-12">
                <label
                  htmlFor="rentrecipt-form-tenant_name-nbInput"
                  className="rentrecipt-form-label"
                  style={{
                    marginRight: "5px",
                    lineHeight: "25px",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#464646",
                  }}
                >
                  Email
                </label>
                <div className="form-group">
                  <input
                    type="text"
                    value={tenantName}
                    onChange={(e) => setTenantName(e.target.value)}
                    placeholder="Email to receive PDF link"
                    autoFocus
                    name="tenant_name"
                    autoComplete="off"
                    id="rentrecipt-form-tenant_name-nbInput"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button
                className="submit-form btn rentReceipt-btn w-75 w-md-50"
                type="submit"
                style={{ backgroundColor: "#004958", color: "#fff" }}
              >
                Generate Rent Receipt Now
              </button>
            </div>
          </form>
        </div>

        <div className="row gap-2  pt-2 pb-1 d-flex justify-content-center align-items-center">
          <div className="col-lg-5 text-left border p-4" style={{width: "32%"}}>
            <div className="d-flex justify-content-between align-items-center gap-2">
              <div>
                <div className="fs-5.5 font-semibold">
                  Create Rental Agreement
                </div>
                <div style={{ fontSize: "14px", color: "#464646" }}>
                  Get your rental Agreement delivered to your doorstep
                </div>
              </div>
              <img
                src="https://assets.nobroker.in/nb-new/public/LegalServices/ra_icon.svg"
                className=""
                alt="rental"
                loading="lazy"
                style={{ width: "70px", height: "80px" }}
              />
            </div>
            <div class="d-flex gap-2 text-center mt-2 mb-1">
              <div
                className=" rounded-pill px-3 py-2"
                style={{ backgroundColor: "#EBEBEB", fontSize: "12px" }}
              >
                Same day Delivery
              </div>
              <div
                className="rounded-pill px-3 py-2"
                style={{ backgroundColor: "#EBEBEB", fontSize: "12px" }}
              >
                30% off
              </div>
              <div
                className="rounded-pill px-3 py-2"
                style={{ backgroundColor: "#EBEBEB", fontSize: "12px" }}
              >
                Live tracking
              </div>
            </div>
            <button
              style={{
                borderRadius: "6px",
                marginTop: "7px",
                backgroundColor: "#004958",
                color: "#fff",
              }}
              className="btn btn-default btn-sm fw-semibold"
              id=""
              type="button"
            >
              Explore Now
            </button>
          </div>
          <div className="col-lg-5 text-left border p-4" style={{width: "32%"}}>
            <div className="flex justify-content-between align-items-center gap-2">
              <div>
                <div className="fs-5.5 font-semibold">
                  Hassle Free Tenant Verification
                </div>
                <div style={{ fontSize: "14px", color: "#464646" }}>
                  Ensure safety | Get Rent on Time | Avoid fraudsters
                </div>
              </div>
              <img
                src="https://assets.nobroker.in/nb-new/public/LegalServices/tenant_verification_icon.svg"
                className=""
                alt="rental"
                loading="lazy"
                style={{ width: "70px", height: "80px" }}
              />
            </div>
            <div class="flex gap-2 text-center mt-2 mb-1 text-11">
              <div
                className="rounded-pill px-3 py-2"
                style={{ backgroundColor: "#EBEBEB", fontSize: "12px" }}
              >
                Get Reports Instantly
              </div>
              <div
                className="rounded-pill px-3 py-2"
                style={{ backgroundColor: "#EBEBEB", fontSize: "12px" }}
              >
                Civil/Criminal Check
              </div>
            </div>
            <button
              style={{
                borderRadius: "6px",
                marginTop: "7px",
                backgroundColor: "#004958",
                color: "#fff",
              }}
              className="btn btn-default btn-sm fw-semibold"
              id=""
              type="button"
            >
              Explore Now
            </button>
          </div>
        </div>

        <ReceiptrentCcard />

        <div class="ms-44 me-44 rentReceipt-text mt-5" style={{ color: "#464646" }}>
          <h2 className="mb-4">
            <b>What is Rent Receipt?</b>
          </h2>
          <p>
            <span style={{ fontWeight: "400" }}>
              In the simplest of terms, a rent receipt is an official document
              provided to tenants by their landlords upon receiving their rent
              as per the rent agreements they decided on. Like any other proof
              of purchase, a rent receipt includes the date, amount, and other
              relevant details, such as the tenant’s and landlord’s names. A
              rent receipt is considered vital in India as it serves many
              purposes. As many landlords and property managers do not have
              proper rental receipts, a{" "}
            </span>
            <b>rent receipt generator</b>
            <span style={{ fontWeight: "400" }} className="mb-3">
              {" "}
              is the easiest and simplest solution to make
            </span>
          </p>
          <p className="mb-5">
            <span style={{ fontWeight: "400" }}>
              sure that all your rent payments are documented.
            </span>
          </p>
          <p className="mb-5">
            <span style={{ fontWeight: "400" }}>
              A rent receipt has become an important piece of evidence for
              tenants and landlords when it comes to maintaining their payments.
              Online rent receipt generators have become a go-to solution for
              generating these important documents. Rent receipt generators are
              fuss-free and get the job done in minutes—a perfect way to manage
              your payment records.
            </span>
          </p>
          <h2 className="mb-5">
            <b>Why do you need rent receipts?</b>
          </h2>
          <p className="mb-5">
            <span style={{ fontWeight: "400" }}>
              Now, one may ask why you need rent receipts. Why are they
              important? To answer this question, let us look at all the ways a
              rent receipt is useful. First of all, it serves as a valid proof
              of payment for rent or lease of property between a tenant and a
              landlord. Secondly, it is also required for tax purposes so that
              an employee can claim tax deductions for the rent they pay. It is
              a vital piece of document for claiming the HRA exemption while
              filing IT in India. It is a key document to keep your finances
              updated and as legal proof of making payments to your landlord
              promptly. It may help you settle any future disputes or
              disagreements with the landlord if need be.
            </span>
          </p>
          <h2 className="mb-5">
            <b>What is a Rent Receipt Generator?</b>
          </h2>
          <p className="mb-5">
            <span style={{ fontWeight: "400" }}>
              A rent receipt generator is a tool that helps you generate rent
              receipts with a few clicks. It makes keeping track of your rent
              simpler, easier and more accessible because you get everything in
              one place-organised and stacked for your convenience. A rent
              receipt generator will help you achieve a valid proof of payment,
              which can be generated from the comfort of your home in a few
              simple steps.
            </span>
          </p>
          <p className="mb-5">
            <span style={{ fontWeight: "400" }}>You can look at this </span>
            <span style={{ fontWeight: "400" }}>
              NESTATE rent receipt generator
            </span>
            <span style={{ fontWeight: "400" }}>
              {" "}
              to understand how it works!
            </span>
          </p>
          <h2 className="mb-5">
            <b>Key Information on rent receipts</b>
          </h2>
          <p className="mb-5">
            <b>Details to include on a rent receipt: </b>
            <span style={{ fontWeight: "400" }}>
              Here is a list of details that must be incorporated while
              generating a rent receipt. These details are crucial, and missing
              one may affect your rent receipt’s validity.
            </span>
          </p>
          <ul className="mb-5" style={{ listStyle: "number" }}>
            <li>
              <span style={{ fontWeight: "400" }}>
                Landlord’s contact information.
              </span>
            </li>
            <li>
              <span style={{ fontWeight: "400" }}> Tenant’s name.</span>
            </li>
            <li>
              <span style={{ fontWeight: "400" }}> Total amount paid.</span>
            </li>
            <li>
              <span style={{ fontWeight: "400" }}>
                {" "}
                Rental property location.
              </span>
            </li>
            <li>
              <span style={{ fontWeight: "400" }}> Rental period covered.</span>
            </li>
            <li>
              <span style={{ fontWeight: "400" }}> Payment method.</span>
            </li>
            <li>
              <span style={{ fontWeight: "400" }}> Date payment received.</span>
            </li>
          </ul>
          <h2 className="mb-5">
            <b>What are the Benefits of Rent Receipts?</b>
          </h2>
          <p className="mb-5">
            <span style={{ fontWeight: "400" }}>
              The benefits of rent receipts are as follows:
            </span>
          </p>
          <ul style={{ listStyle: "number" }}>
            <li className="mb-5">
              <span style={{ fontWeight: "400" }}>
                For landlords—A rent receipt helps them track their tenants’
                payments and record their monthly rent. Whether you are a
                landlord renting out one property or have multiple properties on
                rent, a rent receipt helps you navigate your finances through
                your rental properties and keep proper data for any financial or
                property-related disputes.
              </span>
            </li>

            <li className="mb-5">
              <span style={{ fontWeight: "400" }}>
                For tenants—Rent receipts are a boon because a rent receipt
                generator will have you covered whether you pay online or
                through cash. It will help you generate an official receipt that
                can be used as a valid document whenever required. It is an easy
                solution for keeping track of your house rent financials.
              </span>
            </li>

            <li className="mb-5">
              <span style={{ fontWeight: "400" }}>
                For Property Managers—Another benefit of a rent receipt is that
                it helps property managers have a systematic profile for all
                their properties; it helps them keep track of payments received,
                any dues, etc.
              </span>
            </li>
          </ul>

          <h2>
            <b>Understanding Rent Receipt Format</b>
          </h2>
          <p className="mb-5">
            <span style={{ fontWeight: "400" }}>
              Generating a Rent Receipt can seem daunting for many, but it is a
              simple, hassle-free procedure. The basic format for rent receipts
              has a few key components that are an unmissable part of the
              document. A rent receipt format can be customisable per the needs
              of the tenant and the landlord, but the key components must be
              included in all types of rent receipts. Below are some important
              points to remember while generating a house rent receipt.
            </span>
          </p>
          <h2>
            <b>
              Important Points to Remember while Generating House Rent Receipt
            </b>
          </h2>
          <p>
            <span style={{ fontWeight: "400" }}>
              There are a few important points to remember while generating your
              house rent receipt-
            </span>
          </p>
          <ol className="mb-5" style={{ listStyle: "number" }}>
            <li style={{ fontWeight: "400" }}>
              <span style={{ fontWeight: "400" }}>
                If you are paying in cash and your value exceeds INR 5000, a
                revenue stamp must be affixed to the rent receipt.
              </span>
            </li>
            <li style={{ fontWeight: "400" }}>
              <span style={{ fontWeight: "400" }}>
                However, if you are paying via cheque, then there is no need to
                affix a revenue stamp, irrespective of the amount
              </span>
            </li>
            <li style={{ fontWeight: "400" }}>
              <span style={{ fontWeight: "400" }}>
                Other details like name, amount, date, proper address, etc,
                should be filled out in great detail to avoid any mistakes.
              </span>
            </li>
          </ol>

          <h2>
            <b>Methods of delivering rent receipts</b>
          </h2>
          <ul className="mb-5" style={{ listStyle: "number" }}>
            <li>
              <span style={{ fontWeight: "400" }}> Electronic delivery.</span>
            </li>
            <li>
              <span style={{ fontWeight: "400" }}> Mail delivery.</span>
            </li>
            <li>
              <span style={{ fontWeight: "400" }}> In-person delivery.</span>
            </li>
            <li>
              <span style={{ fontWeight: "400" }}>
                {" "}
                Importance of maintaining copies for record-keeping.
              </span>
            </li>
          </ul>

          <h2 className="mb-5">
            <b>Compliance and Consequences</b>
          </h2>

          <ul className="mb-5" style={{ listStyle: "number" }}>
            <li className="mb-5">
              <span style={{ fontWeight: "400" }}>
                {" "}
                Consequences of not providing rent receipts as required—If
                someone fails to offer them, they will have to face the
                consequences as per the situation. For example, if you fail to
                produce your rent receipt to your tenant, you may be asked to
                repay the entire amount or face eviction.
              </span>
            </li>

            <li className="mb-5">
              <span style={{ fontWeight: "400" }}>
                {" "}
                Compliance with local regulations and state laws—As per the IT
                department, your house rent tax exemption may be denied if you
                fail to show your rent receipt. You need a proper rent receipt
                to qualify for an HRA claim and exemption.
              </span>
            </li>

            <li className="mb-5">
              <span style={{ fontWeight: "400" }}>
                {" "}
                Avoiding fines and penalties by adhering to rent receipt
                practices—It is always best practice to keep your rent receipts
                in proper order to avoid unnecessary hassles like fines,
                evictions, and rejection of HRA claims.&nbsp;
              </span>
            </li>
          </ul>

          <h2 className="mb-5">
            <b>How NESTATE Can Help?</b>
          </h2>
          <p>
            <span style={{ fontWeight: "400" }}>
              As we have already read about the benefits of a{" "}
            </span>
            <b>rent receipt generator</b>
            <span style={{ fontWeight: "400" }}>
              , it is a no-brainer that a rent receipt generator will benefit
              you greatly. It will help keep your rental finances in order and
              keep track of your expenses. It is also an official document
              reflecting your reliability as a tenant. This is where NESTATE
              comes into play- you can join hundreds of other trusted users who
              use this, which NESTATE takes, to keep their rent receipts in
              proper order and enjoy a hassle-free rental record system
            </span>
          </p>
        </div>

        <RentreceiptFAQ />
      </div>
    </>
  );
}

export default Rentreceipt;
