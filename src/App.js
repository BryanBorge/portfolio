import React from "react";
import Content from "./content";
import Layout from './components/Layout/Layout'
import classes from "./App.module.css";
function App() {
  return (
    <div className={classes.main}>
      <Layout>
        <Content />
      </Layout>
    </div>
  );
}

export default App;
