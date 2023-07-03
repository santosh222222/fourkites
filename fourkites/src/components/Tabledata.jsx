import React from "react";

const Tabledata = () => {
  return(
    <React.Fragment>
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
    </React.Fragment>
  )
};

export default Tabledata;
