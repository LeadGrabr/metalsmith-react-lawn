import { default as React, PropTypes } from 'react'

const Slide = ({ background, subtitle, title }) =>
  <li
    className="parallax"
    style={{ backgroundImage: `url(${background})` }}
  >
    <div className="flex-caption text-align-center">
      <div className="container">
        <div className="flex-caption-table">
          <div className="flex-caption-cell">
            <div className="flex-caption-text">
              {title}
              {subtitle}
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>

Slide.propTypes = {
  background: PropTypes.string.isRequired,
  subtitle: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired
}

export default Slide
