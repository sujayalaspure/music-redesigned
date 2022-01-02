import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const radioHeaders = {
  "x-rapidapi-host": process.env.REACT_APP_RADIO_HOST,
  "x-rapidapi-key": process.env.REACT_APP_RADIO_API_KEY,
};

const baseUrl = process.env.REACT_APP_RADIO_BASE_URL;
// const baseUrl = "https://50k-radio-stations.p.rapidapi.com";

const createRequest = (url) => ({
  url,
  headers: radioHeaders,
});
export const radioApi = createApi({
  reducerPath: "radioApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getRadioChannels: builder.query({
      query: ({ country = 14, page = 1 }) =>
        createRequest(`/get/channels?country_id=${country}&page=${page}`),
    }),
    getCountries: builder.query({
      query: () => createRequest(`/get/countries`),
    }),
  }),
});

export const { useGetRadioChannelsQuery, useGetCountriesQuery } = radioApi;

// var options = {
//   method: "GET",
//   url: "https://coinranking1.p.rapidapi.com/exchanges",
//   headers: {
//     "x-rapidapi-host": "coinranking1.p.rapidapi.com",
//     "x-rapidapi-key": "4e6766ff03msh8c00a941a00bd62p1f5d5ejsn6094a5b56fcf",
//   },
// };
