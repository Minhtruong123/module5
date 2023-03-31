import { Component } from "react";

class AddFacility extends Component {
  render() {
    return (
      <>
        <div className="row mx-0" style="height: 800px;">
          <div className="col-12">
            <form action="" className="d-flex justify-content-center">
              <div
                className="card"
                style="width: 30%;box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2); margin-top: 9%; margin-bottom: 100px;"
              >
                <img
                  src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
                  className="card-img-top"
                />
                <div className="card-body">
                  <div className="d-flex mb-2 row">
                    <div className="col-6 pe-0 d-flex align-items-center">
                      <h5 className="card-title" style="font-weight: bold;">
                        Name of the room
                      </h5>
                    </div>
                    <div className="col-6 px-0">
                      <input
                        type="text"
                        style="border-radius: 5px;"
                        placeholder="Name"
                      />
                    </div>
                  </div>

                  <div className="d-flex mb-2 row">
                    <div className="col-6 pe-0 d-flex align-items-center">
                      <p className="card-text" style="margin-right: 75px;">
                        Type room:
                      </p>
                    </div>
                    <div className="col-6 px-0">
                      <select
                        style="border-radius: 5px; width: 97%;"
                        name="type_room"
                        id=""
                      >
                        <option value="">Villa</option>
                        <option value="">House</option>
                        <option value="">Room</option>
                      </select>
                    </div>
                  </div>

                  <div className="d-flex mb-2 row">
                    <div className="col-6 pe-0 d-flex align-items-center">
                      <p
                        className="card-text d-flex align-items-center"
                        style="margin-right: 78px;"
                      >
                        Room size:
                      </p>
                    </div>
                    <div className="col-6 px-0">
                      <input
                        type="text"
                        style="border-radius: 5px;"
                        placeholder="Room size"
                      />
                    </div>
                  </div>

                  <div className="d-flex mb-3 row">
                    <div className="col-6 pe-0 d-flex align-items-center">
                      <p
                        className="card-text d-flex align-items-center"
                        style="margin-right: 105px;"
                      >
                        Image:
                      </p>
                    </div>
                    <div className="col-6 px-0">
                      <input
                        type="text"
                        style="border-radius: 5px;"
                        placeholder="Image"
                      />
                    </div>
                  </div>

                  <div className="d-flex mb-3 row">
                    <div className="col-6 pe-0 d-flex align-items-center">
                      <p
                        className="card-text d-flex align-items-center"
                        style="margin-right: 105px;"
                      >
                        Price:
                      </p>
                    </div>
                    <div className="col-6 px-0">
                      <input
                        type="text"
                        style="border-radius: 5px;"
                        placeholder="Price"
                      />
                    </div>
                  </div>

                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Add"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default AddFacility;