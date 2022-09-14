import { storiesOf } from "@storybook/react";
import { TextField } from "./TextField";

storiesOf("TextField", module)
  .add("with label", () => <TextField label="First name" />)
  .add("without label", () => <TextField />);
