import React from "react";
import email from "../assets/images/envelope.svg"


const Signup = () => {
  return (
    <React.Fragment>
         <div class="signup-section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="signup-section-inner">
              <h1 class="signup-heading mb-3">
                Sign Up Now to see Newest Update about<br />
                Real Estate from Entire the World
              </h1>
              <p class="signup-paragraph mb-3">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting<br />
                industry. Lorem Ipsum has been the industry's standard dummy.
              </p>

              <div class="container mt-4">
                <div class="forms">
                  <a target="_blank" href="mailto:hr@headrun.com" rel="noreferrer"
                    ><img
                      a
                      align="right"
                      class="key"
                      src={email}
                      alt="Hackway"
                  /></a>
                  <input
                    type="search"
                    id="search-input-two"
                    placeholder="Enter your email address"
                    class="form-control"
                  />
          
                  <button type="submit" id="search-button-two" onclick="email()" >
                    Get Trail
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </React.Fragment>
  )
};

export default Signup;
