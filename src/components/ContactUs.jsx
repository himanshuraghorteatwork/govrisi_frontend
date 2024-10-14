import React from 'react'
import Header from './Header';
import { Link } from 'react-router-dom';
import '../assets/styles/contact.css';

const ContactUs = () => {
return(
  <div><Header/>
    <div className="contact_us_green">
      <div className="responsive-container-block big-container">
        <div className="responsive-container-block container">
          <div
            className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-10 line"
            id="i69b-2"
          >
            <form className="form-box">
              <div className="container-block form-wrapper">
                <div className="head-text-box">
                  <p className="text-blk contactus-head">Contact us</p>
                  <p className="text-blk contactus-subhead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim
                  </p>
                </div>
                <div className="responsive-container-block">
                  <div
                    className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6"
                    id="i10mt-6"
                  >
                    <p className="text-blk input-title">FIRST NAME</p>
                    <input
                      className="input"
                      id="ijowk-6"
                      name="FirstName"
                      type="text"
                      required
                    />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title">LAST NAME</p>
                    <input
                      className="input"
                      id="indfi-4"
                      name="LastName"
                      type="text"
                      required
                    />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title">EMAIL</p>
                    <input
                      className="input"
                      id="ipmgh-6"
                      name="Email"
                      type="email"
                      required
                    />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title">PHONE NUMBER</p>
                    <input
                      className="input"
                      id="imgis-5"
                      name="PhoneNumber"
                      type="tel"
                      required
                    />
                  </div>
                  <div
                    className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                    id="i634i-6"
                  >
                    <p className="text-blk input-title">
                      WHAT DO YOU HAVE IN MIND
                    </p>
                    <textarea
                      className="textinput"
                      id="i5vyy-6"
                      placeholder="Please enter query..."
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="btn-wrapper">
                  <button type="submit" className="submit-btn">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div
            className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-5 wk-ipadp-10"
            id="ifgi"
          >
            <div className="container-box">
              <div className="text-content">
                <p className="text-blk contactus-head">Contact us</p>
                <p className="text-blk contactus-subhead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim
                </p>
              </div>
              <div className="workik-contact-bigbox">
                <div className="workik-contact-box">
                  <div className="phone text-box">
                    <img
                      className="contact-svg"
                      src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET21.jpg"
                      alt="phone-icon"
                    />
                    <p className="contact-text">+1258 3258 5679</p>
                  </div>
                  <div className="address text-box">
                    <img
                      className="contact-svg"
                      src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET22.jpg"
                      alt="address-icon"
                    />
                    <p className="contact-text">hello@workik.com</p>
                  </div>
                  <div className="mail text-box">
                    <img
                      className="contact-svg"
                      src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET23.jpg"
                      alt="mail-icon"
                    />
                    <p className="contact-text">102 street, y cross 485656</p>
                  </div>
                </div>
                <div className="social-media-links">
                  <a href="#">
                    <img
                      className="social-svg"
                      id="is9ym"
                      src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg"
                      alt="mail-icon"
                    />
                  </a>
                  <a href="#">
                    <img
                      className="social-svg"
                      id="i706n"
                      src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg"
                      alt="twitter-icon"
                    />
                  </a>
                  <a href="#">
                    <img
                      className="social-svg"
                      id="ib9ve"
                      src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg"
                      alt="instagram-icon"
                    />
                  </a>
                  <a href="#">
                    <img
                      className="social-svg"
                      id="ie9fx"
                      src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg"
                      alt="facebook-icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
}

export default ContactUs;