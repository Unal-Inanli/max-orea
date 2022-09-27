import React from 'react';
import MainLayout from '../layouts/MainLayout';

const New = () => {
    return (
        <MainLayout title={"Orea - Hesap Oluştur"}>
            <div className="acoo_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="acolefttext">
                                <h4>Formu Doldurun <br />
                                    Ücretsiz Size Ulaşalım!</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
                                </p>

                                <div className="list">
                                    <div className="item">
                                        <svg id="checked" xmlns="http://www.w3.org/2000/svg" width="30.981" height="30.981" viewBox="0 0 30.981 30.981">
                                            <g id="Group_38" data-name="Group 38">
                                                <path id="Path_84" data-name="Path 84" d="M15.491,0A15.491,15.491,0,1,0,30.981,15.491,15.509,15.509,0,0,0,15.491,0Zm8.658,11.414-9.9,9.822a1.523,1.523,0,0,1-2.135.039L6.872,16.5a1.575,1.575,0,0,1-.116-2.174,1.536,1.536,0,0,1,2.174-.078l4.154,3.8L21.935,9.2a1.565,1.565,0,1,1,2.213,2.213Z" fill="#fff" />
                                            </g>
                                        </svg>
                                        <span>7/24 Teknik Destek</span>
                                    </div>
                                    <div className="item">
                                        <svg id="checked" xmlns="http://www.w3.org/2000/svg" width="30.981" height="30.981" viewBox="0 0 30.981 30.981">
                                            <g id="Group_38" data-name="Group 38">
                                                <path id="Path_84" data-name="Path 84" d="M15.491,0A15.491,15.491,0,1,0,30.981,15.491,15.509,15.509,0,0,0,15.491,0Zm8.658,11.414-9.9,9.822a1.523,1.523,0,0,1-2.135.039L6.872,16.5a1.575,1.575,0,0,1-.116-2.174,1.536,1.536,0,0,1,2.174-.078l4.154,3.8L21.935,9.2a1.565,1.565,0,1,1,2.213,2.213Z" fill="#fff" />
                                            </g>
                                        </svg>
                                        <span>Alanında Uzman <br />
                                            Destek Ekibi</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="acoo_right">
                                <div className="formdetail">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="formitem">
                                                <label>Adınız</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="formitem">
                                                <label>Soyadınız</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="formitem">
                                                <label>E-posta</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="formitem">
                                                <label>Telefon</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button type="submit">Demo Hesap Oluştur</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default New;
