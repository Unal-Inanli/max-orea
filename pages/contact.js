import React from 'react';
import InviteForm from '../components/InviteForm';
import MainLayout from '../layouts/MainLayout';

const Contact = () => {
    return (
        <MainLayout title={"Orea - İletişim"}>

            <div className="context_bot_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <InviteForm formContainerStyle={{ height: "auto" }} />
                        </div>

                        <div className="col-md-7">
                            <div className="conrighttop">
                                <h4>Formu Doldurun <br />
                                    Ücretsiz Size Ulaşalım!</h4>
                                <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</span>
                            </div>
                            <div className="conrightbot">
                                <h4>İletişim Kanalları</h4>
                                <h6>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam  <br />
                                    nonumy eirmod tempor invid.</h6>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="item">
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="31.502" height="31.502" viewBox="0 0 31.502 31.502">
                                                    <path id="_x30_8.Whatsapp" d="M25.751,10A15.764,15.764,0,0,0,12.993,35l-2.166,5.71L17.088,38.9a15.583,15.583,0,0,0,8.663,2.6,15.751,15.751,0,1,0,0-31.5Zm8.387,22.288-1.693,1.654c-1.772,1.772-6.458-.158-10.593-4.332-4.135-4.135-5.985-8.821-4.332-10.553l1.693-1.693a1.713,1.713,0,0,1,2.363,0l2.481,2.481a1.64,1.64,0,0,1-.63,2.717,1.593,1.593,0,0,0-1.063,1.93,7.563,7.563,0,0,0,4.607,4.568A1.645,1.645,0,0,0,28.9,28a1.64,1.64,0,0,1,2.717-.63L34.1,29.846A1.856,1.856,0,0,1,34.138,32.288Z" transform="translate(-10 -10)" fill="#fff" />
                                                </svg>
                                            </div>
                                            <div className="text">
                                                <label>Whatsapp:</label>
                                                <span>0850 545 65 85</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="item">
                                            <div className="icon">
                                                <svg id="email" xmlns="http://www.w3.org/2000/svg" width="31.502" height="23.208" viewBox="0 0 31.502 23.208">
                                                    <g id="Group_39" data-name="Group 39" transform="translate(0 6.546)">
                                                        <g id="Group_38" data-name="Group 38" transform="translate(0 0)">
                                                            <path id="Path_67" data-name="Path 67" d="M16.662,156.238a1.791,1.791,0,0,1-1.86,0L0,147.2v12.013a4.651,4.651,0,0,0,4.649,4.649h22.2a4.651,4.651,0,0,0,4.649-4.649V147.2Z" transform="translate(0 -147.2)" fill="#fff" />
                                                        </g>
                                                    </g>
                                                    <g id="Group_41" data-name="Group 41" transform="translate(0.149 0)">
                                                        <g id="Group_40" data-name="Group 40">
                                                            <path id="Path_68" data-name="Path 68" d="M28.752,57.088H6.548a4.622,4.622,0,0,0-4.5,3.645l15.621,9.521,15.584-9.521A4.622,4.622,0,0,0,28.752,57.088Z" transform="translate(-2.048 -57.088)" fill="#fff" />
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="text">
                                                <label>E-mail:</label>
                                                <span>customer@odea.com</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="item">
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="28.346" height="32.251" viewBox="0 0 28.346 32.251">
                                                    <g id="location" transform="translate(-31)">
                                                        <g id="Group_51" data-name="Group 51" transform="translate(34.779)">
                                                            <g id="Group_50" data-name="Group 50" transform="translate(0)">
                                                                <path id="Path_96" data-name="Path 96" d="M101.393,0a10.389,10.389,0,0,0-8.448,16.441L100.6,28.383a.945.945,0,0,0,1.591,0L109.875,16.4A10.393,10.393,0,0,0,101.393,0Zm0,15.118a4.724,4.724,0,1,1,4.724-4.724A4.73,4.73,0,0,1,101.393,15.118Z" transform="translate(-91)" fill="#fff" />
                                                            </g>
                                                        </g>
                                                        <g id="Group_53" data-name="Group 53" transform="translate(31 21.713)">
                                                            <g id="Group_52" data-name="Group 52" transform="translate(0)">
                                                                <path id="Path_97" data-name="Path 97" d="M52.559,344.7,47.8,352.133a3.124,3.124,0,0,1-5.259,0L37.778,344.7c-4.193.969-6.778,2.745-6.778,4.868,0,3.683,7.3,5.669,14.173,5.669s14.173-1.987,14.173-5.669C59.346,347.441,56.757,345.664,52.559,344.7Z" transform="translate(-31 -344.695)" fill="#fff" />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="text">
                                                <label>Headquarter:</label>
                                                <span>Suite 15, 1st Floor, Oliaji Trade
                                                    Centre, Francis Rachel Street,
                                                    Victoria, Mahe, P.O. Box 1004,</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="item">
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27">
                                                    <path id="phone-call" d="M27.131,20.44c-.074-.058-5.431-3.92-6.9-3.643-.7.124-1.1.6-1.909,1.561-.13.155-.441.526-.683.789a11.265,11.265,0,0,1-1.486-.6,12.33,12.33,0,0,1-5.689-5.689,11.212,11.212,0,0,1-.6-1.486c.265-.243.635-.554.794-.688.954-.8,1.434-1.2,1.558-1.906.255-1.458-3.6-6.853-3.645-6.9A2.06,2.06,0,0,0,7.03,1C5.466,1,1,6.793,1,7.769c0,.057.082,5.82,7.189,13.05C15.412,27.918,21.174,28,21.231,28,22.208,28,28,23.534,28,21.97A2.055,2.055,0,0,0,27.131,20.44Z" transform="translate(-1 -1)" fill="#fff" />
                                                </svg>
                                            </div>
                                            <div className="text">
                                                <label>Phone:</label>
                                                <span>+90 524 56458 47</span>
                                            </div>
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

export default Contact;
