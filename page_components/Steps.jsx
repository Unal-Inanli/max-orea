import React from 'react';
import { motion } from "framer-motion";

const Steps = () => {

    const stepsJson = [
        {
            title: "Ücretsiz Bir Hesap Oluştur",
            text: "Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt. Franz jagt im komplett verwahrlosten Taxi quer durch Bayern. Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter.",
            imgPath: "/img/usercreateicon.svg"
        },
        {
            title: "Hesabına Para Ekle",
            text: "Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt. Franz jagt im komplett verwahrlosten Taxi quer durch Bayern. Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter.",
            imgPath: "/img/usermoneyicon.svg"
        },
        {
            title: "Kar Elde Etmeye Başla!",
            text: "Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt. Franz jagt im komplett verwahrlosten Taxi quer durch Bayern. Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter.",
            imgPath: "/img/userkaricon.svg"
        }
    ]
    return (
        <div className="homeareasteps">
            <div className="container">
                <h3>3 adımda kolayca yatırım yapmaya <br /> başlayın.</h3>

                <div className="row">

                    {stepsJson.map((step, i) => {
                        return (<motion.div initial={{ translateY: -30, opacity: 0 }} whileInView={{ translateY: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.2 * i }} key={i} className="col-md-4">
                            <div className="item">
                                <div className="icon">
                                    <img src={step.imgPath} alt="" />
                                </div>
                                <h5>{step.title}</h5>
                                <span>{step.text}</span>
                            </div>
                        </motion.div>)
                    })}
                </div>
            </div>
        </div>
    );
}

export default Steps;
