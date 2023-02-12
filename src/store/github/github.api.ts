import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const githubApi = createApi({
    reducerPath: 'github/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/'
    }),
    endpoints: build => ({
        searchUsers: build.query<any, string>({
            query: (search: string) => ({
                url: 'search/users',
                params: {
                    q: search
                }

            })
        })
    })
})

export const {useSearchUsersQuery} = githubApi


// решил он паказать более сложную настройку
// export const githubApi = createApi({
//     reducerPath: 'github/api',
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'https://api.github.com/'
//     }),
//     endpoints: build => ({
//         searchUsers: build.query({
//             query: () => 'search/users' // первоначально было так
//         })
//     })
// })