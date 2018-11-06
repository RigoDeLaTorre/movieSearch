import React from "react";
import { Link } from "react-router-dom";

const LoadingComp = props => {
  return (
    <section
      id="loading-comp"
      className={props.initial == "loading" ? "active" : "not-active"}
    >
      <div className="loading-icon">
        <div
          className="lds-css ng-scope"
          style={{ width: "200px", height: "200px" }}
        >
          <div
            style={{ width: "100%", height: "100%" }}
            className="lds-rolling"
          >
            <div />
          </div>
        </div>
      </div>
      <div className="loading-text">Loading !</div>
    </section>
  );
};

export default LoadingComp;
