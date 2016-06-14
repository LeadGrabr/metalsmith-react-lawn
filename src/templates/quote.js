import React from 'react'
import Site from '../global/site'

export default class Quote extends React.Component {
  render() {
    return (
      <Site title={this.props.title} metadata={this.props.metadata}>
        <div className="hero-area">
          <div className="page-header dark">
            <div className="container">
              {/* Breadcrumb */}
              <ol className="breadcrumb">
                <li><a href="/index.html">Home</a></li>
                <li className="active">Get an Instant Quote</li>
              </ol>
              <h1>Get an Instant Quote</h1>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div id="main-container">
          <div className="content padding-b0">
            <div className="container">
              <hr className="fw" />
              <div className="spacer-30" />
              <div className="row">
                <div className="col-md-8 col-sm-7">
                  <h3>Just fill out this quick form</h3>
                  <p>We would be delighted to serve you with our services, just use the form below or choose the services you are interested in and we will be in touch with you in few hours. We’re available 7 days a week, from 6 AM to 8 PM to take your call.</p>
                  <div className="spacer-20" />
                  <form method="post" id="book-service-form" name="book-service-form" className="book-service-form clearfix" action="mail/book-service.php">
                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <label>Your Name (required)</label>
                        <input type="text" name="service-name" id="service-name" className="form-control input-lg" />
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <label>Your Email (required)</label>
                        <input type="email" name="service-email" id="service-email" className="form-control input-lg" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <label>Your Phone (required)</label>
                        <input type="text" name="service-phone" id="service-phone" className="form-control input-lg" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <label>Choose services (required)</label>
                        <select name="service-type" id="service-type" className="form-control input-lg selectpicker">
                          <option>Select Service</option>
                          {this.props.metadata.services.map((service) => 
                             <option key={service.id}>{service.title}</option>
                          )}
                        </select>
                        <label>Special Instructions</label>
                        <textarea name="service-comments" id="service-comments" className="form-control input-lg" rows={6} defaultValue={""} />
                        <button type="submit" id="service-submit" name="service-submit" className="btn btn-primary btn-lg margin-20">Book Service</button>
                      </div>
                    </div>
                  </form>
                  <div className="clearfix" />
                  <div id="service-message" />
                </div>
                <div className="spacer-30 visible-xs" />
                <div className="col-md-4 col-sm-5">
                  <h3>How it works</h3>
                  <div className="connected-blocks">
                    <span className="icon"><i className="fa fa-send" /></span>
                    <h5>Submit your requirement</h5>
                  </div>
                  <div className="connected-blocks">
                    <span className="icon"><i className="fa fa-calculator" /></span>
                    <h5>We will prepare an estimate</h5>
                  </div>
                  <div className="connected-blocks">
                    <span className="icon"><i className="fa fa-phone" /></span>
                    <h5>You will get a call from us</h5>
                  </div>
                  <div className="connected-blocks">
                    <span className="icon"><i className="fa fa-user-times" /></span>
                    <h5>Our team visit your place</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="spacer-60" />
            <div className="lgray-bg padding-tb45">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-sm-12 counters">
                    <div className="spacer-20" />
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <div className="timer timer-huge" data-perc={1500}> <span className="count">6400</span> </div>
                        <span className="fact padding-l0">Trees Planted</span>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <div className="timer timer-huge" data-perc={1000}> <span className="count">1000</span> </div>
                        <span className="fact padding-l0">Projects Completed</span>
                      </div>
                    </div>
                    <div className="spacer-50" />
                    <a href="/services.html" className="basic-link">Know more about our services</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Site>
    )
  }
}
