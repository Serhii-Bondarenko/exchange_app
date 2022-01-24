import React from 'react';

import './loader.css';

const Loader = () => {
    return (
        <div className={'wrap'}>
            <div className="lds-dual-ring"></div>
        </div>
    );
};

export {Loader};