import useOutsideClick from "./Use-OutSide-Click";
import { useState, useEffect, useRef } from "react";

const TestUseOutSideClickHook = () => {
  const [showContent, setShowContent] = useState(false);
  const Ref = useRef();
  useOutsideClick(Ref, () => setShowContent(false));
  return (
    <>
      {
        <div className="">
          {showContent ? <div ref={Ref} className="bg-black px-3 py-3 text-white font-thin">This is the content </div> : <button className="bg-blue-900 text-white px-1 py-1" onClick={() => setShowContent(true)}>ShowContent</button>}
        </div>
      }
    </>
  );
};

export default TestUseOutSideClickHook ; 
