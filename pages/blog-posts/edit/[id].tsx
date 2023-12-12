import { MuiEditInferencer } from "@refinedev/inferencer/mui";
import { GetServerSideProps } from "next";

export default function BlogPostEdit() {
  return <MuiEditInferencer />;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  return {
    props: {},
  };
};
