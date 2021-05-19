import React from 'react'

import '../App.css'

import FirstSection from '../Components/Home/FirstSection'
import SecondSection from '../Components/Home/SecondSection'
import ThirdSection from '../Components/Home/ThirdSection'
import ForthSection from '../Components/Home/ForthSection'
import Footer from '../Components/Footer'


class Home extends React.Component{
    render(){
        return(
            <section>
                <FirstSection />
                <SecondSection />
                <ThirdSection />
                <ForthSection />
                <Footer />
            </section>
        )
    }
}

export default Home
