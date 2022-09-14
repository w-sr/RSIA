import { storiesOf } from "@storybook/react";
import { Indicator } from "./Indicator";

storiesOf("Indicator", module).add("with loading", () => (
  <Indicator loading={true} />
));
