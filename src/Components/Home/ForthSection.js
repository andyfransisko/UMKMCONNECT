import '../../App.css'
import '../../Assets/CSS/Home/ForthSection.css'

import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

import fotoCube from '../../Assets/Images/iconCube.png'

function ForthSection() {
    return (
      <section>
          <div className="forth-container">
              <div className="forth-header1">
                <Fade left>
                  <h2>
                    Layanan Kami
                  </h2>
                </Fade>
                <Fade left>
                  <h3>
                    UMKM CONNECT menyediakan berbagai jenis layanan
                    dalam bidang legalitas dan pemasaran.
                  </h3>
                </Fade>
                <Link to = "/Product" className="linkStyle"  >
                  <Fade left>
                    <button className="prim-button">Selengkapnya</button>
                  </Fade>
                </Link>
              </div>
              
              <div className="forth-picture">
                <Fade right>
                  <img src = {fotoCube} className="forth-pic-img-size" alt="jasa kami" />
                </Fade>
              </div>
             
          </div>
      </section>
    );
  }
  
  export default ForthSection;