import React from "react";
import Sidebar from "./components/Sidebar/sidebar";
import Content from "./content";
import Layout from './components/Layout/Layout'
import classes from "./App.module.css";
import layout from "./components/Layout/Layout";
function App() {
  return (
    <div className="main">
      <Layout>
        <Content />
      </Layout>
    </div>
  );
}

export default App;
