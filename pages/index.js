import React from 'react'
import styled from 'styled-components';

import { contentfulClient } from '../utils/contentful'

const LandingWrapper = styled.section`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const Title = styled.h1`
  margin: 1em 0;
  font-size: 4rem;
  font-weight: 100;
  
`
const Project = styled.article`
  padding: 2rem;
  border-bottom: 1px solid purple;
  ${props => props.order === 0 ? 'border-top: 1px solid purple;' : ''}
`

class Landing extends React.Component {

  static async getInitialProps({ req }) {
    const res = await contentfulClient()
      .getEntries({
        content_type: 'projects',
        include: 10
      })
  
    const items = await res.items
    return { data: items }
  }

  projects() {
    console.log(this.props);
    
    if (this.props.data) {
      return this.props.data.map((project, index) => 
        <Project order={index} key={index}>{project.fields.title}</Project>
      )
    }
  }

  render(){ 
    return(
      <LandingWrapper>
        <Title>
          Welcome to next.js!!!
        </Title>
        {this.projects()}
      </LandingWrapper>
    )
  }
  
}


export default Landing