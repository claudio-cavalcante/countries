import Loading from './Loading';

const QueryResult = ({loading, error, data, children}) => {
    if (error) {
        return <p>ERROR: {error.message}</p>;
      }
      if (loading) {
        return (
          <Loading />
        );
      }
      if (!data) {
        return <p>Nenhum registro encontrado!</p>;
      }
      if (data) {
        return children;
      }
}

export default QueryResult;