import styled from '@emotion/styled';

const Loading = () => {
    return <LoadingDiv>Loading...</LoadingDiv>
}

export default Loading;

const LoadingDiv = styled.div({
    textAlign: 'center',
    height: '200px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
})