function CreateCustomer() {
  return (
    <>
      <div class="container-fluid px-0 mt-5 position-relative">
        <img
          src="https://furamavietnam.com/wp-content/uploads/2018/08/banner01.jpg?id=1433"
          alt=""
        />
        <div class="position-absolute facility-title">CREATE CUSTOMER</div>
      </div>

      <div class="row mx-0" style={{height: '700px'}}>
        <div class="col-12">
          <form action="" class="d-flex justify-content-center">
            <div
              class="card"
              style={{width: '30%', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)', marginTop: '5%', marginBottom: '100px'}}
            >
              <div class="card-body">
                <div class="d-flex mb-2 row">
                  <div class="col-6 pe-0 d-flex align-items-center">
                    <h5 class="card-title" style={{fontWeight: 'bold'}}>
                      Name
                    </h5>
                  </div>
                  <div class="col-6 px-0">
                    <input
                      type="text"
                      style={{borderRadius: '5px'}}
                      placeholder="Name"
                    />
                  </div>
                </div>

                <div class="d-flex mb-2 row">
                  <div class="col-6 pe-0 d-flex align-items-center">
                    <p
                      class="card-text d-flex align-items-center"
                      style={{marginRight: '78px'}}
                    >
                      Date of birth
                    </p>
                  </div>
                  <div class="col-6 px-0">
                    <input
                      type="text"
                      style={{borderRadius:'5px'}}
                      placeholder="Birthday"
                    />
                  </div>
                </div>

                <div class="d-flex mb-2 row">
                  <div class="col-6 pe-0 d-flex align-items-center">
                    <p class="card-text" style={{marginRight: '75px'}}>
                      Gender
                    </p>
                  </div>
                  <div class="col-6 px-0">
                    <select
                      style={{borderRadius: '5px', width: '97%'}}
                      name="type_room"
                      id=""
                    >
                      <option value="">Male</option>
                      <option value="">Female</option>
                    </select>
                  </div>
                </div>

                <div class="d-flex mb-2 row">
                  <div class="col-6 pe-0 d-flex align-items-center">
                    <p
                      class="card-text d-flex align-items-center"
                      style={{marginRight: '78px'}}
                    >
                      Identity:
                    </p>
                  </div>
                  <div class="col-6 px-0">
                    <input
                      type="text"
                      style={{borderRadius: '5px'}}
                      placeholder="Identity"
                    />
                  </div>
                </div>

                <div class="d-flex mb-2 row">
                  <div class="col-6 pe-0 d-flex align-items-center">
                    <p
                      class="card-text d-flex align-items-center"
                      style={{marginRight: '105px'}}
                    >
                      Phone number
                    </p>
                  </div>
                  <div class="col-6 px-0">
                    <input
                      type="text"
                      style={{borderRadius: '5px'}}
                      placeholder="Phone number"
                    />
                  </div>
                </div>

                <div class="d-flex mb-3 row">
                  <div class="col-6 pe-0 d-flex align-items-center">
                    <p
                      class="card-text d-flex align-items-center"
                      style={{marginRight: '105px'}}
                    >
                      Email
                    </p>
                  </div>
                  <div class="col-6 px-0">
                    <input
                      type="text"
                      style={{borderRadius: '5px'}}
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div class="d-flex mb-3 row">
                  <div class="col-6 pe-0 d-flex align-items-center">
                    <p
                      class="card-text d-flex align-items-center"
                      style={{marginRight: '105px'}}
                    >
                      Address
                    </p>
                  </div>
                  <div class="col-6 px-0">
                    <input
                      type="text"
                      style={{borderRadius: '5px'}}
                      placeholder="Address"
                    />
                  </div>
                </div>

                <div class="d-flex mb-2 row">
                  <div class="col-6 pe-0 d-flex align-items-center">
                    <p class="card-text" style={{marginRight: '75px'}}>
                      Type Customer
                    </p>
                  </div>
                  <div class="col-6 px-0">
                    <select
                      style={{borderRadius: '5px', width: '97%'}}
                      name="type_room"
                      id=""
                    >
                      <option value="">Diamond</option>
                      <option value="">Platinium</option>
                      <option value="">Gold</option>
                      <option value="">Silver</option>
                      <option value="">Member</option>
                    </select>
                  </div>
                </div>
                <input type="submit" class="btn btn-primary" value="Add" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateCustomer;
