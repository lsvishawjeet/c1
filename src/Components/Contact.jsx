import React, { useEffect } from "react";

const Contact = () => {
  useEffect(()=>{
    document.title = 'Contact';
  })
  return (
    <>
      <div id="contact" className="contact">
        <div className="contactheading">
          <h2 className="contacticon"><span className="contactusheading">Contact Us Today</span></h2>
          {/* <img className="contacticon" src={contact} alt="" srcset="" /> */}
        </div>
        <div className="maincontact">
          <div className="contactinfo">
            <div className="address">
              <h3>
                <span className="contactaddressh">Location</span>
              </h3>
              <span className="contactaddress"> 201, street ABC, Bathinda</span>
            </div>
            <div className="phone">
              <h3>
                <span className="contactaddressh">Contact no.</span>
              </h3>
              <span className="contactaddress">+911234567897</span>
            </div>
            <div className="email">
              <h3>
                <span className="contactaddressh">Email address</span>
              </h3>
              <span className="contactaddress">contact@flanainstitute.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
