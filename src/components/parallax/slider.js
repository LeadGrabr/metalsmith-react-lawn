import { default as React } from 'react'

const Slider = ({ children }) =>
  <div className="flexslider heroflex hero-slider" data-pagination="no" data-arrows="yes" data-style="fade" data-pause="yes">
    <ul className="slides">
      {children}
    </ul>
  </div>

export default Slider
