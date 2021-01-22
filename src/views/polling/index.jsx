import React, { Component } from 'react'
import PollingHead from '../../components/PollingHead'
import PollingList from '../../components/PollingList'

export default class Polling extends Component {
  render () {
    return (
      <div className="container">
        <PollingHead />
        <PollingList />
      </div>
    )
  }
}
