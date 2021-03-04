import React from 'react'
import { render, cleanup, findByTestId, findByText } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing'
import { GET_COUNTRIES_BY_SEARCH_VALUE } from '../graphql/gqlFragments';
import Countries from './Countries';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup)

const mocks = [
    {
        request: {
            query: GET_COUNTRIES_BY_SEARCH_VALUE,
            variables: {
                offset:0,
                first: 12,
                searchValue: ''
            }
        },
        result: {
                "data": {
                  "Country": [
                    {
                      "_id": "0",
                      "name": "Afghanistan",
                      "capital": "Kabul",
                      "__typename": "Country",
                      "flag": {
                        "svgFile": "https://restcountries.eu/data/afg.svg",
                        "__typename": "Flag",
                      }
                    },
                    {
                      "_id": "661",
                      "name": "Brazil",
                      "capital": "Brasília",
                      "__typename": "Country",
                      "flag": {
                        "svgFile": "https://restcountries.eu/data/bra.svg",
                        "__typename": "Flag",
                      }
                    }
                ]
            }
        }
    }    
]

describe('Country', () => {   

    it('should render 2 countries', async () =>{
        const { getByText, findByText, findByAltText } = render(
            
            <MockedProvider mocks={mocks} addTypename={false} > 
                <Router>     
                  <Countries />      
                </Router>   
            </MockedProvider>
        );    

        expect(getByText("Loading...")).toBeInTheDocument();

        const capitalName = await findByText("Kabul");
        expect(capitalName).toBeInTheDocument();

        const countryName = await findByText("Brazil");
        expect(countryName).toBeInTheDocument();

        const brazilFlag = await findByAltText("Brazil flag");
        expect(brazilFlag).toBeInTheDocument();

        const AfeganistanFlag = await findByAltText("Afghanistan flag");
        expect(AfeganistanFlag).toBeInTheDocument();
    });  
});
