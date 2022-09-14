import { renderWithTheme } from "../../../utils/tests/helpers";
import { TextField } from "./TextField";

describe("<TextField />", () => {
  it("should match the snapshot", () => {
    const { container } = renderWithTheme(<TextField />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
