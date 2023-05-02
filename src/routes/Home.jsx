import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-links">
      <Link to="/useRef" className="home-link">useRef</Link>
      <Link to="/useReducer" className="home-link">useReducer</Link>
      <Link to="/useMemo" className="home-link">useMemo</Link>
      <Link to="/useCallback" className="home-link">useCallback</Link>
      <Link to="/useLayoutEffect" className="home-link">useLayoutEffect</Link>
      <Link to="/useID" className="home-link">useId</Link>
    </div>
  )
}

export default Home;