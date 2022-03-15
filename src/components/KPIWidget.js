import React from "react";

export const KPIWidget = () => {
  return (
    <div className="card-bg w-100 border d-flex flex-column">
      <div className="p-4 d-flex flex-column h-100">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="m-0 h5 font-weight-bold text-dark">Sales</h4>
          <div className="py-1 px-2 bg-grey rounded-circle">
            <i className="fas fa-suitcase"></i>
          </div>
        </div>
        <h4 className="my-4 text-right text-dark h2 font-weight-bold">
          $2,000
        </h4>
        <p className="mt-2 text-success small">
          <i className="fas fa-angle-up p-0"></i> 27.4%
          <span
            style={{ fontSize: "0.95em" }}
            className="ml-2 font-weight-bold text-muted"
          >
            Since last month
          </span>
        </p>
        <p className="c-p mb-0 text-dark font-weight-bold text-right mt-auto">
          More Details
          <i className="fas fa-arrow-right ml-1"></i>
        </p>
      </div>
    </div>
  );
};
