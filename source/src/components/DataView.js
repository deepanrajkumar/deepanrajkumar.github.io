import React from "react";
import PropTypes from "prop-types";

const contentList = ["JsonTest", "ApiTest"];

const DataView = (props) => {
  return (
    <div>
      <p>Data View</p>
      <ul>
        {contentList.map((item, index) => (
          <li key={index}>
            <button>
              {index} - {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

DataView.propTypes = {};

export default DataView;
