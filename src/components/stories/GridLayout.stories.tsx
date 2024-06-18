import type { Meta } from "@storybook/react";
import GridLayout from "../layout/GridLayout";
import { Fragment } from "react";
import PageLayout from "../layout/PageLayout";

const meta = {
  title: "Layouts/Grid Layout",
  component: GridLayout,
  parameters: {
    layout: "start",
  },
} satisfies Meta<typeof GridLayout>;

export default meta;

export const GridLayoutView = () => {
  return (
    <PageLayout>
      <GridLayout>
        {(cols) => {
          return (
            <Fragment>
              {new Array(cols).fill(null).map((_, i) => {
                return (
                  <div
                    key={i}
                    className="relative w-full  bg-red-100 h-screen"
                  />
                );
              })}
            </Fragment>
          );
        }}
      </GridLayout>
    </PageLayout>
  );
};
