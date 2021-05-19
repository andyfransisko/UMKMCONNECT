import '../../App.css'
import '../../Assets/CSS/Product/SecondProduct.css'

import Fade from 'react-reveal/Fade'
import {Helmet} from 'react-helmet'

import Header2 from '../Header2'

import fotoPalu from '../../Assets/Images/palu1.png'
import fotoTangga from '../../Assets/Images/tangga.png'

function SecondProduct() {
    return (
      <section>
            <Helmet>
                <title>Jasa Kami</title>
                <meta name="title" content="Jasa Kami" />
                <meta name="description" content="Kami Menawarkan Berbagai Jasa Mulai dari Bidang Hukum hingga Bidang Pemasaran." />
                <link rel="canonical" href="https://umkmconnect.com/Product" />
            </Helmet>
            <Header2 />
            <div className="second-product-container">
                <div className="second-product-header">
                    <Fade bottom>
                        <h1>
                            Layanan kami
                        </h1>
                    </Fade>
                </div>
                
                <Fade bottom>
                    <div className="second-product-table1">
                        <div className="second-product-table-list">
                            <div className="second-product-table-head">
                                <h2>
                                    Bidang Legalitas
                                </h2>
                            </div>
                            <div className="second-product-table-red" />
                            <div className="second-product-table-image">
                                <img src = {fotoPalu} className="second-product-img-size" alt="jasa kami" />
                            </div>
                            <div className="second-product-table-product">
                                Pembuatan Akte Perusahaan
                            </div>
                            <div className="second-product-table-product">
                                Pembuatan Sertifikat Halal
                            </div>
                            <div className="second-product-table-product">
                                Pendaftaran Merek
                            </div>
                            <div className="second-product-table-product">
                                Pendaftaran Hak Cipta
                            </div>
                            <div className="second-product-table-product">
                                Pendaftaran Paten
                            </div>
                            <div className="second-product-table-product">
                                Pendaftaran Desain Industri
                            </div>
                            <div className="second-product-table-button">
                                <a href = "https://form.umkmconnect.com" target="_blank" rel="noreferrer">
                                    <button className="prim-button">Daftar Sekarang</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </Fade>
                
                <Fade bottom>
                    <div className="second-product-table2">
                        <div className="second-product-table-list">
                            <div className="second-product-table-head">
                                <h2>
                                    Bidang Pemasaran
                                </h2>
                            </div>
                            <div className="second-product-table-red" />
                            <div className="second-product-table-image">
                                <img src = {fotoTangga} className="second-product-img-size" alt="jasa kami" />
                            </div>
                            <div className="second-product-table-product">
                                Pembuatan Konten Iklan
                            </div>
                            <div className="second-product-table-product">
                                Placement Iklan
                            </div>
                            <div className="second-product-table-product">
                                Digital Marketing
                            </div>
                            <div className="second-product-table-product">
                                Distribusi dan Penjualan
                            </div>
                            <div className="second-product-table-button">
                                <a href = "https://form.umkmconnect.com" target="_blank" rel="noreferrer">
                                    <button className="prim-button">Daftar Sekarang</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
      </section>
    );
  }
  
  export default SecondProduct;