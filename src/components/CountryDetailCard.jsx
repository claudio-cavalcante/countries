import styled from '@emotion/styled';
import { colors, mq } from '../styles';
import numberWithDots from '../resolvers/helpers'

const CountryDetailCard = (props) => {
    if(!props.country){
      return null;
    }

    return (
    <CardContainer>
        <CardContent>                     
            <CardImageContainer>
                    <CardImage src={props.country.flag.svgFile} alt={props.country.name + " flag"} />
             </CardImageContainer>
             <CardBody>
                <CardTitle>{props.country.name}</CardTitle>
                <CardDetail>
                    <div>{`Capital: ${props.country.capital}`}</div>
                    <div>{`Área: ${numberWithDots(props.country.area)}`}</div>
                    <div>{`População: ${numberWithDots(props.country.population)}`}</div>
                    <div>{`Top Level Domain: ${props.country.topLevelDomains.map(x => x.name).join("")}`}</div>
                </CardDetail>
            </CardBody>
        </CardContent>  
    </CardContainer>)
}

export default CountryDetailCard;

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
    height: 475,
    margin: "75 10 10",
    overflow: 'hidden',
    position: 'relative',
    ':hover': {
      backgroundColor: colors.blue.lightest,
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