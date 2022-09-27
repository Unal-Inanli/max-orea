import React from 'react';
import InviteForm from '../../components/InviteForm';
import { motion } from "framer-motion"

const Invite = () => {
    return (
        <motion.div initial={{ position: "relative", left: "-10%", opacity: 0 }} whileInView={{ left: 0, opacity: 1, transition: { duration: 0.8 } }} viewport={{ once: true }} className="homeformarea">
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <div class="acolefttext">
                            <h4>Formu Doldurun <br />
                                Ücretsiz Size Ulaşalım!</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
                            </p>

                            <div class="list">
                                <div class="item">
                                    <svg id="checked" xmlns="http://www.w3.org/2000/svg" width="30.981" height="30.981" viewBox="0 0 30.981 30.981">
                                        <g id="Group_38" data-name="Group 38">
                                            <path id="Path_84" data-name="Path 84" d="M15.491,0A15.491,15.491,0,1,0,30.981,15.491,15.509,15.509,0,0,0,15.491,0Zm8.658,11.414-9.9,9.822a1.523,1.523,0,0,1-2.135.039L6.872,16.5a1.575,1.575,0,0,1-.116-2.174,1.536,1.536,0,0,1,2.174-.078l4.154,3.8L21.935,9.2a1.565,1.565,0,1,1,2.213,2.213Z" fill="#fff" />
                                        </g>
                                    </svg>
                                    <span>7/24 Teknik Destek</span>
                                </div>
                                <div class="item">
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
                    <div class="col-md-4">
                        <div class="formdetail">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="formitem">
                                        <label>Adınız</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="formitem">
                                        <label>Soyadınız</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="formitem">
                                        <label>E-posta</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="formitem">
                                        <label>Telefon</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <button type="submit">Gönder</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Invite;
