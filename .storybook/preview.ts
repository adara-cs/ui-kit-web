import '../src/index.css'
import './style.css'

import { withThemeByClassName } from "@storybook/addon-styling";

const preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
  parameters: {
    backgrounds: {
      values: [
        { name: 'Dark', value: 'black' },
        { name: 'Light', value: 'white' },
      ],
      default: 'Light',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
