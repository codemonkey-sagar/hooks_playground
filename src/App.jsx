import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./routes/Home"
import UseReducer from "./routes/UseReducer"
import UseMemo from "./routes/UseMemo"
import UseCallback from "./routes/UseCallback"
import UseRef from "./routes/UseRef"
import UseLayoutEffect from "./routes/UseLayoutEffect"
import UseId from "./routes/UseId"

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useReducer" element={<UseReducer />} />
        <Route path="/useMemo" element={<UseMemo />} />
        <Route path="/useCallback" element={<UseCallback />} />
        <Route path="/useRef" element={<UseRef />} />
        <Route path="/useLayoutEffect" element={<UseLayoutEffect />} />
        <Route path="/useId" element={<UseId />} />
      </Routes>
    </div>
  )
}

export default App;