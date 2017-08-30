import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

export default class BaseLayout extends Component {
  render(){
    let headerStyle = {
      "textAlign": "center",
      "height": "30vw",
      "color": "#fff",
      "backgroundImage": "url(../images/header2.jpg)",
      "backgroundPosition": "center",
      "backgroundSize": "cover",
      "backgroundRepeat": "none",
      "boxShadow":"rgba(0, 0, 0, 0.22) -2px 9px 5px 0px",
    }
    return (
      <div className="container-fluid nav">
        <nav className="row navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <p className="swapi">SWAPI Explorer</p>
              <ul className="nav navbar-nav">
                <li>
                  <NavLink exact activeClassName="active" to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/characters">Characters</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/starships">Starships</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/films">Films</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12 header" style={headerStyle}>
          </div>
        </nav>
        {this.props.children}
        <footer className="col-lg-11">
          <span>
            SWAPI EXPLORER
          </span>
        </footer>
      </div>
    );
  }
}
