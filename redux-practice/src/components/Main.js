import React, { Component } from 'react'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ""
    }
  }
  // onSubmit =() => {
  //   this.props.getRepos()
  // }
  handleTyping = (e) => {
    // this.setState({ search: e.target.value });
    this.props.getRepos(e.target.value)
  }

  render() {
    console.log("API:", this.props.api)
    return (
      <div>
        <h1>{this.props.title}</h1>
        <input type="text"
        onChange={this.handleTyping}/>
        <ul>
        {this.props.api.map(item => {
          return <p>{item && item.comments_url}</p>
        })}
        </ul>
      </div>
    )
  }
}

//https://api.github.com/search/repositories?q=redux
