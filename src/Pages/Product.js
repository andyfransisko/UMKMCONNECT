import React from 'react'

import '../App.css'

import SecondProduct from '../Components/Product/SecondProduct'
import Footer from '../Components/Footer'

class Product extends React.Component{
    render(){
        return(
            <section>
                <SecondProduct />
                <Footer />
            </section>
        )
    }
}

export default Product
