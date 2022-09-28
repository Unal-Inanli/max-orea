import { motion } from 'framer-motion';
import React from 'react';


const Features = () => {

    const features = [
        {
            title: "Güven",
            iconName: "/img/guvenicons.svg",
            text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor`
        },
        {
            title: "Güçlü özsermaye yapısı",
            iconName: "/img/ozsermayeicon.svg",
            text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor`
        },
        {
            title: "Deneyim",
            iconName: "/img/deneyimiconsi.svg",
            text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor`
        },
        {
            title: "Al/Sat Sinyal Servisi",
            iconName: "/img/alsaticons.svg",
            text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor`
        }
    ]

    return (
        <div className="homesceight">
            <div className="container">
                <div className="contain">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="sceightimg">
                                <img src="/img/corporate-man-png-6.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="text">
                                <h5>Zwei flinke Boxer jagen die quirlige Eva und.</h5>
                                <span>Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt. Franz jagt im komplett verwa.</span>

                                <div className="row">
                                    {features.map((feature, i) => {
                                        return (
                                            <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 * i }} key={i} viewport={{ once: true }} className="col-md-6">
                                                <div className="icon">
                                                    <img src={feature.iconName} alt="" />
                                                </div>
                                                <div className="texts">
                                                    <h4>{feature.title}</h4>
                                                    <h6>{feature.text}</h6>
                                                </div>
                                            </motion.div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Features;
