import Countries from './Countries';
import CountryDetail from './CountryDetail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from '../Routes';
import Header from './../components/Header';

export default function Pages(){
    return(        
        <>
        
        <Router>   
        <Header /> 
            <Route exact path={ROUTES.HOME} component={Countries}/>
            <Route path={ROUTES.COUNTRY_DETAILS} component={CountryDetail}/>            
        </Router>
        </>
    )
}