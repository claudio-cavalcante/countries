import styled from '@emotion/styled';
import React from 'react';

const FormControl = ({ id, label, children }) => {

    const name = id;

    return (
    <FormGroupDiv>
        <Label htmlFor={id}>{`${label}:`}</Label>
        { React.cloneElement(children, { id, name }) }        
    </FormGroupDiv>)
}

const FormGroupDiv = styled.div({
    marginBottom: '1rem'
})

const Label = styled.label({
    display: 'inline-block',
    marginBottom: '0.5rem'
});

export default FormControl;