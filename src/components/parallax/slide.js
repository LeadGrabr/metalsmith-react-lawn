import { default as React } from 'react'

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

export default Slide
