import { graphql } from "babel-plugin-relay/macro";
import { FC } from "react";
import { Image } from "react-bootstrap";
import { useFragment } from "react-relay";
import { PropsWithFragment } from "../../interfaces/PropsWithFragment";
import { MainUserInfo_viewer$key } from "./__generated__/MainUserInfo_viewer.graphql";

export const MAIN_USER_INFO_FRAGMENT = graphql`
  fragment MainUserInfo_viewer on User {
    name
    login
    avatarUrl
    url
    email
  }
`;

const MainUserInfo: FC<PropsWithFragment<MainUserInfo_viewer$key>> = ({
  fragmentRef,
}) => {
  const viewer = useFragment(MAIN_USER_INFO_FRAGMENT, fragmentRef);

  return (
    <>
      <div className="d-flex justify-content-center">
        <Image
          src={viewer.avatarUrl as string}
          alt="avatar"
          roundedCircle
          width={200}
          height={200}
        />
      </div>
      <h6 className="text-center mt-2">
        Welcome, {viewer.name || viewer.login}
      </h6>
      <p className="m-0">
        You can either browse our repositories or go directly to{" "}
        <a href={viewer.url as string}>your github account</a>
      </p>
    </>
  );
};

export default MainUserInfo;
