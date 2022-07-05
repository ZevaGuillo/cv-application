import React from "react";
import { useReactToPrint } from "react-to-print";

import Area from "./Area";
import Education from "./Education";
import Experience from "./Experience";
import Information from "./Information";
import Name from "./Name";
import Skills from "./Skills";

function FormCV() {
  const [activeButton, setActiveButton] = React.useState(true);
  const componentRef = React.useRef(null);
  let setPromiseResolve = React.useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onAfterPrint: () => setActiveButton(true),
    onBeforeGetContent: () => handleOnBeforeGetContent(),
  });

  React.useEffect(() => {
    if (activeButton === false && setPromiseResolve.current) {
      setPromiseResolve.current(); // Resolves the promise, let
    }
  }, [activeButton, setPromiseResolve.current]);

  const handleOnBeforeGetContent = () => {
    return new Promise((resolve) => {
      setActiveButton(false);

      // Have to save the promise since useState doesn't take a callback like this.setState (Class Components) used to :(
      setPromiseResolve.current = resolve;
    });
  };

  return (
    <div className="formcv">
      <button className="print" onClick={handlePrint}><i class="fas fa-print"></i></button>

      <div className="border">
        <div className="cv" ref={componentRef}>
          <Name />
          <Information />
          <Area activeButton={"d"} />
          <Skills activeButton={activeButton} />
          <Education activeButton={activeButton} />
          <Experience activeButton={activeButton} />
        </div>
      </div>
    </div>
  );
}

export default FormCV;
