import React from 'react'
import Site from '../../global/site'
import classnames from 'classnames'
import _ from 'lodash'

export default class SingleLocation extends React.Component {
  
  static propTypes = {
    location: React.PropTypes.number.isRequired,
    metadata: React.PropTypes.object.isRequired
  };

  render() {
    const { locations } = this.props.metadata
    const currentLocation = _.find(locations, {id: this.props.location})
    const { title, header, sidebarImage } = currentLocation
    return (
      <Site title={this.props.title} metadata={this.props.metadata}>
        <div className="hero-area">
          <div className="page-header dark">
            <div className="container">
              <ol className="breadcrumb">
                <li><a href="/index.html">Home</a></li>
                <li className="active">{title}</li>
              </ol>
              <h1>{header}</h1>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div id="main-container">
          <div className="content padding-b0">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-sm-7">
                  <img src={sidebarImage} alt className="align-left" />
                  <h2><span className="accent-color">{header}</span></h2>
                  <p dangerouslySetInnerHTML={{__html: this.props.contents}}></p>
                  <div className="spacer-30" />
                  <hr className="sm" />
                  <h2>Our Team</h2>
                  <p>Sed et dapibus erat, eget sollicitudin lacus. Etiam nec nisl nec velit iaculis ultrices. Phasellus neque arcu, rutrum ut quam et, consectetur porta libero. Morbi porttitor nunc ac ex consequat pulvinar.</p>
                  <div className="carousel-wrapper">
                    <div className="row">
                      <ul className="owl-carousel carousel-fw" id="team-slider" data-columns={2}  data-pagination="no" data-arrows="yes" data-single-item="no" data-items-desktop={2} data-items-desktop-small={1} data-items-tablet={1} data-items-mobile={1}>
                        <li className="item">
                          <div className="team-grid-item grid-item format-image">
                            <a href="http://placehold.it/600x400&text=IMAGE+PLACEHOLDER" className="magnific-image media-box"><img src="http://placehold.it/600x400&text=IMAGE+PLACEHOLDER" alt /></a>
                            <div className="grid-item-inner">
                              <h3>Pablo Aguilar</h3>
                              <span className="meta-data">Gardener</span>
                              <p>Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum. Cras sed nunc massa. Quisque tempor dolor sit amet tellus malesuada.</p>
                            </div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="team-grid-item grid-item format-image">
                            <a href="http://placehold.it/600x400&text=IMAGE+PLACEHOLDER" className="magnific-image media-box"><img src="http://placehold.it/600x400&text=IMAGE+PLACEHOLDER" alt /></a>
                            <div className="grid-item-inner">
                              <h3>Evan Lavoie</h3>
                              <span className="meta-data">Gardener</span>
                              <p>Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum. Cras sed nunc massa. Quisque tempor dolor sit amet tellus malesuada.</p>
                            </div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="team-grid-item grid-item format-image">
                            <a href="http://placehold.it/600x400&text=IMAGE+PLACEHOLDER" className="magnific-image media-box"><img src="http://placehold.it/600x400&text=IMAGE+PLACEHOLDER" alt /></a>
                            <div className="grid-item-inner">
                              <h3>Christian Joss</h3>
                              <span className="meta-data">Gardener</span>
                              <p>Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum. Cras sed nunc massa. Quisque tempor dolor sit amet tellus malesuada.</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-5">
                  <div className="widget sidebar-widget widget_custom_menu">
                    <ul>
                      <li className="active"><a href="/about.html">About us</a></li>
                      <li><a href="/instant-quote.html">Book a service</a></li>
                      <li><a href="/faqs.html">Frequently asked questions</a></li>
                      <li><a href="/contact.html">Contact us</a></li>
                    </ul>
                  </div>
                  <div className="widget sidebar-widget text_widget">
                    <div className="feature-block">
                      <h5>Contact Info</h5>
                      <p>Suite 300 Houston<br />Texas - 77042 USA</p><br />
                      <p><strong>Call us toll free</strong><br /><span className="accent-color">1800-9090-8089</span></p><br />
                    </div>
                  </div>
                  <div className="widget sidebar-widget text_widget">
                    <a href="#" className="btn btn-primary btn-block"><i className="fa fa-file-pdf-o fa-2x" /> Download price list</a>
                    <a href="#" className="btn btn-primary btn-block"><i className="fa fa-file-pdf-o fa-2x" /> Download brochure</a>
                  </div>
                  <div className="widget sidebar-widget">
                    <div className="carousel-wrapper">
                      <div className="row">
                        <ul className="owl-carousel carousel-fw" id="testimonials-slider" data-columns={1}  data-pagination="no" data-arrows="yes" data-single-item="no" data-items-desktop={1} data-items-desktop-small={1} data-items-tablet={1} data-items-mobile={1}>
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
            <div className="spacer-40" />
            <div className="padding-tb45 shadow-row parallax-light accent-bg counters" style={{backgroundImage: 'url(images/leaves1.png)', backgroundRepeat: 'repeat'}}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                    <div className="fact-ico"> <i className="fa fa-tree fa-4x" /> </div>
                    <div className="timer" data-perc={1500}> <span className="count">6400</span> </div>
                    <span className="fact">Trees Planted</span>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                    <div className="fact-ico"> <i className="fa fa-users fa-4x" /> </div>
                    <div className="timer" data-perc={36}> <span className="count">36</span> </div>
                    <span className="fact">Team Members</span>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                    <div className="fact-ico"> <i className="fa fa-map-signs fa-4x" /> </div>
                    <div className="timer" data-perc={24}> <span className="count">24</span> </div>
                    <span className="fact">Office Locations</span>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                    <div className="fact-ico"> <i className="fa fa-hand-peace-o fa-4x" /> </div>
                    <div className="timer" data-perc={1000}> <span className="count">1000</span> </div>
                    <span className="fact">Projects Completed</span>
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
