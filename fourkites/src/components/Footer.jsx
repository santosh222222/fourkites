import React, {Fragment} from "react";
import headrunlogo from "../assets/images/headrun logo.png"

const Footer = () => {
  return (
    <React.Fragment>
         <div className="footer-section">
             <div className="container">
        <div className="row">
          <div className="topnav">
            <a href="#" target="_blank">
              <img
                src={headrunlogo}
                alt=""
                srcset=""
                style={{width:'155px',objectFit:'contain',height:'auto'}}
              
              />
            </a>

            <div className="topnav-center">
              <div className="">
                <div classNameName="social_links">
                  <div className="social-icons-btn">
                    <a className="icons twitter" href="https://www.facebook.com/headrun" target="_blank">
                      <i className="fa-brands fa-facebook-f" name="logo-twitter"
                    style={{height:'18px',width:'16px',color:'rgba(90, 113, 132, 1)'}}
                      ></i>
                
                    </a>
                    <a className="icons facebook" href="https://twitter.com/headrun_?lang=en" target="_blank">
                      <svg
                        className="svg-inline--fa fa-twitter"
                        style={{
                          height: '18px',
                          width: '16px',
                          color: 'rgba(90, 113, 132, 1)'
                        }}
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="twitter"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"
                        ></path></svg
                      >
              
                    </a>
                    <a className="icons instagram" href="https://www.instagram.com/headruntechnologies/" target="_blank">
                      <svg
                        className="svg-inline--fa fa-instagram"
                        
                        style={{
                          height: '18px',
                          width: '16px',
                          color: 'rgba(90, 113, 132, 1)'
                        }}
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="instagram"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                        ></path></svg
                      >
            
                    </a>
                    <a className="icons linkedin" href="https://www.linkedin.com/company/headrun-technologies-pvt-ltd/" target="_blank">
                      <svg
                        className="svg-inline--fa fa-linkedin"
                        style={{
                            height: '18px',
                            width: '16px',
                            color: 'rgba(90, 113, 132, 1)'
                          }}
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="linkedin"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                        ></path></svg
                      >
                     
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="topnav-right">
              <a href="#terms">Terms</a>
              <a href="#privacypolicy">Privacypolicy</a>
              <a href="#careerst">Careers</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
};

export default Footer;
