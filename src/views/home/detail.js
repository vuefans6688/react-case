import React, { Component } from 'react'

export default class Detail extends Component {
  state = {
    detailId: '',

    // userId: '',
    // userName: ''

    // info: {
    //   userId: '',
    //   userName: ''
    // }

    // info: {
    //   classId: '',
    //   className: ''
    // }
  }
  componentDidMount () {
    this.setState({
      detailId: this.props.match.params.id
    })
  }

  // componentDidMount () {
  //   this.setState({
  //     // userId: this.props.location.query.userId,
  //     // userName: this.props.location.query.userName
  
  //     info: {
  //       userId: this.props.location.query.userId,
  //       userName: this.props.location.query.userName
  //     }
  //   })
  // }

  // componentDidMount () {
  //   this.setState({
  //     info: {
  //       classId: this.props.location.state.classId,
  //       className: this.props.location.state.className
  //     }
  //   })
  // }
  render () {
    const { detailId } = this.state

    // const { userId, userName } = this.state

    // const { userId, userName } = this.state.info

    // const { classId, className } = this.state.info
    return (
      <div className="detail">详情页: {detailId}</div>

      // <div>
      //   <p>用户ID: {userId}</p>
      //   <p>用户名: {userName}</p>
      // </div>

      // <div>
      //   <p>班级ID: {classId}</p>
      //   <p>班级名称: {className}</p>
      // </div>
    )
  }
}

 