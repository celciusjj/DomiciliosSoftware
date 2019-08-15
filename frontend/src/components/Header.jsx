import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between  d-flex">
                <div className="d-flex flex-row">
                    <Link to={'/'} className='text-light p-2'>Productos </Link>
                    <Link to={'/'} className='text-light p-2 '>Pedidos </Link>
                    <Link to={'/'} className='text-light p-2 '>Despachadores </Link>
                </div>
                <Link to={'/login/'} className='text-light mr-5'>Iniciar Sesión </Link>
            </nav>


        );
    }
}

export default Header;