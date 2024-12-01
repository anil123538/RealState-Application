import React from "react";
import "../style/Sellerplan.css";

function Sellerplan() {
  return (
    <>
      <div className="container ">
        <div className="top text-center pb-5 mt-28">
          <div
            className=""
            style={{
              fontSize: "30px",
              color: "#464646",
              letterSpacing: ".3px",
              marginTop: "15px",
            }}
          >
            Get Buyers Quickly.
            <span className="" style={{ color: "#fd3752" }}>
              SAVE LAKHS{" "}
            </span>
            on Brokerage
          </div>
          <div className="" style={{ fontSize: "22px", color: "#464646" }}>
            For assistance call us at :
            <span className="" style={{ color: "#fd3752" }}>
              +91-83-060-037-65
            </span>
          </div>
        </div>

        <div className="d-flex justify-content-evenly align-items-center" style={{paddingTop: "10px", color:"#464646",marginLeft: "17%"}}>
          <div className="d-flex align-items-center justify-content-center py-4 px-24" style={{backgroundColor: "#f8f8f8",borderTopRightRadius: "4px", borderTopLeftRadius: "4px", fontSize: "14px"}}>
            <img
              alt="getTenants"
              src="https://assets.nobroker.in/static/img/owner_plan_icons/wallet.svg"
            />
            Get Buyer Faster &amp; Save Brokerage
          </div>
          <div className="d-flex align-items-center justify-content-center py-3 px-28" style={{backgroundColor: "#fff7f3",borderTopRightRadius: "4px", borderTopLeftRadius: "4px",fontSize: "14px"}}>
            <img
              alt="propertyKeys"
              src="https://assets.nobroker.in/static/img/owner_plan_icons/house.svg"
            />
            <p>
              Leave your <b>House </b>
              <b>Keys &amp; Worries</b> to us!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sellerplan;
