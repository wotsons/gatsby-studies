import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import {Link} from "gatsby"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <Header />
        <h1>Hello-World</h1>
        <Link to="/contact">LinkPage acess</Link>
      <Footer footerText="1"/>
    </Layout>
  )
}
