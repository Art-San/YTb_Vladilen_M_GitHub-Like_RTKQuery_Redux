import { IUser, ServerRespons } from './../../models/models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const githubApi = createApi({
    reducerPath: 'github/api',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://api.github.com/'
    }),
    refetchOnFocus: true,
    endpoints: build => ({
      searchUsers: build.query<IUser[], string>({
        query: (search: string) => ({
          url: `search/users`,
          params: {
            q: search,
            per_page: 10
          }
        }),
        transformResponse: (response: ServerRespons<IUser>) => response.items
        
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
//         searchUsers: build.query<any, string>({ // сначала мы не знаем что прилетит поэтому "any"
//             query: () => 'search/users' // первоначально было так
//         })
//     })
// })