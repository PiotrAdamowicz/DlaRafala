import React from "react";
import MarkupId from "./MarkupId";

function inputMockup(props) {
  return (
    <div className={`${props.layout}`}>
      <div className="input-field">
        <input
          value={props.value}
          onChange={props.change}
          type="text"
          id="date1"
        />

        {props.markupId ? (
          <label htmlFor="date1">
            <MarkupId markupId={props.markupId} />
            {props.label}:
          </label>
        ) : null}
      </div>
    </div>
  );
}
export default inputMockup;
