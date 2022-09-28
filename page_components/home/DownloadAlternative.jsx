import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
const DownloadAlternative = () => {
    return (
        <div className="container">
            <div className="homsectionseven">
                <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="row">
                    <div className="col-md-6">
                        <div className="text">
                            <h4>Hemen Şimdi Kolay bir Şekilde <br />
                                Demo Hesap Oluşturun.</h4>
                            <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                aliquyam erat.</span>
                            <Link href="/register">
                                <a>
                                    <PrimaryButton>
                                        Hesap Oluştur
                                    </PrimaryButton>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className='homsectionseven__bg'></div>
                </motion.div>
            </div>
        </div>
    );
}

export default DownloadAlternative;
