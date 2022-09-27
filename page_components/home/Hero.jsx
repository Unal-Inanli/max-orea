import React from 'react';
import { motion } from "framer-motion";
import InviteForm from '../../components/InviteForm';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import Link from 'next/link';

const Hero = () => {
    return (
        <motion.div initial={{ position: "relative", left: "-10%", opacity: 0 }} whileInView={{ left: 0, opacity: 1, transition: { duration: 0.5 } }} viewport={{ once: true }} className="head_slider">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="sc_four_left sctworight">
                            <h3>Zwei flinke Boxer jagen die quirlige Eva und.</h3>
                            <span>Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt. Franz jagt im komplett verwahrlosten Taxi quer durch Bayern. Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter.</span>
                            <div className="list">
                                <div className="starlist">
                                    <div className="star"></div>
                                    <div className="star"></div>
                                    <div className="star"></div>
                                    <div className="star"></div>
                                    <div className="star"></div>
                                </div>
                                <h6>Tam not almış Forex sitesi!</h6>
                            </div>
                            <a href="#">
                                <div className="demoaccobtn">
                                    Create a Demo Account
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="sc_four_right sctwoimg">
                            <img src="/img/home_slide_img.png" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div >
    );
}

export default Hero;
