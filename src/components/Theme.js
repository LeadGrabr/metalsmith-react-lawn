// import './style.scss'
import { Component, PropTypes } from 'react'
// import { default as color } from 'color'

const baseColors = {
  green: '#a5c243',
  // black: '#404040',
  white: '#fff'
  // lightGray: '#f2f2f2',
  // gray: '#ddd',
  // midgray: '#888',
  // blue: '#3c86c8',
  // lightBlue: 'aliceblue',
  // red: '#f52',
  // orange: '#f70',
  // green: '#1c7'
}

export const colors = {
  ...baseColors,
  primary: baseColors.green
  // secondary: baseColors.lightBlue,
  // default: baseColors.black,
  // info: baseColors.blue,
  // success: baseColors.green,
  // warning: baseColors.orange,
  // error: baseColors.red
}

const scale = [0, 5, 25, 37, 64]
const fontSizes = [64, 32, 25, 19, 18, 14, 12]

// const shadows = {
//   black: `0 0 18px 4px ${color(colors.black).alpha(0.1).rgbString()}`,
//   lightBlue: `0px 0px 14px 3px ${color(colors.lightBlue).alpha(0.9).rgbString()}`
// }

export default class Theme extends Component {

  static propTypes = {
    children: PropTypes.node
  };

  static childContextTypes = {
    betterReactSpinkit: PropTypes.object,
    breakpoints: PropTypes.object,
    colors: PropTypes.object,
    reactIconBase: PropTypes.object,
    rebass: PropTypes.object,
    reflexbox: PropTypes.object,
    // shadows: PropTypes.object
  };

  getChildContext () {
    return {
      betterReactSpinkit: {
        color: colors.primary,
        size: 50
      },
      breakpoints: {
        small: 425,
        medium: 768,
        large: 993
      },
      colors,
      reactIconBase: {
        size: 24
      },
      reflexbox: { scale },
      rebass: {
        colors,
        fontSizes,
        scale,
        Select: {
          backgroundColor: colors.white,
          borderRadius: 2
        }
      },
      // shadows
    }
  }

  render () {
    return this.props.children
  }
}
