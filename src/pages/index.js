import React, { Component } from "react"
import Layout from "../components/layout/Layout"
import MainImage from "../components/mainImage/mainImage"
import img from "../assets/images/home-bg.jpg"
import Divider from "../components/layout-div/divider"
import LayoutDivider from "../components/layout-div/layout"
import AboutSection from "../components/startupbiznes/startupbiznes"
import Title from "../components/title/title"
import Text from "../components/text/text"
import Protofol from "../components/protfolio/portfolio"
import { FaLaptop, FaMobile, FaLifeRing } from "react-icons/fa"
import protfolioList from "../constants/portfolio-list.json"
import Container from "../components/container/container"
import Protfol from "../components/protfolio/portfolio"
import LoadMore from '../components/LoadMore/Button'

class Index extends Component {
  state = {
    protfolio: protfolioList,
    count: 6,
  }

  render() {
    return (
      <Layout>
        <MainImage
          imgBackground={img}
          text1="welcome to"
          text2="Onetel Design Studio"
        />
        <LayoutDivider>
          <Divider
            bgColor="#c14000"
            icon={<FaLaptop size="32" color="#fff" />}
            title="Responsive"
            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet."
          />
          <Divider
            bgColor="#009988"
            icon={<FaMobile size="32" color="#fff" />}
            title="Easy to use"
            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet."
          />
          <Divider
            bgColor="#ffa500"
            icon={<FaLifeRing size="32" color="#fff" />}
            title="Quick Support"
            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet."
          />
        </LayoutDivider>
        <AboutSection
          title="Startup Business"
          text1="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat."
          text2="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat."
        />
        <Title title="Our Projects" />
        <Text text=" Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat." />
        <Protofol />
        <Container>
          <Protfol list ={this.state.protfolio} count= {this.state.count}/>
          {this.state.protfolio.length > this.state.count ? <LoadMore click = {() => this.setState({count:this.state.protfolio.length})} /> : null}
        </Container>
      </Layout>
    )
  }
}
export default Index
