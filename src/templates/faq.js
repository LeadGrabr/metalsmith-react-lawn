import React from 'react'
import Site from '../global/site'
import hash from 'object-hash'
import ContactInfo from '../components/common/contactinfo'

export default class Faq extends React.Component {
  render() {
    return (
      <Site title={this.props.title} metadata={this.props.metadata}>
        <div className="hero-area">
          <div className="page-header dark">
            <div className="container">
              {/* Breadcrumb */}
              <ol className="breadcrumb">
                <li><a href="/index.html">Home</a></li>
                <li className="active">FAQs</li>
              </ol>
              <h1>Frequently Asked Questions</h1>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div id="main-container">
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-sm-7">
                  {/* Start Accordion */}
                  <div className="accordion" id="accordionArea">
                    {this.props.metadata.faqs.map(({question, answer}) =>
                      <div key={hash(question)} className="accordion-group panel">
                        <div className="accordion-heading accordionize"> <a className="accordion-toggle active" data-toggle="collapse" data-parent="#accordionArea" href={`#${hash(question)}`}>{question}<i className="fa fa-angle-down" /> </a> </div>
                        <div id={hash(question)} className="accordion-body in collapse">
                          <div className="accordion-inner">{answer}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-3 col-sm-5">
                  <div className="widget sidebar-widget widget_custom_menu">
                    <ul>
                      <li><a href="/about.html">About us</a></li>
                      <li><a href="/instant-quote.html">Get an Instant Quote</a></li>
                      <li className="active"><a href="#">Frequently asked questions</a></li>
                      <li><a href="/contact.html">Contact us</a></li>
                    </ul>
                  </div>
                  <div className="widget sidebar-widget text_widget">
                    <ContactInfo />
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
