import { motion, MotionConfig } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

const Presentation = () => {
    return (
        <div className="hm_section_four">
            <div className="container">
                <div className="sc_four_content">
                    <div className="row">
                        <MotionConfig transition={{ duration: 0.8 }}>
                            <motion.div initial={{ translateX: -50, opacity: 0 }} whileInView={{ translateX: 0, opacity: 1 }} viewport={{ once: true }} className="col-md-6">
                                <div className="sc_four_left sctworight">
                                    <h3>Zwei flinke Boxer jagen die quirlige Eva und.</h3>
                                    <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</span>

                                    <Link href="/register">
                                        <a>
                                            <PrimaryButton>
                                                Hesap Oluştur
                                            </PrimaryButton>
                                        </a>
                                    </Link>
                                </div>
                            </motion.div>
                            <motion.div initial={{ translateX: 50, opacity: 0 }} whileInView={{ translateX: 0, opacity: 1 }} viewport={{ once: true }} className="col-md-6">
                                <div className="sc_four_right sctwoimg">
                                    <img src="/img/homescfourimg.png" />
                                </div>
                            </motion.div>
                        </MotionConfig>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Presentation;
