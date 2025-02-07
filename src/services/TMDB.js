import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiKey = import.meta.env.VITE_TMDB_KEY;

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
    endpoints: (builder) => ({
        getMovies: builder.query({
            query: () => {
                return `movie/popular?api_key=${tmdbApiKey}&page=${1}`
            }
        })
    }),
});

export const { useGetMoviesQuery } = tmdbApi;