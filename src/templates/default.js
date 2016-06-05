import React from 'react'
import Site from '../global/site'

export default class Default extends React.Component {
  render() {
    <Site title={this.props.title}>
        <h2>{this.props.title}</h2>
        <div dangerouslySetInnerHTML={{__html: this.props.contents}}></div>
      </Site>
    )
  }
}
