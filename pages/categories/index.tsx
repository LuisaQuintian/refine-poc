import { useSelect } from "@refinedev/core";
import { MuiListInferencer } from "@refinedev/inferencer/mui";
import { GetServerSideProps } from "next";

export default function CategoryList() {
  //useSelect returns the options to be used in materialUi's autocomplete, each option
  //has a label and a value.
  const { options } = useSelect({
    resource: "categories",
  });

  return (
    <>
      <label>
        Select a category:
        <select>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <MuiListInferencer />;
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  return {
    props: {},
  };
};
