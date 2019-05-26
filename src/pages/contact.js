import React from 'react'
import Layout from '../components/Layout'
import SEO from "../components/seo"

const ContactPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Contact" />
    <section className="contact">
      <h1 className="title">Contact</h1>
      <p>Stay in touch! I am always open to discuss new opportunities.</p>
      <h3>
        <a href="mailto:ericssartorius@gmail.com">ericssartorius@gmail.com</a>
      </h3>
    </section>
  </Layout>
)

export default ContactPage
