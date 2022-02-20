import React from 'react';

import css from './exchange.module.css';
import {ConverterForm} from '../ConverterForm/ConverterForm';
import {dateFormatter} from '../../helper';


const Exchange = ({rates}) => {

    let customRates = [...rates, {ccy: 'UAH', buy: 1, sale: 1}]
    let currentDate = dateFormatter();

    return (
        <div className={css.exchange}>
            <h3>КОНВЕРТЕР ВАЛЮТ</h3>
                <ConverterForm customRates={customRates}/>
            <span>По курсу ПриватБанк на {currentDate}</span>
        </div>
    );
};

export {Exchange};