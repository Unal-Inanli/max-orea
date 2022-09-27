import Link from 'next/link';
import React from 'react';

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
                                    <Link href="corporate">CORPORATE</Link>
                                </li>
                                <li>
                                    <a href="#!">ANALYZES</a>
                                </li>
                                <li>
                                    <Link href="/platform">PLATFORM</Link>
                                    <ul className="nav-dropdown">
                                        <li>
                                            <a href="#!">Test1</a>
                                        </li>
                                        <li>
                                            <a href="#!">Test2</a>
                                        </li>
                                        <li>
                                            <a href="#!">Test3</a>
                                        </li>
                                    </ul>

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
                                    <a href="#!">CORPORATE</a>
                                </li>
                                <li>
                                    <a href="#!">ANALYZES</a>
                                </li>
                                <li>
                                    <Link href="/platform">PLATFORM</Link>
                                    <ul className="nav-dropdown">
                                        <li>
                                            <a href="#!">Test1</a>
                                        </li>
                                        <li>
                                            <a href="#!">Test2</a>
                                        </li>
                                        <li>
                                            <a href="#!">Test3</a>
                                        </li>
                                    </ul>

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
                        <a href="#">
                            <div className="headcreatbtn">
                                Hesap Oluştur
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
