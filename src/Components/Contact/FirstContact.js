import React from "react"
import axios from 'axios'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom'
import {Helmet} from 'react-helmet'

import '../../App.css'
import '../../Assets/CSS/Contact/FirstContact.css'

import QuestionPic from '../../Assets/Images/ContactPic.png'

import Header2 from '../Header2'

class FirstContact extends React.Component {

    constructor(){
        super()
        this.state = {
            namaPertanyaan: "",
            emailPertanyaan: "",
            rincianPertanyaan: ""
        }

        this.handleCheckNama = this.handleCheckNama.bind(this);
        this.handleCheckEmail = this.handleCheckEmail.bind(this);
        this.handleCheckRincian = this.handleCheckRincian.bind(this);
    }

    handleCheckNama = (event) => {
        this.setState({
            namaPertanyaan: event.target.value
        });
    }

    handleCheckEmail = (event) => {
        this.setState({
            emailPertanyaan: event.target.value
        });
    }

    handleCheckRincian = (event) => {
        this.setState({
            rincianPertanyaan: event.target.value
        });
    }

    sendQuestion = () => {
        axios.post('https://api.umkmconnect.com/Form/questions', {
            namaPertanyaan: this.state.namaPertanyaan,
            emailPertanyaan: this.state.emailPertanyaan,
            rincianPertanyaan: this.state.rincianPertanyaan
        }).then(() => {
          console.log('success');
        })
    }

    render(){
        return (
            <section>
                <Helmet>
                    <title>Kontak Kami</title>
                    <meta name="title" content="Kontak Kami" />
                    <meta name="description" content="Kontak Kami - UMKM CONNECT (info@umkmconnect.com)" />
                    <link rel="canonical" href="https://umkmconnect.com/Contact" />
                </Helmet>
                <Header2 />
                <div className="contact-container">
                    <div className="contact-header">
                        <Fade bottom>
                            <h1>
                                Pertanyaan ?
                            </h1>
                        </Fade>
                        <Fade bottom>
                            <h2>
                                Jangan ragu untuk bertanya kepada kami
                            </h2>
                        </Fade>
                    </div>
                    <div className="contact-picture">
                        <Fade left>
                            <img src= { QuestionPic } className="contact-img-size" alt="kontak kami" />
                        </Fade>
                    </div>

                    <div className="contact-fill1">
                        <Fade right>
                            <input type="text" placeholder="Nama"
                            onChange={this.handleCheckNama}
                            value={this.state.namaPertanyaan} />
                        </Fade>
                    </div>
                    <div className="contact-fill2">
                        <Fade right>
                            <input type="text" placeholder="Alamat Email Anda"
                            onChange={this.handleCheckEmail}
                            value={this.state.emailPertanyaan} />
                        </Fade>
                    </div>
                    <div className="contact-fill3">
                        <Fade right>
                            <textarea placeholder="Pesan / Pertanyaan Anda"
                            onChange={this.handleCheckRincian}
                            value={this.state.rincianPertanyaan}>
                            </textarea>
                        </Fade>
                    </div>
                    <div className="contact-fill4">
                        <Fade right>
                            <Link to = "/Success" className="linkStyle" >
                                <button className="prim-button"
                                onClick={this.sendQuestion}>Kirim</button>
                            </Link>
                        </Fade>
                    </div>
                </div>
            </section>
        );
    }
    
  }
  
  export default FirstContact;