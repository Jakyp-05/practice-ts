import React from "react";
import { ThemeProvider } from "entities/theme/ui/themeProvider";
import { ErrorBoundary } from "react-error-boundary";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Fallback } from "shared/ui/fallback/Fallback";
import { persistor, store } from "app/store";

interface IProvider {
  readonly children: JSX.Element;
}

export const Providers: React.FC<IProvider> = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>{children}</ThemeProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
};
