import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import '../../assets/style/style.scss'
const Layout = (props) =>{
    return(
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}

export default Layout;