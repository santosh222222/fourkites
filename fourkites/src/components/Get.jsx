import React, { useState, useEffect } from 'react';

const Get = ({referenceType,referenceNumber,}) => {
  const [data, setData] = useState({});
  const [liList,setLiList]=useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://cors-anywhere.herokuapp.com/staging.air.fk.headrun.com/api/v1/shipment/?carrierName=afklcargo&referenceType=waybill_number&referenceNumber=07451381120`, requestOptions)
      .then(async response =>{
       let textIs= await response.text();
        console.log(`result is ${textIs}`);
      
      })
      .then(result => {
        console.log(`result is ${result}`);
        // setData(result);
        // console.log(Object.keys(result));
      })
      .catch(error => console.log('error', error));
    // console.log("call fetch method")
    // try {
    //   const response = await fetch('https://0e9a-106-51-16-167.ngrok-free.app/api/v4/shipment/?referenceType=bill_of_lading&referenceNumber=210310212035'); // Replace with your API endpoint
    //   console.log(response.status)
    // } catch (error) {
    //   console.log(`error is ${error}`);
    // }
  };

  return (
    <div className="container">
      {/* <h1>API Data:</h1> */}
      <pre>{JSON.stringify(data,null,2)}</pre>
      {/* {
          users.map((item,i)=>
            <tr key={i}>
            <td>{item.userId}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
            <td>{item.mobile}</td>
          </tr>
          )
        } */}
      {/* <ul>
        {Object.keys(data).map((key,value)=>{
         return <li>{key}=${data[{key}]}</li>
        })}
      </ul> */}
    </div>
  );
};

export default Get;
