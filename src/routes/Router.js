import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../views/Home'
import About from '../views/About'
import Contact from '../views/Contact'
import NotFound from '../views/NotFound'


const Router = () =>{
    return (
        <>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} />
                {/* <Route path="/detail/:id" exact component={Detail} /> */}
                <Route component={NotFound} />
            </Switch>
        </>
    )
}
export default Router;
