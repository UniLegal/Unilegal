import React, { useEffect } from 'react'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import slide from '../images/portomono-glass-protect-screen-protector-tempered-glass-slide1.png'
import slide2 from '../images/portomono-glass-protect-screen-protector-tempered-glass-slide2.png'
import slide3 from '../images/portomono-glass-protect-screen-protector-tempered-glass-slide3.png'
import mobslide2 from '../images/portomono-glass-protect-screen-protector-tempered-glass-mobslide1.png'
import mobslide1 from '../images/portomono-glass-protect-screen-protector-tempered-glass-mobslide2.png'
import mobslide3 from '../images/portomono-glass-protect-screen-protector-tempered-glass-mobslide3.png'
import Carousel from 'nuka-carousel';
import ProjectPreviewGrid from '../components/project-preview-grid'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
export const query = graphql`
  query IndexPageQuery1 {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
    
  projects: allSanitySampleProject(
      limit: 6
      sort: {fields: [publishedAt], order: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
    ) {
      edges {
        node {
          id
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
          publishedAt
          slug {
            current
          }
        }
      }
    }
  }
`

const IndexPage = props => {

  const { data, errors } = props
  const site = (data || {}).site

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  function colorSet() {
    document.getElementById('selection').style.color = "black";
  }

  function selectchange() {
    var z = document.getElementById("selection").selectedIndex;
    var z1 = document.getElementsByTagName("option")[z].value;
    document.getElementById("contactform").action = z1;
  }
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []
  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <div className="App">
        <img class="indeximg" src={slide} alt="portomono glass protect screen protector slide" />
        <img class="indeximgmob" src={mobslide2} alt="portomono glass protect screen protector slide" />

        <div class="about">
          <div class="brand">ABOUT UNILEGAL</div>
          <div class="desc">Welcome to the website of UniLegal LLC. We are a dynamic law firm, established in 2002 with a wide range of expertise and experience, providing exceptional advice and service at competitive costs.
          </div>
        </div>
        <div class="indexnews">
          <div class="indexnewswrap">
            <div class="newstitle">NEWS</div>

            {projectNodes && (
              <ProjectPreviewGrid
                nodes={projectNodes}
              />
            )}
            <div class="centre1">
              <a href="/news/"><button class="newsbtn">Read More</button></a>
            </div>
          </div>
        </div>

        <div class="indexcontactwrap">
          <div class="newstitle">CONTACT US</div>

          <div class="contactus">
            <div class="left">

              <form id="contactform" class="contactusform" name="Contact Form" action="https://getsimpleform.com/messages?form_api_token=123ert67890oikjmnhb" method="post">
                <input type='hidden' name='redirect_to' value='http://www.portomono.me/thank-you' />

                <input type="hidden" name="form-name" value="Contact Form" />
                <div class="flex">

                  <div>
                    <input placeholder="Name" type="text" name="name" />
                  </div>
                  <div>
                    <input placeholder="Phone Number" type="text" name="phonenumber" />
                  </div>
                </div>
                <div class="flex">
                  <div>
                    <input placeholder="E-mail" type="email" name="email" />
                  </div>
                  <div>
                    <select id="selection" name="enquirytype" placeholder="Choose Enquiry Type" onClick={colorSet} onChange={selectchange} required="">
                      <option value="" hidden selected="">Choose Enquiry Type</option>
                      <option value="https://getsimpleform.com/messages?form_api_token=98e8867c4b508288f7697c44adfbcb05">Corporate</option>
                      <option value="https://getsimpleform.com/messages?form_api_token=77777777">Litigation</option>
                      <option value="https://getsimpleform.com/messages?form_api_token=666666666">Conveyance</option>
                    </select>
                  </div>
                </div>

                <div class="textarea">
                  <textarea placeholder="Your Message" name="message" />
                </div>
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
