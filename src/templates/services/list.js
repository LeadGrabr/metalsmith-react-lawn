import React from 'react'
import Site from '../../global/site'

export default class ServicesList extends React.Component {
  render() {
    return (
      <Site title={this.props.title} metadata={this.props.metadata}>
        <div className="hero-area">
          <div className="page-header dark">
            <div className="container">
              {/* Breadcrumb */}
              <ol className="breadcrumb">
                <li><a href="/index.html">Home</a></li>
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
                    {this.props.metadata.services.map((service) => 
                      <li key={service.path} className="col-md-4 col-sm-6 grid-item">
                        <div className="service-grid-item format-standard">
                          <div
                            style={{
                              height: 165,
                              overflow: 'hidden',
                              marginBottom: '1rem'
                            }}
                          >
                            <a
                              href={`/services/${service.path}`}
                              className="media-box"
                              style={{ width: '100%' }}
                            >
                              <img
                                alt={service.title}
                                src={service.img}
                                style={{ width: '100%' }}
                              />
                            </a>
                          </div>
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
                <div className="col-md-3 col-sm-4">
                  <div className="widget sidebar-widget widget_custom_menu">
                    <ul>
                      <li className="active"><a href="#">All Services</a></li>
                      {this.props.metadata.services.map((service) => 
                        <li key={service.id}><a href={`/services/${service.path}`}>{service.title}</a></li>
                      )}
                    </ul>
                  </div>
                  <div className="widget sidebar-widget text_widget">
                    <div className="accent-bg text_banner">
                      <h4>Have questions about our services?</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus.</p>
                      <a href="/contact.html" className="btn btn-default btn-ghost btn-light">Contact us</a>
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
                  <p><img src="/images/logo.png" alt /></p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="widget footer_widget widget_links">
                  <h4 className="widgettitle"><i className="fa fa-navicon" /> Quick Links</h4>
                  <nav role="menu">
                    <ul>
                      <li><a href="/instant-quote.html">Book a Service</a></li>
                      <li><a href="/services.html">All Services</a></li>
                      <li><a href="/faqs.html">FAQs</a></li>
                    </ul>
                  </nav>
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
                      {this.props.metadata.services.map((service) => 
                         <option key={service.id}>{service.title}</option>
                      )}
                    </select>
                    <input id="quote-submit" name="quote-submit" type="submit" defaultValue="Submit" className="btn btn-primary btn-block" />
                    <div id="Quote-message" className="accent-color" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Site>
    )
  }
}
