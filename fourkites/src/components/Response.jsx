import React from "react";
import Get from "./Get";

const Response = ({referenceType,referenceNumber}) => {
  return (
    <React.Fragment>
        <div>
        <div class="response mt-5 submitdata">
          <h1 class="api_key_heading mb-3">Response</h1>
          <div class="row cards_section">
            <div class="card" style={{background:'white'}}>
              <div class="card-body" style={{textAlign:'left'}}>
                <div id="wrapper">
                  {/* <div class="gears" id="two-gears">
                    <div class="gears-container">
                      <div class="gear-rotate"></div>
                      <div class="gear-rotate-left"></div>
                    </div>
                    <h1 class="no_data_found_heading">No Data Found!</h1>
                  </div> */}
                  <Get referenceNumber={referenceNumber} referenceType={referenceType}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </React.Fragment>
  )
};

export default Response;
