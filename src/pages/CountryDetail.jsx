import { gql, useQuery } from "@apollo/client";
import CountryDetailCard from "../components/CountryDetailCard";
import Layout from '../components/Layout'
import styled from '@emotion/styled';
import QueryResult from '../components/QueryResult';

const GET_COUNTRY_DETAILS = gql`
    query getDetails($countryId: String!){
        Country(_id: $countryId){            
            _id
            name
            capital
            area
            population
            topLevelDomains{
                name
            }
            flag{
                svgFile
            }           
        }
    }
`

const CountryDetail = (props) => {
    const countryId = props.match.params.id

    const { loading, error, data} = useQuery(GET_COUNTRY_DETAILS, {variables: { countryId }});

    var country = data?.Country[0];

    return <QueryResult error={error} loading={loading} data={data}>
                <Layout grid>     
                    <CountryDetailCard country={country} />                              
                </Layout>
                <BackLinkContainer >
                    <a href={`/`}>Voltar</a>
                </BackLinkContainer>
            </QueryResult>;
}

const BackLinkContainer = styled.div({
    textAlign: 'center'
  });

export default CountryDetail;