import PhoneInput from "react-phone-input-2";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-phone-input-2/lib/style.css";
import "../style/postproperty.css";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import QuickChart from "../components/QuickChat";
import PostPropertyFAQ from "../components/postPropertyFAQ";
import PostPropertyWork from "../components/postPropertyWork";
import PostPropertyFeature from "../components/postPropertyFeature";
import PostPropertyText from "../components/postPropertyText";

function PostProperty() {
  const [selectedType, setSelectedType] = useState("Residential");
  const [selectedAdType, setSelectedAdType] = useState(null);
  const adTypes = {
    Residential: ["Rent", "Resale", "PG/Hostel", "Flatmates"],
    Commercial: ["Rent", "Sale"],
    "Land/Plot": ["Resale"],
  };

  return (
    <>
      <QuickChart />
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="top d-flex align-items-center justify-content-between">
          <h1 className="fw-semibold fs-4" style={{ color: "#424949" }}>
            Sell or Rent your property for free
          </h1>
          <p className="link" style={{ color: "#424949" }}>
            Looking for a property?{" "}
            <a href="" style={{ color: "#097969" }}>
              Click here
            </a>
          </p>
        </div>
        <div className="row main">
          <div className="col-lg-5 left">
            <h4
              className=""
              style={{ color: "#424949", fontSize: "18px", fontWeight: "600" }}
            >
              Why post through us?
            </h4>
            <div
              className="d-flex align-items-center mx-auto"
              style={{ padding: "8px 0" }}
            >
              <img
                src="https://assets.nobroker.in/static/img/postYourProperty/Zero_Brokerage.svg"
                alt="zero"
              />
              <div style={{ color: "#787676", fontSize: "14px" }}>
                Zero Brokerage
              </div>
            </div>
            <div
              className="d-flex align-items-center mx-auto"
              style={{ padding: "8px 0" }}
            >
              <img
                src="https://assets.nobroker.in/static/img/postYourProperty/Tenant.svg"
                alt="fast"
              />
              <div style={{ color: "#787676", fontSize: "14px" }}>
                Faster Tenants
              </div>
            </div>
            <div
              className="d-flex align-items-center mx-auto"
              style={{ padding: "8px 0" }}
            >
              <img
                src="https://assets.nobroker.in/static/img/postYourProperty/tenant_buyer_connections.svg"
                alt="connections"
              />
              <div style={{ color: "#787676", fontSize: "14px" }}>
                10 lac tenants/buyers connections
              </div>
            </div>
            <div>
              <h4
                className="mt-5"
                style={{
                  color: "#424949",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                30 Lac+ Home Owners Trust Us
              </h4>
            </div>

            <Carousel
              indicators={false}
              interval={3000}
              controls={true}
              className="mt-1"
            >
              <Carousel.Item className="mb-4">
                <p style={{ color: "#787676", fontSize: "14px" }}>
                  I found Nobroker very helpful for house rent advertisements.
                  The team was very responsive and enthusiastic to help us find
                  a good tenant in a very short span of time. Within a week this
                  property listing site was able to get me a tenant and exceed
                  my expectations.
                </p>
                <span style={{ fontSize: "14px", fontWeight: "500" }}>
                  Mohan
                </span>
                <span style={{ color: "#787676", fontSize: "14px" }}>
                  {" "}
                  | Kathmandu
                </span>
              </Carousel.Item>
              <Carousel.Item className="mb-4">
                <p style={{ color: "#787676", fontSize: "14px" }}>
                  NoBroker is doing a very good job out there saving us all from
                  the general brokers and from all those extra brokerage
                  expenses. They have a lot of real estate ads and options to
                  choose from, they will be with you until you find your house.
                  They did a great job by helping me throughout the whole
                  process.
                </p>
                <span style={{ fontSize: "14px", fontWeight: "500" }}>
                  Shyam
                </span>
                <span style={{ color: "#787676", fontSize: "14px" }}>
                  {" "}
                  | Bhaktapur
                </span>
              </Carousel.Item>
              <Carousel.Item className="mb-4">
                <p style={{ color: "#787676", fontSize: "14px" }}>
                  I posted a property ad online on NoBroker. Its an efficient
                  real estate website because despite my busy schedule they did
                  a great job of contacting me at the right times. To keep me
                  updated they sent mails &amp; messages. They found a great
                  tenant for my rental property as per my demands.
                </p>
                <span style={{ fontSize: "14px", fontWeight: "500" }}>
                  Gopal
                </span>
                <span style={{ color: "#787676", fontSize: "14px" }}>
                  {" "}
                  | Lalitpur
                </span>
              </Carousel.Item>
              <Carousel.Item className="mb-4">
                <p style={{ color: "#787676", fontSize: "14px" }}>
                  I posted a property ad online on NoBroker. Its an efficient
                  real estate website because despite my busy schedule they did
                  a great job of contacting me at the right times. To keep me
                  updated they sent mails &amp; messages. They found a great
                  tenant for my rental property as per my demands.
                </p>
                <span style={{ fontSize: "14px", fontWeight: "500" }}>
                  Gopal
                </span>
                <span style={{ color: "#787676", fontSize: "14px" }}>
                  {" "}
                  | Lalitpur
                </span>
              </Carousel.Item>
              <Carousel.Item className="mb-4">
                <p style={{ color: "#787676", fontSize: "14px" }}>
                  I posted a property ad online on NoBroker. Its an efficient
                  real estate website because despite my busy schedule they did
                  a great job of contacting me at the right times. To keep me
                  updated they sent mails &amp; messages. They found a great
                  tenant for my rental property as per my demands.
                </p>
                <span style={{ fontSize: "14px", fontWeight: "500" }}>
                  Gopal
                </span>
                <span style={{ color: "#787676", fontSize: "14px" }}>
                  {" "}
                  | Lalitpur
                </span>
              </Carousel.Item>
              <Carousel.Item className="mb-4">
                <p style={{ color: "#787676", fontSize: "14px" }}>
                  I posted a property ad online on NoBroker. Its an efficient
                  real estate website because despite my busy schedule they did
                  a great job of contacting me at the right times. To keep me
                  updated they sent mails &amp; messages. They found a great
                  tenant for my rental property as per my demands.
                </p>
                <span style={{ fontSize: "14px", fontWeight: "500" }}>
                  Gopal
                </span>
                <span style={{ color: "#787676", fontSize: "14px" }}>
                  {" "}
                  | Lalitpur
                </span>
              </Carousel.Item>
              <Carousel.Item className="mb-4">
                <p style={{ color: "#787676", fontSize: "14px" }}>
                  I posted a property ad online on NoBroker. Its an efficient
                  real estate website because despite my busy schedule they did
                  a great job of contacting me at the right times. To keep me
                  updated they sent mails &amp; messages. They found a great
                  tenant for my rental property as per my demands.
                </p>
                <span style={{ fontSize: "14px", fontWeight: "500" }}>
                  Gopal
                </span>
                <span style={{ color: "#787676", fontSize: "14px" }}>
                  {" "}
                  | Lalitpur
                </span>
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="col-lg-7 right mt-4 py-1">
            <div className="row mb-3">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="col">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col" style={{ border: "0 solid #e5e7eb" }}>
                <PhoneInput
                  country={"np"}
                  value=""
                  inputClass="form-control"
                  containerClass="w-100"
                />
              </div>
              <div className="col">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option >Select City</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option>
                  <option value="6">Six</option>
                </select>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <span>
                Get updates on
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block"
                  viewBox="0 0 48 48"
                  style={{ width: "25px", height: "25px", margin: "0 7px" }}
                >
                  <g id="surface1">
                    <path
                      fill="#40C351"
                      d="M 35.175781 12.832031 C 32.195313 9.851563 28.234375 8.207031 24.019531 8.207031 C 15.316406 8.207031 8.234375 15.28125 8.230469 23.980469 C 8.230469 26.960938 9.066406 29.863281 10.644531 32.375 L 11.019531 32.972656 L 9.425781 38.792969 L 15.398438 37.226563 L 15.976563 37.570313 C 18.398438 39.007813 21.175781 39.769531 24.007813 39.769531 L 24.015625 39.769531 C 32.710938 39.769531 39.789063 32.691406 39.792969 23.992188 C 39.796875 19.777344 38.15625 15.8125 35.175781 12.832031 Z"
                    />
                    <path
                      fill="#FFF"
                      d="M 19.269531 16.046875 C 18.914063 15.253906 18.539063 15.238281 18.199219 15.226563 C 17.921875 15.214844 17.605469 15.214844 17.289063 15.214844 C 16.976563 15.214844 16.460938 15.332031 16.027344 15.808594 C 15.589844 16.28125 14.363281 17.429688 14.363281 19.765625 C 14.363281 22.097656 16.066406 24.355469 16.300781 24.671875 C 16.539063 24.984375 19.585938 29.929688 24.40625 31.832031 C 28.414063 33.410156 29.230469 33.097656 30.097656 33.019531 C 30.96875 32.9375 32.90625 31.871094 33.300781 30.761719 C 33.695313 29.65625 33.695313 28.707031 33.578125 28.507813 C 33.460938 28.308594 33.144531 28.191406 32.667969 27.953125 C 32.195313 27.714844 29.863281 26.570313 29.425781 26.410156 C 28.992188 26.253906 28.675781 26.175781 28.359375 26.648438 C 28.042969 27.121094 27.132813 28.191406 26.855469 28.507813 C 26.578125 28.824219 26.304688 28.863281 25.828125 28.628906 C 25.355469 28.390625 23.828125 27.890625 22.015625 26.273438 C 20.605469 25.015625 19.652344 23.464844 19.375 22.988281 C 19.097656 22.515625 19.34375 22.257813 19.582031 22.019531 C 19.796875 21.808594 20.058594 21.464844 20.296875 21.1875 C 20.53125 20.910156 20.609375 20.714844 20.769531 20.398438 C 20.925781 20.082031 20.847656 19.804688 20.730469 19.566406 C 20.613281 19.328125 19.691406 16.984375 19.269531 16.046875 Z"
                      style={{ fillRule: "evenodd" }}
                    />
                  </g>
                </svg>
                WhatsApp
              </span>
              <label className="custom-switch ms-2">
                <input type="checkbox" />
                <span className="custom-slider"></span>
              </label>
            </div>

            <div className="property-nav">
              <div
                className="text-center mt-4 mb-4 fw-semibold"
                style={{ fontSize: "14px" }}
              >
                Property Type
              </div>
              <div className="property-types">
                {["Residential", "Commercial", "Land/Plot"].map((type) => (
                  <div
                    key={type}
                    className={`property-type ${
                      selectedType === type ? "active" : ""
                    }`}
                    onClick={() => {
                      setSelectedType(type);
                      setSelectedAdType(null);
                    }}
                  >
                    {type}
                  </div>
                ))}
              </div>
              <div className="property-ad-type-section">
                <div className="text-center mb-2 fw-semibold">
                  Select Property Ad Type
                </div>
                <div className="ad-types">
                  {adTypes[selectedType]?.map((adType) => (
                    <div
                      key={adType}
                      className={`ad-type fw-light ${
                        selectedAdType === adType ? "active" : ""
                      }`}
                      onClick={() => setSelectedAdType(adType)}
                    >
                      {adType}
                    </div>
                  ))}
                </div>
              </div>

              <div className="post-ad-button mb-4">
                <button
                  className="btn btn-lg btn-block text-white fw-medium"
                  style={{ fontSize: "17px" }}
                  type="button"
                >
                  Start Posting Your Ad For FREE
                </button>
              </div>
            </div>
          </div>
        </div>

        <PostPropertyFeature />

        <PostPropertyWork />

        <div className="mt-5">
          <PostPropertyText />

          <PostPropertyFAQ />
        </div>
      </div>
    </>
  );
}

export default PostProperty;
