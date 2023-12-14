import { useList, useNavigation, useSelect } from "@refinedev/core";
import { MuiListInferencer } from "@refinedev/inferencer/mui";
import { GetServerSideProps } from "next";
import { useState } from "react";

export default function LanguageList() {
  //The useNavigation hook returns several props, including "create",
  //that is a function that receives the resource name and navigate to the
  //create page of the resource! https://refine.dev/docs/core/hooks/navigation/use-navigation/#return-values
  const { create } = useNavigation();

  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const value = "English";
  const [isFiltering, setIsFiltering] = useState(false);

  const { data } = useList({
    resource: "languages",
    //If the pagination mode is not set to false (the default is true), useList
    //(useTable and a few others as well) WILL NOT return ALL of the data
    //if there are to many registries!!!
    pagination: {
      mode: "off",
    },
    //optional sorting props
    sorters: [{ field: "title", order }],
    //optional filtering props. The 'isFiltering' validation is just a test,
    // filters is usually just an array of objects
    filters: isFiltering
      ? [
          {
            field: "title",
            //List of operators: https://refine.dev/docs/core/interface-references/#crudoperators
            operator: "eq",
            value,
          },
        ]
      : [],
  });

  const allLanguages = data?.data || [];

  return (
    <>
      <button onClick={() => setOrder(order === "asc" ? "desc" : "asc")}>
        order
      </button>
      <button onClick={() => setIsFiltering(!isFiltering)}>filter</button>
      <button onClick={() => create("languages")}>create language</button>
      <ul>
        {allLanguages.map((languages) => (
          <li key={languages.id}>{languages.title}</li>
        ))}
      </ul>
      {/* <MuiListInferencer /> */}
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  return {
    props: {},
  };
};
