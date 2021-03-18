import React, { Component } from "react";
import InputMockup from "../formElements/InputMockup";

export default class PreInvoice extends Component {
  state = {
    content: "",
  };

  render() {
    return (
      <main>
        <section className="invoice-info">
          <div className="row">
            <div className="col s12">
              <div className="row">
                <h2 className="col s12">Dane Faktury:</h2>
                <div className="col s6">
                  <InputMockup label="Numer faktury" markupId="2" />
                  <InputMockup
                    label="Data obowiązku podatkowego"
                    markupId="3"
                  />
                </div>
                <div className="col s6">
                  <InputMockup label="Data wystawienia" markupId="4" />
                  <InputMockup
                    label="Data sprzedaży (wydanie towaru)"
                    markupId="5"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="buyer-info">
          <div className="row">
            <h2 className="col s12">Dane Kontrahenta:</h2>
            <InputMockup
              layout="col s12"
              label="Numer identyfikacyjny"
              markupId="6"
            />
            <InputMockup
              layout="col s12"
              label="Nazwa (imię i nazwisko)"
              markupId="7"
            />
            <InputMockup
              layout="col s12"
              label="Adres (siedziba) "
              markupId="8"
            />
          </div>
        </section>
        <section className="sell-info">
          <div className="row">
            <h2 className="col s12">Sprzedaż udokumentowana</h2>
            <InputMockup
              layout="col s12"
              label="Wartość sprzedaży brutto"
              markupId="9"
            />
          </div>
          <div className="row">
            <InputMockup
              layout="col s3 push-s1"
              label="Sprzedaż wg stawki 23%"
              markupId="10"
            />
            <InputMockup layout="col s3 push-s1" markupId="11" />
            <InputMockup layout="col s3 push-s1" />
          </div>
          <div className="row">
            <InputMockup
              layout="col s3 push-s1"
              label="Sprzedaż wg stawki 8%"
              markupId="12"
            />
            <InputMockup layout="col s3 push-s1" markupId="13" />
            <InputMockup layout="col s3 push-s1" />
          </div>
          <div className="row">
            <InputMockup
              layout="col s3 push-s1"
              label="Sprzedaż wg stawki 5%"
              markupId="14"
            />
            <InputMockup layout="col s3 push-s1" markupId="15" />
            <InputMockup layout="col s3 push-s1" />
          </div>
          <div className="row">
            <InputMockup
              layout="col s3 push-s1"
              label="Sprzedaż krajowa 0%"
              markupId="16"
            />
          </div>
          <div className="row">
            <InputMockup
              layout="col s3 push-s1"
              label="Eksport 0%"
              markupId="17"
            />
          </div>
          <div className="row">
            <InputMockup layout="col s3 push-s1" label="WDT 0%" markupId="18" />
          </div>
          <div className="row">
            <InputMockup layout="col s3 push-s1" label="WŚU" markupId="18" />
          </div>
          <div className="row">
            <InputMockup
              layout="col s3 push-s1"
              label="Sprzedaż zwolniona"
              markupId="19"
            />
          </div>
          <div className="row">
            <InputMockup
              layout="col s3 push-s1"
              label="Odwrotne obciążenie"
              markupId="20"
            />
          </div>
        </section>
      </main>
    );
  }
}
