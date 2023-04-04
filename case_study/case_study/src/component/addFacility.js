import { Component } from "react";

class AddFacility extends Component {
  render() {
    return (
      <>
        <div classname="row mx-0" style={{ height: 800 }}>
          <div classname="col-12">
            <form action="" classname="d-flex justify-content-center">
              <div
                classname="card"
                style={{
                  width: "30%",
                  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                  marginTop: "9%",
                  marginBottom: 100,
                }}
              >
                <img
                  src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
                  classname="card-img-top"
                />
                <div classname="card-body">
                  <div classname="d-flex mb-2 row">
                    <div classname="col-6 pe-0 d-flex align-items-center">
                      <h5 classname="card-title" style={{ fontWeight: "bold" }}>
                        Name of the room
                      </h5>
                    </div>
                    <div classname="col-6 px-0">
                      <input
                        type="text"
                        style={{ borderRadius: 5 }}
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div classname="d-flex mb-2 row">
                    <div classname="col-6 pe-0 d-flex align-items-center">
                      <p classname="card-text" style={{ marginRight: 75 }}>
                        Type room:
                      </p>
                    </div>
                    <div classname="col-6 px-0">
                      <select
                        style={{ borderRadius: 5, width: "97%" }}
                        name="type_room"
                        id=""
                      >
                        <option value="">Villa</option>
                        <option value="">House</option>
                        <option value="">Room</option>
                      </select>
                    </div>
                  </div>
                  <div classname="d-flex mb-2 row">
                    <div classname="col-6 pe-0 d-flex align-items-center">
                      <p
                        classname="card-text d-flex align-items-center"
                        style={{ marginRight: 78 }}
                      >
                        Room size:
                      </p>
                    </div>
                    <div classname="col-6 px-0">
                      <input
                        type="text"
                        style={{ borderRadius: 5 }}
                        placeholder="Room size"
                      />
                    </div>
                  </div>
                  <div classname="d-flex mb-3 row">
                    <div classname="col-6 pe-0 d-flex align-items-center">
                      <p
                        classname="card-text d-flex align-items-center"
                        style={{ marginRight: 105 }}
                      >
                        Image:
                      </p>
                    </div>
                    <div classname="col-6 px-0">
                      <input
                        type="text"
                        style={{ borderRadius: 5 }}
                        placeholder="Image"
                      />
                    </div>
                  </div>
                  <div classname="d-flex mb-3 row">
                    <div classname="col-6 pe-0 d-flex align-items-center">
                      <p
                        classname="card-text d-flex align-items-center"
                        style={{ marginRight: 105 }}
                      >
                        Price:
                      </p>
                    </div>
                    <div classname="col-6 px-0">
                      <input
                        type="text"
                        style={{ borderRadius: 5 }}
                        placeholder="Price"
                      />
                    </div>
                  </div>
                  <input
                    type="submit"
                    classname="btn btn-primary"
                    defaultValue="Add"
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
