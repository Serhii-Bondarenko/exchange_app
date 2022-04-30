import React from 'react';
import { useDispatch } from 'react-redux';

import './currencyItem.css';
import { setCurrentExchange } from '../../store';

const CurrencyItem = (props) => {

    const { item, setValue, flag } = props;

    const dispatch = useDispatch();

    const setCcy = () => {
        dispatch(setCurrentExchange({ value: item }))
        setValue(!flag ? 'inputCurrency' : 'outputCurrency', item.ccy);
    }

    const icon = `https://cdn.privat24.ua/icons/file/${item.icon}.svg`

    return (
        <div className="tb-row" onClick={setCcy}>
            <div className="cur-info">
                <img src={icon} alt={item.ccy}/>
                <div className="cur-name">
                    <p>{item.ccy}</p>
                    <p>{item.name}</p>
                </div>
            </div>
            <span>{Number(item.buy).toFixed(2)}</span>
            <span>{Number(item.sale).toFixed(2)}</span>
        </div>
    );
};

export {CurrencyItem};