import React, { useEffect } from "react";
import Helmet from "react-helmet";

function Page({ title, description, className, children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Angelica Mapeso | {title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <main className={"flex-grow-1 " + (className || "")}>{children}</main>
    </>
  );
}

export default Page;
