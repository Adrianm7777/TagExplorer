import type { Preview } from "@storybook/react";
import { initialize, mswLoader, mswDecorator } from "msw-storybook-addon";

initialize();

const preview: Preview = {
  parameters: {
    msw: {
      handlers: [],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  loaders: [mswLoader],
};

export default preview;
