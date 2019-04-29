import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/utils/Seo'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`omeda`, `sandbox`]} />
    <h1>Welcome to Omeda TBS</h1>
    {/* This should be the pre-auth landing page. */}
  </Layout>
)

export default IndexPage