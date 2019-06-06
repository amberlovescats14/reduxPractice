import React, { Component } from 'react'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ""
    }
  }
  componentDidMount =() => {
    this.props.getRepos()
  }
  handleTyping = (e) => {
    this.setState({ search: e.target.value });
  }

  render() {
    // console.log("API:", this.props.api.items)
    return (
      <div>
        <h1>{this.props.title}</h1>
        <input type="text"
        onChange={(e)=> this.handleTyping(e)}/>
        <ul>
        {/* {this.props.api.map(item => {
          console.log(item)
        })} */}
        </ul>
      </div>
    )
  }
}

//https://api.github.com/search/repositories?q=redux
