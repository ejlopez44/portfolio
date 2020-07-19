import React from 'react';
// import './style.css';

function NavHeader() {

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Ernesto Lopez</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="/">About</a>
                        <a className="nav-item nav-link" href="/portfolio">Portfolio</a>
                        <a className="nav-item nav-link" href="/contact">Contact</a>
                        {/* < a className="nav-item nav-link" href="/logout">Logout</a> */}
                    </div>
                </div>
            </nav>
        </header >
    )
}
export default NavHeader;