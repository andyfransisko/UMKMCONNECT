import React from 'react'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom'
import {Helmet} from 'react-helmet'

import '../../App.css'
import '../../Assets/CSS/Contact/Success.css'

class Success extends React.Component {

    render(){
        return (
            <section>
                <Helmet>
                    <title>Kontak Kami</title>
                    <link rel="canonical" href="https://umkmconnect.com/Contact" />
                </Helmet>
                <div className="success-container">
                    <div className="success-header-1">
                        <Fade bottom>
                            <h1>
                                Berhasil!
                            </h1>
                        </Fade>
                    </div>

                    <div className="success-header-2">
                        <Fade bottom>
                            <h2>
                                Pertanyaan anda akan segera ditanggapi oleh pihak UMKM CONNECT
                            </h2>
                        </Fade>
                    </div>

                    <div className="success-header-3">
                        <Fade bottom>
                            <Link to = "/Form" className="linkStyle" >
                                <button className="prim-button">Kembali ke Beranda</button>
                            </Link>
                        </Fade>
                    </div>

                </div>
            </section>
        );
    }
    
  }
  
  export default Success;