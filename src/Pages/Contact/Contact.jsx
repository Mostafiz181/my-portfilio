import React from "react";
import "./Contact.css";
import contactImg from "../../assets/contact.gif";

const Contact = () => {
  return (
    <div>
      <h2 className="text-6xl contact-title">Contact</h2>

      <div className="flex">
        <div className="w-1/2">
 
     
  
        </div>

        <div className="w-1/2">
          <img className="w-full" src={contactImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
