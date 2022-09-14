import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { renderRoutes } from "./routes";
import { theme } from "./styles/theme";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import "./i18n/config";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StyledThemeProvider theme={theme}>
          <BrowserRouter>{renderRoutes()}</BrowserRouter>
        </StyledThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
