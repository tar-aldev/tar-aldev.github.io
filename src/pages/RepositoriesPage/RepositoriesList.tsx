import { FC, useCallback, useEffect } from "react";
import { PER_PAGE_AMOUNT } from "../../core/constants";
import ListLayout from "../../shared/components/ListLayout";
import RepositoryListItem, {
  RepositoriesListItemProps,
} from "./RepositoriesListItem";

/* export const REPOSITORIES_LIST_FRAGMENT = graphql`
  fragment RepositoriesList_repositories on Query
  @argumentDefinitions(
    count: { type: "Int", defaultValue: 10 }
    cursor: { type: "String" }
  )
  @refetchable(queryName: "RepositoriesListPaginationQuery") {
    search(first: $count, after: $cursor, query: $queryString, type: $type)
      @connection(key: "RepositoriesList_search") {
      repositoryCount
      edges {
        cursor
        node {
          ...RepositoriesListItem_repository
        }
      }
    }
  }
`; */
export interface RepositoriesListProps {
  searchStr: string;
}

const RepositoriesList: FC<RepositoriesListProps> = ({
  /* fragmentRef, */
  searchStr,
}) => {
  /* const {
    match: { params },
  } = useRouter();
  const { router } = useRouter(); */
  /* const { */
  /*   data: { search }, */
  /*   loadNext, */
  /*   hasNext, */
  /*   isLoadingNext, */
  /*   refetch, */
  /* } = usePaginationFragment(REPOSITORIES_LIST_FRAGMENT, fragmentRef); */
  // const { edges } = search;

  /* const onNavigateToRepositoryDetails = useCallback<
    RepositoriesListItemProps["handleShowRepoDetails"]
  >(
    (repoName) => {
      router.push(`/${params.login}/repositories/${repoName}`);
    },
    [params.login, router]
  ); */

  /* const loadMoreRepositories = useCallback(() => {
    loadNext(PER_PAGE_AMOUNT);
  }, [loadNext]); */

  /* useEffect(() => {
    refetch({ queryString: `${searchStr} in:name user:${params.login}` });
  }, [params.login, searchStr, refetch]); */

  return (
    <>
      {/* <ListLayout
        list={
          <>
            {(edges || []).map((edge) => {
              return edge?.node ? (
                <RepositoryListItem
                  key={edge?.cursor}
                  fragmentRef={edge?.node}
                  handleShowRepoDetails={onNavigateToRepositoryDetails}
                />
              ) : null;
            })}
          </>
        }
        countPosition="top"
        isLoadingNext={isLoadingNext}
        onLoadMore={loadMoreRepositories}
        hasMore={hasNext}
        shownItemsAmount={edges?.length || 0}
        totalItemsAmount={search.repositoryCount}
      /> */}
    </>
  );
};

export default RepositoriesList;
