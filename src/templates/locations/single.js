import React from 'react'
import Site from '../../global/site'
import classnames from 'classnames'
import _ from 'lodash'

export default class SingleLocation extends React.Component {
  
  static propTypes = {
    location: React.PropTypes.number.isRequired,
    metadata: React.PropTypes.object.isRequired
  };

  render() {
    const { services } = this.props.metadata
    const activeService = _.find(services, {id: this.props.service})
    return (
      <Site title={this.props.title} metadata={this.props.metadata}>
        <div dangerouslySetInnerHTML={{__html: this.props.contents}}></div>
      </Site>
    )
  }
}
