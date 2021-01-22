import React, { Component } from 'react'
import axios from 'axios'

export default class MostPopular extends Component {
  state = {
    repositoryName: '',
    repositoryUrl: ''
  }
  async componentDidMount () {
    const url = `https://api.github.com/search/repositories?q=react&sort=stars`
    // 使用fetch发送请求
    fetch(url).then(response => {
      return response.json()
    }).then(data => {
      const { name, html_url } = data.items[0]
      // 更新状态
      this.setState({
        repositoryName: name,
        repositoryUrl: html_url
      })
    })

    // 使用axios发送请求
    axios.get(url).then(response => {
      const result = response.data
      // 得到数据
      const { name, html_url } = result.items[0]
      // 更新状态
      this.setState({
        repositoryName: name,
        repositoryUrl: html_url
      })
    }).catch(error => {
      console.log(error.message)
    })

    // 使用async、await发送请求
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    } 
  }
  render () {
    const { repositoryName, repositoryUrl } = this.state
    if (!repositoryName) {
      return (
        <h2>加载中...</h2>
      )
    } else {
      return (
        <h2>github上最受欢迎的仓储库是<a href={repositoryUrl}>{repositoryName}</a></h2>
      )
    }
  }
}

