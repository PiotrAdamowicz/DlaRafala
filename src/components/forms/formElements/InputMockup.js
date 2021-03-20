import React from "react";
import MarkupId from "./MarkupId";

function inputMockup(props) {
  return (
    <div className={`${props.layout}`}>
      <div className="input-field">
        <input
          disabled={props.disabled ? true : false}
          value={props.value}
          onChange={props.change}
          type="text"
          id={props.name}
        />

        {props.markupId ? (
          <label htmlFor={props.name}>
            <MarkupId markupId={props.markupId} />
            {props.label}:
          </label>
        ) : null}
      </div>
    </div>
  );
}
export default inputMockup;
