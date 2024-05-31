import React from 'react'
import "../App.css";
// import ReactLanguageSelect from 'react-languages-select';
 
//import css module
// import 'react-languages-select/css/react-languages-select.css';
 
//OR import sass module
// import 'react-languages-select/scss/react-languages-select.scss';

import RS from "../componentes/images1/RS.png";
import SP from "../componentes/images1/SP.png";
import BP from "../componentes/images1/BP.png";
import WR from "../componentes/images1/WR.png";
import fb from "../componentes/images1/facebook.png";
import insta from "../componentes/images1/instagram.png";
import twit from "../componentes/images1/twitter.png";
import location from "../componentes/images1/location.png";
import gmail from "../componentes/images1/gmail.png";
import phone from "../componentes/images1/phone.png";
import fpo from "../componentes/images1/fpo.png";
import fpo1 from "../componentes/images1/fpo1.png";
import fpo2 from "../componentes/images1/fpo2.png";
import "../css/contact.css";

const Home = () => {

  return (
    <>


     {/* <ReactLanguageSelect
    searchable={true}
    searchPlaceholder="Search for a language" /> */}
    
  <div className="h">
    <div className="left">
      
    <h1>WasteConnect India</h1>
    <p>"Linking farmers and industries for sustainable <br/> waste management"</p>
    
    </div>
    
    <div className="border">
    <div className="btn3">
<h5>Know More</h5>
    </div>
    </div>
    {/* <div className="right">
      <h2>Latest Initiatives</h2>
   </div> */}
  </div>

  <div className="cards">
    <div className="card1">
      <div className="img1">
  <img src={fpo} style={{height:"7rem", width:"50%", marginLeft:"26%"}}/>
      </div>
      <h5 style={{marginLeft:"47%",color:"white"}}>FPO's</h5>
      <p style={{marginLeft:"16%", color:"white"}}>FARMERS PRODUCERS ORGANISATIONS</p>
    </div>
    <div className="card2">
    <div className="img2">
  <img src={fpo1} style={{height:"7rem", width:"50%", marginLeft:"26%"}}/>
      </div>
      <h5 style={{marginLeft:"35%",color:"white"}}>Kisan call center</h5>
      <p style={{marginLeft:"35%", color:"white"}}>DIAL 1800 180 1551</p>
    </div>
    <div className="card3">
    <div className="img3">
  <img src={fpo2} style={{height:"7rem", width:"50%", marginLeft:"26%"}}/>
      </div>
      <h5 style={{marginLeft:"38%",color:"white"}}> <a href="/awareness">AWARENESS</a> </h5>
      <p style={{marginLeft:"26%", color:"white"}}>TECHNICAL LITERATE FARMER</p>
    </div>
  </div>

  <div className="box1">
   <div className="services">
      <h1>OUR SERVICES</h1>
    </div>
    </div>

    <div className="page2">
    
      <div className="outer-box">
       <p className="hed">Sell Your Product</p>
       <div className="line">
       </div>
       <p className="desc">Farm direct marketing involves selling a <b/>product from the farm <br/>directly to customers. Often,<br/> the farmer receives a price similar to what <br/>the grocery store charges. This method of <br/>marketing is more entrepreneurial or business-like<br/> than wholesale marketing.<br/>This method of marketing is more entrepreneurial<br/> or business-like than wholesale marketing.</p>
       <div className="btn">
        Check It
       </div>
      </div>
      <div className="inner-box">
      <img src={SP} style={{height:"30rem",width:"38rem"}}></img>
      </div>
    </div>
    <div className="page3">
    
      <div className="outer-box">
       <p className="hed">Buy Your Product</p>
       <div className="line">
       </div>
       <p className="desc1">Farm direct marketing involves selling a <b/>product from the farm <br/>directly to customers. Often,<br/> the farmer receives a price similar to what <br/>the grocery store charges. This method of <br/>marketing is more entrepreneurial or business-like<br/> than wholesale marketing.<br/>This method of marketing is more entrepreneurial<br/> or business-like than wholesale marketing.</p>
       <div className="btn">
        Check It
       </div>
      </div>
      <div className="inner-box">
      <img src={BP} style={{height:"30rem",width:"38rem"}}></img>
      </div>
    </div>
    <div className="page2">
    
      <div className="outer-box">
       <p className="hed">Find Machines Around You</p>
       <div className="line">
       </div>
       <p className="desc">Farm direct marketing involves selling a <b/>product from the farm <br/>directly to customers. Often,<br/> the farmer receives a price similar to what <br/>the grocery store charges. This method of <br/>marketing is more entrepreneurial or business-like<br/> than wholesale marketing.<br/>This method of marketing is more entrepreneurial<br/> or business-like than wholesale marketing.</p>
       <div className="btn">
        Check It
       </div>
      </div>
      <div className="inner-box">
      <img src={RS} style={{height:"30rem",width:"38rem"}}></img>
      </div>
    </div>
    <div className="page3">
    
      <div className="outer-box">
       <p className="hed">Get Latest Weather Updates</p>
       <div className="line">
       </div>
       <p className="desc1">Farm direct marketing involves selling a <b/>product from the farm <br/>directly to customers. Often,<br/> the farmer receives a price similar to what <br/>the grocery store charges. This method of <br/>marketing is more entrepreneurial or business-like<br/> than wholesale marketing.<br/>This method of marketing is more entrepreneurial<br/> or business-like than wholesale marketing.</p>
       <div className="btn">
        Check It
       </div>
      </div>
      <div className="inner-box">
      <img src={WR} style={{height:"30rem" ,    width:"38rem"}}></img>
      </div>
    </div>
    <div className="block">
     <h1>Contact Us</h1> 
    </div>
    <div className="page4" id='contact'>
      <section className="contactS" >
    <div className="container4">
        <div className="contactinfo">

            <h2 className="h2c">Contact Us</h2>
            <ul className="info">
              <li>
                <span><img src={location}/></span>
                <span>Address
            </span>
              </li>
              <li>
                <span><img src={gmail}/></span>
                <span>ngo123@gmail.com</span>
              </li>
              <li>
                <span><img src={phone}/></span>
                <span>+91 1234567890</span>
              </li>
            </ul>

            <ul className="social1">
              <li>
                <a href="#">
                  <img src={fb}  style={{height:"40.5px", width:"40.5px", marginTop:"2px",marginRight:"1rem"}}/>
                </a>
              </li>
              <li><a href="#"><img src={insta} style={{height:"35px", width:"35px", marginTop:"5px", marginRight:"1rem"}}/></a></li>
              <li><a href="#"><img src={twit} style={{height:"42.8px", width:"42.8px", marginTop:"1.5px"}}/></a></li>
            </ul>
        </div>
    <div className="contactform">
          <h2>Send A Message</h2>
          <div className="formBox">
            <div className="inputBox w50">
              <input type="text" name="" required />
              <span>FIRST NAME</span>
            </div>
            <div className="inputBox w50">
              <input type="text" name="" required />
              <span>EMAIL ADDRESS</span>
            </div>
            <div className="inputBox w50">
              <input type="text" name="" required />
              <span>PHONE NUMBER</span>
            </div>
            <div className="inputBox w100">
              <textarea name="" required></textarea>
              <span>Write Your Message Here...</span>
            </div>
            <div className="inputBox w100">
              <input type="Submit" value="Send"/>
            </div>
          </div>
      </div>
      </div>
      </section>
      </div>
    </>
  )
}

export default Home