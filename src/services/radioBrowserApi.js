import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const radioHeaders = {
  "x-rapidapi-host": process.env.REACT_APP_RADIO_BROWSER_HOST,
  "x-rapidapi-key": process.env.REACT_APP_RADIO_BROWSER_API_KEY,
};

const baseUrl = process.env.REACT_APP_RADIO_BROWSER_BASE_URL;

const createRequest = (url, params) => ({
  url,
  headers: radioHeaders,
  params,
});
export const radioBrowserApi = createApi({
  reducerPath: "radioBrowserApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getRadioBrowser: builder.query({
      query: () =>
        createRequest(`/stations/search`, {
          country: "India",
          countryExact: "true",
          codec: "MP3",
          reverse: "false",
          offset: "0",
          limit: "100",
          hidebroken: "true",
        }),
    }),
  }),
});

export const { useGetRadioBrowserQuery } = radioBrowserApi;

// var options = {
//   method: "GET",
//   url: "https://coinranking1.p.rapidapi.com/exchanges",
//   headers: {
//     "x-rapidapi-host": "coinranking1.p.rapidapi.com",
//     "x-rapidapi-key": "4e6766ff03msh8c00a941a00bd62p1f5d5ejsn6094a5b56fcf",
//   },
// };
