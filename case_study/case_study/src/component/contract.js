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

      <div className="container" style="margin-top: 80px;">
        <h1 className="reservation mb-5">Complete your reservation</h1>

        <div className="row" style="height: 1350px;">
          <div className="col-8">
            <h2 className="mb-3" style="font-weight: 500; font-size: 20px;">
              You selected an DMT One Reward member rate.
            </h2>

            <div className="mb-5">
              <div className="row mb-3">
                <div className="col-6">
                  <label for="firstName">First Name</label>
                  <input
                    style="border-radius: 5px;"
                    id="firstName"
                    type="text"
                    className="form-control"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
                <div className="col-6">
                  <label for="lastName">Last Name</label>
                  <input
                    style="border-radius: 5px;"
                    id="lastName"
                    type="text"
                    className="form-control"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>

              <div className="row mb-3">
                <label>Additional guests</label>
                <p>
                  Would you like to include the names of your guests on this
                  reservation? Enter additional guest names below:
                </p>
              </div>

              <div className="row mb-3">
                <div className="col-6">
                  <label for="firstName">First Name</label>
                  <input
                    style="border-radius: 5px;"
                    id="firstName"
                    type="text"
                    className="form-control"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
                <div className="col-6">
                  <label for="lastName">Last Name</label>
                  <input
                    style="border-radius: 5px;"
                    id="lastName"
                    type="text"
                    className="form-control"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-12">
                  <label for="email">Email Address</label>
                  <input
                    style="border-radius: 5px;"
                    id="email"
                    type="email"
                    className="form-control"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-12">
                  <label for="countryRegion">Country/Region</label>
                  <input
                    style="border-radius: 5px;"
                    id="countryRegion"
                    type="text"
                    className="form-control"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-12">
                  <label for="address">Address</label>
                  <input
                    style="border-radius: 5px;"
                    id="address"
                    type="text"
                    className="form-control"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-12">
                  <label for="city">City/Town</label>
                  <input
                    style="border-radius: 5px;"
                    id="city"
                    type="text"
                    className="form-control"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-12">
                  <label for="postalCode">Postal Code</label>
                  <input
                    style="border-radius: 5px;"
                    id="postalCode"
                    type="text"
                    className="form-control"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-6">
                  <label for="countryCode">Country/Region Code</label>
                  <input
                    style="border-radius: 5px;"
                    id="countryCode"
                    type="text"
                    className="form-control"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
                <div className="col-6">
                  <label for="phoneNumber">Phone Number</label>
                  <input
                    style="border-radius: 5px;"
                    id="phoneNumber"
                    type="text"
                    className="form-control"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>
            </div>

            <div className="mb-5">
              <h1
                className="my-3 py-3"
                style="font-weight: 500; font-size: 30px; font-family: sans-serif;"
              >
                Terms and Conditions
              </h1>
              <p className="mb-3">
                By booking, I certify that I have read and accept the{" "}
                <span style="color: #73a093;text-decoration: underline;">
                  Terms of Use
                </span>{" "}
                and{" "}
                <span style="color: #73a093;text-decoration: underline;">
                  Privacy Statement
                </span>{" "}
                and I have read and understand the Rate Description and Rate
                Rules for my reservation.
              </p>
              <p className="mb-3">
                I am at least 18 years of age and at least one guest in my party
                will meet the minimum check-in age requirement for the hotel
                upon arrival.
              </p>
              <p className="mb-3">*Minimum Check-In Age: 18</p>
              <p className="mb-3">
                By joining IHG One Rewards, I certify that I have read and
                accept the{" "}
                <span style="color: #73a093;text-decoration: underline;">
                  DMT One Rewards Membership Terms and Conditions
                </span>
                ,{" "}
                <span style="color: #73a093;text-decoration: underline;">
                  Privacy Statement
                </span>{" "}
                and{" "}
                <span style="color: #73a093;text-decoration: underline;">
                  VietNam Notice of Financial Incentive
                </span>
                .
              </p>
            </div>

            <button
              type="button"
              className="btn btn-primary"
              style="width: 30%; height: 5%; background-color: #4ea58e;border: none;"
            >
              BOOK RESERVATION
            </button>
          </div>

          <div className="col-4">
            <div className="mb-3">
              <img
                src="https://cdn1.ivivu.com/iVivu/2019/11/28/13/two-bedroom-pool-villa-cr-800x450.jpg"
                alt=""
              />
              <h2 className="mt-3" style="font-weight: 500; font-size: 20px;">
                Furama Resort Da Nang
              </h2>
              <p className="mt-2" style="font-family: sans-serif;">
                280 Tran Hung Dao, An Hai Tay, Son Tra Peninsula, Da Nang
              </p>
            </div>

            <hr />

            <div className="mb-3">
              <div
                className="row mt-4"
                style="font-weight: 500; font-size: 18px;"
              >
                <div className="col-6">
                  <h1>Total Price</h1>
                </div>
                <div className="col-6">
                  <h1 style="text-align: right;">300$</h1>
                </div>
              </div>
              <div className="row mt-4" style="font-size: 15px;">
                <div className="col-6">
                  <h1 style="font-weight: 500;">Dates</h1>
                </div>
                <div className="col-6">
                  <h1 style="text-align: right;">May 10-11,2023</h1>
                </div>
              </div>
            </div>

            <hr style="border: .5px solid rgb(70, 69, 69);" />

            <div className="mb-3">
              <div className="row mt-4" style="font-size: 15px;">
                <div className="col-6">
                  <h1 style="font-weight: 500;">Reservation</h1>
                </div>
                <div className="col-6">
                  <h1 style="text-align: right;">1 Room, 2 Guests</h1>
                </div>
              </div>
            </div>

            <hr style="border: .5px solid rgb(70, 69, 69);" />

            <div className="mb-3">
              <div className="row mt-4" style="font-size: 15px;">
                <div className="col-6">
                  <h1 style="font-weight: 500;">Room Type</h1>
                </div>
                <div className="col-6">
                  <h1 style="text-align: right;">
                    1 King Resort classNameic Ocean
                  </h1>
                </div>
              </div>
            </div>

            <hr style="border: 2px solid black;" />

            <div className="mb-3">
              <div className="row mt-4" style="font-size: 15px;">
                <div className="col-6">
                  <h1 style="font-weight: 500;">1 night stay</h1>
                </div>
                <div className="col-6">
                  <h1 style="text-align: right;">300$</h1>
                </div>
              </div>
            </div>

            <hr style="border: .5px solid rgb(70, 69, 69);" />

            <div className="mb-3">
              <div className="row mt-4" style="font-size: 15px;">
                <div className="col-6">
                  <h1 style="font-weight: 500;">Average Nightly Rate</h1>
                </div>
                <div className="col-6">
                  <h1 style="text-align: right;">300$</h1>
                </div>
              </div>
            </div>

            <hr style="border: .5px solid rgb(70, 69, 69);" />

            <div className="mb-3">
              <div className="row mt-4" style="font-size: 15px;">
                <div className="col-6">
                  <h1 style="font-weight: 500;">Taxes</h1>
                </div>
                <div className="col-6">
                  <h1 style="text-align: right;">30$</h1>
                </div>
              </div>
            </div>

            <hr style="border: .5px solid rgb(70, 69, 69);" />

            <div className="mb-3">
              <div className="row mt-4" style="font-size: 15px;">
                <div className="col-6">
                  <h1 style="font-weight: 600; font-size: 20px;">
                    Total Price
                  </h1>
                </div>
                <div className="col-6">
                  <h1 style="text-align: right;">330$</h1>
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