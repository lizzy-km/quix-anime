import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const AnimeApi = createApi({
  reducerPath: "animeApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.jikan.moe/v4",
  }),
  tagTypes: ["anime"],
  endpoints: (builder) => ({
    getAnime: builder.query({
        query: (url,method) => ({
          url: url,
          method: method,
        }),
        providesTags: (result, error, page) =>
            result
              ? [
                  // Provides a tag for each post in the current page,
                  // as well as the 'PARTIAL-LIST' tag.
                  ...result.data.map(({ id }) => ({ type: 'Posts', id })),
                  { type: 'anime', id: 'PARTIAL-LIST' },
                ]
              : [{ type: 'anime', id: 'PARTIAL-LIST' }],
        
    
      }),
  })
  
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAnimeQuery } = AnimeApi;
