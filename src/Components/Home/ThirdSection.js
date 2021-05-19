import '../../App.css'
import '../../Assets/CSS/Home/ThirdSection.css'

import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

import fotoAbout from '../../Assets/Images/fotoabout2.png'

function ThirdSection() {
    return (
      <section>
          <div className="third-container">
              <div className="third-header1">
                    <h2>
                        <b>
                            <Fade right>
                                Tentang UMKM CONNECT
                            </Fade>
                        </b>
                    </h2>
                    <Fade right>
                        <h3>
                            UMKM CONNECT merupakan mitra usaha yang membantu pengembangan UMKM
                            dalam segala bidang. UMKM CONNECT menyediakan layanan
                            pemasaran dan legalitas yang bebas biaya. Kami
                            percaya bahwa layanan teknologi kami dapat 
                            meningkatkan daya saing usaha anda.
                        </h3>
                    </Fade>
                    <Link to = "/About" className="linkStyle">
                        <Fade right>
                            <button className="prim-button">Tentang Kami</button>
                        </Fade>
                    </Link>
              </div>
              <div className="third-picture">
                <Fade left>
                    <img src = {fotoAbout} className="third-pic-img-size" alt="tentang kami" />
                </Fade>
              </div>
          </div>
      </section>
    );
  }
  
  export default ThirdSection;