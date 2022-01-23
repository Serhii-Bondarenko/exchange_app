import React, {useEffect, useState} from 'react';

import css from './currentRates.module.css'
import {Currency} from "../Currency/Currency";
import {dateService} from "../../services";

const CurrentRates = ({rates}) => {

    const [date, setDate] = useState(dateService());

    useEffect(() => {
        setDate(dateService());
    }, [date])

    return (
        <div className={css.currentRates}>
            <h3>ГОТІВКОВИЙ КУРС</h3>
            <div className={css.tableHead}>
                <p>Валюта</p>
                <p>Дата</p>
                <p>Купівля</p>
                <p>Продаж</p>
            </div>
            <div className={css.currencyList}>
                {rates.map(currency => <Currency key={currency.ccy} date={date} currency={currency}/>)}
            </div>
        </div>
    );
};

export {CurrentRates};