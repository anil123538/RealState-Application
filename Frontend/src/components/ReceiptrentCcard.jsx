import React from "react";
import "../style/rentReceipt.css";
import card from "../assets/images/card.png";

function ReceiptrentCcard() {
  const cardDetails = [
    {
      imgSrc:
        "https://assets.NESTATE.in/nb-new/public/RentoPay/no_hidden_cost.svg",
      title: "Earn Rewards",
      desc: "Earn miles, get cash back and reward points on every rent payment with your card.",
    },
    {
      imgSrc:
        "https://assets.NESTATE.in/nb-new/public/RentoPay/credit_card.svg",
      title: "Pay with Credit Card",
      desc: "We accept major cards like Visa and Mastercard so your rent payment is hassle-free.",
      extraImg: card,
    },
    {
      imgSrc:
        "https://assets.NESTATE.in/nb-new/public/RentoPay/digital_rent_receipt.svg",
      title: "Digital Rent Receipts",
      desc: "Generate rent receipts instantly and claim your HRA with ease. Get rent receipts sent directly to your email ID.",
    },
    {
      imgSrc:
        "https://assets.NESTATE.in/nb-new/public/RentoPay/no_broker_trust.svg",
      title: "NESTATE Trust",
      desc: "NESTATE Pay is a product by NESTATE and is 100% secure with PCI compliant payment gateway.",
    },
  ];

  return (
    <div className="container mt-5" style={{width: "85%"}}>
      <div className="rent-receipt">
        <h1 className="ms-2">Pay Rent With Credit Card Online</h1>
        <h4 className="ms-2">Earn money just by paying your rent!</h4>
        <div className="card-section ">
          <div className="row horizontal-slide d-flex justify-content-center align-items-center">
            {cardDetails.map((card, index) => (
              <div key={index} className="cards d-flex gap-4 text-white">
                <div className="img">
                  <div className="img-box d-flex justify-content-center align-items-center">
                    <img
                      className="img-fluid ms-3"
                      src={card.imgSrc}
                      alt={card.title}
                      style={{
                        maxHeight: "50px",
                        maxWidth: "42px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="title d-flex align-items-center">
                    {card.title}
                    {card.extraImg && (
                      <img
                        src={card.extraImg}
                        alt="description"
                        className="ms-4"
                        style={{ height: "23px", width: "80px" }}
                      />
                    )}
                  </div>
                  <p className="sub-title">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="get-startedbtn d-flex justify-content-center">
            <button className="getting-started btn btn-danger" type="button">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReceiptrentCcard;

