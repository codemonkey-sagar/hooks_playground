import { Link, useLocation, useNavigate } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <header>
      <nav>
        <h1 className="nav-logo">
          <Link to="/">React Hooks Playground</Link>
        </h1>
        <select value={pathname} onChange={e => { navigate(e.target.value) }}>
          <option value="/">Home</option>
          <option value="/useRef">useRef</option>
          <option value="/useReducer">useReducer</option>
          <option value="/useMemo">useMemo</option>
          <option value="/useCallback">useCallback</option>
          <option value="/useLayoutEffect">useLayoutEffect</option>
          <option value="/useId">useId</option>
        </select>
      </nav>
    </header >
  )
}

export default Nav;