import { IRepo, IUser, ServerRespons } from './../../models/models';
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
      }),
      getUserrepos: build.query<IRepo[], string>({
        query: (username: string) => ({
          url: `users/${username}/repos`
        })
      }),
      createUser: build.mutation<any, void>({
        query: () => 'url какой то '          // еслиб бекЭнд подерживал то моглибы создать ползователя
      })
      
    })
  })
// в место useGetUserreposQuery используем useLazyGetUserreposQuery (LAZY означает что сделаем запрос когда захотим)
  export const {useSearchUsersQuery, useLazyGetUserreposQuery, useCreateUserMutation} = githubApi
  




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