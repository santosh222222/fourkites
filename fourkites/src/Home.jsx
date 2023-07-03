import React,{ useState }  from "react";
// import first from "./Dent-Ologo .svg"
// import object from "../src/assets/images/Object.svg"

// import vector1 from "../src/assets/images/Vector1.svg"
// import email from "../src/assets/images/envelope.svg"
import charmcircle from "../src/assets/images/charm_circle-cross.svg"
import search from "../src/assets/images/search.png"
import facebook from "../src/assets/images/facebook.png"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Clients from "./components/Clients";
import About from "./components/About";
import Copyright from "./components/Copyright";
import CopyText from "./components/CopyText";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Popupbox from "./Popupbox";
import Post from "./components/Post";
// import Get from "./components/Get";
// import DropdownComponent from "./components/DropdownComponent";
// import Demo from "./components/Demo";
// import SearchDivComponent from "./components/SearchDivComponent";


const Home = () => {
 
  return (
       <React.Fragment>

        <Navbar />
        {/* <SearchDivComponent /> */}

   
   

  
   <About />
   {/* <Post /> */}
   <Clients />
   {/* <Get /> */}

{/* <DropdownComponent /> */}
   <Signup />
   <ScrollToTopButton />
   <Footer />
    <hr />

    <Copyright />


   <Popupbox />
    {/* <div
      class="modal fade"
      id="exampleModalToggle2"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel2"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
         
          <div class="modal-body" >
            <section class="login-section">
              <div class="wrap d-md-flex">
                <div class="login-image col-md-5">
                </div>
                <div class="login-wrap p-5  col-md-7">
                  <div class="d-flex">
                    <div class="w-100">
                      <div class="close-button" style={{height: '20px',
                      width: '20px'}}>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                          <img src={charmcircle} class="close-button-icon" style={{height: '20px',
                      width: '20px'}} />
                        </button>
                      </div>
                      <h3 class="loginpage-heading"> Generate Tokens</h3>
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
                      <input type="text" class="form-control-two" id="recipient-name" placeholder="enter your client_id"/>
                    </div>
                    <div class="mb-1">
                      <label for="message-text" class="col-form-label"
                        >Client_key:</label
                      >
                      <input type="password" class="form-control-two" id="recipient-password" placeholder="enter your client_key"></input>
                    </div>
                    
                  </form>

                  <div class="form-group d-flex">
                    <div class="w-50 text-left d-flex">
                    
                    </div>
                   
                  </div>
                 
            <div class="mb-2 mt-" style={{textAlign:'end'}}>
              <input
                type="button"
                value="Generate"
                class="generate_button buttons"
                data-bs-dismiss="#modal"
              />
            </div>

            <div>
              <div class="copy-text data">
              <input
                type="text"
                class="text"
                value="68502-58527-2580"
              />
              <button><i class="fa-regular fa-clipboard"></i></button>
           
            </div>
            </div>
            <p class="data" style={{color: '#183B56 !important',
            fontSize:'14px',
            fontStyle:'normal',
            fontWeight:'500px',
            lineHeight:'28px'}}>Copy the api key..</p>
           


          
                </div>
              </div>
            </section>
          
          </div>
          
        </div>
      </div>
    </div> */}
    {/* <div
    class="modal fade"
    id="exampleModalToggle3"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel3"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
       
        <div class="modal-body" >


          <section class="login-section">
            <div class="wrap d-md-flex">
              <div class="login-image col-md-5">
                 <img src="assets/images/Group%20862%20(1).svg" class="img-fluid grid-image" />
                
              </div>
              <div class="login-wrap p-5  col-md-7">
                <div class="d-flex">
                  <div class="w-100">
                    <div class="close-button" style={{height: '20px',
                    width: '20px'}}>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <img src={charmcircle} class="close-button-icon" style={{height: '20px',
                    width: '20px'}} />
                      </button>
                    </div>
                    <h3 class="loginpage-heading"> Create Account</h3>
                    <p class="loginpage-paragraph">
                      Let's get you all set up so you can verify your personal account and begin setting up your profile.
                    </p>
                  </div>
                </div>
                
                <form>
                  <div class="mb-1">
                    <label for="recipient-name" class="col-form-label"
                      >Full Name:</label
                    >
                    <input type="text" class="form-control-two" id="recipient-name" placeholder="enter your name" />
                  </div>
                  <div class="mb-1">
                    <label for="message-text" class="col-form-label"
                      >Email Address:</label
                    >
                    <input type="password" class="form-control-two" id="recipient-password" placeholder="enter your email adress"></input>
                  </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label"
                      >Password:</label
                    >
                    
                    <input type="text" class="form-control-two" id="recipient-name" placeholder="enter your password" />
                  </div>
                  
                </form>
                
          <div class="mb-3 mt-" style={{textAlign:'end'}}>
            <input 
              type="button"
              value="Create Account"
              data-bs-target="#exampleModalToggle"
            data-bs-toggle="modal"
            data-bs-dismiss="modal"
              class="generate_button buttons mt-0"
             
            />
            <p class="text-start mt-3">Already have an account?<span class="login-headging ms-2" data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
              data-bs-dismiss="modal">Login</span></p>


              <div class="content">
                <p class="or">or Sign in with</p>
              </div>
          </div>
         
          <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
            <li class="nav-item button-one fs-2" role="presentation">
                <a href="https://www.gmail.com" class="google-button">
                <button type="button" class="btn btn-outline-primary p-2 socail-icons" style={{width:'98%'}}><img src={search} alt="" class="google-image" /> Signup with Google</button>
            </a>
            </li>
            <li class="nav-item button-two fs-2" role="presentation">
                <a href="https://www.facebook.com" class="fs-2 facebook-button">
                <button type="button" class="btn btn-outline-primary p-2 socail-icons facebook-icon" style={{width:'98%'}}> <img src={facebook} alt="" class="facebook-image" /> Signup with Facebook</button>
                </a>
            </li>
        </ul>
         
                       </div>
            </div>
          </section>
         
        </div>
       
      </div>
    </div>
  </div> */}

  {/* <div
    class="modal fade"
    id="exampleModalToggle4"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel4"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
       
        <div class="modal-body" >


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
                    <h3 class="loginpage-heading"> Forgot Password?</h3>
                    <p class="loginpage-paragraph">
                      Don't worry It Happens.Please enter the the Address Associated with your account.We will email you a link to reset your password.
                    </p>
                  </div>
                </div>
                
                <form>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label"
                      >Email Id:</label
                    >
                    <input type="text" class="form-control-two" id="recipient-name" placeholder="enter your email id" />
                  </div>
                </form>
               
          <div class="mb-2" style={{textAlign:'end'}}>
            <input 
              type="button"
              value="Send"
              data-bs-target="#exampleModalToggle5"
            data-bs-toggle="modal"
            data-bs-dismiss="modal"
              class="generate_button buttons mt-0"
             
            />

          </div>
         
                      </div>
            </div>
          </section>
        
        </div>
      </div>
    </div>
  </div> */}











  {/* <div
    class="modal fade"
    id="exampleModalToggle5"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel5"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
       
        <div class="modal-body" >


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
                        <img src={charmcircle} class="close-button-icon"  />
                      </button>
                    </div>
                    <h3 class="loginpage-heading">Verification</h3>
                    <p class="loginpage-paragraph">
                      Enter the Verification Code we just sent you on your email address
                    </p>
                  </div>
                </div>
                

                <form action="#">
                  <div class="form-group mb-2 d-flex w-10 justify-content-center">
                              <div class="row justify-content-md-center">
                                  <div class="text-center">
                                    <div class="row">
                                      <div class="col-sm-12">
                                       
                                        
                                          <input  class="otp" type="text" oninput="digitValidate(this)" onkeyup="tabChange(1)" maxlength="1" 
                                          style={{fontSize:'36px',
                                          
                                        display:'inline-block',
                                          width: '50px',
                                          height: '50px'}} />
                                          <input class="otp" type="text" oninput="digitValidate(this)" onkeyup="tabChange(2)" maxlength="1" 
                                           style={{fontSize:'36px',
                                          
                                           display:'inline-block',
                                             width: '50px',
                                             height: '50px'}} 
                                          />
                                          <input class="otp" type="text" oninput="digitValidate(this)" onkeyup="tabChange(3)" maxlength="1"
                                          
                                          style={{fontSize:'36px',
                                          
                                          display:'inline-block',
                                            width: '50px',
                                            height: '50px'}} 
                                          />
                                          <input class="otp" type="text" oninput="digitValidate(this)" onkeyup="tabChange(4)" maxlength="1"
                                           style={{fontSize:'36px',
                                          
                                           display:'inline-block',
                                             width: '50px',
                                             height: '50px'}} 
                                          />
                                        
                                       
                                      </div>
                                    </div>
                                  </div>
                              </div>
    
                 
                      </div></form>
               
                <div class="form-group d-flex">
                  <div class="w-50 text-left d-flex">
                   
                  </div>
                  <div class="w-50 text-md-right">
                    <a href="#" class="forgot-password-paragraph" data-bs-target="#exampleModalToggle4" data-bs-toggle="modal" data-bs-dismiss="modal">Resend</a>
                  </div>
                </div>
          <div class="mb-3 mt-" style={{textAlign:'end'}}>
            <input 
              type="button"
              value="Verify"
              data-bs-target="#exampleModalToggle6"
            data-bs-toggle="modal"
            data-bs-dismiss="modal"
              class="generate_button buttons mt-0"
              
            />

          </div>
         
                      </div>
            </div>
          </section>
        
        </div>
      </div>
    </div>
  </div> */}












  {/* <div
    class="modal fade"
    id="exampleModalToggle6"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel6"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
       
        <div class="modal-body" >


          <section class="login-section">
            <div class="wrap d-md-flex">
              <div class="login-image col-md-5">
               
              </div>
              <div class="login-wrap p-5  col-md-7">
                <div class="d-flex">
                  <div class="w-100">
                    <div class="close-button" style={{height: '20px',
                    width: '20px'}}>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <img src={charmcircle} class="close-button-icon"  style={{height: '20px',
                    width: '20px'}} />
                      </button>
                    </div>
                    <h3 class="loginpage-heading">Create new Password</h3>
                    <p class="loginpage-paragraph">
                    Your new password must be different from previous used passwords.
                    </p>
                  </div>
                </div>
                

                <form>
                  <div class="mb-1">
                    <label for="recipient-name" class="col-form-label"
                      >Password:</label
                    >
                    <input type="text" class="form-control-two" id="recipient-name"  placeholder="enter your password"/>
                  </div>
                  <div class="mb-3">
                    <label for="message-text" class="col-form-label"
                      >Conform Password:</label
                    >
                    <input type="password" class="form-control-two" id="recipient-password" placeholder="conform your password"></input>
                  </div>
                  
                </form>               
               
              
          <div class="mb-3 mt-" style={{textAlign:'end'}}>
            <input 
              type="button"
              value="Reset Password"
              data-bs-target="#exampleModalToggle"
            data-bs-toggle="modal"
            data-bs-dismiss="modal"
              class="generate_button buttons mt-0"
            />

          </div>
         
                      </div>
            </div>
          </section>
        
        </div>
      </div>
    </div>
  </div> */}
    </React.Fragment>
  )
}

export default Home;
