import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'
import video from '../../assets/mp4/bg.mp4'


export const HomePage = () => {
    return (
        <>
            <video className="bg-video" playsInline="playsinline" autoPlay="autolay" muted="muted" loop="loop"><source src={video} type="video/mp4" /></video>

            <div className="masthead">
                <div className="masthead-content text-white">
                    <div className="container-fluid px-4 px-lg-0">
                        <h1 className="fst-italic lh-1 mb-4">Almacenadora-KS</h1>
                        <p className="mb-5">Nuestra empresa es una almacenadora que se dedica a ofrecer servicios de almacenamiento de alta calidad, a nuestros clientes.</p>
                    </div>
                </div>
            </div>

            <div className="social-icons">
                <div className="d-flex flex-row flex-lg-column justify-content-center align-items-center h-100 mt-3 mt-lg-0">
                    <Link to='/login'>
                        <button className="btn btn-dark m-3" ><i className="fa-solid fa-right-to-bracket"></i></button>
                    </Link>
                </div>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>

            <script src="js/scripts.js"></script>

            <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>

        </>
    )
}
