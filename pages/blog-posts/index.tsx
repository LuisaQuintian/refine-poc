import { MuiListInferencer } from "@refinedev/inferencer/mui";
import { GetServerSideProps } from "next";

export default function BlogPostList() {
  return <MuiListInferencer />;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  return {
    props: {},
  };
};
