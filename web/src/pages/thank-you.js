import React from 'react'
import Container from '../components/container'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { Link } from 'gatsby'

const thankYouPage = props => {


    return (
        <Layout>
            <SEO title="Thank You" />
            <Container>
                <div class="thankyou">
                    <h1>Thank you for getting in touch with us.</h1>
                    <h4>We will try our best to get back to you in one business day.</h4>
                    <div class="center">
                        <Link class="btn" to="/">Back To Home</Link>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}

export default thankYouPage