function Contract() {
  return (
    <>
      <div className="container-fluid px-0 mt-5 position-relative">
        <img
          src="https://furamavietnam.com/wp-content/uploads/2018/08/banner01.jpg?id=1433"
          alt=""
        />
        <div className="position-absolute facility-title">CONTRACT</div>
      </div>

      <div classname="container" style={{ marginTop: 80 }}>
        <h1 classname="reservation mb-5">Complete your reservation</h1>
        <div classname="row" style={{ height: 1350 }}>
          <div classname="col-8">
            <h2 classname="mb-3" style={{ fontWeight: 500, fontSize: 20 }}>
              You selected an DMT One Reward member rate.
            </h2>
            <div classname="mb-5">
              <div classname="row mb-3">
                <div classname="col-6">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    style={{ borderRadius: 5 }}
                    id="firstName"
                    type="text"
                    classname="form-control"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
                <div classname="col-6">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    style={{ borderRadius: 5 }}
                    id="lastName"
                    type="text"
                    classname="form-control"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>
              <div classname="row mb-3">
                <label>Additional guests</label>
                <p>
                  Would you like to include the names of your guests on this
                  reservation? Enter additional guest names below:
                </p>
              </div>
              <div classname="row mb-3">
                <div classname="col-6">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    style={{ borderRadius: 5 }}
                    id="firstName"
                    type="text"
                    classname="form-control"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
                <div classname="col-6">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    style={{ borderRadius: 5 }}
                    id="lastName"
                    type="text"
                    classname="form-control"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>
              <div classname="row mb-3">
                <div classname="col-12">
                  <label htmlFor="email">Email Address</label>
                  <input
                    style={{ borderRadius: 5 }}
                    id="email"
                    type="email"
                    classname="form-control"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>
              <div classname="row mb-3">
                <div classname="col-12">
                  <label htmlFor="countryRegion">Country/Region</label>
                  <input
                    style={{ borderRadius: 5 }}
                    id="countryRegion"
                    type="text"
                    classname="form-control"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>
              <div classname="row mb-3">
                <div classname="col-12">
                  <label htmlFor="address">Address</label>
                  <input
                    style={{ borderRadius: 5 }}
                    id="address"
                    type="text"
                    classname="form-control"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>
              <div classname="row mb-3">
                <div classname="col-12">
                  <label htmlFor="city">City/Town</label>
                  <input
                    style={{ borderRadius: 5 }}
                    id="city"
                    type="text"
                    classname="form-control"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>
              <div classname="row mb-3">
                <div classname="col-12">
                  <label htmlFor="postalCode">Postal Code</label>
                  <input
                    style={{ borderRadius: 5 }}
                    id="postalCode"
                    type="text"
                    classname="form-control"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>
              <div classname="row mb-3">
                <div classname="col-6">
                  <label htmlFor="countryCode">Country/Region Code</label>
                  <input
                    style={{ borderRadius: 5 }}
                    id="countryCode"
                    type="text"
                    classname="form-control"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
                <div classname="col-6">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    style={{ borderRadius: 5 }}
                    id="phoneNumber"
                    type="text"
                    classname="form-control"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>
            </div>
            <div classname="mb-5">
              <h1
                classname="my-3 py-3"
                style={{
                  fontWeight: 500,
                  fontSize: 30,
                  fontFamily: "sans-serif",
                }}
              >
                Terms and Conditions
              </h1>
              <p classname="mb-3">
                By booking, I certify that I have read and accept the{"{"}" "
                {"}"}
                <span style={{ color: "#73a093", textDecoration: "underline" }}>
                  Terms of Use
                </span>
                {"{"}" "{"}"}
                and{"{"}" "{"}"}
                <span style={{ color: "#73a093", textDecoration: "underline" }}>
                  Privacy Statement
                </span>
                {"{"}" "{"}"}
                and I have read and understand the Rate Description and Rate
                Rules for my reservation.
              </p>
              <p classname="mb-3">
                I am at least 18 years of age and at least one guest in my party
                will meet the minimum check-in age requirement for the hotel
                upon arrival.
              </p>
              <p classname="mb-3">*Minimum Check-In Age: 18</p>
              <p classname="mb-3">
                By joining IHG One Rewards, I certify that I have read and
                accept the
                {"{"}" "{"}"}
                <span style={{ color: "#73a093", textDecoration: "underline" }}>
                  DMT One Rewards Membership Terms and Conditions
                </span>
                ,{"{"}" "{"}"}
                <span style={{ color: "#73a093", textDecoration: "underline" }}>
                  Privacy Statement
                </span>
                {"{"}" "{"}"}
                and{"{"}" "{"}"}
                <span style={{ color: "#73a093", textDecoration: "underline" }}>
                  VietNam Notice of Financial Incentive
                </span>
                .
              </p>
            </div>
            <button
              type="button"
              classname="btn btn-primary"
              style={{
                width: "30%",
                height: "5%",
                backgroundColor: "#4ea58e",
                border: "none",
              }}
            >
              BOOK RESERVATION
            </button>
          </div>
          <div classname="col-4">
            <div classname="mb-3">
              <img
                src="https://cdn1.ivivu.com/iVivu/2019/11/28/13/two-bedroom-pool-villa-cr-800x450.jpg"
                alt=""
              />
              <h2 classname="mt-3" style={{ fontWeight: 500, fontSize: 20 }}>
                Furama Resort Da Nang
              </h2>
              <p classname="mt-2" style={{ fontFamily: "sans-serif" }}>
                280 Tran Hung Dao, An Hai Tay, Son Tra Peninsula, Da Nang
              </p>
            </div>
            <hr />
            <div classname="mb-3">
              <div
                classname="row mt-4"
                style={{ fontWeight: 500, fontSize: 18 }}
              >
                <div classname="col-6">
                  <h1>Total Price</h1>
                </div>
                <div classname="col-6">
                  <h1 style={{ textAlign: "right" }}>300$</h1>
                </div>
              </div>
              <div classname="row mt-4" style={{ fontSize: 15 }}>
                <div classname="col-6">
                  <h1 style={{ fontWeight: 500 }}>Dates</h1>
                </div>
                <div classname="col-6">
                  <h1 style={{ textAlign: "right" }}>May 10-11,2023</h1>
                </div>
              </div>
            </div>
            <hr style={{ border: ".5px solid rgb(70, 69, 69)" }} />
            <div classname="mb-3">
              <div classname="row mt-4" style={{ fontSize: 15 }}>
                <div classname="col-6">
                  <h1 style={{ fontWeight: 500 }}>Reservation</h1>
                </div>
                <div classname="col-6">
                  <h1 style={{ textAlign: "right" }}>1 Room, 2 Guests</h1>
                </div>
              </div>
            </div>
            <hr style={{ border: ".5px solid rgb(70, 69, 69)" }} />
            <div classname="mb-3">
              <div classname="row mt-4" style={{ fontSize: 15 }}>
                <div classname="col-6">
                  <h1 style={{ fontWeight: 500 }}>Room Type</h1>
                </div>
                <div classname="col-6">
                  <h1 style={{ textAlign: "right" }}>
                    1 King Resort classNameic Ocean
                  </h1>
                </div>
              </div>
            </div>
            <hr style={{ border: "2px solid black" }} />
            <div classname="mb-3">
              <div classname="row mt-4" style={{ fontSize: 15 }}>
                <div classname="col-6">
                  <h1 style={{ fontWeight: 500 }}>1 night stay</h1>
                </div>
                <div classname="col-6">
                  <h1 style={{ textAlign: "right" }}>300$</h1>
                </div>
              </div>
            </div>
            <hr style={{ border: ".5px solid rgb(70, 69, 69)" }} />
            <div classname="mb-3">
              <div classname="row mt-4" style={{ fontSize: 15 }}>
                <div classname="col-6">
                  <h1 style={{ fontWeight: 500 }}>Average Nightly Rate</h1>
                </div>
                <div classname="col-6">
                  <h1 style={{ textAlign: "right" }}>300$</h1>
                </div>
              </div>
            </div>
            <hr style={{ border: ".5px solid rgb(70, 69, 69)" }} />
            <div classname="mb-3">
              <div classname="row mt-4" style={{ fontSize: 15 }}>
                <div classname="col-6">
                  <h1 style={{ fontWeight: 500 }}>Taxes</h1>
                </div>
                <div classname="col-6">
                  <h1 style={{ textAlign: "right" }}>30$</h1>
                </div>
              </div>
            </div>
            <hr style={{ border: ".5px solid rgb(70, 69, 69)" }} />
            <div classname="mb-3">
              <div classname="row mt-4" style={{ fontSize: 15 }}>
                <div classname="col-6">
                  <h1 style={{ fontWeight: 600, fontSize: 20 }}>Total Price</h1>
                </div>
                <div classname="col-6">
                  <h1 style={{ textAlign: "right" }}>330$</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contract;
