import React, { useState, useEffect } from 'react';


const MyComponent = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch('http://staging.air.fk.headrun.com/api/v1/shipment/?carrierName=afklcargo&referenceType=waybill_number&referenceNumber=07451381120');
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.log('Error:', error);
        // console.log(jsonData)
      }
    };
  
    return (
      <div>
        <h1>my component</h1>
        {/* Render your data */}
      </div>
    );
  };
  
  export default MyComponent;
  