import { useInfiniteList } from "@refinedev/core";
import { MuiShowInferencer } from "@refinedev/inferencer/mui";
import { GetServerSideProps } from "next";

export default function LanguageShow() {
  return <MuiShowInferencer />;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  return {
    props: {},
  };
};
