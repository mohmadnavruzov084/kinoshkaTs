import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Categories.module.scss";

const Categories = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock данные жанров
    const mockGenres = [
      "комедия",
      "драма",
      "боевик",
      "триллер",
      "фантастика",
      "ужасы",
      "мультфильм",
      "детектив",
      "мелодрама",
      "приключения",
    ];

    setGenres(mockGenres);
    setLoading(false);
  }, []);

  if (loading) return <div>Загрузка...</div>;

  return (
    <div className={styles.categories}>
      <h1>Категории фильмов</h1>
      <div className={styles.genresGrid}>
        {genres.map((genre) => (
          <Link
            key={genre}
            to={`/category/${genre}`}
            className={styles.genreCard}
          >
            <h3>{genre}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
