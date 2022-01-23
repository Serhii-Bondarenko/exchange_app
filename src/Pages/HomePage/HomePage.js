import React, {useEffect, useState} from 'react';

import css from './homePage.module.css';
import {currencyService} from "../../services";
import {CurrentRates, Exchange} from "../../Components";

const HomePage = () => {

    const [rates, setRates] = useState([])

    useEffect(()=> {
        currencyService.getCurrentRates()
            .then(response => setRates([...response]))
    }, [])

    return (
        <div className='main'>
            <div className={css.mainContainer}>
                <CurrentRates rates={rates}/>
                <Exchange rates={rates}/>
            </div>
        </div>
    );
};

export {HomePage};
