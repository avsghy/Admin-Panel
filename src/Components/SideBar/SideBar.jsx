import { Link, NavLink } from "react-router";
function SideBar() {
  return (
    <>
      <aside className="sidebar">
        <header>
          <Link to={"/dashboard"}>
            <img className="website-logo" alt="logo" />
          </Link>
        </header>
        <main className="side-menu">
          <ul className="side-container">
            <li>
              <NavLink to={"/dashboard"} className="navlink">
                <span className="navicon">
                  <i className="fa-solid fa-house"></i>
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/products"} className="navlink">
                <span className="navicon">
                  <i className="fa-solid fa-box"></i>
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/users"} className="navlink">
                <span className="navicon">
                  <i className="fa-solid fa-users"></i>
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/analysis"} className="navlink">
                <span className="navicon">
                  <i className="fa-solid fa-chart-line"></i>
                </span>
              </NavLink>
            </li>
          </ul>
        </main>
        <footer></footer>
      </aside>
    </>
  );
}
export default SideBar;
