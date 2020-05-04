import React from "react"
import Layout from "../components/layout/Layout"
import MainImage from "../components/mainImage/mainImage"
import img from "../assets/images/contact-header.jpg"

const contact = () => {
  return (
    <Layout>
      <MainImage imgBackground={img} />
    </Layout>
  )
}

export default contact
