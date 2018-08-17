import React from 'react'
import Link from 'next/link'

import { contentfulClient } from '../utils/contentful'

import {
  LandingWrapper,
  Title,
  Project
} from './index.style'

class Landing extends React.Component {

  static async getInitialProps({ req }) {
    const res = await contentfulClient()
      .getEntries({
        content_type: 'projects',
        locale: 'fr-CA',
        include: 10
      })
  
    const items = await res.items
    return { data: items }
  }

  projects() {    
    console.log(this.props.data);
    
    if (this.props.data) {
      return this.props.data.map((project, index) => 
        <Project order={index} key={index}>
          <Link as={`/project/${project.fields.slug}`} href={{ pathname: '/project', query: { slug: project.fields.slug, id: project.sys.id } }}>
            {project.fields.title}
          </Link>
        </Project>
      )
    }
  }

  render(){ 
    return(
      <LandingWrapper>
        <Title invert>
          Mill3  Studio
        </Title>
        {this.projects()}
      </LandingWrapper>
    )
  }
  
}


export default Landing