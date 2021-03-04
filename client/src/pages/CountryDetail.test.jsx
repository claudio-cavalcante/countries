import React from 'react'
import { render, cleanup } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing'
import { GET_COUNTRY_DETAILS } from '../graphql/gqlFragments';
import CountryDetail from './CountryDetail';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup)

const mocks = [
    {
        request: {
            query: GET_COUNTRY_DETAILS,
            variables: {
                countryId: "0",
                first: 1
            }
        },
        result: {
                "data": {
                  "Country": [
                    {
                      "_id": "0",
                      "name": "Brazil",
                      "capital": "Brasília",
                      "area": 999,
                      "population": 888,
                      "__typename": "Country",
                      "topLevelDomains":[{
                        "name": ".br",
                        "__typename": "TopLevelDomain",
                      }],
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

    it('should render 1 countries', async () =>{
        const {  findByText, findByLabelText, getByText } = render(
            
            <MockedProvider mocks={mocks} addTypename={false} >
                <Router>      
                    <CountryDetail match={{ params: {id: "0"}}}/>
                </Router>       
            </MockedProvider>
        );    

        expect(getByText("Loading...")).toBeInTheDocument();

        const $elCountryName = await findByText("Brazil");
        expect($elCountryName).toBeInTheDocument();

        const $elCapitalLabel = await findByLabelText("Capital:");
        expect($elCapitalLabel).toBeInTheDocument();        
        const $elCapitalInput = $elCapitalLabel.parentElement.querySelector("input");        
        expect($elCapitalInput).toBeInTheDocument();

        const $elAreaLabel = await findByLabelText("Área:");
        expect($elAreaLabel).toBeInTheDocument();
        const $elAreaInput = $elAreaLabel.parentElement.querySelector("input");        
        expect($elAreaInput).toBeInTheDocument();

        const $elPopulacaoLabel = await findByLabelText("População:");
        expect($elPopulacaoLabel).toBeInTheDocument();
        const $elPopulacaoInput = $elPopulacaoLabel.parentElement.querySelector("input");        
        expect($elPopulacaoInput).toBeInTheDocument();        
    });      
});