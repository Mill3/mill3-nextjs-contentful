import { createClient } from 'contentful'

export const contentfulClient = () => createClient({
  application: "W_K_Content_Platform",
  host: process.env.CONTENTFUL_HOST,
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});