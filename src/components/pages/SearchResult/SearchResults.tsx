import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../../Card/Card";

interface Movie {
  id: number;
  name: string;
  poster?: { url?: string };
  rating?: { kp?: number };
}

function SearchResults() {
  const { query } = useParams();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) return;

    const fetchSearchResults = async () => {
      try {
        setLoading(true);
        setError(null);

        const url = `   ${import.meta.env.VITE_API_URL}?name=${query}&limit=12`;

        console.log("Fetching from:", url);

        const response = await fetch(url, {
          headers: { "X-API-KEY": import.meta.env.VITE_API_KEY },
        });

        const data = await response.json();
        console.log("Response data:", data);

        if (data?.docs?.length > 0) {
          setMovies(data.docs);
        } else {
          setError("Фильмы не найдены. Попробуйте другой запрос.");
          setMovies([]);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Что-то пошло не так... Попробуйте позже😥");
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div>
      <h2>Результаты поиска : {query}</h2>
      <Card loading={loading} movies={movies} error={error} />
    </div>
  );
}

export default SearchResults;
