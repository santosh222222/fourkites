import React,{ useState }  from "react";
import SearchComponent from './SearchComponent';
import object from "../assets/images/Object.svg"
import headrunlogo from "../assets/images/headrun logo.png"
// import helpinghands from "../src/assets/images/Helpinghands.png"
import vector1 from "../assets/images/Vector1.svg"


const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [displayDiv, setDisplayDiv] = useState(false);

  const handleInputChange = (event) => {
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
        <div id="preloader-background " style={{position:'relative'}}>
      <div id="loader">
        <div class="d-flex align-items-center justify-content-center">
          <div id="circle-loader"></div>
         
       <img
              id="centre-logo"
              src="https://www.headrun.com/static/images/favicon.png"
              x="0px"
              y="0px"
              width="70px"
              height="70px"
            />
         
        
        </div>
      </div>
      <div class="navbar-section">
        <nav
          class="navbar navbar-expand-lg navbar-light bg-whites bg-light fixed-top"
        >
          <div class="container">
            <a class="navbar-brand" href="index.html" target="_blank" rel="noreferrer">
              <img
                src={headrunlogo}
                alt=""
                srcset=""
                class="navbar_logo"
              />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
              <form class="d-flex">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a

target="_blank" rel="noreferrer"
                      class="nav-link"
                      aria-current="page"
                      href="https://www.headrun.com/"
                    >
                      <input
                        type="button"
                        value="Website"
                        class="website_button"
                      />
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      aria-current="page"
                      target="_blank"
                      data-bs-toggle="modal"
                      href="#exampleModalToggle"
                      role="button"
                    >
                      <input
                        type="button"
                        value="Login "
                        class="login_button"
                      />
                    </a>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </nav>
      </div>

      <div class="banner-section" style={{position:'relative'}}>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1 class="banner_heading mb-4">
                Headrun is one stop<br />

                solution for all needs
              </h1>
              <p class="banner_paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever galley of type.
              </p>
            </div>

            {/* <div class="container mt-4">
              <div class="forms">
                <img
                  align="right"
                  class="key"
                  src={vector1}
                  alt="Hackway"
                />
                <input
                 value={searchTerm} onChange={handleInputChange}
                  type="search"
                  id="search-input"
                  placeholder="Enter your api key..."
                  class="form-control"
                />
                <button type="submit" onClick={handleSearch} class="searchbutton">Search</button>
              
              


              </div>
            </div> */}
            {/* <div class="container d-flex">

               <p class="notes">Note:&nbsp;</p>
              <span>
                
             <h6  class="typewrite note" data-period="2000" data-type='[ "Please login for the token.." ]'>
                <span class="wrap"></span>
              </h6>
            </span>
             
            </div> */}
          </div>
        </div>
        <img src={object} alt="" srcset="" class="object arrow1" />
        <svg
          class="oval-image"
          width="648"
          height="656"
          viewBox="0 0 648 656"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="banner_shape"
        >
          <path
            id="Shape"
            opacity="0.15"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M648 327.665C648 146.7 502.94 0 324 0C145.06 0 0 146.7 0 327.665C0 508.629 145.06 655.329 324 655.329C502.94 655.329 648 508.629 648 327.665ZM513 324.631C513 431.869 427.039 518.802 321 518.802C214.961 518.802 129 431.869 129 324.631C129 217.393 214.961 130.459 321 130.459C427.039 130.459 513 217.393 513 324.631Z"
            fill="url(#paint0_linear_106_231)"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_106_231"
              x1="644.136"
              y1="652.295"
              x2="644.136"
              y2="-1.28701"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" stop-opacity="0.01"></stop>
              <stop offset="1" stop-color="white"></stop>
            </linearGradient>
          </defs>
        </svg>
        <svg
          class="oval-image-two"
          width="770"
          height="656"
          viewBox="0 0 648 656"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="banner_shape_two"
        >
          <path
            id="Shape"
            opacity="0.15"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M648 327.665C648 146.7 502.94 0 324 0C145.06 0 0 146.7 0 327.665C0 508.629 145.06 655.329 324 655.329C502.94 655.329 648 508.629 648 327.665ZM513 324.631C513 431.869 427.039 518.802 321 518.802C214.961 518.802 129 431.869 129 324.631C129 217.393 214.961 130.459 321 130.459C427.039 130.459 513 217.393 513 324.631Z"
            fill="url(#paint0_linear_106_231)"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_106_231"
              x1="644.136"
              y1="652.295"
              x2="644.136"
              y2="-1.28701"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" stop-opacity="0.01"></stop>
              <stop offset="1" stop-color="white"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
    

<SearchComponent />
    </React.Fragment>
  )
};

export default Navbar;
