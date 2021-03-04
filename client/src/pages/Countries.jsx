import { useQuery } from '@apollo/client';
import CountryCard from '../components/CountryCard'
import Layout from '../components/Layout'
import QueryResult from '../components/QueryResult';
import { GET_COUNTRIES_BY_SEARCH_VALUE } from '../graphql/gqlFragments';
import { useState } from 'react';
import { ToastProvider } from 'react-toast-notifications';
import SearchControl from '../components/SearchControl';
import styled from '@emotion/styled';
import { PrimaryButton } from '../components/Buttons';


const Countries = () => {

    const [searchValue, setSearchValue] = useState('');
    const [limit, setLimit] = useState(12);

    const { loading, data, error, fetchMore } = useQuery(GET_COUNTRIES_BY_SEARCH_VALUE, 
      { 
      variables: { 
        searchValue,
        first: limit,
        offset: 0
      }}); 

    /*console.log({loading})
    console.log({data})
    console.log({error})*/

    const handleOnChangeTypedValue = (e) => {
      
        const searchValue = e.target.value;

        setSearchValue(searchValue);        
    }

    const placeholder = "Pesquise aqui pelo nome do país ou pelo nome da capital do país...";  

    return  (     
            <ToastProvider>               
              <SearchContainer>
                <SearchControl placeholder={placeholder} searchValue={searchValue} onChange={handleOnChangeTypedValue} /> 
              </SearchContainer>

              <Layout grid>  
                <QueryResult loading={loading} error={error} data={data}>                 
                  { (data && data.Country && data?.Country?.map(country => (
                          <CountryCard key={country._id} country={country}></CountryCard>
                      ))) }
                </QueryResult>                    
              </Layout>

              <LoadMoreButtonContainer>
                {data && data.Country.length && !loading && <LoadMoreButton onClick={() => { 
                      var currentLength = data?.Country?.length;

                      fetchMore({variables: {offset: currentLength, limit}}).then(fetchMoreResult  => setLimit(currentLength + fetchMoreResult.data.Country.length)) 
                    }}>Mais</LoadMoreButton> } 
                </LoadMoreButtonContainer>
            </ToastProvider>      
        );
}

export default Countries;

const LoadMoreButtonContainer = styled.div({
  display: 'flex',
  width: '100%',
  margin: '20px 0 30px'
})

const LoadMoreButton = styled(PrimaryButton)({
  margin: '0 auto'
})

const SearchContainer = styled.div({
  display: 'table',
  margin: '0 auto'
});
