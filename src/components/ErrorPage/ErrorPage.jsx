import React from "react";

const ErrorPage = () => {
  return (
    <div className="text-center mt-52 h-full">
      <h3 className="text-3xl font-semibold">Opps...</h3>
      <br />
      <p className="text-2xl text-red-500">An unexpected error has occurred</p>
      <br />
      <br />
      <p>
        <small className="text-red-500">404 ......... Not Found</small>
      </p>
    </div>
  );
};

export default ErrorPage;
