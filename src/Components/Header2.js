import React from 'react'
import { Link } from 'react-router-dom'
import Flip from 'react-reveal/Flip'
import Fade from 'react-reveal/Fade'

import '../Assets/CSS/Header.css'

import LogoOutlined from '../Assets/Images/logo-1.png'

class Header2 extends React.Component{

    constructor(){
        super()
        this.state = {
            scroll: false,
            openMenu: false
        }

        this.scrolled = this.scrolled.bind(this);
        this.openMenu = this.openMenu.bind(this);
    }

    componentDidMount(){
        window.addEventListener('scroll', this.scrolled)
    }

    scrolled = () => {
        if (window.scrollY >= 120) {
            this.setState({
                scroll: true
            });
        }else{
            this.setState({
                scroll: false
            });
        }    
    }

    openMenu (e) {
        
        this.setState({
            openMenu: !this.state.openMenu
        });
        console.log(this.state.openMenu)
        e.preventDefault()
    }

    render(){

        const navbarScroll = {
            borderBottom: "1px solid #CD2029",
            transition: "1.2s",
            backgroundColor: "white"
        }

        const liScroll = {
            color: "#cd2029"
        }

        const menuStyle = {
            width : "0%"
        }

        const menuListStyle = {
            display: "none"
        }

        if(this.state.scroll){
            navbarScroll.backgroundColor= "white"
            liScroll.color= "#CD2029" 
        }
        else{
        
        }

        if(this.state.openMenu){
            menuStyle.width= "65%"
        }

        if(this.state.openMenu){
            menuListStyle.display= "block"
        }

        return(    
            <header className="navbar" style={navbarScroll}>
                <ul>
                    <li className="desktop-mobile">
                        <span>
                            <Link to = "/" className="linkStyle" >
                                <Flip left>        
                                    <img src= { LogoOutlined } className="small-img-width" alt="LOGO" align="left" />
                                </Flip>
                            </Link>
                        </span>                            
                    </li>
                    <li style={liScroll} className="desktop">
                        <Link to = "/" className="linkStyle" >
                            <Fade bottom>
                                <b className="underlined-effect">
                                    <span className="navbar-position">
                                        Beranda
                                    </span>
                                </b>
                            </Fade>
                        </Link>
                    </li>
                    <li style={liScroll} className="desktop">
                        <Link to = "/About" className="linkStyle" >
                            <Fade bottom>
                                <b className="underlined-effect"> 
                                    <span className="navbar-position">
                                        Tentang Kami
                                    </span>
                                </b>
                            </Fade>
                        </Link>
                    </li>
                    <li style={liScroll} className="desktop">
                        <Link to = "/Product" className="linkStyle" >
                            <Fade bottom>
                                <b className="underlined-effect"> 
                                    <span className="navbar-position">
                                        Layanan Kami
                                    </span>
                                </b>
                            </Fade>
                        </Link>
                    </li>
                    <li style={liScroll} className="desktop">
                        <Link to = "/Contact" className="linkStyle" >
                            <Fade bottom>
                                <b className="underlined-effect"> 
                                    <span className="navbar-position">
                                        Kontak
                                    </span>
                                </b>
                            </Fade>
                        </Link>
                    </li>

                    <li style={liScroll} className="mobile" onClick={this.openMenu} >
                        <span className="menu-size">
                            &#9776;
                        </span>
                    </li>
                </ul>
                
                <div className="menu-container" id="navbar" style={menuStyle}>
                    <div className="menu-content">
                        <div className="menu-content-logo">
                            <img src= { LogoOutlined } className="header-img-width" alt="LOGO" align="left" />
                        </div>
                        <div className="menu-content-close" onClick={this.openMenu}>
                            &times;
                        </div>

                        <div className="menu-content-list1 menu-content-font" style={menuListStyle}>
                            <Link to = "/" className="linkStyle" >
                                <b>
                                    Beranda
                                </b>
                            </Link>
                        </div>
                        <div className="menu-content-list2 menu-content-font" style={menuListStyle}>
                            <Link to = "/About" className="linkStyle" >
                                <b>
                                    Tentang Kami
                                </b>
                            </Link>
                        </div>
                        <div className="menu-content-list3 menu-content-font" style={menuListStyle}>
                            <Link to = "/Product" className="linkStyle" >
                                <b>
                                    Layanan Kami
                                </b>
                            </Link>
                        </div>
                        <div className="menu-content-list4 menu-content-font" style={menuListStyle}>
                            <Link to = "/Contact" className="linkStyle" >
                                <b>
                                    Kontak
                                </b>
                            </Link>
                        </div>

                        <div className="menu-content-list5" style={menuListStyle}>
                            <a href="http://www.instagram.com/umkmconnect" target="_blank" rel="noreferrer">
                                <span className="fa fa-instagram"></span>
                            </a>
                            <a href="https://www.facebook.com/UMKM-Connect-329646078438419" target="_blank" rel="noreferrer">
                                <span className="fa fa-facebook"></span>
                            </a>
                            <a href="https://www.linkedin.com/in/umkm-connect-56828a205/" target="_blank" rel="noreferrer">
                                <span className="fa fa-linkedin"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header2