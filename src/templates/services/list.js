import React from 'react'
import Site from '../../global/site'

export default class ServicesList extends React.Component {
  render() {
    return (
      <Site title={this.props.title}>
        <div className="hero-area">
          <div className="page-header dark">
            <div className="container">
              {/* Breadcrumb */}
              <ol className="breadcrumb">
                <li><a href="index.html">Home</a></li>
                <li className="active">Services</li>
              </ol>
              <h1>Our Services</h1>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div id="main-container">
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-sm-8">
                  <ul className="isotope-grid row">
                    <li className="col-md-4 col-sm-6 grid-item">
                      <div className="service-grid-item format-standard">
                        <a href="service-single.html" className="media-box"><img src="http://placehold.it/600x400&text=IMAGE+PLACEHOLDER" alt /></a>
                        <div className="grid-item-inner">
                          <h4><a href="service-single.html">Fall and Spring Cleanup</a></h4>
                          <p>Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum. Cras sed nunc massa. Quisque tempor dolor sit amet tellus malesuada...</p>
                          <a href="service-single.html" className="more">View service details</a>
                        </div>
                      </div>
                    </li>
                    <li className="col-md-4 col-sm-6 grid-item">
                      <div className="service-grid-item format-standard">
                        <a href="service-single.html" className="media-box"><img src="http://placehold.it/600x400&text=IMAGE+PLACEHOLDER" alt /></a>
                        <div className="grid-item-inner">
                          <h4><a href="service-single.html">Lawn Care &amp; Services</a></h4>
                          <p>Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum. Cras sed nunc massa. Quisque tempor dolor sit amet tellus malesuada...</p>
                          <a href="service-single.html" className="more">View service details</a>
                        </div>
                      </div>
                    </li>
                    <li className="col-md-4 col-sm-6 grid-item">
                      <div className="service-grid-item format-standard">
                        <a href="service-single.html" className="media-box"><img src="http://placehold.it/600x400&text=IMAGE+PLACEHOLDER" alt /></a>
                        <div className="grid-item-inner">
                          <h4><a href="service-single.html">Landscape Design &amp; Installation</a></h4>
                          <p>Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum. Cras sed nunc massa. Quisque tempor dolor sit amet tellus malesuada...</p>
                          <a href="service-single.html" className="more">View service details</a>
                        </div>
                      </div>
                    </li>
                    <li className="col-md-4 col-sm-6 grid-item">
                      <div className="service-grid-item format-standard">
                        <a href="service-single.html" className="media-box"><img src="http://placehold.it/600x400&text=IMAGE+PLACEHOLDER" alt /></a>
                        <div className="grid-item-inner">
                          <h4><a href="service-single.html">Plants, Flowers, Soils and Mulches</a></h4>
                          <p>Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum. Cras sed nunc massa. Quisque tempor dolor sit amet tellus malesuada...</p>
                          <a href="service-single.html" className="more">View service details</a>
                        </div>
                      </div>
                    </li>
                    <li className="col-md-4 col-sm-6 grid-item">
                      <div className="service-grid-item format-standard">
                        <a href="service-single.html" className="media-box"><img src="http://placehold.it/600x400&text=IMAGE+PLACEHOLDER" alt /></a>
                        <div className="grid-item-inner">
                          <h4><a href="service-single.html">Tree, Shrub &amp; Turf</a></h4>
                          <p>Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum. Cras sed nunc massa. Quisque tempor dolor sit amet tellus malesuada...</p>
                          <a href="service-single.html" className="more">View service details</a>
                        </div>
                      </div>
                    </li>
                    <li className="col-md-4 col-sm-6 grid-item">
                      <div className="service-grid-item format-standard">
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
                <div className="col-md-3 col-sm-4">
                  <div className="widget sidebar-widget widget_custom_menu">
                    <ul>
                      <li className="active"><a href="#">All Services</a></li>
                      <li><a href="service-single.html">Fall and Spring Cleanup</a></li>
                      <li><a href="service-single.html">Lawn Care</a></li>
                      <li><a href="service-single.html">Landscape Design</a></li>
                      <li><a href="service-single.html">Plants, Flowers, Soils</a></li>
                      <li><a href="service-single.html">Tree, Shrub, Turf</a></li>
                      <li><a href="service-single.html">Gutter Cleaning</a></li>
                    </ul>
                  </div>
                  <div className="widget sidebar-widget text_widget">
                    <div className="accent-bg text_banner">
                      <h4>Have questions about our services?</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus.</p>
                      <a href="contact.html" className="btn btn-default btn-ghost btn-light">Contact us</a>
                    </div>
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
