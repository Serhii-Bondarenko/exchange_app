import React, {useEffect, useState} from 'react';

import css from './homePage.module.css';
import {currencyService} from '../../services';
import {CurrentRates, Exchange, Loader} from '../../Components';

const HomePage = () => {

    const [rates, setRates] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        currencyService.getCurrentRates()
            .then(response => {
                const filteredRates = response.filter(currency => currency.ccy !== 'BTC');
                setRates([...filteredRates]);
                setLoading(false);
            })
    }, []);

    return (
        <div className='main'>
            {loading ? <Loader/> : <div className={css.mainContainer}>
                <CurrentRates rates={rates}/>
                <Exchange rates={rates}/>
            </div>}
        </div>
    );
};

export {HomePage};
