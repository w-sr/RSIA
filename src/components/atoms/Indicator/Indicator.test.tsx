import { renderWithTheme } from "../../../utils/tests/helpers";
import { Indicator } from "./Indicator";

describe("<Indicator />", () => {
  it("should match the snapshot", () => {
    const { container } = renderWithTheme(<Indicator loading={true} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
