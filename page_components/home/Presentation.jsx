import { motion } from 'framer-motion';
import React from 'react';

const Presentation = () => {
    return (
        <div className="hm_section_four">
            <div className="container">
                <div className="sc_four_content">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="sc_four_left sctworight">
                                <h3>Zwei flinke Boxer jagen die quirlige Eva und.</h3>
                                <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</span>

                                <a href="#">
                                    <div className="demoaccobtn">
                                        Demo Hesap Oluştur
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="sc_four_right sctwoimg">
                                <img src="img/homescfourimg.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Presentation;
