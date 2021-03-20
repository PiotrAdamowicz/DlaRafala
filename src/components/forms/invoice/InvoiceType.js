import React from "react";

export default function InvoiceType(props) {
  return (
    <div className="row">
      <p className="recordType">Rodzaj rejestru:</p>
      <div className="recordType input-field col s6">
        <select onChange={props.change} className="browser-default">
          <option value="PRE">Faktura Zaliczkowa</option>
          <option value="FINAL">Faktura Końcowa</option>
        </select>
      </div>
    </div>
  );
}
