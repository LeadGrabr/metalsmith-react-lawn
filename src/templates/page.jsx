import React from 'react'
import Site from '../global/site'

export default class Page extends React.Component {
  render() {
    var myDate = 'no date';
    if (this.props.date) {
      myDate = this.props.date.toString();
    }
    return (
      <Site title={this.props.title}>
        <h2>Post: {this.props.title}</h2>
        <p>Date : {myDate}</p>
        <div dangerouslySetInnerHTML={{__html: this.props.contents}}></div>
      </Site>
    )
  }
}
