import React, { useState } from "react";
import InputMockup from "../formElements/InputMockup";
import InvoiceType from "./InvoiceType";
import SaleType from "../formElements/SaleType";

const PreInvoice = (props) => {
  const [invoiceType, setInvoiceType] = useState("PRE");
  const [invoiceID, setInvoiceID] = useState();
  const [taxDate, setTaxDate] = useState();
  const [issueDate, setIssueDate] = useState();
  const [saleDate, setSaleDate] = useState();
  const [buyerId, setBuyerId] = useState();
  const [buyerName, setBuyerName] = useState();
  const [buyerAdress, setBuyerAddress] = useState();
  const [grossSale, setGrossSale] = useState();
  const [netSale, setNetSale] = useState();
  const [sale23, setSale23] = useState();
  const [sale08, setSale08] = useState();
  const [sale05, setSale05] = useState();
  const [saleType, setSaleType] = useState();
  const [tax23, setTax23] = useState();
  const [tax08, setTax08] = useState();
  const [tax05, setTax05] = useState();

  //TODO: model object of Output
  const handleSubmit = (e) => {
    const form = {
      invoiceData: { invoiceType, invoiceID, taxDate, issueDate, saleDate },
      buyerData: { buyerId, buyerName, buyerAdress },
      saleData: { grossSale, netSale, saleType },
    };
    console.dir({ form });
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
  // const handleChangeGrossSale = (e) => {
  //   setGrossSale(e.target.value);
  // };
  // const handleChangeSale23 = (e) => {
  //   setSale23("");
  // };

  //Calculated inputs, for esthetic purposes fixed to 3 decimals.
  const handleChangeCalculated = (e) => {
    //FIXME: this needs work: on intial render ther's no rendered saleInput inputs and gross value; after input and change of saleType there's no state clean up; Generally needs some broader view;
    let sale = parseFloat(e.target.value);

    if (isNaN(sale)) {
      sale = 0;
    }
    setNetSale(sale);
    let gross = 0;
    switch (saleType) {
      case "23":
        gross = sale * 0.23 + sale;
        setGrossSale(gross);
        setSale23(gross);
        setTax23(sale * 0.23);
        break;
      case "8":
        gross = sale * 0.08 + sale;
        setGrossSale(gross);
        setSale08(gross);
        setTax08(sale * 0.08);
        break;
      case "5":
        gross = sale * 0.05 + sale;
        setGrossSale(gross);
        setSale05(gross);
        setTax05(sale * 0.05);
        break;
      default:
        setGrossSale(gross);
        break;
    }
  };

  const saleInput = (type) => {
    switch (type) {
      case "23":
        return (
          <>
            <InputMockup
              value={sale23}
              name="sale23"
              layout="col s3"
              label="Sprzedaż wg stawki 23%"
              markupId="10"
            />
            <InputMockup
              value={tax23}
              name="tax23"
              layout="col s3 push-s1"
              label="VAT:"
              markupId="11"
            />
          </>
        );
        break;
      case "8":
        return (
          <>
            <InputMockup
              value={sale08}
              name="sale08"
              layout="col s3"
              label="Sprzedaż wg stawki 8%"
              markupId="12"
            />
            <InputMockup
              value={tax08}
              name="tax08"
              layout="col s3 push-s1"
              markupId="13"
            />
          </>
        );
        break;
      case "5":
        return (
          <>
            <InputMockup
              value={sale05}
              name="sale05"
              layout="col s3"
              label="Sprzedaż wg stawki 5%"
              markupId="14"
            />
            <InputMockup
              value={tax05}
              name="tax05"
              layout="col s3 push-s1"
              markupId="15"
            />
          </>
        );
        break;
      case "domestic":
        return (
          <InputMockup
            layout="col s3"
            label="Sprzedaż krajowa 0%"
            markupId="16"
          />
        );
        break;
      case "export":
        return <InputMockup layout="col s3" label="Eksport 0%" markupId="17" />;
        break;
      case "wdt":
        return <InputMockup layout="col s3" label="WDT 0%" markupId="18" />;
        break;
      case "wsu":
        return <InputMockup layout="col s3" label="WŚU" markupId="18" />;
        break;
      case "exempt":
        return (
          <InputMockup
            layout="col s3"
            label="Sprzedaż zwolniona"
            markupId="19"
          />
        );
        break;
      case "reverse":
        return (
          <InputMockup
            layout="col s3"
            label="Odwrotne obciążenie"
            markupId="20"
          />
        );
        break;
      default:
        return (
          <>
            <InputMockup
              value={sale23}
              name="sale23"
              layout="col s3"
              label="Sprzedaż wg stawki 23%"
              markupId="10"
            />
            <InputMockup
              value={tax23}
              name="tax23"
              layout="col s3 push-s1"
              label="VAT:"
              markupId="11"
            />
          </>
        );
        break;
    }
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
          <div className="row">
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
                name="grossSale"
                layout="col s12"
                label="Wartość sprzedaży brutto"
                markupId="9"
              />
            </div>
            <div className="row">
              <SaleType change={handleChangeSaleType} />
            </div>
            <div className="row">{saleInput(saleType)}</div>

            <div className="col s1">
              <button type="submit" className="btn-large waves-effect">
                Dodaj
              </button>
            </div>
            <div className="col s1 push-s1">
              <button className="btn-large waves-effect">Anuluj</button>
            </div>
          </div>
        </section>
      </form>
    </main>
  );
};

export default PreInvoice;
