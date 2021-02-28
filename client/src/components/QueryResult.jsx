import styled from '@emotion/styled';

const QueryResult = ({loading, error, data, children}) => {
    if (error) {
        return <CenteredDiv><Error>ERROR:</Error> {`${error.message}`}</CenteredDiv>;
      }
      if (loading) {
        return (
          <CenteredDiv>Loading...</CenteredDiv>
        );
      }
      if (!data) {
        return <p>Nenhum registro encontrado!</p>;
      }
      if (data) {
        return children;
      }
}

const Error = styled.span({
  color: "rgb(206, 20, 66)",
  fontWeight: 'bold',
  marginRight: '3px'
})

const CenteredDiv = styled.div({
  textAlign: 'center',
  height: '200px',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex'
});

export default QueryResult;