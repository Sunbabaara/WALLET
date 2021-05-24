import React from "react";
import { Container } from "reactstrap";
import Charts from "../components/Charts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TransactiosList from "./TransactiosList";



const HomeScreen = () => {
  return (
    <>
      <Header />
      <Container>
        <Charts />
        <TransactiosList />
      </Container>
      <Footer />
    </>
  );
};

export default HomeScreen;
