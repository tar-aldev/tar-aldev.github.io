import { graphql } from "babel-plugin-relay/macro";
import React, { Suspense } from "react";
import { usePreloadedQuery } from "react-relay";
import RepositoriesList from "./RepositoriesList";

export const RepositoriesPageQuery = graphql`
  query RepositoriesPageQuery {
    viewer {
      repositories(first: 100, orderBy: { field: NAME, direction: ASC }) {
        ...RepositoriesList_repositories
      }
    }
  }
`;

function RepositoriesPage(props) {
  const data = usePreloadedQuery(RepositoriesPageQuery, props.data);
  return (
    <>
      <h6>Your Repositories</h6>
      <Suspense fallback={<div>Loading...</div>}>
        <RepositoriesList fragmentRef={data.viewer.repositories} />
      </Suspense>
    </>
  );
}

export default RepositoriesPage;
