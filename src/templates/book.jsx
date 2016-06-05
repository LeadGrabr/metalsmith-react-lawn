import React from 'react'
import Site from '../global/site'

export default class Book extends React.Component {
  render() {
    return (
      <Site title={this.props.title}>
        <div className="hero-area">
          <div className="page-header" style={{backgroundImage: 'url(http://placehold.it/1400x300&text=IMAGE+PLACEHOLDER)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center bottom'}}>
            <div className="container">
              {/* Breadcrumb */}
              <ol className="breadcrumb">
                <li><a href="index.html">Home</a></li>
                <li className="active">Book a service</li>
              </ol>
              <h1>Book a Service</h1>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div id="main-container">
          <div className="content padding-b0">
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
              <div className="spacer-30" />
              <hr className="fw" />
              <div className="spacer-30" />
              <div className="row">
                <div className="col-md-8 col-sm-7">
                  <h3>Just fill out this quick form</h3>
                  <p>We would be delighted to serve you with our services, just use the form below or choose the services you are interested in and we will be in touch with you in few hours. We’re available from Monday to Saturday, 06:00-18:00 to take your call.</p>
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
                      <div className="col-md-6 col-sm-6">
                        <label>Your Address (required)</label>
                        <input type="text" name="service-address" id="service-address" className="form-control input-lg" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <label>Date for service (required)</label>
                        <input type="text" name="service-date" id="service-date" className="form-control input-lg" />
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <label>Service time (required)</label>
                        <input type="text" name="service-time" id="service-time" className="form-control input-lg" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <label>Choose services (required)</label>
                        <select name="service-type" id="service-type" className="form-control input-lg selectpicker">
                          <option>Fall and Spring Cleanup</option>
                          <option>Lawn Care</option>
                          <option>Landscape Design</option>
                          <option>Plants, Flowers, Soils</option>
                          <option>Tree, Shrub, Turf</option>
                          <option>Gutter Cleaning</option>
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
                    <p>Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum. Cras sed nunc massa.</p>
                  </div>
                  <div className="connected-blocks">
                    <span className="icon"><i className="fa fa-calculator" /></span>
                    <h5>We will prepare an estimate</h5>
                    <p>Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum.</p>
                  </div>
                  <div className="connected-blocks">
                    <span className="icon"><i className="fa fa-phone" /></span>
                    <h5>You will get a call from us</h5>
                    <p>Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum.</p>
                  </div>
                  <div className="connected-blocks">
                    <span className="icon"><i className="fa fa-user-times" /></span>
                    <h5>Our team visit your place</h5>
                    <p>Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="spacer-60" />
            <div className="lgray-bg padding-tb45">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <div className="carousel-wrapper">
                      <div className="row">
                        <ul className="owl-carousel carousel-fw" id="testimonials-slider" data-columns={1} data-autoplay data-pagination="yes" data-arrows="no" data-single-item="no" data-items-desktop={1} data-items-desktop-small={1} data-items-tablet={1} data-items-mobile={1}>
                          <li className="item">
                            <div className="testimonial-block">
                              <blockquote>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.</p>
                              </blockquote>
                              <div className="testimonial-avatar"><img src="http://placehold.it/100x100&text=IMAGE+PLACEHOLDER" alt height={60} width={60} /></div>
                              <div className="testimonial-info">
                                <div className="testimonial-info-in">
                                  <strong>Arthur Henry</strong><span>Florida</span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="item">
                            <div className="testimonial-block">
                              <blockquote>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.</p>
                              </blockquote>
                              <div className="testimonial-avatar"><img src="http://placehold.it/100x100&text=IMAGE+PLACEHOLDER" alt height={60} width={60} /></div>
                              <div className="testimonial-info">
                                <div className="testimonial-info-in">
                                  <strong>Willie &amp; Heather Obrien</strong><span>Laketown</span>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-5 col-md-offset-1 col-sm-offset-1 counters">
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
                    <a href="#" className="basic-link">Know more about our services</a>
                  </div>
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
