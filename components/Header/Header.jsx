import Link from 'next/link';
import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';

const Header = () => {

    const mobileMenuRef = React.useRef(null);

    const openNav = () => {
        mobileMenuRef.current.style.width = "230px";
    }

    const closeNav = () => {
        mobileMenuRef.current.style.width = "0px";
    }

    return (
        <header>
            <div className="header">
                <div className="container">
                    <Link href="/">
                        <div className="logo"></div>
                    </Link>
                    <div className="top_left_menu navbar">
                        <nav>
                            <ul className="nav-list">
                                <li>
                                    <Link href="about">CORPORATE</Link>
                                </li>

                                <li>
                                    <Link href="/platform">PLATFORM</Link>


                                </li>

                                <li>
                                    <Link href="/contact">CONTACT</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="mobil_menu" onClick={openNav}>
                        &#9776;
                    </div>
                    <div ref={mobileMenuRef} id="mobil_sidenav" className="sidenav">
                        <div className="close_btn" onClick={closeNav}>
                            &times;
                        </div>

                        <nav>
                            <ul className="nav-list">
                                <li>
                                    <Link href="about">CORPORATE</Link>
                                </li>

                                <li>
                                    <Link href="/platform">PLATFORM</Link>

                                </li>
                                <li>
                                    <Link href="/contact">CONTACT</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="headright">
                        <div className="lnag">
                            <div className="langitem">
                                <span>EN</span>
                                <div className="langdropw">
                                    <ul>
                                        <li><a href="#">EN</a></li>
                                        <li><a href="#">TR</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <Link href={"/register"}>
                            <a href="#">
                                <PrimaryButton className={"headcreatbtn"}>
                                    Hesap Oluştur

                                </PrimaryButton>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
