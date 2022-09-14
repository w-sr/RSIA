import { renderWithTheme } from "../../../utils/tests/helpers";
import { Button } from "./Button";

describe("<Button />", () => {
  it("should match the snapshot", () => {
    const { container } = renderWithTheme(<Button />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
