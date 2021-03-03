import CountryDetailCard from "../components/CountryDetailCard";
import Layout from '../components/Layout';
import { ToastProvider } from 'react-toast-notifications';

const CountryDetail = (props) => {
    const countryId = props.match.params.id;  

    return (
        <ToastProvider> <Layout grid>     
                <CountryDetailCard countryId={countryId} />                              
            </Layout>
        </ToastProvider>)
}

export default CountryDetail;