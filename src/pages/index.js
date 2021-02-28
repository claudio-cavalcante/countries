import { Router } from '@reach/router';
import { Fragment } from 'react';
import Countries from './countries';
import CountryDetail from './country-detail';
import Header from '../components/Header';

export default function Pages(){
    return(
        <>
        <Header />   
        <Router primary={false} component={Fragment}>
            <Countries path="/" />
            <CountryDetail path="country/:id" />
        </Router>
        </>
    )
}