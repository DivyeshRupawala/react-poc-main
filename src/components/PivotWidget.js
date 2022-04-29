import React from "react";
import { publish } from "../utils/PubSub";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, updateStatus } from "../actions";

export const PivotWidget = () => {
  const dataList = useSelector((state) => state.dataList);
  const dispatch = useDispatch();

  const publishEvent = () => {
    publish("widget-binding", { data: [{ sales: 2000 }] });
  };

  return (
    <div className="card-bg w-100 border d-flex flex-column">
      <div className="p-4 d-flex flex-column h-100">
        <table>
          <tr>
            <th>Name</th>
            <th>View Name</th>
            <th>Value</th>
            <th>Bounty Rate</th>
            <th>Status</th>
          </tr>
          {dataList.map(function (row, index) {
            return (
              <tr onClick={() => dispatch(updateStatus(row))}>
                <td key={index}>{row.name}</td>
                <td key={index}>{row.views}</td>
                <td key={index}>{row.value}</td>
                <td key={index}>{row.rate}</td>
                <td key={index}>{row.active ? "True": "False"}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};
