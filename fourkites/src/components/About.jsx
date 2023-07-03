import React from "react";
import helpinghands from "../assets/images/Helpinghands.png"

const About = () => {
  return (
    <React.Fragment>
         <div class="aboutus-section">
      <div class="container">
        <div class="row mb-5">
          <h6 class="aboutus-main-heading">About</h6>
          <h6 class="aboutus-sub-heading">
            Lorem Ipsum is simply text of the<br />
            printing and industry.
          </h6>
        </div>
        <div class="row" style={{marginTop:'100px'}}>
          <div class="col-md-12 col-lg-5">
            <h1 class="card_heading">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h1>
            <p class="card_paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type.
            </p>
            <p class="card_paragraph">
              scrambled it to make a type specimen book. It has survived not
              only five centuries, , but also the leap into electronic
              typesetting.
            </p>
          </div>
          <div class="col-md-12 col-lg-7 m-auto">
            <img
              src={helpinghands}
              class="aboutus_image"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
   
    </React.Fragment>
  )
};

export default About;
