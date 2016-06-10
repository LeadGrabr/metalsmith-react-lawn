import { default as React, PropTypes } from 'react'
import { Input, Header, Footer, Select, Theme } from '.'

export default class Site extends React.Component {

  static propTypes = {
    metadata: React.PropTypes.object.isRequired
  };

  static childContextTypes = {
    joifulReactForms: PropTypes.object
  };

  getChildContext() {
    return {
      joifulReactForms: {
        JoifulInput: {
          types: {
            select: Select,
            text: Input
          }
        }
      }
    }
  }

  render () {
    return (
      <Theme>
        <div>
          <Header metadata={this.props.metadata} />
          {this.props.children}
          <Footer metadata={this.props.metadata} />
        </div>
      </Theme>
    )
  }
}
