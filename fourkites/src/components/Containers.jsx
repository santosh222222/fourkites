import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/images/container.png";
import eta from "../assets/images/schedule.png";
import type from "../assets/images/grid.png"
import location from "../assets/images/placeholder.png"
import Tabledata from "./Tabledata";

const Containers = () => {
    const [active, setActive] = useState(false);
    const [activetwo, setActiveTwo] = useState(false);
  const content = useRef(null);
  const contenttwo = useRef(null);
  const [height, setHeight] = useState("0px");
  const [heighttwo, setHeightTwo] = useState("0px");

  useEffect(() => {
    // console.log("Height for ",": ", height);
  }, [height]);
  useEffect(() => {
    // console.log("Height for ",": ", heighttwo);
  }, [heighttwo]);

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
  }
  function toggleAccordionTwo() {
    setActiveTwo(!activetwo);
    setHeightTwo(activetwo ? "0px" : `${contenttwo.current.scrollHeight}px`);
  }
  return(
    <React.Fragment>
        <section className="containers">
            <h1 className="containers_heading mb-4">Containers</h1>
            <div>
            <div className="accordion__section">
      <div
        className={`accordion ${active ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        {/* <p className="accordion__title"> */}
        <div class="container">
  <div class="row">
    <div class="col-sm-12 col-md-3">
    <div class="d-flex align-items-center">
  <div class="flex-shrink-0">
    <img src={logo} alt="..." className="container_log" />
  </div>
  <div class="flex-grow-1 ms-3">

   <h6 className="containers_title">Container</h6>
   <h6 className="containers_sub_title">CAIU6817807</h6>
  </div>
</div>
    </div>
    <div class="col-sm-12 col-md-3">
    <div class="d-flex align-items-center">
  <div class="flex-shrink-0">
    <img src={type} alt="..." className="container_log"/>
  </div>
  <div class="flex-grow-1 ms-3">

   <h6 className="containers_title">Type</h6>
   <h6 className="containers_sub_title">20' DRY VAN</h6>
  </div>
</div>
    </div>
    <div class="col-sm-12 col-md-3">
    <div class="d-flex align-items-center">
  <div class="flex-shrink-0">
    <img src={location} alt="..." className="container_log"/>
  </div>
  <div class="flex-grow-1 ms-3">

   <h6 className="containers_title">Latest move</h6>
   <h6 className="containers_sub_title">
QINGDAO, CN</h6>
  </div>
</div>
    </div>
    <div class="col-sm-12 col-md-3">
    <div class="d-flex align-items-center">
  <div class="flex-shrink-0">
    <img src={eta} alt="..." className="container_log"/>
  </div>
  <div class="flex-grow-1 ms-3">

   <h6 className="containers_title">POD ETA</h6>
   <h6 className="containers_sub_title">16/07/2023</h6>
  </div>
</div>
    </div>
  </div>
</div>
        {/* </p> */}
        <span style={{fontSize:'25px'}}>{active ? "-" : "+"}</span>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text"
        
        />
      <Tabledata />
      </div>
    </div>



    <div className="accordion__section">
      <div
        className={`accordion ${activetwo ? "activetwo" : ""}`}
        onClick={toggleAccordionTwo}
      >
        {/* <p className="accordion__title"> */}


       
        <div class="container">
  <div class="row">
    
    <div class="col-sm-12 col-md-3">

      
    <div class="d-flex align-items-center">
  <div class="flex-shrink-0">
    <img src={logo} alt="..." className="container_log" />
  </div>
  <div class="flex-grow-1 ms-3">

   <h6 className="containers_title">Container</h6>
   <h6 className="containers_sub_title">CAIU6817807</h6>
  </div>
</div>
    </div>
    <div class="col-sm-12 col-md-3">
    <div class="d-flex align-items-center">
  <div class="flex-shrink-0">
    <img src={type} alt="..." className="container_log"/>
  </div>
  <div class="flex-grow-1 ms-3">

   <h6 className="containers_title">Type</h6>
   <h6 className="containers_sub_title">20' DRY VAN</h6>
  </div>
</div>
    </div>
    <div class="col-sm-12 col-md-3">
    <div class="d-flex align-items-center">
  <div class="flex-shrink-0">
    <img src={location} alt="..." className="container_log"/>
  </div>
  <div class="flex-grow-1 ms-3">

   <h6 className="containers_title">Latest move</h6>
   <h6 className="containers_sub_title">
QINGDAO, CN</h6>
  </div>
</div>
    </div>
    <div class="col-sm-12 col-md-3">
    <div class="d-flex align-items-center">
  <div class="flex-shrink-0">
    <img src={eta} alt="..." className="container_log"/>
  </div>
  <div class="flex-grow-1 ms-3">

   <h6 className="containers_title">POD ETA</h6>
   <h6 className="containers_sub_title">16/07/2023</h6>
  </div>
</div>
    </div>
  </div>
</div>
        {/* </p> */}
        <span style={{fontSize:'25px'}}>{activetwo ? "-" : "+"}</span>
      </div>
      <div
        ref={contenttwo}
        style={{ maxHeight: `${heighttwo}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text"/>
     <section className="table table-responsive">
        <table class="table  table-hover  table-responsive">
        <thead class="table-info">
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Location</th>
      <th scope="col">Description</th>
      <th scope="col">
Empty/Laden/Vessel/Voyage</th>
<th scope="col">Equipment handling facility name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>16/07/2023</td>
      <td>
Vancouver, CA</td>
      <td>Estimated Time of Arrival</td>
      <td>MSC MANU UK326R</td>
      <td>Deltaport</td>
    </tr>
    <tr>
      <td>
21/06/2023</td>
      <td>Qingdao, CN</td>
      <td>Export Loaded on Vessel</td>
      <td>MSC MANU UK324A</td>
      <td>Qingdao Qianwan Container Terminal</td>
    </tr>
    <tr>
    <td>19/06/2023</td>
      <td>Qingdao, CN</td>
      <td>Export received at CY</td>
      <td>LADEN</td>
      <td>Qingdao Qianwan Container Terminal</td>
     
    </tr>
    <tr>
    <td>19/06/2023</td>
      <td>Qingdao, CN</td>
      <td>Export received at CY</td>
      <td>LADEN</td>
      <td>Qingdao Qianwan Container Terminal</td>
     
    </tr>
  </tbody>

</table>
        </section>
  
      </div>
    </div>
     
    </div>
        </section>
    </React.Fragment>
  )

}
export default Containers;
