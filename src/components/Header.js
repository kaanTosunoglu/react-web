import React from 'react';
import { Link } from 'react-router';


class Header extends React.Component {

  constructor () {
    super();

    this.state = {
      isNavOpen: false
    }
  }

  buttonOnClicked () {
    this.setState(
      {
        isNavOpen: !this.state.isNavOpen
      }
    )
  }

  render () {
    console.log("RENDERING");
    return (
      <header>
        <nav className="container navbar navbar-expand-lg navbar-light justify-content-between">
          <a className="navbar-brand" href="#">Learning Project</a>

          <button className="navbar-toggler" type="button" onClick={this.buttonOnClicked.bind(this)}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse" style={{ display: this.state.isNavOpen ? "block" : "none" }}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" activeClassName="active" className="nav-link">Ana Sayfa</Link>
              </li>
              <li className="nav-item">
                <Link to="/hakkimizda" activeClassName="active" className="nav-link">Hakkimizda</Link>
              </li>
              <li className="nav-item">
                <Link to="/iletisim" activeClassName="active" className="nav-link">Iletisim</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }


}


export default Header;
