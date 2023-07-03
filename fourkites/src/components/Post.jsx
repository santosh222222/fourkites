// import './App.css';
import React, { useState } from 'react'
function Post() {
    const[user,setUsers]=useState("")
 const [client_id,setClient_id]=useState("");
 const [client_secret,setClient_secret]=useState("");
//  const [mobile,setMobile]=useState("");
function saveData()
{
  let grant_type="client_credentials"
  fetch("https://0e9a-106-51-16-167.ngrok-free.app/oauth/token/", {
    method: "POST",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body:`${encodeURIComponent("client_id")}=${encodeURIComponent(client_id)}&${encodeURIComponent("client_secret")}=${encodeURIComponent(client_secret)}&${encodeURIComponent("grant_type")}=${encodeURIComponent(grant_type)}`,
  }).then((resp)=>{
    resp.json().then((result)=>{
    //   alert(JSON.stringify(result))
      setUsers(JSON.stringify(result))
    })
  })
}
  return (
    <div className="App container">
      <input type="text" name="name"  className='form-control' value={client_id} onChange={(e)=>{setClient_id(e.target.value)}}  /> <br /> <br />
      <input type="text" name="email"  className='form-control' value={client_secret} onChange={(e)=>{setClient_secret(e.target.value)}} /> <br /> <br />
      <button type="button" onClick={saveData} >Save New User</button>

      <div>
        
      </div>
      <input type='text' className='form-control' value={user} />
      {/* <input type="text" name="mobile"  value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/> <br /> <br /> */}
    </div>
  );
}
export default Post