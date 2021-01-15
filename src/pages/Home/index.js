import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Angelica Mapeso | Home</title>
        <meta
          name="description"
          content="Hi, I'm Angelica Mapeso, an aspiring full-stack developer."
        />
      </Helmet>
    </>
  );
}
