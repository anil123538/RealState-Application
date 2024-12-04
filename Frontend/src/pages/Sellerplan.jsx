import React from "react";
import "../style/Sellerplan.css";
import SellerplanFAQ from "../components/SellerplanFAQ";
import pic1 from "../assets/images/ownerplan_sprite_1.png";
import pic2 from "../assets/images/ownerplan_sprite_2.png";
import pic3 from "../assets/images/ownerplan_sprite_4.png";
import pic4 from "../assets/images/ownerplan_sprite_5.png";
import pic5 from "../assets/images/ownerplan_sprite_6.png";
import pic6 from "../assets/images/ownerplan_sprite_7.png";

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

        <div
          className="d-flex justify-content-evenly align-items-center"
          style={{ paddingTop: "10px", color: "#464646", marginLeft: "17%" }}
        >
          <div
            className="d-flex align-items-center justify-content-center py-4 px-24"
            style={{
              backgroundColor: "#f8f8f8",
              borderTopRightRadius: "4px",
              borderTopLeftRadius: "4px",
              fontSize: "14px",
            }}
          >
            <img
              alt="getTenants"
              src="https://assets.nobroker.in/static/img/owner_plan_icons/wallet.svg"
            />
            Get Buyer Faster &amp; Save Brokerage
          </div>
          <div
            className="d-flex align-items-center justify-content-center py-3 px-28"
            style={{
              backgroundColor: "#fff7f3",
              borderTopRightRadius: "4px",
              borderTopLeftRadius: "4px",
              fontSize: "14px",
              marginLeft: "-30px",
            }}
          >
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
        
        <div className="d-flex flex-column align-items-center">
          <div
            className="row plantable "
            style={{ border: "1px solid #e2e2e2", width: "90%" }}
          >
            <div
              className="col-lg-3"
              style={{ borderRight: "1px solid #e2e2e2" }}
            >
              <div className="title">Plans and Pricing</div>
              <div className="tablerow" style={{ fontSize: "14px" }}>
                <div className="d-flex firstrow">
                  <img
                    style={{ width: "30px", height: "30px" }}
                    alt="plansIcons"
                    src="https://assets.nobroker.in/static/img/owner_plan_icons/refund.png"
                  />
                  <div className=""> Guaranteed buyers or Moneyback</div>
                </div>
                <div className="d-flex secondrow">
                  <img
                    style={{ width: "30px", height: "30px" }}
                    alt="plansIcons"
                    src="https://assets.nobroker.in/static/img/owner_plan_icons/assistant.png"
                  />
                  <div className=""> Personal Field assistant</div>
                </div>
                <div className="d-flex comrow">
                  <img
                    style={{ width: "30px", height: "30px" }}
                    alt="plansIcons"
                    src="https://assets.nobroker.in/static/img/owner_plan_icons/promotion.png"
                  />
                  <div className="">Property promotion on site</div>
                </div>
                <div className="d-flex comrow">
                  <img
                    style={{ width: "30px", height: "30px" }}
                    alt="p"
                    src="https://assets.nobroker.in/static/img/owner_plan_icons/rm.png"
                  />
                  <div className=""> Relationship Manager (RM)</div>
                </div>
                <div className="d-flex comrow">
                  <img
                    style={{ width: "30px", height: "30px" }}
                    alt="plansIcons"
                    src="https://assets.nobroker.in/static/img/owner_plan_icons/marketing.png"
                  />
                  <div className=""> Facebook Marketing Of Property</div>
                </div>
                <div className="d-flex comrow">
                  <img
                    style={{ width: "30px", height: "30px" }}
                    alt="plansIcons"
                    src="https://assets.nobroker.in/static/img/owner_plan_icons/privacy.png"
                  />
                  <div className=""> Privacy of your phone number</div>
                </div>
                <div className="d-flex comrow">
                  <img
                    style={{ width: "30px", height: "30px" }}
                    alt="plansIcons"
                    src="https://assets.nobroker.in/static/img/owner_plan_icons/showing-interest.png"
                  />
                  <div className=""> Showing property on your behalf</div>
                </div>
                <div className="d-flex comrow">
                  <img
                    style={{ width: "30px", height: "30px" }}
                    alt="plansIcons"
                    src="https://assets.nobroker.in/static/img/owner_plan_icons/photoshoot.png"
                  />
                  <div className=""> Photoshoot of your property</div>
                </div>
                <div className="d-flex comrow">
                  <img
                    style={{ width: "30px", height: "30px" }}
                    alt="plansIcons"
                    src="https://assets.nobroker.in/static/img/owner_plan_icons/validity.png"
                  />
                  <div className=""> Plan Validity</div>
                </div>
              </div>
            </div>

            <div className="col-lg-9 d-flex">
              <div
                className="col fstcol"
                style={{ borderRight: "1px solid #e2e2e2" }}
              >
                <div className="coltitle">
                  <div className="">Relax Plan</div>
                  <div className="">
                    <span>₹7,499 </span>
                  </div>
                  <div>
                    <span className="">
                      <span
                        data-toggle="dropdown"
                        className=""
                        id="gstFreedom"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="">
                          +18% GST
                          <img
                            src="https://assets.nobroker.in/nb-new/public/MaterialIcons/Help.png"
                            alt=""
                            className="ml-1 inline-block w-5 h-5"
                          />
                        </span>
                        <div
                          aria-labelledby="dLabel"
                          className="dropdown-menu price-breakup-dropdown"
                        >
                          <div className="">
                            <div className="">Plan Price</div>
                            <div className="">₹ 7,499</div>
                          </div>
                          <div className="">
                            <div className=" ">GST @ 18%</div>
                            <div className="">₹ 1,349.82</div>
                          </div>
                          <div className="">
                            <div className="heading-5 ">Amount Payable</div>
                            <div className="heading-5">₹ 8,848.82</div>
                          </div>
                        </div>
                      </span>
                    </span>
                  </div>
                  <div className="">
                    <button
                      className=" btn text-white"
                      id=""
                      type="button"
                      style={{ backgroundColor: "#004958" }}
                    >
                      <span className="flex items-center justify-center">
                        Subscribe
                      </span>
                    </button>
                  </div>
                  <div className="">
                    <ul>
                      <li>Get Buyers Quickly. Save Lakhs on Brokerage.</li>
                    </ul>
                    {/* <div></div> */}
                  </div>
                </div>
                <div className="" style={{ fontSize: "14px" }}>
                  <div className="">
                    <div className=""></div>
                  </div>
                  <div className="">
                    <div className=""></div>
                  </div>
                  <div className="">
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className=""></div>
                  </div>
                  <div className="">
                    <div className=""></div>
                  </div>
                  <div className="">
                    <div className="">3 Months</div>
                  </div>
                </div>
              </div>

              <div
                className="col fstcol"
                style={{ borderRight: "1px solid #e2e2e2" }}
              >
                <div className="coltitle">
                  <div className="">Relax Plan</div>
                  <div className="">
                    <span>₹7,499 </span>
                  </div>
                  <div>
                    <span className="">
                      <span
                        data-toggle="dropdown"
                        className=""
                        id="gstFreedom"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="">
                          +18% GST
                          <img
                            src="https://assets.nobroker.in/nb-new/public/MaterialIcons/Help.png"
                            alt=""
                            className="ml-1 inline-block w-5 h-5"
                          />
                        </span>
                        <div
                          aria-labelledby="dLabel"
                          className="dropdown-menu price-breakup-dropdown"
                        >
                          <div className="">
                            <div className="">Plan Price</div>
                            <div className="">₹ 7,499</div>
                          </div>
                          <div className="">
                            <div className="">GST @ 18%</div>
                            <div className="">₹ 1,349.82</div>
                          </div>
                          <div className="">
                            <div className="heading-5 ">Amount Payable</div>
                            <div className="heading-5 ">₹ 8,848.82</div>
                          </div>
                        </div>
                      </span>
                    </span>
                  </div>
                  <div className="" style={{ fontSize: "14px" }}>
                    <button className=" btn btn-default" id="" type="button">
                      <span className="flex items-center justify-center">
                        Subscribe
                      </span>
                    </button>
                  </div>
                  <div className="">
                    <ul>
                      <li>Get Buyers Quickly. Save Lakhs on Brokerage.</li>
                    </ul>
                    <div></div>
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <div className=""></div>
                  </div>
                  <div className="">
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="">3 Months</div>
                  </div>
                </div>
              </div>

              <div
                className="col fstcol"
                style={{ borderRight: "1px solid #e2e2e2" }}
              >
                <div className="coltitle">
                  <div className="">Relax Plan</div>
                  <div className="">
                    <span>₹7,499 </span>
                  </div>
                  <div>
                    <span className="">
                      <span
                        data-toggle="dropdown"
                        className=""
                        id="gstFreedom"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="">
                          +18% GST
                          <img
                            src="https://assets.nobroker.in/nb-new/public/MaterialIcons/Help.png"
                            alt=""
                            className="ml-1 inline-block w-5 h-5"
                          />
                        </span>
                        <div
                          aria-labelledby="dLabel"
                          className="dropdown-menu price-breakup-dropdown"
                        >
                          <div className="">
                            <div className="">Plan Price</div>
                            <div className="">₹ 7,499</div>
                          </div>
                          <div className="">
                            <div className="">GST @ 18%</div>
                            <div className="">₹ 1,349.82</div>
                          </div>
                          <div className="">
                            <div className="heading-5 ">Amount Payable</div>
                            <div className="heading-5 ">₹ 8,848.82</div>
                          </div>
                        </div>
                      </span>
                    </span>
                  </div>
                  <div className="">
                    <button className=" btn btn-default" id="" type="button">
                      <span className="flex items-center justify-center">
                        Subscribe
                      </span>
                    </button>
                  </div>
                  <div className="">
                    <ul>
                      <li>Get Buyers Quickly. Save Lakhs on Brokerage.</li>
                    </ul>
                    <div></div>
                  </div>
                </div>
                <div className="" style={{ fontSize: "14px" }}>
                  <div className="">
                    <div className=""></div>
                  </div>
                  <div className="">
                    <div className=""></div>
                  </div>
                  <div className="">
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className=""></div>
                  </div>
                  <div className="">
                    <div className=""></div>
                  </div>
                  <div className="">
                    <div className="">3 Months</div>
                  </div>
                </div>
              </div>

              <div className="col fstcol">
                <div className="coltitle">
                  <div className="">Relax Plan</div>
                  <div className="">
                    <span>₹7,499 </span>
                  </div>
                  <div>
                    <span className="">
                      <span
                        data-toggle="dropdown"
                        className=""
                        id="gstFreedom"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="">
                          +18% GST
                          <img
                            src="https://assets.nobroker.in/nb-new/public/MaterialIcons/Help.png"
                            alt=""
                            className="ml-1 inline-block w-5 h-5"
                          />
                        </span>
                        <div
                          aria-labelledby="dLabel"
                          className="dropdown-menu price-breakup-dropdown"
                        >
                          <div className="">
                            <div className="">Plan Price</div>
                            <div className="">₹ 7,499</div>
                          </div>
                          <div className="">
                            <div className="">GST @ 18%</div>
                            <div className="">₹ 1,349.82</div>
                          </div>
                          <div className="">
                            <div className="heading-5 ">Amount Payable</div>
                            <div className="heading-5 ">₹ 8,848.82</div>
                          </div>
                        </div>
                      </span>
                    </span>
                  </div>
                  <div className="">
                    <button className=" btn btn-default" id="" type="button">
                      <span className="flex items-center justify-center">
                        Subscribe
                      </span>
                    </button>
                  </div>
                  <div className="">
                    <ul>
                      <li>Get Buyers Quickly. Save Lakhs on Brokerage.</li>
                    </ul>
                    <div></div>
                  </div>
                </div>
                <div className="" style={{ fontSize: "14px" }}>
                  <div className="">
                    <div className=""></div>
                  </div>
                  <div className="">
                    <div className=""></div>
                  </div>
                  <div className="">
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className=""></div>
                  </div>
                  <div className="">
                    <div className=""></div>
                  </div>
                  <div className="">
                    <div className="">3 Months</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="">
            <div className="">
              <div></div>
            </div>
            <div> T&amp;C apply.</div>
          </div>
          <div className="">
            <a href="">Click here for Buyer Plans</a>
          </div>
        </div>

        <div className="container mt-10 ms-5 ">
          <h1 className="text-center text-2xl mb-14">
            HOW ASSISTED PLANS WORK
          </h1>
          <div className="row align-items-center position-relative">
            <div className="col-lg-4 overflow-hidden d-flex flex-column align-items-center">
              <img src={pic1} alt="" srcset="" />
              <div className="line-dashed" style={{ marginTop: "-33px" }}></div>
            </div>
            <div className="col-lg-4 ">
              <h1 className="text-danger text-xl"> LOOKING FOR A BUYER?</h1>
              <p>
                Get verified buyer leads through any one of our assisted plans.
              </p>
            </div>
            <div className="col-lg-4"></div>
            <div className="bottom-border"></div>
          </div>

          <div
            className="row align-items-center  position-relative"
            style={{ marginTop: "" }}
          >
            <div className="col-lg-4"></div>
            <div className="col-lg-4 ">
              <h1 className="text-danger text-xl"> THE HELPING HAND</h1>
              <p>
                A dedicated{" "}
                <span
                  className=""
                  style={{ color: "#004958", fontSize: "18px" }}
                >
                  RELATIONSHIP MANAGER
                </span>{" "}
                to guide and support you
              </p>
            </div>
            <div className="col-lg-4 overflow-hidden d-flex flex-column align-items-center">
              <div className="line-dashed"></div>
              <img src={pic2} alt="" srcset="" />
              <div className="line-dashed" style={{ marginTop: "-30px" }}></div>
            </div>
            <div className="bottom-border"></div>
          </div>

          <div className="row align-items-center  position-relative">
            <div className="col-lg-4 overflow-hidden  d-flex flex-column align-items-center">
              <div className="line-dashed"></div>
              <img src={pic3} alt="" srcset="" />
              <div className="line-dashed" style={{ marginTop: "-60px" }}></div>
            </div>
            <div className="col-lg-4 ">
              <h1 className="text-danger text-xl"> MARKETING & PROMOTION</h1>
              <p>
                Boost your ranking on NoBroker listing page and promotion on
                social media
              </p>
            </div>
            <div className="col-lg-4"></div>
            <div className="bottom-border"></div>
          </div>

          <div className="row align-items-center  position-relative">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 ">
              <h1 className="text-danger text-xl">
                FREEDOM FROM BOGUS CALLERS
              </h1>
              <p>Your relationship manager handles all enquiries on call</p>
            </div>
            <div className="col-lg-4 overflow-hidden  d-flex flex-column align-items-center">
              <div className="line-dashed"></div>
              <img src={pic4} alt="" srcset="" />
              <div className="line-dashed"></div>
              <div className="bottom-border"></div>
            </div>
          </div>

          <div className="row align-items-center  position-relative">
            <div className="col-lg-4 overflow-hidden  d-flex flex-column align-items-center">
              <div className="line-dashed"></div>
              <img src={pic5} alt="" srcset="" />
              <div className="line-dashed" style={{ marginTop: "-60px" }}></div>
            </div>
            <div className="col-lg-4 ">
              <h1 className="text-danger text-xl"> FILTER QUALIFIED BUYERS</h1>
              <p>
                Your Relationship Manager forwards you only buyer, meeting your
                requirements.
              </p>
            </div>
            <div className="col-lg-4"></div>
            <div className="bottom-border"></div>
          </div>

          <div className="row align-items-center  position-relative">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 ">
              <h1 className="text-danger text-xl">FASTER CLOSURE</h1>
              <p>You get buyer quick and effectively at a fractional cost.</p>
            </div>
            <div className="col-lg-4 overflow-hidden  d-flex flex-column align-items-center">
              <div className="line-dashed"></div>
              <img src={pic6} alt="" srcset="" />
            </div>
          </div>
        </div>

        <SellerplanFAQ />
      </div>
    </>
  );
}

export default Sellerplan;
