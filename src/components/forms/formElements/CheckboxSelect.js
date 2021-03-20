import React from "react";

export default function CheckboxSelect(props) {
  return (
    <div className="row">
      <p className="recordType">Rodzaj sprzedaży:</p>
      <div className="recordType input-field col s6">
        <select onChange={props.change} className="browser-default">
          <option value="23">23%</option>
          <option value="8">8%</option>
          <option value="5">5%</option>
          <option value="domestic">Krajowa 0%</option>
          <option value="export">Eksport 0%</option>
          <option value="wdt">WDT 0%</option>
          <option value="wsu">WŚU</option>
          <option value="exempt">Sprzedaż zwolniona</option>
          <option value="reverse">Odwrotne obciążenie</option>
        </select>
      </div>
    </div>
  );
}
