import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = (props) =>{
    return (
        <>
            <Navbar/>
                {props.children}
            <Footer/>
        </>
    )
}
export default MainLayout;