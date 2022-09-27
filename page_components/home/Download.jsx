import React from 'react';
import { motion } from "framer-motion";

const Download = () => {
    return (
        <div className="plat_section_two">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="plat_two_img">
                            <img src="img/metatrader_img.svg" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="plat_two_right plat_two_right2">
                            <img className="hrlogo" src="img/logo.svg" alt="" />
                            <h3>METATRADER 5</h3>
                            <span>MetaTrader 4 platformu, dünya çapında acemiden profesyonele her seviyedeki yatırımcının en çok kullandığı işlem platformu olma özelliğini taşır. Çünkü MetaTrader 4 kullanırken kullanıcı dostu arayüzü ve özelleştirilebilir yapısı ile işlem performansınızı olumlu etkileyecek düzenlemeleri edinebilirsiniz.</span>

                            <div className="download_bar_home">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src="img/google_play.svg" />
                                    </div>
                                    <div className="col-md-4">
                                        <img src="img/deskto_play.svg" />
                                    </div>
                                    <div className="col-md-4">
                                        <img src="img/app_store.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Download;
