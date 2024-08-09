import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { resSliceAPI } from '../interfaces/resSliceAPI'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl:  `https://swapi.dev/api/people/` }),
    tagTypes: ['Todos'],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: (arg: {searchValue: string, page: number}) =>  `?search=${arg.searchValue}&page=${arg.page}`,
            transformResponse: (res:resSliceAPI) => {
                res.results = res.results.map(item => {
                    item.isActive = false;
                    return item
                })
                return res
            },
            providesTags: ['Todos']
        }),
    }),
})

export const {
    useGetTodosQuery,
} = apiSlice