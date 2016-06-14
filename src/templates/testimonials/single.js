import React from 'react'
import Site from '../../global/site'
import ContactInfo from '../../components/common/contactinfo'
import _ from 'lodash'

export default class TestimonialSingle extends React.Component {

  static propTypes = {
    testimonial: React.PropTypes.number.isRequired,
    metadata: React.PropTypes.object.isRequired
  };

  render() {
    const { testimonials } = this.props.metadata
    const { testimonial, title } = this.props
    const testimonialObject = _.find(testimonials, {id: testimonial})
    const { author, location, text, headline, link, img } = testimonialObject
    const header = `${author} (${location})`
    return (
      <Site title={this.props.title} metadata={this.props.metadata}>
        <div className="hero-area">
          <div className="page-header dark">
            <div className="container">
              <ol className="breadcrumb">
                <li><a href="/index.html">Home</a></li>
                <li><a href="/testimonials.html">Testimonials</a></li>
                <li className="active">{header}</li>
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
                  <div className="row">
                    <h2><span className="col-md-12 col-lg-12 col-sm-12 accent-color">{title}</span></h2>
                  </div>
                  <div className="row">
                    <div className="col-md-8 col-sm-12 col-lg-8">
                      <img src={img} alt className="align-left" />
                    </div>
                    <div dangerouslySetInnerHTML={{__html: this.props.contents}}></div>
                  </div>
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
