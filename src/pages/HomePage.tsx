import React from 'react'
import { useSearchUsersQuery } from '../store/github/github.api'

export function HomePage () {
    const { isLoading, isError, data } = useSearchUsersQuery('valadilen')
    return  (
        <div><h1>home</h1></div>
    )
}