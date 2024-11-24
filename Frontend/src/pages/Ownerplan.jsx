import React, { useState } from "react";
import "../style/Ownerplan.css";
import { Carousel } from "react-bootstrap";
import OwnerplanFAQ from '../components/OwnerplanFAQ'

function Ownerplan() {
  const [activeCard, setActiveCard] = useState(1);

  const cards = [
    {
      id: 1,
      title: "Relax",
      price: "₹2,999",
      gst: "+18% GST",
      badge: "On Call Assistance",
    },
    {
      id: 2,
      title: "Super Relax",
      price: "₹2,999",
      gst: "+18% GST",
      badge: "House Visit Assistance",
    },
    {
      id: 3,
      title: "Money Back",
      price: "₹2,999",
      gst: "+18% GST",
      badge: "100% Guarantee",
    },
    {
      id: 4,
      title: "Super Money Back",
      price: "₹2,999",
      gst: "+18% GST",
      badge: "Personal Field Assistance",
    },
  ];

  const boxes = [
    {
      id: 1,
      imgSrc: "https://via.placeholder.com/150", 
      title: "Box 1",
      text: "This is the first box with some text.",
    },
    {
      id: 2,
      imgSrc: "https://via.placeholder.com/150", 
      title: "Box 2",
      text: "This is the second box with some text.",
    },
    {
      id: 3,
      imgSrc: "https://via.placeholder.com/150", 
      title: "Box 3",
      text: "This is the third box with some text.",
    },
  ];

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

          <div className="row mt-14 gap-7">
            {cards.map((card) => (
              <div
                key={card.id}
                className="col-lg-3 cards card"
                onClick={() => setActiveCard(card.id)}
                style={{
                  cursor: "pointer",
                  position: "relative",
                  borderRadius: "20px",
                  border:
                    activeCard === card.id
                      ? "6px solid #009587"
                      : "6px solid white",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  className="position-absolute border border-solid px-2 fw-semibold text-uppercase d-flex align-items-center justify-content-center"
                  style={{
                    top: "-1rem",
                    right: "2rem",
                    zIndex: 2,
                    height: "2.1rem",
                    borderRadius: "0.8rem",
                    backgroundColor: "rgb(250, 239, 191)",
                    borderColor: "rgb(234, 222, 167)",
                    color: "rgb(130, 113, 38)",
                    fontSize: "12px",
                  }}
                >
                  {card.badge}
                </div>
                <div
                  className="position-absolute w-100 h-100"
                  style={{
                    top: 0,
                    left: 0,
                    zIndex: 1,
                    backgroundImage: `url(${
                      activeCard === card.id
                        ? "https://assets.nobroker.in/nb-new/public/green-box-png-square.webp"
                        : card.background
                    })`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "20px",
                    opacity: activeCard === card.id ? 0.8 : 1,
                  }}
                ></div>
                <div
                  className="position-relative w-100 h-100"
                  style={{ zIndex: 2, borderRadius: "20px" }}
                >
                  <div className="d-flex" style={{ height: "60%" }}>
                    <div className="mt-3 ml-3 mr-2" style={{ flex: "8 1 0%" }}>
                      <span
                        className="d-block"
                        style={{
                          fontSize: "19px",
                          color: "#36454f",
                          fontWeight: "450",
                        }}
                      >
                        {card.title}
                      </span>
                      <div
                        className="mt-1 d-flex align-items-center gap-2 fw-semibold"
                        style={{
                          fontSize: "14px",
                          color: "",
                          position: "relative",
                        }}
                      >
                        <div style={{ color: "#3f3f3f" }}>{card.price}</div>
                        <div
                          className="smt text-muted d-flex align-items-center justify-content-center"
                          style={{ fontSize: "10px", color: "#a0a0a0" }}
                        >
                          {card.gst}
                          <div className="tooltip-box">
                            This is the GST information.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="mt-16 d-flex align-items-center justify-content-end px-3 pb-2"
                    style={{ height: "40%" }}
                  >
                    <button
                      type="button"
                      className="btn py-2 w-100 fw-semibold d-flex align-items-center justify-content-center"
                      style={{
                        fontSize: "15px",
                        backgroundColor:
                          activeCard === card.id ? "#009587" : "",
                        color: activeCard === card.id ? "#fff" : "#000",
                        border: "1px solid #009587",
                      }}
                    >
                      <span>Subscribe</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {activeCard && (
              <div
                className="mt-4"
                style={{
                  backgroundColor: "#f9f9f9",
                  padding: "1rem",
                  borderRadius: "10px",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                <h4>
                  You clicked on card:{" "}
                  {cards.find((card) => card.id === activeCard)?.title}
                </h4>
              </div>
            )}
          </div>

          <div className="carousel-container mt-20">
            <Carousel interval={3000} controls={false} indicators={true}>
              {boxes.map((box) => (
                <Carousel.Item key={box.id}>
                  <div className="d-flex justify-content-center">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        src={box.imgSrc}
                        className="card-img-top rounded-circle"
                        alt={box.title}
                        style={{
                          width: "100px",
                          height: "100px",
                          margin: "0 auto",
                          marginTop: "-20%",
                        }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{box.title}</h5>
                        <p className="card-text">{box.text}</p>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
<div className="mt-52">
          <OwnerplanFAQ />
          </div>
        </div>
      </div>
    </>
  );
}

export default Ownerplan;
