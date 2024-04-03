import { store } from "./../services/store";
import { Provider } from "react-redux";
import { StoryFn } from "@storybook/react";
import TagTables from "../components/TagsTables/TagTables";

export default {
  title: "TagTables",
  component: TagTables,
  parameters: {
    msw: {
      handlers: [],
    },
  },
  decorators: [
    (Story: StoryFn) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

export const Default = () => <TagTables />;
