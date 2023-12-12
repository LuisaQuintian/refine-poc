import { MuiShowInferencer } from "@refinedev/inferencer/mui";
import { GetServerSideProps } from "next";

export default function CategoryShow() {
  return <MuiShowInferencer />;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  return {
    props: {},
  };
};
