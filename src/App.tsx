import React, { useEffect } from "react";
import Header from "components/Header";
import { AddCity } from "components/AddCity";
import Main from "components/Main";
import { initApp } from "app/actions/initApp";
import { connect } from "react-redux";
import Toaster from "components/Toaster";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { AppState } from "app/types/AppState";
import { getSelectedTheme } from "app/selectors/ui";
import { Theme } from "app/types/Theme";
import { themeGenerator } from "theme";

interface Props {
  initApp: typeof initApp;
  theme: Theme;
}

function App({ initApp, theme }: Props) {
  useEffect(() => {
    initApp();
  }, [initApp]);

  const generatedTheme = themeGenerator(theme);
  return (
    <div>
      <ThemeProvider theme={generatedTheme}>
        <CssBaseline />
        <Header />
        <Main />
        <AddCity />
        <Toaster />
      </ThemeProvider>
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  theme: getSelectedTheme(state),
});

const mapDispatchToProps = {
  initApp,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
