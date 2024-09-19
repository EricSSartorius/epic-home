import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="About" />
    <section className="about">
      <h1 className="title">About Me</h1>
      <p>Life is short and I want to see how much I can explore and learn before I die! If you are curious about my world travels, check out my <Link to="/blog/">travel blog.</Link></p>
      <p>Looking to turn an idea into a SaaS product or need help on a side-project? <Link to="/contact/">Shoot me a message</Link> so we can talk more about your needs!</p>
      <ul>
        <li className="work-item">
          <h3>Web Development And UI/UX Design</h3>
          <p>I have over a decade of experience with web development and design. Most of my recent projects are done in Svelte and React. Although I mostly do full-stack programming, I also have experience creating mockups Figma and working as a product manager as well.</p>
        </li>
        <li className="work-item">
          <h3>Translation</h3>
          <p>After studying abroad in Japan in 2004, I realized I had a passion for learning languages. I then went on to major in Japanese, live in Japan for 4 years, and then move to Korea for 6 years and learn Korean. During my time abroad, I had many opportunities to do freelance translation, interpretation, and subtitling work.</p>
        </li>
        <li className="work-item">
          <h3>Movement Coach</h3>
          <p>I am now into my 40s yet never seemed to have outgrown my days at the playground. I have over 20 years experience in breakdancing, 10 years in calesthenic training, as well as  experience in capoeira, acrobatics, stunt work, pole dancing, boxing, brazillian jujitsu, tricking, gymnastics, and parkour. I would love to help anyone else that wants to test the limits of their body and move like they never have before.</p>
        </li>
      </ul>
    </section>
  </Layout>
)

export default AboutPage
