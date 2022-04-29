import {React, useEffect } from "react";
import { publish } from "../utils/PubSub";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions";

export const KPIWidget = () => {

  const counter = useSelector(state => state.counter);
  const dataList = useSelector((state) => state.dataList);
  const dispatch = useDispatch();

  const publishEvent = () => {
    publish("widget-binding", { data: [{sales: 2000}]});          
  }

  useEffect((data) => {
    console.log("Testing useEffect", data);
  }, [dataList]);

  return (
    <div className="card-bg w-100 border d-flex flex-column">
      <div className="p-4 d-flex flex-column h-100">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="m-0 h5 font-weight-bold text-dark" onClick={increment}>Sales</h4>
          <div className="py-1 px-2 bg-grey rounded-circle">
            <i className="fas fa-suitcase"></i>
          </div>
        </div>
        <h4 className="my-4 text-right text-dark h2 font-weight-bold" onClick={publishEvent}>
          $2,000
        </h4>
        <p className="mt-2 text-success small">
          <i className="fas fa-angle-up p-0"></i> {counter}%
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
          <br></br>
          <button onClick={() => dispatch(increment())}>Increment +</button>
          <br></br>
          <button onClick={() => dispatch(decrement())}>Decrement -</button>
        </p>
      </div>
    </div>
  );
};
