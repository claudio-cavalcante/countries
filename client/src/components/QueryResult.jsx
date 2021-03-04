import styled from '@emotion/styled';
import DotLoader from "react-spinners/DotLoader";

const QueryResult = ({loading, error, data, children}) => {
    if (error) {
        return <CenteredDiv><Error>ERROR:</Error> {`${JSON.stringify(error)}`}</CenteredDiv>;
      }

      if (loading) {
        return (
          <LoadingContainer>
            <DotLoader color={"#2075d6"} loading={loading} size={60} />Loading...
          </LoadingContainer>
        );
      }
      if (!data) {
        return <p>Nenhum registro encontrado!</p>;
      }
      if (data) {
        return children;
      }
}

const LoadingContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '150px'
})

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