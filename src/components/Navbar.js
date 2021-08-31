import "./Navbar.css";
import Introduction from "./Introduction";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm" id="main-nav">
        <div className="container-fluid">
          <div className="logo-symbol">J</div>
          <a href="/" className="navbar-brand firstName">
            Erdős <spam className="last-name">József</spam>
          </a>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#home" className="nav-link active">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a href="#explore-head-section" className="nav-link not-active">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a href="#create-head-section" className="nav-link not-active">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a href="#share-head-section" className="nav-link not-active">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="#share-head-section" className="nav-link not-active">
                  Contact
                </a>
              </li>{" "}
              <li className="nav-item">
                <a href="#share-head-section" className="nav-link not-active">
                  Contact
                </a>
              </li>{" "}
              <li className="nav-item">
                <a href="#share-head-section" className="nav-link not-active">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Introduction />
    </div>
  );
}

export default Navbar;
