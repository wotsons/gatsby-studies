import React from "react"
import {Link} from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Contact(){
    return (
        <div style={{textAlign:`center`}}>
            <Header />
            <h1>Contact Us</h1>
            <Link to="/"> HOME </Link>
            <Footer footerText="1"/>
        </div>
            
    )
}