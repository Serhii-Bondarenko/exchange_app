import React from 'react';

import css from './exchange.module.css';
import {dateService} from "../../services";
import {ConverterForm} from "../ConverterForm/ConverterForm";


const Exchange = ({rates}) => {

    let customRates = [...rates, {ccy: 'UAH', buy: 1, sale: 1}]

    return (
        <div className={css.exchange}>
            <h3>КОНВЕРТЕР ВАЛЮТ</h3>
                <ConverterForm customRates={customRates}/>
            <span>По курсу ПриватБанк на {dateService()}</span>
        </div>
    );
};

export {Exchange};