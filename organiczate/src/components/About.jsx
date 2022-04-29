import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className='container py-5 my-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1 className='text-black fw-bold mb-4'>Sobre Nosotros</h1>
                        <p className='lead mb-4'>
                            Somo una empresa que busca potenciar las ventas de todos los productos orgánicos
                            provenientes de productores locales.
                            Queremos que formes parte de nuestro emprendimiento, para ello, puedes
                            contactarnos clickeando debajo de éste mensaje y llenar el formulario con tus datos.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contactanos</NavLink>
                    </div>
                    <div className='col-md-6 d-flex justify-content-center'>
                        <img src="/assets/images/about.jpg" alt="Sobre nosotros" height="300px" width="500px"/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About