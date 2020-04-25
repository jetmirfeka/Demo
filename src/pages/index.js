import React from 'react';
import Layout from '../components/layout/Layout';
import MainImage from '../components/mainImage/mainImage';
import img from '../assets/images/home-bg.jpg';
import Divider from '../components/layout-div/divider';
import LayoutDivider from '../components/layout-div/layout';

const  index = () => {
    return (
        <Layout>
            <MainImage
                imgBackground = {img}
                text1='welcome to'
                text2='Onetel Design Studio'
            />
            <LayoutDivider>
                <Divider 
                    bgColor='#c14000'
                    icon ='fa-laptop'
                    title ='Responsive'
                    text ="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet."
                />
                <Divider 
                    bgColor='#c12dd0'
                    icon ='fa-laptop'
                    title ='Responsive'
                    text ="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet."
                />
                
            </LayoutDivider>
        </Layout>
    )
}

export default index;

