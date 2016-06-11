import React from 'react'

export default class Header extends React.Component {
  
  static propTypes = {
    metadata: React.PropTypes.object.isRequired
  };

  render() {
    return (
      <div className="header-wrapper">
        <header className="site-header">
          <div className="container">
            <div className="site-logo">
              <a href="/index.html">
                <img src="/images/logo.png" alt="Logo" />
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
            <a href="/instant-quote.html" className="btn btn-primary btn-sm pull-right quote-head-btn">Instant Quote</a>
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
                  <a href="/about.html">About</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/instant-quote.html">Instant Quote</a>
                    </li>
                    <li>
                      <a href="faqs.html">FAQs</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="services.html">Services</a>
                  <ul className="sub-menu">
                    {this.props.metadata.services.map((service) => 
                      <li key={service.path}>
                        <a href={`/services/${service.path}`}>{service.title}</a>
                      </li>
                    )}
                  </ul>
                </li>
                <li>
                  <a href="services.html">Locations</a>
                  <ul className="sub-menu">
                    {this.props.metadata.locations.map((location) => 
                      <li key={location.path}>
                        <a href={`/locations/${location.path}`}>{location.title}</a>
                      </li>
                    )}
                  </ul>
                </li>
                <li>
                  <a href="/contact.html">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}
