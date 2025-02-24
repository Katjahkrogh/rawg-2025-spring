import useGenres from '../hooks/useGenres';

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();

  return (
    <div>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      <ul>
        {genres.map((genres) => (
          <li key={genres.id}>{genres.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
