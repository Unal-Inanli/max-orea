import React from 'react';
import AnimatingCounter from '../../components/AnimatingCounter';

const Counters = () => {
    return (
        <div className="aboutscbar">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="item">
                            <h5 className='counter-row'>
                                <AnimatingCounter from={0} to={12.542} />B</h5>
                            <span>Kullanıcı</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="item">
                            <h5 className='counter-row'><AnimatingCounter from={0} to={12.542} />B</h5>
                            <span>Trade</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="item">
                            <h5 className='counter-row'><AnimatingCounter from={0} to={12.542} />M</h5>
                            <span>Hacim</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="item">
                            <h5 className='counter-row'>$<AnimatingCounter from={0} to={122.5} />M</h5>
                            <span>Aylık Hasılat</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Counters;
