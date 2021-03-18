import React from "react";
import MarkupId from "./MarkupId";

export default function inputDate(props) {
  return (
    <div className={`${props.layout}`}>
      <div className="input-field">
        <input type="text" id="date1" />

        {props.markupId ? (
          <label htmlFor="date1" onChange={props.handleChange}>
            <MarkupId markupId={props.markupId} />
            {props.label}:
          </label>
        ) : null}
      </div>
    </div>
  );
}
