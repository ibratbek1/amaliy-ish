import { useState } from "react";

function App() {

  const [matn, setMatn] = useState("assalomu alaykum");
  function matnniAlmashtir() {
    setMatn(matn === "asalomu alaykum" ? "hush kelbsiz" : "assalomu alaykum");
  }

  const [rang, setRang] = useState("green");
  function rangniAlmashtir() {
    setRang(rang === "green" ? "yellow" : "green");
  }

  const [kasb, setKasb] = useState("Frontend dasturchi");

  const [parolKorinadimi, setParolKorinadimi] = useState(false);
  function parolniAlmashtir() {
    setParolKorinadimi(!parolKorinadimi);
  }

  const [til, setTil] = useState("salom");
  function tilniAlmashtir() {
    setTil(til === "salom" ? "hello" : "salom");
  }

  const [textCase, setTextCase] = useState("frontend");
  function caseAlmashtir() {
    setTextCase(textCase === "frontend" ? "FRONTEND" : "frontend");
  }

  const [size, setSize] = useState(100);
  function sizeAlmashtir() {
    setSize(size === 100 ? 200 : 100);
  }

  const [btnText, setBtnText] = useState("yoqihs");
  function tugmaMatniniAlmashtir() {
    setBtnText(btnText === "yoqish" ? "ochirish" : "yoqish");
  }

  return (
    <div style={{ padding: "20px" }}>

      <h3>{matn}</h3>
      <button onClick={matnniAlmashtir}>matnni almashtr</button>

   
      <div style={{ backgroundColor: rang, padding: "30px", marginTop: "10px" }}>
        <p>Fon rangi: {rang}</p>
      </div>
      <button onClick={rangniAlmashtir}>rangni almashtir</button>

 
      <h3>{kasb}</h3>
      <button onClick={() => setKasb("React developer")}>React developer</button>
      <button onClick={() => setKasb("JavaScript developer")}>JS developer</button>


      <h3>{parolKorinadimi ? "123456" : "**********"}</h3>
      <button onClick={parolniAlmashtir}>
        {parolKorinadimi ? "yashirsh" : "korsatish"}
      </button>

      
      <h3>{til}</h3>
      <button onClick={tilniAlmashtir}>tilni almashtir</button>

     
      <h3>{textCase}</h3>
      <button onClick={caseAlmashtir}>xarflarni almashtirish</button>

      
      <div
        style={{
          width: size,
          height: size,
          background: "lightblue",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        Hajm: {size}px
      </div>
      <button onClick={sizeAlmashtir}>xajmni ozgartirish</button>
     
      <button onClick={tugmaMatniniAlmashtir}>{btnText}</button>

    </div>
  );
}

export default App;