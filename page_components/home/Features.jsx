import React from 'react';



const Features = () => {

    const features = [
        {
            title: "Al/Sat Sinyal Servisi",
            iconName: "al_sat_icon.svg",
            text: `Uzman analiz ekibimizin anlık AL/SAT önerilerinden cep telefonunuza indirdiğiniz mobil uygulamamız üzerinden yararlanabilirsiniz.`
        },
        {
            title: "Hızlı Para Yatırma/Çekme",
            iconName: "al_sat_icon.svg",
            text: `Bu kadar kolay ve sorunsuz para yatırıp çekebileceğinize
            sizler de inanamayacaksınız.`
        },
        {
            title: "Lisanslı Aracı Kurum",
            iconName: "al_sat_icon.svg",
            text: `GLOFSA tarafından yetkilendirilmiş aracı kurum lisansımız
            ile güvenilir forex hizmeti alacaksınız.`
        }
    ]

    return (
        <div className="homesceight">
            <div className="container">
                <div className="contain">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="sceightimg">
                                <img src="img/corporate-man-png-6.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="text">
                                <h5>Zwei flinke Boxer jagen die quirlige Eva und.</h5>
                                <span>Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt. Franz jagt im komplett verwa.</span>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="icon">
                                            <img src="img/guvenicons.svg" alt="" />
                                        </div>
                                        <div className="texts">
                                            <h4>Güven</h4>
                                            <h6>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="icon">
                                            <img src="img/ozsermayeicon.svg" alt="" />
                                        </div>
                                        <div className="texts">
                                            <h4>Güçlü özsermaye yapısı</h4>
                                            <h6>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="icon">
                                            <img src="img/deneyimiconsi.svg" alt="" />
                                        </div>
                                        <div className="texts">
                                            <h4>Deneyim</h4>
                                            <h6>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="icon">
                                            <img src="img/alsaticons.svg" alt="" />
                                        </div>
                                        <div className="texts">
                                            <h4>Al/Sat Sinyal Servisi</h4>
                                            <h6>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</h6>
                                        </div>
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


export default Features;
