import React from 'react'
import {  Navbar } from "../components";
import { Link } from 'react-router-dom';
const Registrate = () => {
    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Registrate</h1>
                <hr />
                <div class="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form>
                            <div class="form my-3">
                                <label for="Name">Nombre completo</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Name"
                                    placeholder="Ingresa tu nombre"
                                />
                            </div>
                            <div class="form my-3">
                                <label for="Email">Mail</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Email"
                                    placeholder="nombre@ejemplo.com"
                                />
                            </div>
                            <div class="form  my-3">
                                <label for="Password">Contraseña</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="Password"
                                    placeholder="Contraseña"
                                />
                            </div>
                            <div className="my-3">
                                <p>Tenés una cuenta? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button class="my-2 mx-auto btn btn-dark" type="submit" disabled>
                                    Registrate
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registrate