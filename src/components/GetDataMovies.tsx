import { QueryClient, useQuery } from "@tanstack/react-query";
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

const queryClient = new QueryClient();

function GetDataMovies({ children }: GetDataMoviesProps) {
  const { data, isLoading, error, isError } = useQuery({

    queryKey: ['movies'],
    queryFn: async () => {

      const url = `${import.meta.env.VITE_API_URL}?page=1&limit=12&selectFields=name&selectFields=description&selectFields=poster&selectFields=rating&selectFields=year`;

      console.log("Fetching from:", url);
      const response = await fetch(url, {
        headers: { "X-API-KEY": import.meta.env.VITE_API_KEY },
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
      }


      if (!data.docs || data.docs.length === 0) {
        throw new Error("Фильмы не найдены");
      }


      return data
    }

  });


  return children({
    movies: data?.docs || [],
    loading: isLoading,
    error: isError ? "Упс, что-то пошло не так 😥" : null
  });


}

export default GetDataMovies;
