import React from "react"
import Layout from "../components/layout/Layout"
import MainImage from "../components/mainImage/mainImage"
import img from "../assets/images/about-header.jpg"

const aboutus = () => {
  return (
    <Layout>
      <MainImage imgBackground={img} />
    </Layout>
  )
}

export default aboutus
