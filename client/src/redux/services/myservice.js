import {createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myapis = createApi({
    reducerPath:"myapis",
    baseQuery:fetchBaseQuery({
        baseUrl: "https://my-app-stars.herokuapp.com/",
    }),
    endpoints:(builder) =>({
        getPeople: builder.query({
            query: () => `people`
        }),
        getPlanet: builder.query({
            query: () => `planet`
        }),
        getStarShip: builder.query({
            query: () => `starship`
        })
    }),
    
})
     
export const { useGetPeopleQuery , useGetPlanetQuery, useGetStarShipQuery } = myapis;