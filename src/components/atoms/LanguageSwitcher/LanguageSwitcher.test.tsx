import { renderWithTheme } from "../../../utils/tests/helpers";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../i18n/config";

describe("<LanguageSwitcher />", () => {
  it("should match the snapshot", () => {
    const { container } = renderWithTheme(
      <I18nextProvider i18n={i18n}>
        <LanguageSwitcher />
      </I18nextProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
