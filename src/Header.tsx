import "./style.css";

function Header(props: { children: any }) {
  const { children } = props;
  const dateNow = new Date().toLocaleDateString();
  const timeNow = new Date().toLocaleTimeString();

  return (
    <header className="topbar" data-navbarbg="skin5">
      <nav className="navbar top-navbar navbar-expand-md navbar-dark">
        <div className="navbar-header" data-logobg="skin5">
          <a
            className="nav-toggler waves-effect waves-light d-block d-md-none"
            href="#"
          >
            <i className="ti-menu ti-close"></i>
          </a>
          <a
            className="navbar-brand"
            href=""
            // onClick={() => {
            //   dispatch(setMenuType("1"));
            //   history.push("/home");
            // }}
          >
            <b className="logo-icon p-l-10">
              {/* <img src={logo_icon} alt="homepage" className="light-logo" /> */}
            </b>
            {/* {renderMenuLogo()} */}
            {/* {menuType !== 0 ? (
              <span className="logo-text">
                <img src={logo_text} alt="homepage" className="light-logo" />
              </span>
            ) : null} */}
          </a>
          <a
            className="topbartoggler d-block d-md-none waves-effect waves-light"
            href=""
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="ti-more"></i>
          </a>
        </div>
        <div
          className="navbar-collapse collapse"
          id="navbarSupportedContent"
          data-navbarbg="skin5"
        >
          <ul className="navbar-nav float-left mr-auto">
            <li className="nav-item d-none d-md-block">
              <a
                className="nav-link sidebartoggler waves-effect waves-light"
                href="#"
                data-sidebartype="mini-sidebar"
                // onClick={handleCustomSidebar}
              >
                <i className="mdi mdi-chevron-left font-24"></i>
                {children}
              </a>
            </li>
            <div className="main-logo">{/* <img src={logo_nuage} /> */}</div>
          </ul>

          {/* <div className="mx-auto text-white-50">
            <Text style={{ marginRight: "10px" }}>
              Welcome {userName} ({userId})
            </Text>

            <Text style={{ marginRight: "5px", marginLeft: "2rem" }}>
              Logged In:
            </Text>
            <Text style={{ marginRight: "5px" }}>
              {moment(dateNow).format("YYYY-MM-DD")} {timeNow}
            </Text>
          </div> */}
          <ul className="navbar-nav float-right ml-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle waves-effect waves-dark"
                href=""
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {" "}
                <i className="mdi mdi-bell font-24"></i>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle waves-effect waves-dark"
                href=""
                id="2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {" "}
                <i className="font-24 mdi mdi-comment-processing"></i>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right mailbox animated bounceInDown"
                aria-labelledby="2"
              >
                <ul className="list-style-none">
                  <li>
                    <div className="">
                      <a href="#" className="link border-top">
                        <div className="d-flex no-block align-items-center p-10">
                          <span className="btn btn-success btn-circle">
                            <i className="ti-calendar"></i>
                          </span>
                          <div className="m-l-10">
                            <h5 className="m-b-0">Event today</h5>
                            <span className="mail-desc">
                              Just a reminder that event
                            </span>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="link border-top">
                        <div className="d-flex no-block align-items-center p-10">
                          <span className="btn btn-info btn-circle">
                            <i className="ti-settings"></i>
                          </span>
                          <div className="m-l-10">
                            <h5 className="m-b-0">Settings</h5>
                            <span className="mail-desc">
                              You can customize this template
                            </span>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="link border-top">
                        <div className="d-flex no-block align-items-center p-10">
                          <span className="btn btn-primary btn-circle">
                            <i className="ti-user"></i>
                          </span>
                          <div className="m-l-10">
                            <h5 className="m-b-0">Pavan kumar</h5>
                            <span className="mail-desc">
                              Just see the my admin!
                            </span>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="link border-top">
                        <div className="d-flex no-block align-items-center p-10">
                          <span className="btn btn-danger btn-circle">
                            <i className="fa fa-link"></i>
                          </span>
                          <div className="m-l-10">
                            <h5 className="m-b-0">Luanch Admin</h5>
                            <span className="mail-desc">
                              Just see the my new admin!
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            {/* <Link
              className="link-icons px-2 nav-link"
              onClick={() => {
                handleLogout();
              }}
            >
              <PowerSettingsNewIcon />
            </Link>
            <img src={logo_ms} className="ms-logo-center" /> */}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
