import '../../App.css'
import '../../Assets/CSS/About/FirstAbout.css'

import Header2 from '../Header2'

import AboutPic from '../../Assets/Images/AboutPic.png'
import HelpPic from '../../Assets/Images/HelpPic.png'

import Fade from 'react-reveal/Fade'
import {Helmet} from 'react-helmet'

function FirstAbout() {
    return (
      <section>
            <Helmet>
                <title>Tentang Kami</title>
                <meta name="title" content="Tentang Kami" />
                <meta name="description" content="UMKM CONNECT merupakan Perusahaan yang membantu mengembangkan UMKM
                            menjadi lebih maksimal dan efektif." />
                <link rel="canonical" href="https://umkmconnect.com/About" />
            </Helmet>
            <Header2 />
            <div className="about-container">
                <div className="about-photo">
                    <Fade right>
                        <img src = {AboutPic} className="about-pic-size" alt="tentang kami" />
                    </Fade>
                </div>
                <div className="about-header1">
                    <Fade left>
                        <h1>
                            Tentang Kami
                        </h1>
                    </Fade>
                    <Fade left>
                        <h3>
                            UMKM CONNECT merupakan mitra usaha yang membantu pengembangan UMKM
                            dalam segala bidang. UMKM CONNECT menyediakan layanan
                            pemasaran dan legalitas yang bebas biaya. Kami
                            percaya bahwa layanan teknologi kami dapat 
                            meningkatkan daya saing usaha anda.
                        </h3>
                    </Fade>
                </div>

                <div className="about-photo2">
                    <Fade left>
                        <img src = {HelpPic} className="about-pic-size" alt="tentang kami" />
                    </Fade>
                </div>

                <div className="about-header2">
                    <Fade right>
                        <h2>
                            Membantu Menyelesaikan Masalah Seperti:
                        </h2>
                    </Fade>
                    <Fade right>
                        <h3>
                            <ul>
                                <li>Kurang Tahu Bagaimana Cara Membesarkan Bisnis</li>
                                <li>Kurangnya Inovasi Produk</li>
                                <li>Kesulitan Mendistribusikan Barang</li>
                                <li>Belum Memaksimalkan Pemasaran Online</li>
                                <li>Tidak Memiliki Izin Usaha Resmi</li>
                            </ul>
                        </h3>
                    </Fade>
                        
                </div>
            </div>
      </section>
    );
  }
  
  export default FirstAbout;