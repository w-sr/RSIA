import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/styles/theme";
import { loadStories } from "./load-stories";

addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

configure(loadStories, module);
