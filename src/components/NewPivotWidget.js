import React from "react";
import { publish } from "../utils/PubSub";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, updateStatus } from "../actions";

export const NewPivotWidget = () => {
  const dataList = useSelector((state) => state.dataList);
  const dispatch = useDispatch();

  const publishEvent = () => {
    publish("widget-binding", { data: [{ sales: 2000 }] });
  };

  return (
    <div className="container-class card-bg w-100 border d-flex flex-column">
      <div className="p-4 d-flex flex-column h-100">
        <table>
          <tr>
            <th>Widget</th>
            <th>Status</th>
          </tr>
          {dataList.map(function (row, index) {
            return (
              <tr onClick={() => dispatch(updateStatus(row))}>
                <td key={index}>{row.name}</td>
                <td key={index}>{row.active ? "Active": "Inactive"}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};
