/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HomePageQuery
// ====================================================

export interface HomePageQuery_viewer {
  __typename: "User";
  /**
   * The user's public profile name.
   */
  name: string | null;
  /**
   * The username used to login.
   */
  login: string;
  /**
   * A URL pointing to the user's public avatar.
   */
  avatarUrl: any;
  /**
   * The HTTP URL for this user
   */
  url: any;
  /**
   * The user's publicly visible profile email.
   */
  email: string;
}

export interface HomePageQuery {
  /**
   * The currently authenticated user.
   */
  viewer: HomePageQuery_viewer;
}
