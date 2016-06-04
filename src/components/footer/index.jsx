var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <div>
        <div className="site-footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="copyrights-col-left">
                  <p>© 2016 Lawn and Garden Professionals. All Rights Reserved</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="copyrights-col-right">
                  <ul className="social-icons-rounded social-icons-colored pull-right">
                    <li className="facebook">
                      <a href="#"><i className="fa fa-facebook-f" /></a>
                    </li>
                    <li className="twitter">
                      <a href="#"><i className="fa fa-twitter" /></a>
                    </li>
                    <li className="googleplus">
                      <a href="#"><i className="fa fa-google-plus" /></a>
                    </li>
                    <li className="youtube">
                      <a href="#"><i className="fa fa-youtube-play" /></a>
                    </li>
                    <li className="vimeo">
                      <a href="#"><i className="fa fa-vimeo" /></a>
                    </li>
                    <li className="instagram">
                      <a href="#"><i className="fa fa-instagram" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a id="back-to-top"><i className="fa fa-angle-double-up" /></a>
      </div>
    )
  }
});

module.exports = Footer;