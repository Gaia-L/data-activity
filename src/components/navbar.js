import React, { Component } from 'react';
import Info from './info';
class Navbar extends Component {

//Componente per mostrare titolo e tasto per lettura legenda.
    render() {
        return (
            <>
                <nav className="navbar navbar-light" style={{ backgroundColor: "#040831" }}>
                    <div className="container-fluid">
                        <span className="nav">
                            Patients Activity Statistics</span>
                    </div>
                    <Info />
                </nav >
            </>
        );
    }
}
export default Navbar;