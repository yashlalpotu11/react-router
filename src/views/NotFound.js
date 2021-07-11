import React from 'react'
import MainLayout from '../Layouts/MainLayout'

const NotFound = () =>{
    return (
        <>
            <MainLayout />
                <div style={container}>
                    <h1>NotFound page</h1>
                </div>
            <MainLayout/>
        </>
    )
}
const container = {
    padding : "0 6rem"
}

export default NotFound;