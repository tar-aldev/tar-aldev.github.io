import { graphql } from "babel-plugin-relay/macro";
import { FC } from "react";
import { PER_PAGE_AMOUNT } from "../../../core/constants";
import LoadMoreButton from "../../../shared/components/LoadMoreButton";
import ShownPaginationCount from "../../../shared/components/ShownPaginationCount";
import CommitItem from "./CommitItem";

/* export const COMMITS_LIST_FRAGMENT = graphql`
  fragment CommitsListFragment_commits on Commit
  @argumentDefinitions(
    count: { type: "Int", defaultValue: 10 }
    cursor: { type: "String" }
  )
  @refetchable(queryName: "CommitsListPaginationQuery") {
    history(first: $count, after: $cursor)
      @connection(key: "SelectedBranchCommits_history") {
      totalCount
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        ...CommitItemFragment_commit
      }
    }
  }
`; */

const CommitsList: FC = (/* {
  fragmentRef,
} */) => {
  /* const {
    data: { history },
    isLoadingNext,
    loadNext,
  } = usePaginationFragment(COMMITS_LIST_FRAGMENT, fragmentRef); */
  /* const onLoadMoreCommits = () => {
    loadNext(PER_PAGE_AMOUNT);
  }; */

  return (
    <div>
      {[] ? (
        <>
          {[].map((edge: any) => {
            return <CommitItem key={edge.cursor} fragmentRef={edge} />;
          })}

          {/* {history.pageInfo.hasNextPage && (
            <div className="d-flex justify-content-center mb-3">
              <LoadMoreButton
                onLoadMore={onLoadMoreCommits}
                isLoadingNext={isLoadingNext}
              />
            </div>
          )} */}
          {/* <ShownPaginationCount
            position="bottom"
            showing={history.edges.length}
            total={history.totalCount}
          /> */}
        </>
      ) : (
        <p>No commits yet...</p>
      )}
    </div>
  );
};

export default CommitsList;
