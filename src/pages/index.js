import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import {Link} from "gatsby"

export default function Home() {
  return (
    <div style={{textAlign:`center`}}>
      <Header />
      <h1>Hello-World</h1>
      <Link to="/contact">LinkPage acess</Link>
      <Footer footerText="1"/>
    </div>
  )
}
