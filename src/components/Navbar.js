import "./Navbar.css";

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
      <header className="home-section" id="home-section">
        <div className="dark-overlay">
          <div className="home-inner container">
            <div className="row">
              <div className="col-lg-6">
                <div className="d-flex offset-1">
                  <div className="p-4 align-self-center">
                    <i className="fas fa-check fa-2x"></i>
                  </div>
                  <div>
                    <img className="profile-image " src="/me.jpeg" alt="..." />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 me ">
                <div className="programmer form-group">
                  Full Stack Developer
                </div>
                <div>
                  <h1 className="full-name form-group">Erdős József</h1>
                </div>
                <div className="description form-group">
                  Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
                  convallis, risus non condimentum gravida, odio mauris
                  ullamcorper felis, ut venenatis purus ex eu mi. Quisque
                  imperdiet lacinia urna, a placerat sapien pretium eu.
                </div>

                <a className="btn action-buttons mr-2" href="#" role="button">
                  Download CV
                </a>
                <button className="btn action-buttons" type="submit">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
