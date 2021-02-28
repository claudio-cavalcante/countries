import { Fragment } from 'react';
import Countries from './Countries';
import CountryDetail from './CountryDetail';
import Header from '../components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from '../Routes';

export default function Pages(){
    return(
        <>
        <Header />   
        <Router>
            <Route exact path={ROUTES.HOME} component={Countries}/>
            <Route path={ROUTES.COUNTRY_DETAILS} component={CountryDetail}/>
        </Router>
        </>
    )
}