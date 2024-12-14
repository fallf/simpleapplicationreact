import React from "react";

import "./App.css";

function Header() {
  return <h1> simple application</h1>;
}
function Content(props) {
  return <p style={{ color: props.color }}> {props.text} </p>;
}

function Footer() {
  return <h1> created by yours truly FatouFact# </h1>;
}

function App() {
  return (
    <>
      <Header />
      <Content color="pink" text="I choose to be the best version of myself" />
      <Content
        color="green"
        text="I know more today than I did yesterday, and I will know more tomorrow than I do today."
      />
      <Content color="yellow" text="I know I will be successful" />
      <Footer />
    </>
  );
}

export default App;
