import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__bg"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="footer_logo"></div>
                    </div>

                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="footer_menu_item">
                                    <label>Markets</label>
                                    <ul>
                                        <li><Link href="/about">About Us</Link></li>
                                        <li><a href="#">Why THYFX Ltd. ?</a></li>
                                        <li><a href="#">Terms & Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="footer_menu_item">
                                    <label>Platform</label>
                                    <ul>
                                        <li><a href="#">Android Platform</a></li>
                                        <li><a href="#">IOS Platform</a></li>
                                        <li><a href="#">Windows Platform</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="footer_menu_item">
                                    <label>Contact</label>
                                    <span>Francis Rachel Street, Victoria, Mahe, P.O. Box 1004, Seychelles</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-2">
                        <div className="footer_app_item">
                            <img src="img/google_play.svg" />
                        </div>
                        <div className="footer_app_item">
                            <img src="img/app_store.svg" />
                        </div>
                    </div>
                </div>
                <div className="odealogo"></div>
            </div>
        </footer>
    );
}

export default Footer;
