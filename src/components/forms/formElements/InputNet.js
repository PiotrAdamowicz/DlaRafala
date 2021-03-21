import React from "react";
import MarkupId from "./MarkupId";

export default function InputNet(props) {
  return (
    <div className={`${props.layout}`}>
      <div className="input-field">
        <input
          disabled={props.disabled ? true : false}
          value={props.value}
          onSubmit={props.change}
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
