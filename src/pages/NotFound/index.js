import React from "react";
import { Link } from "react-router-dom";
import Page from "../../components/Page";

function NotFound() {
  return (
    <Page title="Not Found" description="Sorry! Can't find that page.">
      <section className="d-flex flex-column h-100 justify-content-center align-items-center">
        <h1>404 Not Found!</h1>
        <p className="h5 mb-3">Sorry, that page doesn't exist.</p>
        <Link to="/" className="btn btn-dark">
          <i className="fas fa-long-arrow-alt-left mr-2" aria-hidden="true"></i>
          Go back to homepage
        </Link>
      </section>
    </Page>
  );
}

export default NotFound;
