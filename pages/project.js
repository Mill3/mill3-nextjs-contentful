import React from 'react'

export default class Project extends React.Component {
  
  static async getInitialProps ({query}) {
    return { 
      query: query
    }
  }

  render () {
    console.log(this.props);
    
    return(
      <p>{this.props.query.slug}</p>
    )
  }

}