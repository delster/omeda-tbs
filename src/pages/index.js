import React from "react"
import Layout from "../components/ui/layout"
import SEO from "../components/utils/seo"
import Omeda from "../components/game/omeda"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`omeda`, `sandbox`]} />
    <h1>Omeda TBS</h1>
    <p>This is a pet project and has no business being a Gatsby site instead of a vanilla React app, yet here we are. <span role="img" aria-label="Smiling Emoji">😀</span></p>
    <Omeda />
  </Layout>
)

export default IndexPage