import React from 'react'

import '../App.css'

import FirstContact from '../Components/Contact/FirstContact'
import Footer from '../Components/Footer'

class Contact extends React.Component{
    render(){
        return(
            <section>
                <FirstContact />
                <Footer />
            </section>
        )
    }
}

export default Contact
