import { colors, mq } from '../styles';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const CountryCard = (props) => 
{
    return (
        <CardContainer>
            <CardContent>
                <CardImageContainer>
                    <CardImage src={props.country.flag.svgFile} alt={props.country.name + " flag"} />
                </CardImageContainer>
                <CardBody>
                    <CardTitle>{props.country.name}</CardTitle>
                    <CountryCapital><LabelCapital>Capital: </LabelCapital>{props.country.capital}</CountryCapital>
                    <CardFooter>                    
                        <AuthorAndTrack>
                            <Link to={`/country/${props.country._id}`}>
                              Mais Detalhes
                            </Link>
                        </AuthorAndTrack>
                    </CardFooter>
                </CardBody>
            </CardContent>
        </CardContainer>)
}

export default CountryCard;

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
    [mq[0]]: {
      width: '90%',
    },
    [mq[1]]: {
      width: '47%',
    },
    [mq[2]]: {
      width: '15%',
    },
    height: 284,
    margin: 10,
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
  
  const CardTitle = styled.h3({
    marginTop: 0,
    textAlign: 'center',
    fontSize: '1.4em',
    lineHeight: '1em',
    fontWeight: 700,
    color: colors.text,
    flex: 1,
  });

  const LabelCapital = styled.label({
    fontWeight: 'bold'
  })

  const CountryCapital = styled.div({
    marginBottom: '20px'
  })
  
  const CardImageContainer = styled.div({
    height: 145,
    boxShadow: '-8px 3px 5px 0px rgb(0 0 0 / 15%)',
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
  
  const CardBody = styled.div({
    padding: 18,
    flex: 1,
    display: 'flex',
    color: colors.textSecondary,
    flexDirection: 'column',
    justifyContent: 'space-around',
  });
  
  const CardFooter = styled.div({
    display: 'flex',
    flexDirection: 'Row',
  }); 
  
  const AuthorAndTrack = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  });  