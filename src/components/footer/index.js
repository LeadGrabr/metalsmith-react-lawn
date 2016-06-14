import React from 'react'

export default class Footer extends React.Component {
  
  static propTypes = {
    metadata: React.PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
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
                      <ul className="owl-carousel carousel-fw" id="testimonials-slider" data-columns={1} data-pagination="yes" data-arrows="no" data-single-item="no" data-items-desktop={1} data-items-desktop-small={1} data-items-tablet={1} data-items-mobile={1}>
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
        <div className="site-footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="copyrights-col-left">
                  <p>© 2016 Lawn and Garden Professionals. All Rights Reserved</p>
                  <p>847 Sumpter Road #411, Belleville, MI 48111</p>
                  <p>Call Us Now at 734-786-4475</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="copyrights-col-right">
                  <ul className="social-icons-rounded social-icons-colored pull-right">
                    <li className="facebook">
                      <a href="#"><i className="fa fa-facebook-f" /></a>
                    </li>
                    <li className="twitter">
                      <a href="#"><i className="fa fa-twitter" /></a>
                    </li>
                    <li className="googleplus">
                      <a href="#"><i className="fa fa-google-plus" /></a>
                    </li>
                    <li className="youtube">
                      <a href="#"><i className="fa fa-youtube-play" /></a>
                    </li>
                    <li className="vimeo">
                      <a href="#"><i className="fa fa-vimeo" /></a>
                    </li>
                    <li className="instagram">
                      <a href="#"><i className="fa fa-instagram" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a id="back-to-top"><i className="fa fa-angle-double-up" /></a>
      </div>
    )
  }
}
