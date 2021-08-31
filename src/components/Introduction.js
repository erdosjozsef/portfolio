import "./Introduction.css";

function Introduction() {
  return (
    <div>
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
export default Introduction;
