import CountryDetailCard from "../components/CountryDetailCard";
import Layout from '../components/Layout';
import { ToastProvider } from 'react-toast-notifications';
import Header from './../components/Header';

const CountryDetail = (props) => {
    const countryId = props.match.params.id;  

    return (
        <ToastProvider> 
            <Header /> 
            <Layout grid>     
                <CountryDetailCard countryId={countryId} />                              
            </Layout>
        </ToastProvider>)
}

export default CountryDetail;