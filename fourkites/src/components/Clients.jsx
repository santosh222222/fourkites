import React from "react";
import vector from "../assets/images/Vector.svg"
import bhargo from "../assets/images/bhargo-logo.svg"
import group360 from "../assets/images/Group360.svg"
import fourkites from "../assets/images/FOURKITES_LOGO_DARK.webp"
import tivo1 from "../assets/images/tivo1.png"
import OwlCarousel from 'react-owl-carousel';  
import dento from '../assets/images/Dent-Ologo .svg'
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

const Clients = () => {
    const options = {
    loop: true, // Enable continuous loop
    nav: false, // Enable navigation buttons
    dots: false, // Disable pagination dots
    items: 8, // Number of items to show
    margin: 10, // Space between items
    autoplay: true, // Enable autoplay
    autoplayTimeout: 2000, // Autoplay interval in milliseconds
    autoplayHoverPause: true, // Pause autoplay on mouse hover
    slideTransition: "linear",
    responsive: {
        0: {
          items: 1,
        },
        320: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
  };
  return (
    <React.Fragment>
        <div>
        <div class="carousel-section">
      <div class="container">
        <div class="row">
          <h1 style={{
            textAlign:'center',
            fontWeight:'bold',
            fontSize:'36px',
            color:'#183B56',
            marginBottom:'60px',
            letterSpacing:'0.2px'

          }}>Our Clients</h1>
          <div class="carousel marquee-section">
            <div class="col-12">
              {/* <div class="first owl-carousel owl-theme"> */}
              <OwlCarousel className="first owl-theme"  loop   {...options} >  
                <div class="logo items">
                  <img src={dento}  />
                </div>
                <div class="logo items">
                  <img src={vector} />
                </div>
                <div class="logo items">
                  <img src={bhargo} />
                </div>
                <div class="logo items">
                  <img src={dento} />
                </div>
                <div class="logo items">
                  <img src={fourkites} />
                </div>
                <div class="logo items">
                  <img src={tivo1}/>
                </div>
                <div class="logo items">
                  <img src={bhargo} />
                </div>
                <div class="logo items">
                  <img src={vector}/>
                </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
       
    </React.Fragment>
  )
};

export default Clients;
