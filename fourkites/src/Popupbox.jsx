import React,{useRef,useEffect, useState }  from "react";
import charmcircle from "../src/assets/images/charm_circle-cross.svg"
import CopyText from "./components/CopyText";
// import Get from "./components/Get";

const Popupbox = () => {

  const [showDiv, setShowDiv] = useState(true);

  // const handleButtonClick = () => {
   
  // };


  const [client_id,setClient_id]=useState("");
  const [client_secret,setClient_secret]=useState("");
  const [copied_text,setCopied_value]=useState("");
 //  const [mobile,setMobile]=useState("");
  const textRef = useRef(null);
  const [copied, setCopied] = useState(false);
 const handleCopy = () => {
  setShowDiv(false);
  textRef.current.select();
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  setCopied(true);
};
 function saveData()
 {
   let grant_type="client_credentials"
   fetch("http://staging.air.fk.headrun.com/oauth/token/", {
     method: "POST",
     headers: {
       'Content-Type': 'application/x-www-form-urlencoded',
     },
     body:`${encodeURIComponent("client_id")}=${encodeURIComponent(client_id)}&${encodeURIComponent("client_secret")}=${encodeURIComponent(client_secret)}&${encodeURIComponent("grant_type")}=${encodeURIComponent(grant_type)}`,
   }).then((resp)=>{
    if (searchTerm.trim() !== '') {
      setDisplayDiv(true);
    }
     resp.json().then((result)=>{
      setCopied_value(result.access_token);
       console.warn("result is",result.access_token)
     })
   })
 }

    // const [users,setUser]=useState([])
    // useEffect(()=>{
    //   fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
    //     result.json().then((resp)=>{
    //       // console.warn(resp)
    //       setUser(resp)
    //     })
    //   })
    // },[])
    // console.warn(users)


    const [searchTerm, setSearchTerm] = useState('');
    const [displayDiv, setDisplayDiv] = useState(false);
  
    const handleInputChange = (event) => {
      setClient_secret(event.target.value);
      setSearchTerm(event.target.value);
      setDisplayDiv(false); // Reset display when input changes
    };
  
    const handleSearch = () => {
      if (searchTerm.trim() !== '') {
        setDisplayDiv(true);
      }
    };
  return (
    
    <React.Fragment>
  
         <div
      class="modal fade"
      id="exampleModalToggle"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel"
      tabindex="-1"
    >
     
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          
          <div class="modal-body">
            <section class="login-section">
              <div class="wrap d-md-flex">
                <div class="login-image col-md-5">
                </div>
                <div class="login-wrap p-5 col-md-7">
                  <div class="d-flex">
                    <div class="w-100">
                      <div class="close-button" style={{height: '20px',
                      width: '20px'}}>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                          <img src={charmcircle} class="close-button-icon" style={{height: '20px',
                          width: '20px'}} />
                        </button>
                      </div>
                      <h3 class="loginpage-heading">Generate Tokens</h3>
                      <p class="loginpage-paragraph">
                      Generate your token for the unique login
                      </p>
                    </div>
                  </div>
            

                  <form>
                    <div class="mb-1">
                      <label for="recipient-name" class="col-form-label"
                        >Client_id:</label
                      >
                      <input type="text" class="form-control-two" id="recipient-name"  placeholder="enter your client_id" 
                      value={client_id} onChange={(e)=>{setClient_id(e.target.value)}} 
                      
                      required/>
                    </div>
                    <div class="mb-1">
                      <label for="message-text" class="col-form-label"
                        >Client_secret:</label
                      >
                      <input required value={searchTerm} onChange={handleInputChange} type="text" class="form-control-two" id="recipient-password" placeholder="enter your clinet_key"
                       
                      
                      />
                    </div>
                    <div class="mb-1">
                      <label for="message-text" class="col-form-label"
                        >Grant_type:</label
                      >
                      <input required value="client_cradentials" readOnly style={{pointerEvents:'none'}}  type="text" class="form-control-two" id="recipient-password"  />
                    </div>
                    
                  </form>
                 
                  <button  onClick={saveData} 
                 
              className="generate_button mb-2 mt-3"
            >
              Submit
            </button>

            {
      
      displayDiv && 
      
     <div>

<div>
        <div>
      {copied ? (
        <p style={{color:'green',fontWeight:'500'}}></p>
      ) : (
        <div style={{position:'relative'}}>
          <input type="text" ref={textRef} value={copied_text} className='form-control' readOnly style={{pointerEvents:'none'}}/>
          <button onClick={handleCopy} className='copy_icon' data-bs-dismiss="modal">
            {/* <i className='fa fa-home' /> */}
            <i class="fa-solid fa-clipboard" ></i>
          </button>
          <p style={{color:'red',fontWeight:'500'}}>please copy the text..</p>
        </div>
      )}
      </div>
    </div>



     </div>
      
      
      }

        
            
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
};

export default Popupbox;
