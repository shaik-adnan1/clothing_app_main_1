import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import '../navigation/navigation.style.scss'

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to='/' className = "logo-container">
          <CrwnLogo />
        
        </Link>
        <div className="nav-links-container">
        <Link className="nav-link" to='/shop'>Shop</Link>

        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
