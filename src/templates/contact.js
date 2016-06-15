import React from 'react'
import Site from '../global/site'
import ContactInfo from '../components/common/contactinfo'

export default class Contact extends React.Component {
  render() {
    const { metadata: { env: { audience, api } } } = this.props
    return (
      <Site title={this.props.title} metadata={this.props.metadata}>
        <div className="hero-area">
          <div className="page-header dark">
            <div className="container">
              {/* Breadcrumb */}
              <ol className="breadcrumb">
                <li><a href="/index.html">Home</a></li>
                <li className="active">Contact</li>
              </ol>
              <h1>Contact Us</h1>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div id="main-container">
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-lg-9 col-md-8 col-sm-7">
                  <div>
                    <iframe height="100%" width="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2955.9003101979997!2d-83.48592568426287!3d42.19519897919835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b5a6c921aa379%3A0xc311594193f04aae!2s847+Sumpter+Rd+%23411%2C+Belleville%2C+MI+48111!5e0!3m2!1sen!2sus!4v1465663649316" height="400" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
                  </div>
                  <div className="spacer-60" />
                  <h3>Get in touch</h3>
                  <p>We would be delighted to serve you with our services, just use the form below or choose the services you are interested in and we will be in touch with you in few hours. We’re available from Monday to Saturday, 06:00-18:00 to take your call.</p>
                  <form method="post" id="contactform" name="contactform" className="contact-form clearfix" action={`${api}Lead`}>
                    <input type="hidden" value={audience} name="audience" id="audience" />
                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <label>Your Name (required)</label>
                        <input type="text" id="name" name="name" className="form-control input-lg" />
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <label>Your Email (required)</label>
                        <input type="email" id="email" name="email" className="form-control input-lg" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <label>Your Phone (required)</label>
                        <input type="text" id="phone" name="phone" className="form-control input-lg" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <label>Your message</label>
                        <textarea className="form-control input-lg" id="message" name="message" rows={6} defaultValue={""} />
                        <button type="submit" id="submit" name="submit" className="btn btn-primary btn-lg">Contact now</button>
                      </div>
                    </div>
                  </form>
                  <div className="clearfix" />
                  <div id="feedback" />
                </div>
                <div className="spacer-40 visible-xs" />
                <div className="col-lg-3 col-md-4 col-sm-5">
                  <div className="accent-bg text_banner">
                    <h4 className="short">Working Hours</h4>
                    <ul className="working_hours">
                      <li>
                        <span>Monday</span>
                        <strong>6 AM - 8 PM</strong>
                      </li>
                      <li>
                        <span>Tuesday</span>
                        <strong>6 AM - 8 PM</strong>
                      </li>
                      <li>
                        <span>Wednesday</span>
                        <strong>6 AM - 8 PM</strong>
                      </li>
                      <li>
                        <span>Thursday</span>
                        <strong>6 AM - 8 PM</strong>
                      </li>
                      <li>
                        <span>Friday</span>
                        <strong>6 AM - 8 PM</strong>
                      </li>
                      <li>
                        <span>Saturday</span>
                        <strong>6 AM - 8 PM</strong>
                      </li>
                      <li>
                        <span>Sunday</span>
                        <strong>6 AM - 8 PM</strong>
                      </li>
                    </ul>
                  </div>
                  <ContactInfo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Site>
    )
  }
}
