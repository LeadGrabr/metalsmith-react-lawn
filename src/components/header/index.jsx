import React from 'react'

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-wrapper">
        <header className="site-header">
          <div className="container">
            <div className="site-logo">
              <a href="index.html">
                <img src="images/logo.png" alt="Logo" />
              </a>
            </div>
            <div className="site-tagline">Lawn &amp; Landscaping Services</div>
            <a href="#" className="btn btn-default btn-sm" id="contact-info"><i className="fa fa-bars" /></a>
            <div className="site-header-right">
              <ul className="header-info-cols">
                <li>
                  <span className="icon-col"><i className="fa fa-map-marker" /></span>
                  <div>
                    <div>
                      <span>Suite 300 Houston<br />Texas - 77042 USA</span>
                    </div>
                  </div>
                </li>
                <li>
                  <span className="icon-col"><i className="fa fa-phone" /></span>
                  <div>
                    <div>
                      <span><strong>Call us toll free</strong><br />1800-9090-8089</span>
                    </div>
                  </div>
                </li>
                <li>
                  <span className="icon-col"><i className="fa fa-clock-o" /></span>
                  <div>
                    <div>
                      <span><strong>Working Hours</strong><br />Mon - Sat 06:00 to 18:00</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <div className="main-navigation">
          <div className="container">
            <a href="book-service.html" className="btn btn-primary btn-sm pull-right quote-head-btn">Book a service</a>
            <ul className="pull-right social-icons">
              <li className="facebook">
                <a href="#"><i className="fa fa-facebook-f" /></a>
              </li>
              <li className="twitter">
                <a href="#"><i className="fa fa-twitter" /></a>
              </li>
              <li className="youtube">
                <a href="#"><i className="fa fa-youtube" /></a>
              </li>
              <li className="instagram">
                <a href="#"><i className="fa fa-instagram" /></a>
              </li>
            </ul>
            <a href="#" id="menu-toggle">Menu</a>
            <nav role="menu">
              <ul className="dd-menu sf-menu">
                <li>
                  <ul className="sub-menu">
                    <li>
                      <a href="index2.html">Home version 2</a>
                    </li>
                    <li>
                      <a href="index.html">Header Styles</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="index.html">Style 1(Default)</a>
                        </li>
                        <li>
                          <a href="header-style2.html">Style 2</a>
                        </li>
                        <li>
                          <a href="header-style3.html">Style 3</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="about.html">About</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="book-service.html">Book a Service</a>
                    </li>
                    <li>
                      <a href="pricing.html">Pricing</a>
                    </li>
                    <li>
                      <a href="faqs.html">FAQs</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="services.html">Services</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="service-single.html">Fall and Spring Cleanup</a>
                    </li>
                    <li>
                      <a href="service-single.html">Lawn Care</a>
                    </li>
                    <li>
                      <a href="service-single.html">Landscape Design</a>
                    </li>
                    <li>
                      <a href="service-single.html">Plants, Flowers, Soils</a>
                    </li>
                    <li>
                      <a href="service-single.html">Tree, Shrub, Turf</a>
                    </li>
                    <li>
                      <a href="service-single.html">Gutter Cleaning</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="sub-menu">
                    <li>
                      <a href="projects-grid.html">Projects Grid</a>
                    </li>
                    <li>
                      <a href="projects-list.html">Projects List</a>
                    </li>
                    <li>
                      <a href="projects-gallery.html">Projects Gallery</a>
                    </li>
                    <li>
                      <a href="single-project.html">Single Project</a>
                    </li>
                  </ul>
                </li>
                <li className="megamenu">
                  <ul className="dropdown">
                    <li>
                      <div className="megamenu-container container">
                        <div className="row">
                          <div className="col-md-3 megamenu-col">
                            <span className="megamenu-sub-title">Features</span>
                            <ul className="sub-menu">
                              <li>
                                <a href="shortcodes.html">Shortcodes</a>
                              </li>
                              <li>
                                <a href="typography.html">Typography</a>
                              </li>
                              <li>
                                <a href="services.html">Services</a>
                              </li>
                              <li>
                                <a href="projects-grid.html">Projects</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-4 megamenu-col">
                            <span className="megamenu-sub-title">Latest news</span>
                            <div className="widget recent_posts">
                              <ul>
                                <li>
                                  <a href="single-post.html" className="media-box">
                                    <img src="http://placehold.it/800x533&text=IMAGE+PLACEHOLDER" alt />
                                  </a>
                                  <h5><a href="single-post.html">How to make your lawn &amp; Landscape look at its's best</a></h5>
                                  <span className="meta-data grid-item-meta">Posted on 05 April, 2016</span>
                                </li>
                                <li>
                                  <a href="single-post.html" className="media-box">
                                    <img src="http://placehold.it/600x400&text=IMAGE+PLACEHOLDER" alt />
                                  </a>
                                  <h5><a href="single-post.html">Time to stay with your family using our services</a></h5>
                                  <span className="meta-data grid-item-meta">Posted on 04 April, 2016</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-5 megamenu-col">
                            <span className="megamenu-sub-title">Our Services</span> 
                            <img src="http://placehold.it/900x400&text=IMAGE+PLACEHOLDER" alt />
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="sub-menu">
                    <li>
                      <a href="blog-list.html">Blog List</a>
                    </li>
                    <li>
                      <a href="blog-grid.html">Blog Grid</a>
                    </li>
                    <li>
                      <a href="single-post.html">Single Blog Post</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}
