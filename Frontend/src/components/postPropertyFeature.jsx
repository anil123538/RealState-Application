import React from 'react'

function PostPropertyFeature() {

  const brokerFeature = [
    {
      img: "https://assets.nobroker.in/static/img/listing/icon1.png",
      title: "No Calls From Brokers",
      content: "Your information is kept confidential and you no longer have to worry about call from brokers.",
    },
    {
      img: "https://assets.nobroker.in/static/img/listing/icon2.png",
      title: "Verified Tenants",
      content: "Thanks to our technology, only verified and genuine tenants can call you.",
    },
    {
      img: "https://assets.nobroker.in/static/img/listing/icon3.png",
      title: "Save Brokerage",
      content: "NESTATE means nobrokerage! Buy yourself a gift",
    },
  ];

  return (
    <>
      <div className="help-call d-flex align-items-center justify-content-center mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: "15px", width: "13px", marginRight: "8px" }}
            viewBox="0 0 512 512"
          >
            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
          </svg>
          <span className="fw-light">
            Give a missed call to 869-000-5267 to get help with your property
            listing
          </span>
        </div>

        <div className="row mt-14">
          {brokerFeature.map((item, index) => (
            <div
              key={index}
              className="feature col d-flex flex-column align-items-center text-center"
            >
              <img
                className="mb-3"
                style={{ width: "50px", hight: "70px" }}
                src={item.img}
                alt={item.title}
              />
              <h5
                className="fw-semibold"
                style={{ fontSize: "18px", color: "#424949" }}
              >
                {item.title}
              </h5>
              <p className="" style={{ fontSize: "15px", color: "#787676" }}>
                {item.content}
              </p>
            </div>
          ))}
        </div>
    </>
  )
}

export default PostPropertyFeature
