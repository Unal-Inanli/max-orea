import React from 'react';

const CounterWithBackground = () => {
    return (
        <div className="aboutscbar">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="item">
                            <h5>12.542</h5>
                            <span>Kullanıcı</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="item">
                            <h5>12.542</h5>
                            <span>Trade</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="item">
                            <h5>12.5M</h5>
                            <span>Hacim</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="item">
                            <h5>$122.5M</h5>
                            <span>Aylık Hasılat</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CounterWithBackground;
