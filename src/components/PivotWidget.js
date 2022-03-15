import React from "react";

export const PivotWidget = () => {
  return (
    <div className="card-bg w-100 d-flex flex-column wide border d-flex flex-column">
      <div className="d-flex flex-column p-0 h-100">
        <div className="mx-4 mt-3 d-flex justify-content-between align-items-center">
          <h4 className="font-weight-bold text-dark h5">Page Visits</h4>
          <div className="p-1 bg-grey rounded-circle">
            <i className="fas fa-sticky-note"></i>
          </div>
        </div>
        <table>
          <thead color="light">
            <tr>
              <th>Page Name</th>
              <th className="table-rem">Views</th>
              <th className="table-rem">Value</th>
              <th>Bounce Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>/demo/admin/index.html</td>
              <td className="table-rem">3,689</td>
              <td className="table-rem">$10</td>
              <td className="text-success text-center">
                <i className="fas fa-arrow-up"></i> 20%
              </td>
            </tr>
            <tr>
              <td>/demo/admin/index.html</td>
              <td className="table-rem">3,689</td>
              <td className="table-rem">$10</td>
              <td className="text-success text-center">
                <i className="fas fa-arrow-up"></i> 20%
              </td>
            </tr>
            <tr>
              <td>/demo/admin/index.html</td>
              <td className="table-rem">3,689</td>
              <td className="table-rem">$10</td>
              <td className="text-success text-center">
                <i className="fas fa-arrow-up"></i> 20%
              </td>
            </tr>
          </tbody>
        </table>
        <p className="c-p text-dark font-weight-bold text-right mt-auto mr-3">
          See More
          <i className="fas fa-arrow-right ml-1"></i>
        </p>
      </div>
    </div>
  );
};
