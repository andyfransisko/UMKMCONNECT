import React from 'react'

import '../App.css'

import FirstAbout from '../Components/About/FirstAbout'
import Footer from '../Components/Footer'

class About extends React.Component{
    render(){
        return(
            <section>
                <FirstAbout />
                <Footer />
            </section>
        )
    }
}

export default About
