import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import styles from "./CategoryMovies.module.scss";

interface Movie {
  id: number;
  name: string;
}
const CategoryMovies = () => {
  const { genre } = useParams();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!genre) return;

    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://api.kinopoisk.dev/v1.3/movie?page=1&limit=12&genres.name=${genre}`,
          {
            headers: {
              "X-API-KEY": import.meta.env.VITE_API_KEY,
            },
          }
        );

        const data = await response.json();

        if (data?.docs?.length > 0) {
          setMovies(data.docs);
        } else {
          setError(`Фильмы в жанре "${genre}" не найдены`);
        }
      } catch (err) {
        setError("Ошибка загрузки");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [genre]);

  return (
    <div className={styles.categoryMovies}>
      <h1>Фильмы в жанре: {genre}</h1>
      {error && <p>{error}</p>}
      <Card loading={loading} movies={movies} error={error} />
    </div>
  );
};

export default CategoryMovies;
