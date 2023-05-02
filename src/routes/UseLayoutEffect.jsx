import { useState, useLayoutEffect, useRef } from "react";

const UseLayoutEffect = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const el = useRef();

  useLayoutEffect(() => {
    setWidth(el.current.clientWidth);
    setHeight(el.current.clientHeight);
  });

  return (
    <div
      style={{
        margin: `10vh`,
        textAlign: `center`
      }}
    >
      <h2>textarea width: {width}px</h2>
      <h2>textarea height: {height}px</h2>

      <textarea
        onClick={() => {
          // this is basically saying "force udpate"
          setWidth(0);
        }}
        ref={el}
      />
    </div >
  )
}

export default UseLayoutEffect;