import { gql } from '@apollo/client'

export const QUERY_USERS_ALL = gql`
  query QueryUsersAll {
    users {
      username
      email
      created_at
      confirmed
    }
  }
`
