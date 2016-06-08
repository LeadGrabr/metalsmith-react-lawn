import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

export default class Site extends React.Component {
  static propTypes = {
    metadata: React.PropTypes.object.isRequired
  };

  render () {
    return (
      <div>
        <Header metadata={this.props.metadata} />
        {this.props.children}
        <Footer metadata={this.props.metadata} />
      </div>
    )
  }
}
