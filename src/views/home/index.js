import React, { Component } from 'react'

export default class Home extends Component {
  // 构造器是否接收props，是否传递给super，取决于是否希望在构造器中通过this访问props
  constructor (props) {
    super(props)
    this.state = {
      courseList: ['html', 'css', 'js', 'angular', 'react', 'vue']
    }
  }
  // 跳转到详情页
  goDetail = id => {
    this.props.history.push('/detail/' + id)
  }

  // goDetail = () => {
  //   this.props.history.push({
  //     pathname: '/detail',
  //     query: {
  //       userId: 123456,
  //       userName: 'facebook'
  //     }
  //   })
  // }
  
  // goDetail = () => {
  //   this.props.history.push({
  //     pathname: '/detail',
  //     state: {
  //       classId: 2,
  //       className: '六年级2班'
  //     }
  //   })
  // }
  render () {
    const { courseList } = this.state
    return (
      <div className="home">
        <ul>
          <li onClick={() => this.goDetail(1)}>一、路由跳转</li>
          {/* <li onClick={this.goDetail}>路由跳转1</li> */}
          <li>二、路由跳转</li>
          <li>三、路由跳转</li>
        </ul>
        <hr />
        <ul>
          {
            courseList.map((course, index) => <li key={index}>{index + 1}、{course}</li>)
          }
        </ul>
      </div>
    )
  }
}

