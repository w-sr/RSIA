import { storiesOf } from "@storybook/react";
import { Card } from "./Card";
import { Button } from "../../atoms/Button";

storiesOf("Card", module)
  .add("without button", () => (
    <Card type="FIXED" name="Product" rate={10} lender="lender" width="240px" />
  ))
  .add("with button", () => (
    <Card type="FIXED" name="Product" rate={10} lender="lender" width="240px">
      <Button>Select product</Button>
    </Card>
  ));
