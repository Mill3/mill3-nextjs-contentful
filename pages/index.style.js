import styled from 'styled-components';

export const LandingWrapper = styled.section`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const Title = styled.h1`
  margin: 1em 0;
  font-size: 4rem;
  font-weight: 900;
  text-transform: uppercase;
  ${props => props.invert ? 'color: red;' : 'color: block;'}
`

export const Project = styled.article`
  padding: 2rem;
  border-bottom: 1px solid black;
  ${props => props.order === 0 ? 'border-top: 1px solid purple;' : ''}
`