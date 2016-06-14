import React from 'react'
import Site from '../../global/site'
import classnames from 'classnames'
import hash from 'object-hash'
import _ from 'lodash'

export default class SingleService extends React.Component {
  
  static propTypes = {
    service: React.PropTypes.number.isRequired,
    metadata: React.PropTypes.object.isRequired
  };

  render() {
    const { services } = this.props.metadata
    const activeService = _.find(services, {id: this.props.service})
    const { description, title, imageTexts } = activeService
    return (
      <Site title={this.props.title} metadata={this.props.metadata}>
        <div className="hero-area">
          <div className="page-header dark">
            <div className="container">
              {/* Breadcrumb */}
              <ol className="breadcrumb">
                <li><a href="/index.html">Home</a></li>
                <li><a href="/services.html">Services</a></li>
                <li className="active">{title}</li>
              </ol>
              <h1>{title}</h1>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div id="main-container">
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-sm-8">
                  <p className="lead">{description}</p>
                  <hr />
                  <div dangerouslySetInnerHTML={{__html: this.props.contents}}></div>
                  <div className="spacer-60" />
                  <div className="row">
                    {imageTexts && imageTexts.map(({image, text}) => 
                      <div key={hash(text)} className="col-md-6 col-sm-6">
                        <a href={image} className="magnific-image margin-20"><img src={image} alt={text} /></a>
                        <p>{text}</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div className="widget sidebar-widget widget_custom_menu">
                    <ul>
                      <li><a href="#">All Services</a></li>
                      {services.map((service) => 
                        <li
                          key={service.id}
                          className={
                            classnames({
                              'active': activeService.id === service.id
                            })
                          }
                        >
                          <a href={`/services/${service.path}`}>{service.title}</a>
                        </li>
                      )}
                    </ul>
                  </div>
                  <div className="widget sidebar-widget text_widget">
                    <div className="accent-bg text_banner">
                      <h4>Have questions about our services?</h4>
                      <a href="/contact.html" className="btn btn-default btn-ghost btn-light">Contact us</a>
                    </div>
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
