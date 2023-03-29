import React from "react";
import "./Contact.css";
import Navbar from "./../Navbar/Navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="container container-contact">
        <div className="row">
          <div className="col-9 title-contact">
            <h2>Get In <span className="touch">Touch</span> </h2>
          </div>
          <div className="col-9 content-input-contact">
            <div className="information">
              <div className="content-contact">
                <i class="fa-solid fa-location-dot"></i> Avon str. 22, NYC, USA{" "}
              </div>
              <div className="content-contact">
                <i class="fa-solid fa-phone"></i>+77 022 155 02 02
              </div>
              <div className="content-contact">
                <i class="fa-solid fa-envelope"></i>example@gmail.com
              </div>
              <div className="content-contact">
                <i class="fa-brands fa-square-facebook"></i>@facebookNick
              </div>
            </div>
            <div className="form-input-content">
              <form >
                <input type="text"  placeholder="Name" className="input-name"/>
                <input type="email" placeholder="Email" className="input-name"/>
                <div>
                  <input type="text" placeholder="Message" className="input-message"/>
                </div>
                <button className="btn-message">Submit Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
