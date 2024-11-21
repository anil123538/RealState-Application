import React from "react";
import "../style/Ownerplan.css";

function Ownerplan() {
  return (
    <>
      <div className="" style={{ marginBottom: "350px" }}>
        <div className="hero"></div>
        <div className="container" style={{ marginTop: "125px", width: "85%" }}>
          <div className="top d-flex align-items-center justify-content-between">
            <div className="text">
              <div className="largetext">
                <span className="">
                  <span style={{ fontSize: "26px", color: "#36454f" }}>
                    Get Tenants Quickly.
                    <b style={{ fontWeight: "500" }}>Save upto 50k</b> on
                    brokerage.
                  </span>
                </span>
              </div>
              <div
                className="d-flex align-items-center justify-content-start"
                style={{ gap: "0" }}
              >
                <span className="d-flex align-items-center justify-content-end">
                  <img
                    src="https://assets.nobroker.in/nb-new/public/starNew.svg"
                    alt="review star"
                    className="img-fluid star-icon"
                  />
                  <img
                    src="https://assets.nobroker.in/nb-new/public/starNew.svg"
                    alt="review star"
                    className="img-fluid star-icon"
                  />
                  <img
                    src="https://assets.nobroker.in/nb-new/public/starNew.svg"
                    alt="review star"
                    className="img-fluid star-icon"
                  />
                  <img
                    src="https://assets.nobroker.in/nb-new/public/starNew.svg"
                    alt="review star"
                    className="img-fluid star-icon"
                  />
                  <img
                    src="https://assets.nobroker.in/nb-new/public/starNew.svg"
                    alt="review star"
                    className="img-fluid star-icon"
                  />
                </span>
                <span
                  className=""
                  style={{ color: "#36454f", fontSize: "18px" }}
                >
                  Trusted by <b style={{ fontWeight: "550" }}>3 Lacs+</b> People
                  like you!
                </span>
              </div>
            </div>
            <div
              className="btn px-3 py-2"
              style={{
                backgroundColor: "rgba(0, 150, 135, 0.1)",
                border: "1px solid green",
              }}
            >
              <a
                className=""
                href="#"
                style={{
                  color: "green",
                  textDecoration: "none",
                  fontWeight: "500",
                  fontSize: "17px",
                }}
              >
                Click here for Tenant Plans
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ownerplan;
