import styled from '@emotion/styled';

const Button = styled.a({
    display: 'inline-block',
    fontWeight: 400,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    border: '1px solid transparent',
    padding: '.375rem .75rem',
    fontSize: '1rem',
    lineHeight: '1rem',
    borderRadius: '.25rem',
    color: 'white',
    marginLeft:'.25rem',
    cursor: 'pointer'
  })
  
  const SecondaryButton = styled(Button)({
    background: '#859bb1',
    borderColor: '#859bb1',
    ':hover': {
      background: '#84909c',
      borderColor: '#84909c',
    },
    ':focus':{
      outline: 0,
      background: '#84909c',
      borderColor: '#84909c',
      boxShadow: '0 0 0 0.2rem rgb(108 117 125 / 50%);'
    }
  })
  
  const PrimaryButton = styled(Button)({
    background: '#007bff',
    borderColor: '#007bff',  
    ':hover': {
      background: '#0069d9',
      borderColor: '#0069d9',
    },
    ':focus':{
      outline: 0,
      background: '#0062cc',
      borderColor: '#005cbf',
      boxShadow: '0 0 0 0.2rem rgb(0 123 255 / 50%)'
    }
  });

export { PrimaryButton };
export { SecondaryButton };