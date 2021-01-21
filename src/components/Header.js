import React from 'react';

import '../styles/header.css';

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><i className="bi bi-bag-check-fill">Finances</i></a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Home
                                <i className="bi bi-house-fill"></i></a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Login<i className="bi bi-door-open"></i></a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Inscreva-se
                                <i className="bi bi-box-arrow-in-right"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}