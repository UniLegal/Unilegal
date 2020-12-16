import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {mapEdgesToNodes, filterOutDocsWithoutSlugs} from '../lib/helpers'
import headerimg from '../images/unilegal-blog.jpg'
import mobileheaderimg from '../images/unilegal-blog-mobile.jpg'

import {responsiveTitle1} from '../components/typography.module.css'

export const query = graphql`
  query ArchivePageQuery {
    projects: allSanitySampleProject(
      limit: 12
      sort: {fields: [publishedAt], order: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
    ) {
      edges {
        node {
          id
          mainImage {
            asset {
              _id
            }
            alt
          }
          title
          publishedAt
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const ArchivePage = props => {
  const {data, errors} = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const projectNodes =
    data && data.projects && mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)
  return (
    <Layout>
      <SEO title='Blogs' />
      <div class="container1111 desktop">
        <img src={headerimg} alt="Snow" width="1920" height="419" />
        <div class="centered"><h1>News</h1>
        </div>
      </div>
      <div class="container1111 mobile">
        <img src={mobileheaderimg} alt="Snow" width="1015" height="807" />
        <div class="centered"><h1>News</h1>
        </div>
      </div>
      <Container>
        {projectNodes && projectNodes.length > 0 && <ProjectPreviewGrid nodes={projectNodes} />}
      </Container>
    </Layout>
  )
}

export default ArchivePage
