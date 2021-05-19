import '../../App.css'
import '../../Assets/CSS/Home/FirstSection.css'
import Fade from 'react-reveal/Fade'
import {Helmet} from 'react-helmet'

import Header from '../Header'

function FirstSection() {
  return (
    <section>
        <Helmet>
            <title>UMKM CONNECT</title>
            <meta name="title" content="UMKM CONNECT" />
            <meta name="description" content="UMKM CONNECT - Berkembang Bersama Membangun Indonesia. Ayo Bergabung Sekarang!" />
            <link rel="canonical" href="https://umkmconnect.com/" />
        </Helmet>
        <Header />
        <div className="first-container">
            <div className="first-header1">
                <b>
                    <Fade bottom>
                        <h1>
                            UMKM CONNECT
                        </h1>
                    </Fade>
                </b>
            </div>
            <div className="first-header2">
                <Fade bottom>
                    Berkembang Bersama Membangun Indonesia
                </Fade>
            </div>

            <div className="first-sosmed">
                <a href="http://www.instagram.com/umkmconnect" target="_blank" rel="noreferrer">
                    <Fade bottom>    
                        <span className="fa fa-instagram"></span>
                    </Fade>
                </a>
                <a href="https://www.facebook.com/UMKM-Connect-329646078438419" target="_blank" rel="noreferrer">
                    <Fade bottom>
                        <span className="fa fa-facebook"></span>
                    </Fade>
                </a>
                <a href="https://www.linkedin.com/in/umkm-connect-56828a205/" target="_blank" rel="noreferrer">
                    <Fade bottom>
                        <span className="fa fa-linkedin"></span>
                    </Fade>
                </a>
            </div>

            <div className="first-blank">
                
            </div>
        </div>
    </section>
  );
}

export default FirstSection;
