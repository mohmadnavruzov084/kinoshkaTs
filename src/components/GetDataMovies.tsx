import { useState, useEffect, ReactNode } from "react";

interface Movie {
  id: number;
  name: string;
  poster?: {
    url?: string;
  };
  rating?: {
    kp?: number;
  };
}

interface GetDataMoviesProps {
  children: (data: {
    movies: Movie[],
    loading: boolean,
    error: string | null
  }) => ReactNode
}

function GetDataMovies({ children }: GetDataMoviesProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const url = `${import.meta.env.VITE_API_URL}?page=1&limit=12&selectFields=name&selectFields=description&selectFields=poster&selectFields=rating&selectFields=year`;

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

    fetchData();
  }, []);

  return children({ movies, loading, error });
}

export default GetDataMovies;
