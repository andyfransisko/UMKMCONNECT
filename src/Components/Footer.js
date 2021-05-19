import React from 'react'
import Fade from 'react-reveal/Fade'

import '../App.css'
import '../Assets/CSS/Footer.css'

class Footer extends React.Component{
    render(){
        return(
            <section>
                <footer className="foot-container">
                    <div className="foot-about-head">
                        <Fade bottom>
                            <h2>
                                Tentang UMKM CONNECT
                            </h2>
                        </Fade>
                    </div>
                    <div className="foot-about-desc">
                        <Fade bottom>
                            UMKM CONNECT merupakan mitra usaha yang membantu pengembangan UMKM
                            dalam segala bidang. UMKM CONNECT menyediakan layanan
                            pemasaran dan legalitas yang bebas biaya. Kami
                            percaya bahwa layanan teknologi kami dapat 
                            meningkatkan daya saing usaha anda.
                        </Fade>
                    </div>
                    
                    <div className="foot-sosmed">
                        <Fade bottom>
                            <a href="http://www.instagram.com/umkmconnect" target="_blank" rel="noreferrer">
                                <span className="fa fa-instagram"></span>
                            </a>
                            <a href="https://www.facebook.com/UMKM-Connect-329646078438419" target="_blank" rel="noreferrer">
                                <span className="fa fa-facebook"></span>
                            </a>
                            <a href="https://www.linkedin.com/company/72338692/admin/" target="_blank" rel="noreferrer">
                                <span className="fa fa-linkedin"></span>
                            </a>
                        </Fade>
                    </div>
                    <div className="foot-email">
                        <span className="fa fa-envelope"></span> &nbsp;
                        info@umkmconnect.com 
                    </div>

                    <div className="foot-copy" />
                    <div className="foot-copy-info">
                        <Fade bottom>
                            &#169; 2021 UMKM CONNECT
                        </Fade>
                    </div>
                        
                </footer>
            </section>
        )
    }
}

export default Footer