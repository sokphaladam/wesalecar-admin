/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";

export function HeaderComponent() {
  const firebase = useFirebase();

  const handleMenu = () => {
    if (document.body.className === "page-sidebar-collapsed") {
      document.body.classList.remove("page-sidebar-collapsed");
    } else {
      document.body.classList.add("page-sidebar-collapsed");
    }
  };

  const handleFullscreen = () => {
    try {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        document.documentElement.requestFullscreen();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUser = () => {
    const user = document.getElementById('user');

    if(user!.className === 'dropdown user-dropdown open'){
      user!.className = 'dropdown user-dropdown';
    }
    else {
      user!.className = 'dropdown user-dropdown open';
    }
  }

  const handleLogOut = () => {
    firebase.logout();
  }

  return (
    <div className="page-header">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <div className="logo-sm">
              <a href="javascript:void(0)" id="sidebar-toggle-button">
                <i className="fa fa-bars"></i>
              </a>
              <a className="logo-box" href="index.html">
                <span>Fadmin</span>
              </a>
            </div>
          </div>
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav d-res-none-full">
              <li>
                <Link
                  to="#"
                  id="collapsed-sidebar-toggle-button"
                  onClick={handleMenu}
                >
                  <i className="mdi mdi-menu"></i>
                </Link>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  id="toggle-fullscreen"
                  onClick={handleFullscreen}
                >
                  <i className="mdi mdi-fullscreen"></i>
                </a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown user-dropdown" id="user">
                {" "}
                <Link
                  to="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={handleUser}
                >
                  <img
                    src="https://www.redditstatic.com/avatars/avatar_default_19_0079D3.png"
                    alt=""
                    className="img-circle"
                    data-toggle="tooltip"
                    title={JSON.parse(sessionStorage.getItem('user')!).displayName}
                  />
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="#" onClick={handleLogOut}>Log Out</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
