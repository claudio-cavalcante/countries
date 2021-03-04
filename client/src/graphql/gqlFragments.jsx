import { gql } from '@apollo/client';

const FRAGMENT_COUNTRY_FIELDS = gql`
  fragment CountryFields on Country{
        _id
        name
        capital
        flag{
            svgFile
        }
  }
`

const GET_COUNTRIES  = gql`
  query getCountries {    
    Country{
      ...CountryFields
    }    
  }
  ${FRAGMENT_COUNTRY_FIELDS}
`;

const GET_COUNTRIES_BY_SEARCH_VALUE = gql`
  query getCountries($searchValue: String!, $offset: Int!, $first: Int!){
    Country(offset: $offset, first: $first, filter: { OR: [{ name_contains: $searchValue}, {capital_contains: $searchValue}]}){
      ...CountryFields
    }
  }
  ${FRAGMENT_COUNTRY_FIELDS}
`

const GET_COUNTRY_DETAILS = gql`
    query getDetails($countryId: String!, $first: Int!){
        Country(_id: $countryId, first: $first){            
            _id
            name,
            capital,
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

export { GET_COUNTRIES };
export { GET_COUNTRIES_BY_SEARCH_VALUE };
export { GET_COUNTRY_DETAILS }