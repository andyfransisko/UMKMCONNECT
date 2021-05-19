import React from 'react'
import { Switch, Route} from 'react-router-dom'

import Home from '../Pages/Home'
import About from '../Pages/About'
import Product from '../Pages/Product'
import Contact from '../Pages/Contact'
import Success from '../Components/Contact/Success'

export default function Routes(){
    return(
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/About" component={About} />
            <Route path="/Product" component={Product} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Success" component={Success} />

            <Route component={Home} />
        </Switch>
    )
}