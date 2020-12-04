import React from "react";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import Main from "./Main";
import Container from "@material-ui/core/Container";
const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <Main />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
