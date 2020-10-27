import React, { useEffect } from "react";
import Header from "components/Header";
import { AddCity } from "components/AddCity";
import Main from "components/Main";
import { initApp } from "app/actions/initApp";
import { connect } from "react-redux";

interface Props {
  initApp: typeof initApp;
}

function App({ initApp }: Props) {
  useEffect(() => {
    initApp();
  }, [initApp]);

  return (
    <div>
      <Header />
      <Main />
      <AddCity />
    </div>
  );
}

const mapDispatchToProps = {
  initApp,
};

export default connect(undefined, mapDispatchToProps)(App);
