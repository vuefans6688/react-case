import React, { Component } from 'react'
import Parent from './parent'

export default class ErrorBoundary extends Component {
  render () {
    return (
      <div className="error-boundary">
        <Parent />
      </div>
    )
  }
}
