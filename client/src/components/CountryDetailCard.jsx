import styled from '@emotion/styled';
import { colors } from '../styles';
import FormControl from './FormControl';
import QueryResult from '../components/QueryResult';
import { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import ReactTagInput from "@pathofdev/react-tag-input";
import { hasOnlyTwoLetters } from "../resolvers/helpers";
import config from './../config.json';
import { useToasts } from 'react-toast-notifications';
import { PrimaryButton, SecondaryButton } from './Buttons';

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

const CountryDetailCard = ({ countryId }) => {
    const history = useHistory();

    const [country, setCountry] = useState({});      

    const { addToast } = useToasts();

    const { loading, error, data} = useQuery(GET_COUNTRY_DETAILS, {variables: { countryId, first: 1 }});

    useEffect(() => {
      if(loading === false && data){

        var currentCountry = data?.Country[0];

        setCountry( {
          id: currentCountry._id,
          name: currentCountry?.name,
          capital: currentCountry?.capital,
          area: currentCountry?.area,
          population: currentCountry?.population,
          flag: currentCountry?.flag?.svgFile,
          topLevelDomains: currentCountry?.topLevelDomains?.map(x => x.name)
        });
      }
        
    }, [loading, data])

    if(!country){
      return null;
    }

    const { name, capital, area, population, topLevelDomains, flag } = country;

    const handleChange = (evt) => {
      const value = evt.target.value;

      setCountry((state) => ({
        ...state,
        [evt.target.name]: value
      }));
    }     

    const handleChangeTopLevelDomain = (topLevelDomains) => {
        setCountry((state) => ({
            ...state,
            topLevelDomains: topLevelDomains.map(x => `.${x.replace(".", "")}`)
        }));
    }    

    const handleClickSave = async () => {          

      const fetchData = async () => {
        const response = await fetch(`${config.SERVER_URL}/country`, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Basic ${config.AUTH_TOKEN}`
           },
          body: JSON.stringify(country)
        });

        if(!response.ok){
          const message = `An error has occured: ${response.status}`;
          throw new Error(message);
        }
  
        const responseData = await response.json();

        return responseData;
      }

      const response = fetchData();

      response.then(x => { 
        addToast('Saved Successfully', { appearance: 'success', placement: 'bottom-right' });
        
      }).catch(error => addToast(error.message, { appearance: 'error', placement: 'bottom-right' }) );      
    }

    return (
      <QueryResult error={error} loading={loading} data={data}>        
          <CardContainer>
            <CardContent>                     
                <CardImageContainer>
                        <CardImage src={flag} alt={name + " flag"} />
                </CardImageContainer>
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardDetail>

                      <FormControl id="capital" label="Capital">
                            <Input value={capital || ''} onChange={(evt) => handleChange(evt)}/>
                        </FormControl>

                      <FormControl id="area" label="Àrea">
                          <Input value={area || ''} onChange={(evt) => handleChange(evt)}/>
                        </FormControl>

                      <FormControl id="populacao" label="População">
                           <Input value={population || ''} onChange={(evt) => handleChange(evt)}/>
                        </FormControl> 

                      <FormControl id="topLevelDomain" label="Top Level Domain">
                          <ReactTagInput 
                            tags={topLevelDomains || []}
                            name="topLevelDomain"
                            placeholder="Digite 2 letras e pressione enter" 
                            onChange={(evt) => handleChangeTopLevelDomain(evt)}
                            validator={(value) => {
                              if(hasOnlyTwoLetters(value)){
                                return true;
                              }

                              return false;
                            }}/>
                      </FormControl> 

                    </CardDetail>
                </CardBody>
                <CardFooter>
                    <SecondaryButton onClick={() => history.goBack() } >Cancel</SecondaryButton>
                    <PrimaryButton onClick={() => handleClickSave()} >Save</PrimaryButton>
                </CardFooter>
            </CardContent>  
        </CardContainer>
    </QueryResult>)
}

export default CountryDetailCard;

const Input = styled.input({
  display: 'block',
  width: '100%',
  padding: '.375rem .75rem',
  fontSize: '1rem',
  lineHeight: '1.5',
  color: '#495057',
  backgroundColor: 'white',
  border: '1px solid #ced4da',
  borderRadius: '.25rem',
  ':focus':{
    outline: 0,
    borderColor: '#80bdff',
    boxShadow: '0 0 0 0.2rem rgb(0 123 255 / 50%)'
  }
});

const CardFooter = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '1rem'
});

const CardDetail = styled.div({
    lineHeight: '32px'
})

const CardBody = styled.div({
    padding: 18,
    flex: 1,
    display: 'flex',
    color: colors.textSecondary,
    flexDirection: 'column',
    justifyContent: 'space-around',
})

const CardTitle = styled.h3({
    marginTop: 0,
    textAlign: 'center',
    fontSize: '1.4em',
    lineHeight: '1em',
    fontWeight: 700,
    color: colors.text,
    flex: 1,
  });

const CardContainer = styled.div({
    borderRadius: 6,
    color: colors.text,
    backgroundSize: 'cover',
    backgroundColor: 'white',
    boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.15)',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 515,
    margin: "75 10 10",
    overflow: 'hidden',
    position: 'relative',
    ':hover': {
    },
    cursor: 'pointer',
  });

  const CardContent = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%',
  });

  const CardImageContainer = styled.div({
    height: 300,
    position: 'relative',
    '::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
  });
  
  const CardImage = styled.img({
    objectFit: 'cover',
    width: '100%',
    height: '100%'
  });