import React, { useState } from "react";
import Response from "./Response";
import Containers from "./Containers";
// import Demo from "./Demo";

const SearchComponent = ({ referenceType, referenceNumber }) => {
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [response, setResponse] = useState("");
  const cargoUrl = "staging.ocean.fk.headrun.com/api/v4/shipment/";
  const airUrl = "staging.air.fk.headrun.com/api/v1/shipment/";
  const ltlUrl = "staging.ltl.fk.headrun.com/api/v1/shipment/";
  const terminalUrl =
    "staging.terminal.fk.headrun.com/api/v1/terminal/ajmanintterminals-hph/";
  const corsanywhereUrl = "https://cors-anywhere.herokuapp.com/";
  const handleOption1Change = (event) => {
    setSelectedOption1(event.target.value);
    setSelectedOption2(event.target.value); // Reset the second dropdown when the first one changes
  };

  const handleOption2Change = (event) => {
    setSelectedOption2(event.target.value);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [displayDiv, setDisplayDiv] = useState(false);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setDisplayDiv(false); // Reset display when input changes
  };

  const handleSearch = () => {
    let fetchUrl = "";
    if (selectedOption1 === "cargo_shipment") {
      fetchUrl = `${cargoUrl}?referenceType=${selectedOption2}&referenceNumber=${searchTerm}`;
    } else if (selectedOption1 === "air_shipment") {
      fetchUrl = `${airUrl}?referenceType=${selectedOption2}&referenceNumber=${searchTerm}`;
    } else if (selectedOption1 === "ltl_shipment") {
      fetchUrl = `${ltlUrl}track?source=estes-express&tracking_id=${searchTerm}`;
    } else if (selectedOption1 === "terminal") {
      fetchUrl = `${terminalUrl}${searchTerm}/`;
    } else {
      console.log("Invalid option is selected");
    }
    if (fetchUrl !== "") {
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "Bearer v0Pe2qEX8uy4IlITXx1tSvTdpme0hJ"
      );
      myHeaders.append("accepts", "application/json");
      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      fetch(corsanywhereUrl + fetchUrl, requestOptions)
        .then((response) => response.json())
        .then((result) => setResponse(result))
        .catch((error) => setResponse("No data Found..!"));
    }
    if (searchTerm.trim() !== "") {
      setDisplayDiv(true);
    }
  };

  return (
    <React.Fragment>
      <div>
        <div class="banner_section searchdata">
          <div class="container">
            <div class="row">
              <h1 class="api_key_heading mt-4 mb-3">Query String</h1>

              <div class="row cards_section">
                <div class="col-md-3 p-1 container-fluid">
                  <div class="card">
                    <div class="card-body">
                      <select
                        value={selectedOption1}
                        onChange={handleOption1Change}
                        class="form-select"
                      >
                        <option value="" disabled selected hidden>
                          Please Choose...
                        </option>
                        <option value="cargo_shipment">Cargo Shipment</option>
                        <option value="air_shipment">Air Shipment</option>
                        <option value="ltl_shipment">LTL Shipment</option>
                        <option value="terminal">Treminal</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 p-1 container-fluid">
                  <div class="card">
                    <div class="card-body">
                      {selectedOption1 && (
                        <select
                          value={selectedOption2}
                          onChange={handleOption2Change}
                          className="form-select"
                        >
                          <option value="" disabled selected hidden>
                            No Select...
                          </option>
                          {selectedOption1 === "cargo_shipment" && (
                            <>
                              <option value="booking_number">
                                Booking Number
                              </option>
                              <option value="bill_of_lading">
                                Bill of Lading Number
                              </option>
                              <option value="container_number">
                                Container Number
                              </option>
                            </>
                          )}
                          {selectedOption1 === "air_shipment" && (
                            <>
                              <option value="waybill_number">
                                Wayble Number
                              </option>
                              {/* <option value="option2-2">Option 2-2</option> */}
                              {/* <option value="option2-3">Option 2-3</option> */}
                            </>
                          )}
                          {selectedOption1 === "ltl_shipment" && (
                            <>
                              <option value="option3-1">Tracking Number</option>
                              {/* <option value="option3-2">Option 3-2</option> */}
                              {/* <option value="option3-3">Option 3-3</option> */}
                            </>
                          )}
                          {selectedOption1 === "terminal" && (
                            <>
                              <option value="option4-1">Tracking Number</option>
                              {/* <option value="option3-2">Option 3-2</option> */}
                              {/* <option value="option3-3">Option 3-3</option> */}
                            </>
                          )}
                        </select>
                      )}

                      {/* <select id="Drink"   class="form-select"
          aria-label="Default select example">
            <option disabled selected hidden>
              No  selected
            </option>
          </select> */}
                    </div>
                  </div>
                </div>
                <div class="col-md-3 p-1 container-fluid">
                  <div class="card">
                    <div class="card-body">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search Number"
                        value={searchTerm}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-2 p-1 container-fluid">
                  <div class="card-body">
                    <button
                      class="btn btn-danger api_key_submit_button btn-lg submitbutton"
                      onClick={handleSearch}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="response mt-5 submitdata">
              <h1 class="api_key_heading mb-3">Response</h1>
              <div class="row cards_section">
                <div class="card" style={{ background: "white" }}>
                  <div class="card-body" style={{ textAlign: "left" }}>
                    <div id="wrapper">
                      <h1 className="response_heading">
                        Booking Number : RICDN0849700
                      </h1>
                      <hr />
                      <div class="response_heading_list">
                        <section>
                          <div class="main-container">
                            <ul class="grid-wrapper">
                              <li>
                                <p className="lists_paragraph">
                                  Bill of Lading
                                </p>
                                <h6 className="lists_heading">RICDN0849700</h6>
                                <p className="lists_paragraph">
                                  (4 containers)
                                </p>
                              </li>
                              <li>
                                <p className="lists_paragraph">Pickup</p>
                                <h6 className="lists_heading">Qingdao, CN</h6>
                              </li>
                              <li>
                                <p className="lists_paragraph">Port of Load</p>
                                <h6 className="lists_heading">Qingdao, CN</h6>
                              </li>
                              <li>
                                <p className="lists_paragraph">Transshipment</p>
                              </li>
                              <li>
                                <p className="lists_paragraph">
                                  Port of Discharge
                                </p>

                                <h6 className="lists_heading">Vancouver, CA</h6>
                              </li>
                              <li>
                                <p className="lists_paragraph">Delivery</p>
                                <h6 className="lists_heading">Toronto, CA</h6>
                              </li>
                            </ul>
                          </div>

                          <div class="main-container">
                            <ul class="grid-wrapper">
                              <li>
                                <p className="lists_paragraph">currentVessel</p>
                                <h6 className="lists_heading">RICDN0849700</h6>
                                {/* <p className="lists_paragraph">(4 containers)</p> */}
                              </li>
                            </ul>
                          </div>
                        </section>
                      </div>

                      {/* <p className="lists_paragraph">* Price calculation date is indicative. Please contact your local MSC office to verify this information.</p> */}
                      <pre>{JSON.stringify(response, null, 2)}</pre>
                    </div>

                    <Containers
                      title="First Accordion"
                      content="First Accordion content"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Demo /> */}
    </React.Fragment>
  );
};

export default SearchComponent;
