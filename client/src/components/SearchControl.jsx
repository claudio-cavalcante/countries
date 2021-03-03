import styled from '@emotion/styled';
import icon from '../assets/search.svg';

const SearchControl = ({ placeholder, searchValue, onChange}) => {

    return (
    <InputContainer>
        <InputWrapper>
            <InputSearch type='search' placeholder={placeholder} value={searchValue} onChange={onChange}/>
            <IconSearch src={icon} />
        </InputWrapper>        
    </InputContainer>)
}

export default SearchControl;

const IconSearch = styled.img({
    position: 'absolute',
    top: '10px',
    left: '10px'
})

const InputSearch = styled.input({
    border: 'none',
    borderRadius: '20px',
    width: '100%',
    height: '30px',
    padding: '20px 20px 20px 52px',
    fontSize: '14px',
    "&:focus":{
        outline: 'none'
    },
    "::placeholder":{
        
    }
})

const InputContainer = styled.div({
    display: 'inline-block',
    margin: '0 auto',
    width: '50%',
    minWidth: '600px'
  });

  const InputWrapper = styled.div({
    boxShadow: '0 1px 6px 0 rgb(32 33 36 / 28%)',
    margin: '20px 20px 0',
    borderRadius: '20px',
    position: 'relative',
    userSelect: 'none'
  });

