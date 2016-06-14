import React from 'react'
import Site from '../../global/site'
import classnames from 'classnames'
import _ from 'lodash'
import ContactInfo from '../../components/common/contactinfo'

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
                  <div>
                    <iframe height="100%" width="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2955.9003101979997!2d-83.48592568426287!3d42.19519897919835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b5a6c921aa379%3A0xc311594193f04aae!2s847+Sumpter+Rd+%23411%2C+Belleville%2C+MI+48111!5e0!3m2!1sen!2sus!4v1465663649316" height="400" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
                  </div>
                  <img src={sidebarImage} alt className="align-left" />
                  <h2><span className="accent-color">{header}</span></h2>
                  <p dangerouslySetInnerHTML={{__html: this.props.contents}}></p>
                </div>
                <div className="col-md-3 col-sm-5">
                  <div className="widget sidebar-widget widget_custom_menu">
                    <ul>
                      <li className="active"><a href="/about.html">About us</a></li>
                      <li><a href="/instant-quote.html">Get an Instant Quote</a></li>
                      <li><a href="/faqs.html">Frequently asked questions</a></li>
                      <li><a href="/contact.html">Contact us</a></li>
                    </ul>
                  </div>
                  <div className="widget sidebar-widget text_widget">
                    <ContactInfo />
                  </div>
                </div>
              </div>
            </div>
            <div className="spacer-40" />
            <div className="padding-tb45 shadow-row parallax-light accent-bg counters" style={{backgroundImage: 'url(/images/leaves1.png)', backgroundRepeat: 'repeat'}}>
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
