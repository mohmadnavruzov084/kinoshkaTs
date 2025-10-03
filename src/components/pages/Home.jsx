import GetDataMovies from "../GetDataMovies";
import Card from "../Card/Card";
const Home = () => {
  return (
    <>
      <GetDataMovies>
        {({ movies, loading, error }) => (
          <Card loading={loading} movies={movies} error={error} />
        )}
      </GetDataMovies>
    </>
  );
};

export { Home };
