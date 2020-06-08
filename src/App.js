import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/#">Start Bootstrap</a>
          <i class="fas fa-user"></i>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/#">Home
                <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="///#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
              <h1 className="font-weight-light">Vertically Centered Masthead Content</h1>
              <p className="lead">A great starter layout for a landing page</p>
              <div className="block-17 my-4">
                <form action="" method="post" className="d-block d-flex">
                  <div className="fields d-block d-flex">
                    <div className="textfield-search one-third">
                      <input type="text" className="form-control" placeholder="Ex: food, service, hotel" />
                    </div>
                    <div className="select-wrap one-third">
                      <div className="icon"><span className="fas fa-arrow-down"></span></div>
                      <select name="" id="" className="form-control" placeholder="Keyword search">
                        <option value="">Where</option>
                        <option value="">San Francisco USA</option>
                        <option value="">Berlin Germany</option>
                        <option value="">Lodon United Kingdom</option>
                        <option value="">Paris Italy</option>
                      </select>
                    </div>
                  </div>
                  <input type="submit" className="search-submit btn btn-primary" value="Search" />
                </form>
              </div>

            </div>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container">
          <h2 className="font-weight-light">Page Content</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ab nulla dolorum autem nisi officiis blanditiis voluptatem hic, assumenda aspernatur facere ipsam nemo ratione cumque magnam enim fugiat reprehenderit expedita.</p>
        </div>
      </section>


    </div>
  );
}

export default App;
