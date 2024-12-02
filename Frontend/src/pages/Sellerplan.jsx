import React from "react";
import "../style/Sellerplan.css";
import SellerplanFAQ from "../components/SellerplanFAQ";

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
              src="https://assets.NESTATE.in/static/img/owner_plan_icons/wallet.svg"
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
              src="https://assets.NESTATE.in/static/img/owner_plan_icons/house.svg"
            />
            <p>
              Leave your <b>House </b>
              <b>Keys &amp; Worries</b> to us!
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3">
            <div className="">Plans and Pricing</div>
            <div className="">
              <div className="d-flex">
                <img
                  style={{ width: "20px", height: "auto" }}
                  alt="plansIcons"
                  src="https://assets.NESTATE.in/static/img/owner_plan_icons/refund.png"
                />
                <div className=""> Guaranteed buyers or Moneyback</div>
              </div>
              <div className="d-flex">
                <img
                  style={{ width: "20px", height: "auto" }}
                  alt="plansIcons"
                  src="https://assets.NESTATE.in/static/img/owner_plan_icons/assistant.png"
                />
                <div className=""> Personal Field assistant</div>
              </div>
              <div className="d-flex">
                <img
                  style={{ width: "20px", height: "auto" }}
                  alt="plansIcons"
                  src="https://assets.NESTATE.in/static/img/owner_plan_icons/promotion.png"
                />
                <div className="">Property promotion on site</div>
              </div>
              <div className="d-flex">
                <img
                  style={{ width: "20px", height: "auto" }}
                  alt="p"
                  src="https://assets.NESTATE.in/static/img/owner_plan_icons/rm.png"
                />
                <div className=""> Relationship Manager (RM)</div>
              </div>
              <div className="d-flex">
                <img
                  style={{ width: "20px", height: "auto" }}
                  alt="plansIcons"
                  src="https://assets.NESTATE.in/static/img/owner_plan_icons/marketing.png"
                />
                <div className=""> Facebook Marketing Of Property</div>
              </div>
              <div className="d-flex">
                <img
                  style={{ width: "20px", height: "auto" }}
                  alt="plansIcons"
                  src="https://assets.NESTATE.in/static/img/owner_plan_icons/privacy.png"
                />
                <div className=""> Privacy of your phone number</div>
              </div>
              <div className="d-flex">
                <img
                  style={{ width: "20px", height: "auto" }}
                  alt="plansIcons"
                  src="https://assets.NESTATE.in/static/img/owner_plan_icons/showing-interest.png"
                />
                <div className=""> Showing property on your behalf</div>
              </div>
              <div className="d-flex">
                <img
                  style={{ width: "20px", height: "auto" }}
                  alt="plansIcons"
                  src="https://assets.NESTATE.in/static/img/owner_plan_icons/photoshoot.png"
                />
                <div className=""> Photoshoot of your property</div>
              </div>
              <div className="d-flex">
                <img
                  style={{ width: "20px", height: "auto" }}
                  alt="plansIcons"
                  src="https://assets.NESTATE.in/static/img/owner_plan_icons/validity.png"
                />
                <div className=""> Plan Validity</div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 d-flex">
            <div className="col">
              <div className="">
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
                          src="https://assets.NESTATE.in/nb-new/public/MaterialIcons/Help.png"
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
              <div className="">
                <div className="">
                  <div className=""></div>
                </div>
                <div className="">
                  <div className=""></div>
                </div>
                <div className="">
                  <div className="">
                    <img
                      src="https://assets.NESTATE.in/nb-new/public/MaterialIcons/checkColor.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <img
                      src="https://assets.NESTATE.in/nb-new/public/MaterialIcons/checkColor.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <img
                      src="https://assets.NESTATE.in/nb-new/public/MaterialIcons/checkColor.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <img
                      src="https://assets.NESTATE.in/nb-new/public/MaterialIcons/checkColor.svg"
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

            <div className="col">
              <div className="">
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
                          src="https://assets.NESTATE.in/nb-new/public/MaterialIcons/Help.png"
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
              <div className="">
                <div className="">
                  <div className=""></div>
                </div>
                <div className="">
                  <div className="">
                    <img
                      src="https://assets.NESTATE.in/nb-new/public/MaterialIcons/checkColor.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <img
                      src="https://assets.NESTATE.in/nb-new/public/MaterialIcons/checkColor.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <img
                      src="https://assets.NESTATE.in/nb-new/public/MaterialIcons/checkColor.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <img
                      src="https://assets.NESTATE.in/nb-new/public/MaterialIcons/checkColor.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <img
                      src="https://assets.NESTATE.in/nb-new/public/MaterialIcons/checkColor.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <img
                      src="https://assets.NESTATE.in/nb-new/public/MaterialIcons/checkColor.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <img
                      src="https://assets.NESTATE.in/nb-new/public/MaterialIcons/checkColor.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="">
                  <div className="">3 Months</div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="">
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
                          src="https://assets.NESTATE.in/nb-new/public/MaterialIcons/Help.png"
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
              <div className="">
                <div className="">
                  <div className=""></div>
                </div>
                <div className="">
                  <div className=""></div>
                </div>
                <div className="">
                  <div className="">
                    <img
                      src="https://assets.NESTATE.in/nb-new/public/MaterialIcons/checkColor.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <img
                      src="https://assets.NESTATE.in/nb-new/public/MaterialIcons/checkColor.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <img
                      src="https://assets.NESTATE.in/nb-new/public/MaterialIcons/checkColor.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <img
                      src="https://assets.NESTATE.in/nb-new/public/MaterialIcons/checkColor.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <img
                      src="https://assets.NESTATE.in/nb-new/public/MaterialIcons/checkColor.svg"
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

            <div className="col">
              <div className="">
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
                          src="https://assets.NESTATE.in/nb-new/public/MaterialIcons/Help.png"
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
              <div className="">
                <div className="">
                  <div className=""></div>
                </div>
                <div className="">
                  <div className=""></div>
                </div>
                <div className="">
                  <div className="">
                    <img
                      src="https://assets.NESTATE.in/nb-new/public/MaterialIcons/checkColor.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <img
                      src="https://assets.NESTATE.in/nb-new/public/MaterialIcons/checkColor.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <img
                      src="https://assets.NESTATE.in/nb-new/public/MaterialIcons/checkColor.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <img
                      src="https://assets.NESTATE.in/nb-new/public/MaterialIcons/checkColor.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <img
                      src="https://assets.NESTATE.in/nb-new/public/MaterialIcons/checkColor.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <img
                      src="https://assets.NESTATE.in/nb-new/public/MaterialIcons/checkColor.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <img
                      src="https://assets.NESTATE.in/nb-new/public/MaterialIcons/checkColor.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <img
                      src="https://assets.NESTATE.in/nb-new/public/MaterialIcons/checkColor.svg"
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

        <div>
          <div className="">HOW ASSISTED PLANS WORK</div>
          <div>
            <div className="">
              <div
                className=""
                style={{ backgroundPosition: "0px center" }}
              ></div>
              <div className="">
                <div className="">LOOKING FOR A BUYER?</div>
                <div className="">
                  Get verified buyer leads through any one of our assisted
                  plans.
                </div>
              </div>
            </div>

            <div className="">
              <div className=""> </div>
              <span className=""></span>
            </div>

            <div className="">
              <div className="">
                <div className="">THE HELPING HAND</div>
                <div className="">
                  A dedicated <span>RELATIONSHIP MANAGER</span> to guide and
                  support you
                </div>
              </div>
              <div
                className=""
                style={{ backgroundPosition: "-231px center" }}
              ></div>
            </div>

            <div className="">
              <div className=""> </div>
              <span className=""></span>
            </div>

            <div className="">
              <div
                className=""
                style={{ backgroundPosition: "-462px center" }}
              ></div>
              <div className="">
                <div className="">MARKETING &amp; PROMOTION</div>
                <div className="">
                  Boost your ranking on NESTATE listing page and promotion on
                  social media
                </div>
              </div>
            </div>

            <div className="">
              <div className=""> </div>
              <span className=""></span>
            </div>

            <div className="">
              <div className="">
                <div className="">FREEDOM FROM BOGUS CALLERS</div>
                <div className="">
                  Your relationship manager handles all enquiries on call
                </div>
              </div>
              <div
                className=""
                style={{ backgroundPosition: "-701px center;" }}
              ></div>
            </div>

            <div className="">
              <div className=""> </div>
              <span className=""></span>
            </div>

            <div className="">
              <div
                className=""
                style={{ backgroundPosition: "-928px center" }}
              ></div>
              <div className="">
                <div className="">FILTER QUALIFIED BUYERS</div>
                <div className="">
                  Your Relationship Manager forwards you only buyer, meeting
                  your requirements.
                </div>
              </div>
            </div>

            <div className="">
              <div className=""> </div>
              <span className=""></span>
            </div>

            <div class="nb__ZLmd3">
              <div class="nb__2Vm_z">
                <div class="nb__UeVcQ">FASTER CLOSURE</div>
                <div class="nb__1O2cb">
                  You get buyer quick and effectively at a fractional cost.
                </div>
              </div>
              <div
                class="nb__1Ib2A"
                style={{ backgroundPosition: "-1164px center" }}
              ></div>
            </div>
          </div>
        </div>

<SellerplanFAQ />

      </div>
    </>
  );
}

export default Sellerplan;
