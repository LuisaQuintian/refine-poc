import { MuiEditInferencer } from "@refinedev/inferencer/mui";
import { GetServerSideProps } from "next";

export default function CategoryEdit() {
  return <MuiEditInferencer />;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  return {
    props: {},
  };
};
