import React, { useState } from "react";
import InputMockup from "../formElements/InputMockup";

const PreInvoice = (props) => {
  //FIXME: Mockup date to be removed
  const [invoiceID, setInvoiceID] = useState("0000000001");
  const [taxDate, setTaxDate] = useState("11.11.1111");
  const [issueDate, setIssueDate] = useState("12.11.1111");
  const [saleDate, setSaleDate] = useState("12.11.1111");
  const [buyerId, setBuyerId] = useState("000001");
  const [buyerName, setBuyerName] = useState("Jan Kowalski");
  const [buyerAdress, setBuyerAdress] = useState(
    "Malinowa 27, 15-120 Białystok"
  );
  const [grossSale, setGrossSale] = useState("2000");
  const [sale23, setSale23] = useState("");

  const handleSubmit = (e) => {
    console.dir({
      invoiceID,
      taxDate,
      issueDate,
      saleDate,
      buyerId,
      buyerName,
      buyerAdress,
      grossSale,
    });
    e.preventDefault();
  };
  const handleChangeInoiceID = (e) => {
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
    setBuyerAdress(e.target.value);
  };
  const handleChangeGrossSale = (e) => {
    setGrossSale(e.target.value);
  };
  const handleChangeSale23 = (e) => {
    setSale23("");
  };

  return (
    <main>
      <form action="" onSubmit={handleSubmit}>
        <section className="invoice-info">
          <div className="row">
            <div className="col s12">
              <div className="row">
                <h2 className="col s12">Dane Faktury:</h2>
                <div className="col s6">
                  <InputMockup
                    value={invoiceID}
                    change={handleChangeInoiceID}
                    label="Numer faktury"
                    markupId="2"
                  />
                  <InputMockup
                    value={taxDate}
                    change={handleChangeTaxDate}
                    label="Data obowiązku podatkowego"
                    markupId="3"
                  />
                </div>
                <div className="col s6">
                  <InputMockup
                    value={issueDate}
                    change={handleChangeIssueDate}
                    label="Data wystawienia"
                    markupId="4"
                  />
                  <InputMockup
                    value={saleDate}
                    change={handleChangeSaleDate}
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
            <InputMockup
              value={grossSale}
              change={handleChangeGrossSale}
              name="grossSale"
              layout="col s12"
              label="Wartość sprzedaży brutto"
              markupId="9"
            />
          </div>
          <div className="row">
            <InputMockup
              value={sale23}
              change={handleChangeSale23}
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
