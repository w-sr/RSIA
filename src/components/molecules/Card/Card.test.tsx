import { renderWithTheme } from "../../../utils/tests/helpers";
import { Card } from "./Card";

describe("<Card />", () => {
  it("should match the snapshot", () => {
    const { container } = renderWithTheme(
      <Card type="FIXED" name="product" rate={10} lender="lender" />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
