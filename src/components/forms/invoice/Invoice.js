import React, { useState } from "react";
import InputMockup from "../formElements/InputMockup";
import InvoiceType from "./InvoiceType";
import SaleType from "../formElements/SaleType";

const PreInvoice = (props) => {
  //FIXME: initial values of state need to be removed; for now only invoice Type need initial value(not empty string)
  const [invoiceType, setInvoiceType] = useState("PRE");
  const [invoiceID, setInvoiceID] = useState("0000000001");
  const [taxDate, setTaxDate] = useState("11.11.1111");
  const [issueDate, setIssueDate] = useState("12.11.1111");
  const [saleDate, setSaleDate] = useState("12.11.1111");
  const [buyerId, setBuyerId] = useState("000001");
  const [buyerName, setBuyerName] = useState("Jan Kowalski");
  const [buyerAdress, setBuyerAddress] = useState(
    "Malinowa 27, 15-120 Białystok"
  );
  const [grossSale, setGrossSale] = useState("");
  const [netSale, setNetSale] = useState("");
  const [sale23, setSale23] = useState("0");
  const [salesType, setSaleType] = useState("23");

  const handleSubmit = (e) => {
    console.dir({
      invoiceType,
      invoiceID,
      taxDate,
      issueDate,
      saleDate,
      buyerId,
      buyerName,
      buyerAdress,
      grossSale,
      netSale,
      salesType,
    });
    e.preventDefault();
  };

  const handleChangeSaleType = (e) => {
    setSaleType(e.target.value);
  };
  const handleChangeInvoiceType = (e) => {
    setInvoiceType(e.target.value);
  };
  const handleChangeInvoiceID = (e) => {
    setInvoiceID(e.target.value);
  };
  const handleChangeTaxDate = (e) => {
    setTaxDate(e.target.value);
  };
  const handleChangeIssueDate = (e) => {
    setIssueDate(e.target.value);
  };
  const handleChangeSaleDate = (e) => {
    setSaleDate(e.target.value);
  };
  const handleChangeBuyerId = (e) => {
    setBuyerId(e.target.value);
  };
  const handleChangeBuyerName = (e) => {
    setBuyerName(e.target.value);
  };
  const handleChangeBuyerAdress = (e) => {
    setBuyerAddress(e.target.value);
  };
  const handleChangeGrossSale = (e) => {
    setGrossSale(e.target.value);
  };
  const handleChangeSale23 = (e) => {
    setSale23("");
  };

  //Calculated inputs, for esthetic purposes fixed to 3 decimals.
  const handleChangeCalculated = (e) => {
    // setGrossSale(e.target.value);
    // setSale23((grossSale * (100 / 123)).toFixed(3));
  };

  return (
    <main className="row">
      <form action="" onSubmit={handleSubmit}>
        <section className="invoice-info">
          <div className="row">
            <div className="col s12">
              <div className="row">
                <h2 className="col s12">Dane Faktury:</h2>
                <InvoiceType
                  value={invoiceType}
                  change={handleChangeInvoiceType}
                />
                <div>
                  <InputMockup
                    value={invoiceID}
                    change={handleChangeInvoiceID}
                    name="invoiceID"
                    layout="col s6"
                    label="Numer faktury"
                    markupId="2"
                  />
                  <InputMockup
                    value={taxDate}
                    change={handleChangeTaxDate}
                    name="taxDate"
                    layout="col s6"
                    label="Data obowiązku podatkowego"
                    markupId="3"
                  />
                  <InputMockup
                    value={issueDate}
                    change={handleChangeIssueDate}
                    name="issueDate"
                    layout="col s6"
                    label="Data wystawienia"
                    markupId="4"
                  />
                  <InputMockup
                    value={saleDate}
                    change={handleChangeSaleDate}
                    name="saleDate"
                    layout="col s6"
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
              value={buyerId}
              change={handleChangeBuyerId}
              name="buyerId"
              layout="col s12"
              label="Numer identyfikacyjny"
              markupId="6"
            />
            <InputMockup
              value={buyerName}
              change={handleChangeBuyerName}
              layout="col s12"
              label="Nazwa (imię i nazwisko)"
              markupId="7"
            />
            <InputMockup
              value={buyerAdress}
              change={handleChangeBuyerAdress}
              layout="col s12"
              label="Adres (siedziba) "
              markupId="8"
            />
          </div>
        </section>
        <section className="sell-info">
          <h2 className="col s12">Sprzedaż udokumentowana</h2>
          <div className="row">
            <InputMockup
              value={netSale}
              change={handleChangeCalculated}
              name="netSale"
              layout="col s12"
              label="Wartość sprzedaży netto"
              markupId="9"
            />
          </div>
          <div className="row">
            <InputMockup
              value={grossSale}
              change={handleChangeCalculated}
              name="grossSale"
              layout="col s12"
              label="Wartość sprzedaży brutto"
              markupId="9"
            />
          </div>
          <div className="row">
            <SaleType change={handleChangeSaleType} />
          </div>
          <div className="row">
            <InputMockup
              value={sale23}
              change={handleChangeCalculated}
              name="sale23"
              layout="col s3"
              label="Sprzedaż wg stawki 23%"
              markupId="10"
            />
            <InputMockup layout="col s3 push-s1" markupId="11" />
            <InputMockup layout="col s3 push-s2" />
          </div>
          <div className="row">
            <InputMockup
              layout="col s3"
              label="Sprzedaż wg stawki 8%"
              markupId="12"
            />
            <InputMockup layout="col s3 push-s1" markupId="13" />
            <InputMockup layout="col s3 push-s2" />
          </div>
          <div className="row">
            <InputMockup
              layout="col s3"
              label="Sprzedaż wg stawki 5%"
              markupId="14"
            />
            <InputMockup layout="col s3 push-s1" markupId="15" />
            <InputMockup layout="col s3 push-s2" />
          </div>
          <div className="row">
            <InputMockup
              layout="col s3"
              label="Sprzedaż krajowa 0%"
              markupId="16"
            />
          </div>
          <div className="row">
            <InputMockup layout="col s3" label="Eksport 0%" markupId="17" />
          </div>
          <div className="row">
            <InputMockup layout="col s3" label="WDT 0%" markupId="18" />
          </div>
          <div className="row">
            <InputMockup layout="col s3" label="WŚU" markupId="18" />
          </div>
          <div className="row">
            <InputMockup
              layout="col s3"
              label="Sprzedaż zwolniona"
              markupId="19"
            />
          </div>
          <div className="row">
            <InputMockup
              layout="col s3"
              label="Odwrotne obciążenie"
              markupId="20"
            />
          </div>
        </section>
        <div className="row">
          <div className="col s1">
            <button type="submit" className="btn-large waves-effect">
              Dodaj
            </button>
          </div>
          <div className="col s1 push-s1">
            <button className="btn-large waves-effect">Anuluj</button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default PreInvoice;
