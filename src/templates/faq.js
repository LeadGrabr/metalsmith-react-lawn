import React from 'react'
import Site from '../global/site'

export default class Contact extends React.Component {
  render () {
    return (
      <Site title={this.props.title} metadata={this.props.metadata}>
        <div className='hero-area'>
          <div className='page-header' style={{backgroundImage: 'url(http://placehold.it/1400x300&text=IMAGE+PLACEHOLDER)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center'}}>
            <div className='container'>
              {/* Breadcrumb */}
              <ol className='breadcrumb'>
                <li><a href='/index.html'>Home</a></li>
                <li className='active'>FAQs</li>
              </ol>
              <h1>Frequently Asked Questions</h1>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div id='main-container'>
          <div className='content'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-9 col-sm-7'>
                  {/* Start Accordion */}
                  <div className='accordion' id='accordionArea'>
                    <div className='accordion-group panel'>
                      <div className='accordion-heading accordionize'> <a className='accordion-toggle active' data-toggle='collapse' data-parent='#accordionArea' href='#oneArea'> How can I stop squirrels from eating my newly planted bulbs? <i className='fa fa-angle-down' /> </a> </div>
                      <div id='oneArea' className='accordion-body in collapse'>
                        <div className='accordion-inner'>Just add data-toggle='collapse' and a data-target to the element to automatically assign control of a collapsible element. The data-target attribute accepts a CSS selector to apply the collapse to. Be sure to add the class collapse to the collapsible element. If you'd like it to default open, add the additional class in.
                          To add accordion-like group management to a collapsible control, add the data attribute data-parent='#selector'. Refer to the demo to see this in action.
                        </div>
                      </div>
                    </div>
                    <div className='accordion-group panel'>
                      <div className='accordion-heading accordionize'> <a className='accordion-toggle' data-toggle='collapse' data-parent='#accordionArea' href='#twoArea'> What hedge would you recommend for decent privacy but doesn’t grow too high? <i className='fa fa-angle-down' /> </a> </div>
                      <div id='twoArea' className='accordion-body collapse'>
                        <div className='accordion-inner'>Just add data-toggle='collapse' and a data-target to the element to automatically assign control of a collapsible element. The data-target attribute accepts a CSS selector to apply the collapse to. Be sure to add the class collapse to the collapsible element. If you'd like it to default open, add the additional class in.
                          To add accordion-like group management to a collapsible control, add the data attribute data-parent='#selector'. Refer to the demo to see this in action.
                        </div>
                      </div>
                    </div>
                    <div className='accordion-group panel'>
                      <div className='accordion-heading accordionize'> <a className='accordion-toggle' data-toggle='collapse' data-parent='#accordionArea' href='#threeArea'> What is a good house plant? <i className='fa fa-angle-down' /> </a> </div>
                      <div id='threeArea' className='accordion-body collapse'>
                        <div className='accordion-inner'>Just add data-toggle='collapse' and a data-target to the element to automatically assign control of a collapsible element. The data-target attribute accepts a CSS selector to apply the collapse to. Be sure to add the class collapse to the collapsible element. If you'd like it to default open, add the additional class in.
                          To add accordion-like group management to a collapsible control, add the data attribute data-parent='#selector'. Refer to the demo to see this in action.
                        </div>
                      </div>
                    </div>
                    <div className='accordion-group panel'>
                      <div className='accordion-heading accordionize'> <a className='accordion-toggle' data-toggle='collapse' data-parent='#accordionArea' href='#fourArea'> What are the best ways to encourage more wildlife into our garden? <i className='fa fa-angle-down' /> </a> </div>
                      <div id='fourArea' className='accordion-body collapse'>
                        <div className='accordion-inner'>Just add data-toggle='collapse' and a data-target to the element to automatically assign control of a collapsible element. The data-target attribute accepts a CSS selector to apply the collapse to. Be sure to add the class collapse to the collapsible element. If you'd like it to default open, add the additional class in.
                          To add accordion-like group management to a collapsible control, add the data attribute data-parent='#selector'. Refer to the demo to see this in action.
                        </div>
                      </div>
                    </div>
                    <div className='accordion-group panel'>
                      <div className='accordion-heading accordionize'> <a className='accordion-toggle' data-toggle='collapse' data-parent='#accordionArea' href='#fiveArea'> How do I protect my garden from earwig infestations? <i className='fa fa-angle-down' /> </a> </div>
                      <div id='fiveArea' className='accordion-body collapse'>
                        <div className='accordion-inner'>Just add data-toggle='collapse' and a data-target to the element to automatically assign control of a collapsible element. The data-target attribute accepts a CSS selector to apply the collapse to. Be sure to add the class collapse to the collapsible element. If you'd like it to default open, add the additional class in.
                          To add accordion-like group management to a collapsible control, add the data attribute data-parent='#selector'. Refer to the demo to see this in action.
                        </div>
                      </div>
                    </div>
                    <div className='accordion-group panel'>
                      <div className='accordion-heading accordionize'> <a className='accordion-toggle' data-toggle='collapse' data-parent='#accordionArea' href='#sixArea'> Do you do on-site visits for commercial businesses? <i className='fa fa-angle-down' /> </a> </div>
                      <div id='sixArea' className='accordion-body collapse'>
                        <div className='accordion-inner'>Just add data-toggle='collapse' and a data-target to the element to automatically assign control of a collapsible element. The data-target attribute accepts a CSS selector to apply the collapse to. Be sure to add the class collapse to the collapsible element. If you'd like it to default open, add the additional class in.
                          To add accordion-like group management to a collapsible control, add the data attribute data-parent='#selector'. Refer to the demo to see this in action.
                        </div>
                      </div>
                    </div>
                    <div className='accordion-group panel'>
                      <div className='accordion-heading accordionize'> <a className='accordion-toggle' data-toggle='collapse' data-parent='#accordionArea' href='#sevenArea'> Do I need to supply any tools? <i className='fa fa-angle-down' /> </a> </div>
                      <div id='sevenArea' className='accordion-body collapse'>
                        <div className='accordion-inner'>Just add data-toggle='collapse' and a data-target to the element to automatically assign control of a collapsible element. The data-target attribute accepts a CSS selector to apply the collapse to. Be sure to add the class collapse to the collapsible element. If you'd like it to default open, add the additional class in.
                          To add accordion-like group management to a collapsible control, add the data attribute data-parent='#selector'. Refer to the demo to see this in action.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Accordion */}
                  <div className='spacer-50' />
                  <h3>Ask a new question</h3>
                  <div className='spacer-20' />
                  <form>
                    <div className='row'>
                      <div className='col-md-6 col-sm-6'>
                        <label>Your Name (required)</label>
                        <input type='text' className='form-control input-lg' />
                      </div>
                      <div className='col-md-6 col-sm-6'>
                        <label>Your Email (required)</label>
                        <input type='email' className='form-control input-lg' />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-6 col-sm-6'>
                        <label>Your Phone (required)</label>
                        <input type='text' className='form-control input-lg' />
                      </div>
                      <div className='col-md-6 col-sm-6'>
                        <label>Your Question</label>
                        <input type='email' className='form-control input-lg' />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-12'>
                        <label>Message</label>
                        <textarea className='form-control input-lg' rows={6} defaultValue={''} />
                        <button type='submit' className='btn btn-primary btn-lg'>Send now</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className='col-md-3 col-sm-5'>
                  <div className='widget sidebar-widget widget_custom_menu'>
                    <ul>
                      <li><a href='/about.html'>About us</a></li>
                      <li><a href='/instant-quote.html'>Book a service</a></li>
                      <li className='active'><a href='#'>Frequently asked questions</a></li>
                      <li><a href='/contact.html'>Contact us</a></li>
                    </ul>
                  </div>
                  <div className='widget sidebar-widget text_widget'>
                    <div className='feature-block'>
                      <h5>Contact Info</h5>
                      <p>Suite 300 Houston<br />Texas - 77042 USA</p><br />
                      <p><strong>Call us toll free</strong><br /><span className='accent-color'>1800-9090-8089</span></p><br />
                    </div>
                  </div>
                  <div className='widget sidebar-widget text_widget'>
                    <a href='#' className='btn btn-primary btn-block'><i className='fa fa-file-pdf-o fa-2x' /> Download price list</a>
                    <a href='#' className='btn btn-primary btn-block'><i className='fa fa-file-pdf-o fa-2x' /> Download brochure</a>
                  </div>
                  <div className='widget sidebar-widget'>
                    <div className='carousel-wrapper'>
                      <div className='row'>
                        <ul className='owl-carousel carousel-fw' id='testimonials-slider' data-columns={1} data-pagination='no' data-arrows='yes' data-single-item='no' data-items-desktop={1} data-items-desktop-small={1} data-items-tablet={1} data-items-mobile={1}>
                          <li className='item'>
                            <div className='testimonial-block'>
                              <blockquote>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.</p>
                              </blockquote>
                              <div className='testimonial-avatar'><img src='http://placehold.it/100x100&text=IMAGE+PLACEHOLDER' alt height={60} width={60} /></div>
                              <div className='testimonial-info'>
                                <div className='testimonial-info-in'>
                                  <strong>Arthur Henry</strong><span>Florida</span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className='item'>
                            <div className='testimonial-block'>
                              <blockquote>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.</p>
                              </blockquote>
                              <div className='testimonial-avatar'><img src='http://placehold.it/100x100&text=IMAGE+PLACEHOLDER' alt height={60} width={60} /></div>
                              <div className='testimonial-info'>
                                <div className='testimonial-info-in'>
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
          </div>
        </div>
      </Site>
    )
  }
}
