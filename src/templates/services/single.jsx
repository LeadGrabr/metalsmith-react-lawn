import React from 'react'
import Site from '../../global/site'

export default class SingleService extends React.Component {
  render() {
    return (
      <Site title={this.props.title}>
        <div className="hero-area">
          <div className="page-header" style={{backgroundImage: 'url(http://placehold.it/1400x300&text=IMAGE+PLACEHOLDER)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center'}}>
            <div className="container">
              {/* Breadcrumb */}
              <ol className="breadcrumb">
                <li><a href="index.html">Home</a></li>
                <li><a href="services.html">Services</a></li>
                <li className="active">Fall and Spring Cleanup</li>
              </ol>
              <h1>Fall and Spring Cleanup</h1>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div id="main-container">
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-sm-8">
                  <p className="lead">Vestibulum quam nisi, pretium a nibh sit amet, consectetur hendrerit mi. Aenean imperdiet lacus sit amet elit porta, et malesuada erat bibendum. Cras sed nunc massa.</p>
                  <hr />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor lacinia diam quis imperdiet. Proin vitae iaculis nisl. Cras eleifend quam lectus, sed bibendum libero convallis at. Nulla sagittis convallis neque at scelerisque. Pellentesque placerat bibendum magna, semper accumsan sem congue nec. Etiam viverra, ipsum vel suscipit varius, neque odio suscipit orci, et molestie metus mi a dui. Sed eu risus vel lacus varius varius. Vivamus blandit arcu quis turpis molestie, vulputate vulputate mi ullamcorper. Nunc lacinia eget libero ac cursus. Ut laoreet magna vitae lorem ornare scelerisque. Sed gravida imperdiet leo, ac mollis urna venenatis sit amet. Sed vitae lacus in libero tempor elementum. Cras eleifend hendrerit velit, vel tincidunt enim ornare nec. Proin nec purus leo.</p>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="feature-block text-align-center">
                        <img src="images/tree-autumn.jpg" alt="Autumn" />
                        <h5>Tips &amp; Tricks to follow before Autumn</h5>
                      </div>
                    </div>
                    <div className="spacer-30 visible-sm visible-xs" />
                    <div className="col-md-8">
                      <div className="spacer-50" />
                      <div className="accordion" id="toggleArea">
                        <div className="accordion-group panel">
                          <div className="accordion-heading togglize"> <a className="accordion-toggle" data-toggle="collapse" data-parent="#" href="#collapseOne"> Lorem ipsum dolor sit amet, consectetur adipiscing elit <i className="fa fa-plus-circle" /> <i className="fa fa-minus-circle" /> </a> </div>
                          <div id="collapseOne" className="accordion-body collapse">
                            <div className="accordion-inner">Just add data-toggle="collapse" and a data-target to the element to automatically assign control of a collapsible element. The data-target attribute accepts a CSS selector to apply the collapse to. Be sure to add the class collapse to the collapsible element. If you'd like it to default open, add the additional class in.
                              To add accordion-like group management to a collapsible control, add the data attribute data-parent="#selector". Refer to the demo to see this in action.</div>
                          </div>
                        </div>
                        <div className="accordion-group panel">
                          <div className="accordion-heading togglize"> <a className="accordion-toggle" data-toggle="collapse" data-parent="#" href="#collapseTwo"> Cras eleifend hendrerit velit <i className="fa fa-plus-circle" /> <i className="fa fa-minus-circle" /> </a> </div>
                          <div id="collapseTwo" className="accordion-body collapse">
                            <div className="accordion-inner">Just add data-toggle="collapse" and a data-target to the element to automatically assign control of a collapsible element. The data-target attribute accepts a CSS selector to apply the collapse to. Be sure to add the class collapse to the collapsible element. If you'd like it to default open, add the additional class in.
                              To add accordion-like group management to a collapsible control, add the data attribute data-parent="#selector". Refer to the demo to see this in action.</div>
                          </div>
                        </div>
                        <div className="accordion-group panel">
                          <div className="accordion-heading togglize"> <a className="accordion-toggle" data-toggle="collapse" data-parent="#" href="#collapseThird"> Etiam viverra <i className="fa fa-plus-circle" /> <i className="fa fa-minus-circle" /> </a> </div>
                          <div id="collapseThird" className="accordion-body collapse">
                            <div className="accordion-inner">Just add data-toggle="collapse" and a data-target to the element to automatically assign control of a collapsible element. The data-target attribute accepts a CSS selector to apply the collapse to. Be sure to add the class collapse to the collapsible element. If you'd like it to default open, add the additional class in.
                              To add accordion-like group management to a collapsible control, add the data attribute data-parent="#selector". Refer to the demo to see this in action.</div>
                          </div>
                        </div>
                        <div className="accordion-group panel">
                          <div className="accordion-heading togglize"> <a className="accordion-toggle" data-toggle="collapse" data-parent="#" href="#collapseFourth"> Nulla sagittis convallis neque at <i className="fa fa-plus-circle" /> <i className="fa fa-minus-circle" /> </a> </div>
                          <div id="collapseFourth" className="accordion-body collapse">
                            <div className="accordion-inner">Just add data-toggle="collapse" and a data-target to the element to automatically assign control of a collapsible element. The data-target attribute accepts a CSS selector to apply the collapse to. Be sure to add the class collapse to the collapsible element. If you'd like it to default open, add the additional class in.
                              To add accordion-like group management to a collapsible control, add the data attribute data-parent="#selector". Refer to the demo to see this in action.</div>
                          </div>
                        </div>
                        <div className="accordion-group panel">
                          <div className="accordion-heading togglize"> <a className="accordion-toggle" data-toggle="collapse" data-parent="#" href="#collapseFifth"> Lorem ipsum dolor sit amet, consectetur adipiscing elit <i className="fa fa-plus-circle" /> <i className="fa fa-minus-circle" /> </a> </div>
                          <div id="collapseFifth" className="accordion-body collapse">
                            <div className="accordion-inner">Just add data-toggle="collapse" and a data-target to the element to automatically assign control of a collapsible element. The data-target attribute accepts a CSS selector to apply the collapse to. Be sure to add the class collapse to the collapsible element. If you'd like it to default open, add the additional class in.
                              To add accordion-like group management to a collapsible control, add the data attribute data-parent="#selector". Refer to the demo to see this in action.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="spacer-60" />
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <a href="http://placehold.it/600x400&text=IMAGE+PLACEHOLDER" className="magnific-image margin-20"><img src="http://placehold.it/600x400&text=IMAGE+PLACEHOLDER" alt /></a>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor lacinia diam quis imperdiet. Proin vitae iaculis nisl. Cras eleifend quam lectus, sed bibendum libero convallis at. Nulla sagittis convallis neque at scelerisque. Pellentesque placerat bibendum magna, semper accumsan sem congue nec. Etiam viverra, ipsum vel suscipit varius, neque odio suscipit orci, et molestie metus mi a dui. Sed eu risus vel lacus varius varius.</p>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <a href="http://placehold.it/600x400&text=IMAGE+PLACEHOLDER" className="magnific-image margin-20"><img src="http://placehold.it/600x400&text=IMAGE+PLACEHOLDER" alt /></a>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor lacinia diam quis imperdiet. Proin vitae iaculis nisl. Cras eleifend quam lectus, sed bibendum libero convallis at. Nulla sagittis convallis neque at scelerisque. Pellentesque placerat bibendum magna, semper accumsan sem congue nec. Etiam viverra, ipsum vel suscipit varius, neque odio suscipit orci, et molestie metus mi a dui. Sed eu risus vel lacus varius varius.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div className="widget sidebar-widget widget_custom_menu">
                    <ul>
                      <li><a href="#">All Services</a></li>
                      <li className="active"><a href="service-single.html">Fall and Spring Cleanup</a></li>
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
        <div dangerouslySetInnerHTML={{__html: this.props.contents}}></div>
      </Site>
    )
  }
}
