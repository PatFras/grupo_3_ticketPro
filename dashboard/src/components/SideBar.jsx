import { Link, useLocation } from "react-router-dom";

export const SideBar = () => {

  const {pathname} = useLocation();

  return (
    <ul
      className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
            <div className="p-4">
          <a href="/">
          <img
            className="w-100"
            src="/images/logo.png"
            alt="TicketPro"
          />
          </a>
        
        </div>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <Link className="nav-link" to="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard - TicketPro</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Actions</div>

      <li className={`nav-item ${pathname === '/' && 'active'}`}>
        <Link className="nav-link collapsed" to="/">
          <i className="fas fa-fw fa-home"></i>
          <span>HOME</span>
        </Link>
      </li>

      <li className={`nav-item ${pathname === '/products' && 'active'}`}>
        <Link className="nav-link" to="/products">
          <i className="fas fa-fw fa-film"></i>
          <span>PRODUCTOS</span>
        </Link>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
};
