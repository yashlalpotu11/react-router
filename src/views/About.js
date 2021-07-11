import React from 'react'
import MainLayout from '../Layouts/MainLayout'

const About = () =>{
    return (
        <>
            <MainLayout />
                <div style={container}>
                    <h1>About page</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nobis consectetur modi quibusdam laudantium, enim veniam distinctio qui ex voluptatem
                     ipsum aliquid ad, veritatis quam sint quia mollitia, esse culpa!</p>
                </div>
            <MainLayout/>
        </>
    )
}
const container = {
    padding : "0 6rem"
}

export default About;