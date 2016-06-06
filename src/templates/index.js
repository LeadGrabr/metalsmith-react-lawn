import React from 'react'
import Site from '../global/site'

export default class Index extends React.Component {
  render() {
    return (
      <Site title={this.props.title} metadata={this.props.metadata}>
        <div className="hero-area">
          <div className="flexslider heroflex hero-slider" data-autoplay="yes" data-pagination="no" data-arrows="yes" data-style="fade" data-pause="yes">
            <ul className="slides">
              <li className="parallax" style={{backgroundImage: 'url(http://placehold.it/1440x600&text=IMAGE+PLACEHOLDER)'}}>
                <div className="flex-caption text-align-center">
                  <div className="container">
                    <div className="flex-caption-table">
                      <div className="flex-caption-cell">
                        <div className="flex-caption-text">
                          <h2>Making your surroundings<br />beautiful for 40 years</h2>
                          <a href="/instant-quote.html" className="basic-link">Let's get started</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="parallax" style={{backgroundImage: 'url(http://placehold.it/1440x600&text=IMAGE+PLACEHOLDER)'}}>
                <div className="flex-caption text-align-center">
                  <div className="container">
                    <div className="flex-caption-table">
                      <div className="flex-caption-cell">
                        <div className="flex-caption-text">
                          <h2>Professional Gardening, Landscaping<br />&amp; Maintenance Services</h2>
                          <a href="/services.html" className="basic-link">See all services</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="quote-teaser">
          <div className="container">
            <div className="quote-teaser-title">
              <h3><i className="fa fa-info-circle accent-color" />Get an Instant Quote</h3>
            </div>
            <form method="post" id="quoteform" name="quoteform" className="quick-quote clearfix" action="mail/quote.php">
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <input name="quote-name" id="quote-name" type="text" placeholder="Your Name" className="form-control" />
                </div>
                <div className="col-md-3 col-sm-6">
                  <input name="quote-email" id="quote-email" type="email" placeholder="Your Email" className="form-control" />
                </div>
                <div className="col-md-3 col-sm-6">
                  <select name="quote-service" id="quote-service" className="form-control selectpicker">
                     <option>Select Service</option>
                     {this.props.metadata.services.map((service) => 
                        <option key={service.id}>{service.title}</option>
                     )}
                  </select>
                </div>
                <div className="col-md-3 col-sm-6">
                  <input id="quote-submit" name="quote-submit" type="submit" defaultValue="Instant Quote" className="btn btn-primary btn-block" />
                </div>
              </div>
              <div id="Quote-message" className="accent-color" />
            </form>
          </div>
        </div>
        {/* Main Content */}
        <div id="main-container">
          <div className="content">
            <div className="shadow-row">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <h1 className="short">Welcome to GreensKeeper</h1>
                    <p><strong>Gardening, Landscaping and Maintenance Services</strong></p>
                    <p><img src="http://placehold.it/900x400&text=IMAGE+PLACEHOLDER" alt /></p>
                  </div>
                  <div className="spacer-40 visible-xs" />
                  <div className="col-md-6 col-sm-6">
                    <div className="connected-blocks">
                      <span className="icon"><i className="fa fa-male" /></span>  
                      <h5>Lawn Care, Landscaping, Leaf Removal</h5>
                      <h3>We Specialize in Your Lawn</h3>
                      <p>If you're looking for lawn care, landscaping, or leaf removal, look no further. Lawn &amp; Garden Professionals is a national brand with local partners. We hand pick lawn and garden partners in your area to ensure only the highest quality of work. Our partners look to us to grow their business, and we look to them to guarantee their landscaping work. Our customers get the best of both worlds!</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="spacer-60" />
            </div>
            <div className="lgray-bg" style={{backgroundImage: 'url(images/leaves1.png)', backgroundRepeat: 'repeat'}}>
              <div className="container">
                <h4 className="stacked-title">Why you should choose us</h4>
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="feature-block">
                            <span className="icon"><i className="fa fa-trophy"></i></span>
                            <h5>TRUSTWORTHY</h5>
                            <p>We handpick our lawn, garden, and landscaping partners in each service area to make sure you get the best mowing, cleanup, or leaf removal that money can buy</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="feature-block">
                            <span className="icon"><i className="fa fa-arrow-up"></i></span>
                            <h5>EXPERIENCED</h5>
                            <p>We have been mowing lawns and servicing gardens for decades. Your lawn and garden are the first thing people see, and we make sure it's a good first impression</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="feature-block">
                            <span className="icon"><i className="fa fa-users"></i></span>
                            <h5>LOCALLY OWNED</h5>
                            <p>Local first service is getting harder to find in the landscaping industry. We make sure you can talk to a local specialist face to face, all week long.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="feature-block">
                            <span className="icon"><i className="fa fa-dollar"></i></span>
                            <h5>Simple Pricing</h5>
                            <p>Prices for lanscaping shouldn't be complicated. Contact us now for an easy quote on your next lawn care project. We respond the same day.</p>
                        </div>
                    </div>
                </div>
                <div className="spacer-50" />
              </div>
            </div>
            <div className="spacer-60" />
            <div className="container">
              <div className="text-align-center">
                <h2>Services we offer</h2>
                <hr className="sm" />
              </div>
              <div className="carousel-wrapper">
                <div className="row">
                  <ul className="owl-carousel carousel-fw" id="services-slider" data-columns={4} data-autoplay data-pagination="no" data-arrows="yes" data-single-item="no" data-items-desktop={4} data-items-desktop-small={3} data-items-tablet={2} data-items-mobile={1}>
                    {this.props.metadata.services.map((service) => 
                      <li key={service.id} className="item">
                        <div className="service-grid-item grid-item format-standard">
                          <a href={`/services/${service.path}`} className="media-box"><img src={service.img} alt={service.title} /></a>
                          <div className="grid-item-inner">
                            <h4><a href={`/services/${service.path}`}>{service.title}</a></h4>
                            <p>{service.description}...</p>
                            <a href={`/services/${service.path}`} className="more">{service.title}</a>
                          </div>
                        </div>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="spacer-60" />
            {/* Client Testimonials */}
            <div className="parallax parallax1 parallax-light padding-tb75" style={{backgroundImage: 'url(http://placehold.it/1400x700&text=IMAGE+PLACEHOLDER)'}}>
              <div className="text-align-center">
                <h2>Residential and Commercial property owners trust Lawn and Garden Professionals to make sure their landscaping shines<br /></h2>
                <a href="/services.html" className="btn btn-default btn-ghost btn-light">Explore our services</a>
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
                  <h4 className="widgettitle"><i className="fa fa-info-circle" />Lawn and Garden Professionals</h4>
                  <p><img src="images/logo.png" alt /></p>
                  <p>The leading local landscaping and lawn care service in the Ann Arbor, Washtenaw, Canton, and Ypsilanti areas.</p>
                </div>
              </div>
              <div className="col-md-2 col-sm-6">
                <div className="widget footer_widget widget_links">
                  <h4 className="widgettitle"><i className="fa fa-navicon" /> Quick Links</h4>
                  <nav role="menu">
                    <ul>
                      <li><a href="/instant-quote.html">Get an Instant Quote</a></li>
                      <li><a href="/services.html">All Services</a></li>
                      <li><a href="/faqs.html">FAQs</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="widget footer_widget">
                  <h4 className="widgettitle"><i className="fa fa-comment" /> Happy Clients</h4>
                  <div className="carousel-wrapper">
                    <div className="row">
                      <ul className="owl-carousel carousel-fw" id="testimonials-slider" data-columns={1} data-autoplay data-pagination="yes" data-arrows="no" data-single-item="no" data-items-desktop={1} data-items-desktop-small={1} data-items-tablet={1} data-items-mobile={1}>
                        <li className="item">
                            <div className="testimonial-block">
                                <blockquote>
                                    <p>I used to spend a full day each year finding a landscaping service for the summer. Since finding Lawn and Garden Professionals of Ann Arbor, I haven't looked again.</p>
                                </blockquote>
                                <div className="testimonial-avatar">
                                    <img src="http://placehold.it/100x100&amp;text=IMAGE+PLACEHOLDER" alt="" height="60" width="60" />
                                </div>
                                <div className="testimonial-info">
                                    <div className="testimonial-info-in">
                                        <strong>Kate</strong>
                                        <span>Ann Arbor, MI</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="item">
                            <div className="testimonial-block">
                                <blockquote>
                                    <p>After a storm, we had branches everywhere. Lawn and Garden Professionals of Canton helped us clean up our tree branches and get our commercial landscaping solution for life.</p>
                                </blockquote>
                                <div className="testimonial-avatar">
                                    <img src="http://placehold.it/100x100&amp;text=IMAGE+PLACEHOLDER" alt="" height="60" width="60" />
                                </div>
                                <div className="testimonial-info">
                                    <div className="testimonial-info-in">
                                        <strong>William &amp; Christina</strong>
                                        <span>Canton, MI</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                      </ul>
                    </div>
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
