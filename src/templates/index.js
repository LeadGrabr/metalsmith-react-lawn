import React from 'react'
import Site from '../global/site'

export default class Index extends React.Component {
  render() {
    return (
      <Site title={this.props.title}>
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
                          <a href="book-service.html" className="basic-link">Let's get started</a>
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
                          <a href="services.html" className="basic-link">See all services</a>
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
              <h3><i className="fa fa-info-circle accent-color" /> Request an estimate</h3>
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
                    <option>Fall and Spring Cleanup</option>
                    <option>Lawn Care</option>
                    <option>Landscape Design</option>
                    <option>Plants, Flowers, Soils</option>
                    <option>Tree, Shrub, Turf</option>
                    <option>Gutter Cleaning</option>
                  </select>
                </div>
                <div className="col-md-3 col-sm-6">
                  <input id="quote-submit" name="quote-submit" type="submit" defaultValue="Submit" className="btn btn-primary btn-block" />
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
                    <p>Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum. Cras sed nunc massa. Quisque tempor dolor sit amet tellus malesuada, malesuada iaculis eros dignissim.</p>
                    <a href="#" className="btn btn-default">Read more about us</a>
                  </div>
                  <div className="spacer-40 visible-xs" />
                  <div className="col-md-6 col-sm-6">
                    <div className="connected-blocks">
                      <span className="icon"><i className="fa fa-male" /></span>
                      <h5>Work Culture</h5>
                      <h3>Aenean imperdiet lacus</h3>
                      <p>Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum. Cras sed nunc massa. Quisque tempor dolor sit amet tellus malesuada, malesuada iaculis eros dignissim imperdiet lacus sit amet elit porta, et malesuada erat bibendum.</p>
                    </div>
                    <div className="connected-blocks">
                      <span className="icon"><i className="fa fa-flag" /></span>
                      <h5>Our History</h5>
                      <h3>Quisque tempor dolor <a href="#">sit amet</a> tellus malesuada</h3>
                      <p>Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum. Cras sed nunc massa. Quisque tempor dolor sit amet tellus malesuada, malesuada iaculis eros dignissim.</p>
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
                      <span className="icon"><i className="fa fa-trophy" /></span>
                      <h5>Independent venture</h5>
                      <p>Vestibulum quam nisi, pretium a nibh sit amet, consectetur</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="feature-block">
                      <span className="icon"><i className="fa fa-arrow-up" /></span>
                      <h5>High Quality</h5>
                      <p>Vestibulum quam nisi, pretium a nibh sit amet, consectetur</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="feature-block">
                      <span className="icon"><i className="fa fa-users" /></span>
                      <h5>Local Impact</h5>
                      <p>Vestibulum quam nisi, pretium a nibh sit amet, consectetur</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="feature-block">
                      <span className="icon"><i className="fa fa-dollar" /></span>
                      <h5>Simple Pricing</h5>
                      <p>Vestibulum quam nisi, pretium a nibh sit amet, consectetur</p>
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
                    <li className="item">
                      <div className="service-grid-item grid-item format-standard">
                        <a href="service-single.html" className="media-box"><img src="http://placehold.it/600x400&text=IMAGE+PLACEHOLDER" alt /></a>
                        <div className="grid-item-inner">
                          <h4><a href="service-single.html">Fall and Spring Cleanup</a></h4>
                          <p>Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum. Cras sed nunc massa. Quisque tempor dolor sit amet tellus malesuada...</p>
                          <a href="service-single.html" className="more">View service details</a>
                        </div>
                      </div>
                    </li>
                    <li className="item">
                      <div className="service-grid-item grid-item format-standard">
                        <a href="service-single.html" className="media-box"><img src="http://placehold.it/600x400&text=IMAGE+PLACEHOLDER" alt /></a>
                        <div className="grid-item-inner">
                          <h4><a href="service-single.html">Lawn Care &amp; Services</a></h4>
                          <p>Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum. Cras sed nunc massa. Quisque tempor dolor sit amet tellus malesuada...</p>
                          <a href="service-single.html" className="more">View service details</a>
                        </div>
                      </div>
                    </li>
                    <li className="item">
                      <div className="service-grid-item grid-item format-standard">
                        <a href="service-single.html" className="media-box"><img src="http://placehold.it/600x400&text=IMAGE+PLACEHOLDER" alt /></a>
                        <div className="grid-item-inner">
                          <h4><a href="service-single.html">Landscape Design &amp; Installation</a></h4>
                          <p>Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum. Cras sed nunc massa. Quisque tempor dolor sit amet tellus malesuada...</p>
                          <a href="service-single.html" className="more">View service details</a>
                        </div>
                      </div>
                    </li>
                    <li className="item">
                      <div className="service-grid-item grid-item format-standard">
                        <a href="service-single.html" className="media-box"><img src="http://placehold.it/600x400&text=IMAGE+PLACEHOLDER" alt /></a>
                        <div className="grid-item-inner">
                          <h4><a href="service-single.html">Plants, Flowers, Soils and Mulches</a></h4>
                          <p>Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum. Cras sed nunc massa. Quisque tempor dolor sit amet tellus malesuada...</p>
                          <a href="service-single.html" className="more">View service details</a>
                        </div>
                      </div>
                    </li>
                    <li className="item">
                      <div className="service-grid-item grid-item format-standard">
                        <a href="service-single.html" className="media-box"><img src="http://placehold.it/600x400&text=IMAGE+PLACEHOLDER" alt /></a>
                        <div className="grid-item-inner">
                          <h4><a href="service-single.html">Tree, Shrub &amp; Turf</a></h4>
                          <p>Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum. Cras sed nunc massa. Quisque tempor dolor sit amet tellus malesuada...</p>
                          <a href="service-single.html" className="more">View service details</a>
                        </div>
                      </div>
                    </li>
                    <li className="item">
                      <div className="service-grid-item grid-item format-standard">
                        <a href="service-single.html" className="media-box"><img src="http://placehold.it/600x400&text=IMAGE+PLACEHOLDER" alt /></a>
                        <div className="grid-item-inner">
                          <h4><a href="service-single.html">Gutter Cleaning</a></h4>
                          <p>Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum. Cras sed nunc massa. Quisque tempor dolor sit amet tellus malesuada...</p>
                          <a href="service-single.html" className="more">View service details</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="spacer-60" />
            {/* Client Testimonials */}
            <div className="parallax parallax1 parallax-light padding-tb75" style={{backgroundImage: 'url(http://placehold.it/1400x700&text=IMAGE+PLACEHOLDER)'}}>
              <div className="text-align-center">
                <h2>We are your one stop location for all of<br />your outdoor needs,for both residential<br />and commercial properties.</h2>
                <a href="#" className="btn btn-default btn-ghost btn-light">Explore our services</a>
              </div>
            </div>
            <div className="padding-tb75 lgray-bg" style={{backgroundImage: 'url(images/leaves3.png)', backgroundRepeat: 'repeat'}}>
              <div className="container">
                <a href="#" className="btn btn-primary pull-right">Visit blog</a>
                <h2>Latest News</h2>
                <hr className="sm" />
                <div className="carousel-wrapper">
                  <div className="row">
                    <ul className="owl-carousel carousel-fw" id="blog-slider" data-columns={2} data-autoplay data-pagination="yes" data-arrows="no" data-single-item="no" data-items-desktop={2} data-items-desktop-small={2} data-items-tablet={1} data-items-mobile={1}>
                      <li className="item">
                        <div className="blog-list-item format-standard">
                          <div className="row">
                            <div className="col-md-5 col-sm-5">
                              <a href="#" className="media-box">
                                <img src="http://placehold.it/600x400&text=IMAGE+PLACEHOLDER" alt />
                                <span className="date">
                                  <span className="day">05</span>
                                  <span className="month">Apr</span>
                                </span>
                              </a>
                              <div className="blog-item-info">
                                <a href="#" className="meta-data"><i className="fa fa-comments" /> 10 Comments</a>
                                <div className="meta-data"><i className="fa fa-tags" /> <a href="#">Benefits</a>, <a href="#">How to</a></div>
                              </div>
                            </div>
                            <div className="col-md-7 col-sm-7">
                              <h4><a href="#">Time to stay with your family using our services</a></h4>
                              <p>Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta...</p>
                              <a href="#" className="basic-link">Read more</a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="item">
                        <div className="blog-list-item format-standard">
                          <div className="row">
                            <div className="col-md-5 col-sm-5">
                              <a href="#" className="media-box">
                                <img src="http://placehold.it/600x400&text=IMAGE+PLACEHOLDER" alt />
                                <span className="date">
                                  <span className="day">01</span>
                                  <span className="month">Apr</span>
                                </span>
                              </a>
                              <div className="blog-item-info">
                                <a href="#" className="meta-data"><i className="fa fa-comments" /> 10 Comments</a>
                                <div className="meta-data"><i className="fa fa-tags" /> <a href="#">Tips</a>, <a href="#">Tricks</a></div>
                              </div>
                            </div>
                            <div className="col-md-7 col-sm-7">
                              <h4><a href="#">How to Care for your Lawn and Landscaping Before the Winter</a></h4>
                              <p>Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta...</p>
                              <a href="#" className="basic-link">Read more</a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="item">
                        <div className="blog-list-item format-standard">
                          <div className="row">
                            <div className="col-md-5 col-sm-5">
                              <a href="#" className="media-box">
                                <img src="http://placehold.it/800x533&text=IMAGE+PLACEHOLDER" alt />
                                <span className="date">
                                  <span className="day">21</span>
                                  <span className="month">Mar</span>
                                </span>
                              </a>
                              <div className="blog-item-info">
                                <a href="#" className="meta-data"><i className="fa fa-comments" /> 10 Comments</a>
                                <div className="meta-data"><i className="fa fa-tags" /> <a href="#">Tips</a>, <a href="#">Tricks</a></div>
                              </div>
                            </div>
                            <div className="col-md-7 col-sm-7">
                              <h4><a href="#">How to make your lawn &amp; landscape look it's best?</a></h4>
                              <p>Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta...</p>
                              <a href="#" className="basic-link">Read more</a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="padding-tb75 accent-bg parallax-light" style={{backgroundImage: 'url(images/leaves3.png)', backgroundRepeat: 'repeat'}}>
              <div className="container">
                <div className="text-align-center">
                  <h2>Recently Completed Projects</h2>
                  <hr className="sm" />
                </div>
                <div className="carousel-wrapper">
                  <div className="row">
                    <ul className="owl-carousel carousel-fw" id="projects-slider" data-columns={4} data-autoplay data-pagination="no" data-arrows="yes" data-single-item="no" data-items-desktop={4} data-items-desktop-small={3} data-items-tablet={2} data-items-mobile={1}>
                      <li className="item">
                        <div className="project-grid-item format-image">
                          <a href="http://placehold.it/600x400&text=IMAGE+PLACEHOLDER" className="media-box magnific-image">
                            <img src="http://placehold.it/600x400&text=IMAGE+PLACEHOLDER" alt />
                          </a>
                          <h4><a href="single-project.html">Sunshine Garden</a></h4>
                        </div>
                      </li>
                      <li className="item">
                        <div className="project-grid-item format-image">
                          <a href="http://placehold.it/600x400&text=IMAGE+PLACEHOLDER" className="media-box magnific-image">
                            <img src="http://placehold.it/600x400&text=IMAGE+PLACEHOLDER" alt />
                          </a>
                          <h4><a href="single-project.html">Beautiful Backyard</a></h4>
                        </div>
                      </li>
                      <li className="item">
                        <div className="project-grid-item format-image">
                          <a href="http://placehold.it/600x400&text=IMAGE+PLACEHOLDER" className="media-box magnific-image">
                            <img src="http://placehold.it/600x400&text=IMAGE+PLACEHOLDER" alt />
                          </a>
                          <h4><a href="single-project.html">Wooden Mansion</a></h4>
                        </div>
                      </li>
                      <li className="item">
                        <div className="project-grid-item format-image">
                          <a href="http://placehold.it/600x400&text=IMAGE+PLACEHOLDER" className="media-box magnific-image">
                            <img src="http://placehold.it/600x400&text=IMAGE+PLACEHOLDER" alt />
                          </a>
                          <h4><a href="single-project.html">Brick Patio</a></h4>
                        </div>
                      </li>
                      <li className="item">
                        <div className="project-grid-item format-image">
                          <a href="http://placehold.it/600x400&text=IMAGE+PLACEHOLDER" className="media-box">
                            <img src="http://placehold.it/600x400&text=IMAGE+PLACEHOLDER" alt />
                          </a>
                          <h4><a href="single-project.html">Cottage with Picket Fence</a></h4>
                        </div>
                      </li>
                    </ul>
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
              <div className="col-md-2 col-sm-6">
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
              <div className="col-md-4 col-sm-6">
                <div className="widget footer_widget">
                  <h4 className="widgettitle"><i className="fa fa-comment" /> Happy Clients</h4>
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
              </div>
            </div>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{__html: this.props.contents}}></div>
      </Site>
    )
  }
}
