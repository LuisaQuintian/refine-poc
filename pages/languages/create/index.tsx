import { MuiCreateInferencer } from "@refinedev/inferencer/mui";
import { GetServerSideProps } from "next";

export default function LanguageCreate() {
  //An inferencer is just a auto-generated page, in this case, to create a
  //new language (the resource in this example is "languages"), but there are
  //also inferencers to show an language, edit and language and list all languages.
  //This auto-generated page can be replaced by anything else.
  //https://refine.dev/docs/core/components/inferencer/
  return <MuiCreateInferencer />;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  return {
    props: {},
  };
};
