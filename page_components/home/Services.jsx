import { motion } from 'framer-motion';
import React from 'react';

const Services = () => {

    const servicesJson = [
        {
            title: "INVESTING",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
            imgPath: "/img/hm_one_icon1.svg"
        },
        {
            title: "TRADING",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
            imgPath: "/img/hm_one_icon2.svg"
        },
        {
            title: "WEALTH MANAGEMENT",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
            imgPath: "/img/hm_one_icon3.svg"
        },
        {
            title: "SMART PORTFOLIO",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
            imgPath: "/img/hm_one_icon4.svg"
        }
    ]
    return (
        <div className="hm_section_one">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h6>Lorem ipsum dolor sit amet, <br /> consetetur sadipscing.</h6>
                    </div>
                    {servicesJson.map((service, i) => {
                        return (
                            <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 * i }} viewport={{ once: true }} key={i} className="col-md-3">
                                <div className="hm_sc_one_item">
                                    <div className="hm_sc_one_icon">
                                        <img src={service.imgPath} />
                                    </div>
                                    <div className="hm_sc_one_text">
                                        <h4>{service.title}</h4>
                                        <p>{service.text}</p>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Services;
