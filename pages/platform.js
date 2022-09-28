import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Platform = () => {
    return (
        <MainLayout title={"Orea - Platform"}>
            <div className="plat_section">
                <div className="plat_section_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="plat_top_left">
                                    <h4>Join Forex Web with <br />
                                        THYFX!</h4>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa</span>
                                </div>
                            </div>
                            <div className="col-md-6 pla_s_vout">
                                <div className="plat_top_right">
                                    <img src="img/platfromsconeright.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="plat_section_three">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="plat_two_right">
                                <h3>Join Forex Web with <br />
                                    THYFX!</h3>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="plat_two_img">
                                <img src="img/plat_two_scene.svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="plat_section_two" style={{ marginBottom: "0px" }}>
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

        </MainLayout>
    );
}

export default Platform;
