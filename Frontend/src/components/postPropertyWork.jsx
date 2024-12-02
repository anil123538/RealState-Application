import React from 'react'
import search from '../assets/images/search.jpg'
import SakeHands from '../assets/images/shakeHands.jpg'
import phonecall from '../assets/images/phonecall.jpg'

function PostPropertyWork() {
  return (
    <>
       <div
          className="work mt-14 pt-5 pb-12 px-40"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          <h4
            className="text-center fw-semibold fs-5 pb-9"
            style={{ color: "#424949" }}
          >
            How it Works{" "}
          </h4>
          <div className="row mb-5">
            <div className="col text d-flex flex-column justify-content-center">
              <h4 className="fw-semibold fs-5" style={{ color: "#424949" }}>
                Simple Listing Process
              </h4>
              <div className="fw-light " style={{ color: "#787676" }}>
                As an owner you can list your property in a few minutes. Just
                fill out our super simple form. Your property will go live after
                verification.
              </div>
            </div>
            <div className="col">
              <img
                src={search}
                alt="Simple Listing Process"
              />
            </div>
          </div>

          <div className="row mb-5">
            <div className="col">
              <img
                src={phonecall}
                alt="Simple Listing Process"
              />
            </div>
            <div className="col text d-flex flex-column justify-content-center">
              <h4 className="fw-semibold fs-5" style={{ color: "#424949" }}>
                Tenant Selects Property and Schedules an Appointment
              </h4>
              <div className="fw-light " style={{ color: "#787676" }}>
                If a tenant likes your property they will request for your
                contact details. Both parties will receive contact information
                and then arrange for a visit.
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col text d-flex flex-column justify-content-center">
              <h4 className="fw-semibold fs-5" style={{ color: "#424949" }}>
                Deal Closure
              </h4>
              <div className="fw-light " style={{ color: "#787676" }}>
                Owner and tenant meet to close the deal directly. NESTATE can
                help create a rental agreement and deliver it to your doorstep.
              </div>
            </div>
            <div className="col">
              <img
                src={SakeHands}
                alt="Simple Listing Process"
              />
            </div>
          </div>
        </div>
    </>
  )
}

export default PostPropertyWork
