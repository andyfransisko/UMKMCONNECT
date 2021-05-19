import Fade from 'react-reveal/Fade'

import '../../App.css'
import '../../Assets/CSS/Home/SecondSection.css'

function SecondSection() {
  return (
    <section>
        <div className="second-container">
            <div className="second-headline1">
                <Fade bottom>
                    <h1>
                        Hadir Sebagai Mitra UMKM
                    </h1>
                </Fade>
                <Fade bottom>
                    <h2>
                        Meningkatnya jumlah UMKM di Indonesia berdampak 
                        positif terhadap perekonomian di Indonesia. Namun, cukup 
                        banyak UMKM di Indonesia yang mengalami kesulitan dalam hal permodalan,
                        legalitas, manajemen, marketing dan penjualan. 
                        Dengan UMKM Connect, kami dapat mempermudah proses pengembangan
                        usaha anda.
                    </h2>
                </Fade>
            </div>
        </div>
        <div className="second-container2">
            <div className="second-icon1">
                <Fade bottom>
                    <h2>
                        Akurat
                    </h2>
                </Fade>
                <Fade bottom>
                    <h3>
                        Memahami permasalahan dan kebutuhan usaha anda dengan cermat dan tepat.
                    </h3>
                </Fade>
            </div>
            <div className="second-icon2">
                <Fade bottom>
                    <h2>
                        Efektif
                    </h2>
                </Fade>
                <Fade bottom>
                    <h3>
                        Memberikan solusi yang tepat untuk pengembangan usaha anda.
                    </h3>
                </Fade>
            </div>
            <div className="second-icon3">
                <Fade bottom>
                    <h2>
                        Bebas Biaya
                    </h2>
                </Fade>
                <Fade bottom>
                    <h3>
                        Menyediakan layanan yang menyeluruh tanpa membebani keuangan anda.
                    </h3>
                </Fade>
            </div>
        </div>
    </section>
  );
}

export default SecondSection;
