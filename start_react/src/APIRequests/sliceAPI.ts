import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl:  `https://swapi.dev/api/people/` }),
    tagTypes: ['Todos'],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: (arg: {searchValue: string, page: number}) =>  `?search=${arg.searchValue}&page=${arg.page}`,
            providesTags: ['Todos']
        }),
    })
})

export const {
    useGetTodosQuery,
} = apiSlice