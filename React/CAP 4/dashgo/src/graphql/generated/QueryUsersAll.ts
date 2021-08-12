/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryUsersAll
// ====================================================

export interface QueryUsersAll_users {
  __typename: "UsersPermissionsUser";
  username: string;
  email: string;
  created_at: any;
  confirmed: boolean | null;
}

export interface QueryUsersAll {
  users: QueryUsersAll_users[];
}
