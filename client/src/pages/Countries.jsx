import { useQuery, gql } from '@apollo/client';
import CountryCard from '../components/CountryCard'
import Layout from '../components/Layout'
import QueryResult from '../components/QueryResult';

const COUNTRIES  = gql`
  query getCountries {    
    Country{
        _id
        name
        capital
        flag{
            svgFile
        }
    }    
  }
`;

const Countries = () => {
    const { loading, error, data } = useQuery(COUNTRIES);

    return <QueryResult loading={loading} error={error} data={data}>
                <Layout grid showSearchBar={true}>                        
                    { (data?.Country?.map(country => (
                            <CountryCard key={country._id} country={country}></CountryCard>
                        ))) }
                </Layout>
            </QueryResult>;
}

export default Countries;