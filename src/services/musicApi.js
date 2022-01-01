import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const sazamApiHeaders = {
  "x-rapidapi-host": "shazam.p.rapidapi.com",
  "x-rapidapi-key": "4e6766ff03msh8c00a941a00bd62p1f5d5ejsn6094a5b56fcf",
};

const baseUrl = "https://shazam.p.rapidapi.com";

const createRequest = (url) => ({
  url,
  headers: sazamApiHeaders,
});
export const musicApi = createApi({
  reducerPath: "musicApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getSongs: builder.query({
      query: (songName) =>
        createRequest(
          `/search?term=${songName}&locale='en-US'&offset='0'&limit='5'`
        ),
    }),
  }),
});

export const { useGetSongsQuery } = musicApi;

// var options = {
//   method: "GET",
//   url: "https://coinranking1.p.rapidapi.com/exchanges",
//   headers: {
//     "x-rapidapi-host": "coinranking1.p.rapidapi.com",
//     "x-rapidapi-key": "4e6766ff03msh8c00a941a00bd62p1f5d5ejsn6094a5b56fcf",
//   },
// };
