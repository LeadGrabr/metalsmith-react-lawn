import React from 'react'
import Site from '../global/site'

export default class Contact extends React.Component {
  render() {
    return (
      <Site title={this.props.title}>
        <div className="hero-area">
          <div className="page-header dark">
            <div className="container">
              {/* Breadcrumb */}
              <ol className="breadcrumb">
                <li><a href="index.html">Home</a></li>
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
                  <h3>Get in touch</h3>
                  <p>We would be delighted to serve you with our services, just use the form below or choose the services you are interested in and we will be in touch with you in few hours. We’re available from Monday to Saturday, 06:00-18:00 to take your call.</p>
                  <form method="post" id="contactform" name="contactform" className="contact-form clearfix" action="mail/contact.php">
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
                      <div className="col-md-6 col-sm-6">
                        <label>Your Address</label>
                        <input type="text" id="address" name="address" className="form-control input-lg" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <label>Your message</label>
                        <textarea className="form-control input-lg" id="comments" name="comments" rows={6} defaultValue={""} />
                        <button type="submit" id="submit" name="submit" className="btn btn-primary btn-lg">Contact now</button>
                      </div>
                    </div>
                  </form>
                  <div className="clearfix" />
                  <div id="message" />
                </div>
                <div className="spacer-40 visible-xs" />
                <div className="col-lg-3 col-md-4 col-sm-5">
                  <div className="accent-bg text_banner">
                    <h4 className="short">Working Hours</h4>
                    <ul className="working_hours">
                      <li>
                        <span>Monday</span>
                        <strong>06:00 - 18:00</strong>
                      </li>
                      <li>
                        <span>Tuesday</span>
                        <strong>06:00 - 18:00</strong>
                      </li>
                      <li>
                        <span>Wednesday</span>
                        <strong>06:00 - 18:00</strong>
                      </li>
                      <li>
                        <span>Thursday</span>
                        <strong>06:00 - 18:00</strong>
                      </li>
                      <li>
                        <span>Friday</span>
                        <strong>06:00 - 18:00</strong>
                      </li>
                      <li>
                        <span>Saturday</span>
                        <strong>06:00 - 18:00</strong>
                      </li>
                      <li>
                        <span>Sunday</span>
                        <strong>CLOSED</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="feature-block">
                    <h5>Contact Info</h5>
                    <p>Suite 300 Houston<br />Texas - 77042 USA</p><br />
                    <p><strong>Call us toll free</strong><br /><span className="accent-color">1800-9090-8089</span></p><br />
                  </div>
                </div>
              </div>
            </div>
            <div className="spacer-60" />
            <div id="contact-map" />
            <div className="spacer-50" />
            <div className="container">
              <h5 className="short">Quick Contact</h5>
              <hr className="fw" />
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="feature-text">
                    <h2>Sales</h2>
                    <p>John Bason</p>
                    <a href="mailto:sales@greenskeeper.com">sales@greenskeeper.com</a>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="feature-text">
                    <h2>Services</h2>
                    <p>Nicole Elmes</p>
                    <a href="mailto:services@greenskeeper.com">services@greenskeeper.com</a>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="feature-text">
                    <h2>Accounts</h2>
                    <p>Christine Harvey</p>
                    <a href="mailto:accounts@greenskeeper.com">accounts@greenskeeper.com</a>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="feature-text">
                    <h2>Store</h2>
                    <p>Nicholas Carter</p>
                    <a href="mailto:store@greenskeeper.com">store@greenskeeper.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Site Footer */}
        <div className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="widget footer_widget">
                  <h4 className="widgettitle"><i className="fa fa-info-circle" /> About GreensKeeper</h4>
                  <p><img src="images/logo.png" alt /></p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="widget footer_widget widget_links">
                  <h4 className="widgettitle"><i className="fa fa-navicon" /> Quick Links</h4>
                  <nav role="menu">
                    <ul>
                      <li><a href="book-service.html">Book a Service</a></li>
                      <li><a href="services.html">All Services</a></li>
                      <li><a href="faqs.html">FAQs</a></li>
                      <li><a href="pricing.html">Our Pricing</a></li>
                      <li><a href="projects-grid.html">Completed Projects</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="widget footer_widget">
                  <h4 className="widgettitle"><i className="fa fa-twitter" /> We are on Twitter</h4>
                  <div className="twitter-widget" data-tweets-count={2} />
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="widget footer_widget">
                  <h4 className="widgettitle"><i className="fa fa-calculator" /> Request an Estimate</h4>
                  <form method="post" id="quoteform" name="quoteform" className="quick-quote clearfix" action="mail/quote.php">
                    <input name="quote-name" id="quote-name" type="text" placeholder="Your Name" className="form-control" />
                    <input name="quote-email" id="quote-email" type="email" placeholder="Your Email" className="form-control" />
                    <select name="quote-service" id="quote-service" className="form-control selectpicker">
                      <option>Select Service</option>
                      <option>Fall and Spring Cleanup</option>
                      <option>Lawn Care</option>
                      <option>Landscape Design</option>
                      <option>Plants, Flowers, Soils</option>
                      <option>Tree, Shrub, Turf</option>
                      <option>Gutter Cleaning</option>
                    </select>
                    <input id="quote-submit" name="quote-submit" type="submit" defaultValue="Submit" className="btn btn-primary btn-block" />
                    <div id="Quote-message" className="accent-color" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{__html: this.props.contents}}></div>
      </Site>
    )
  }
}
