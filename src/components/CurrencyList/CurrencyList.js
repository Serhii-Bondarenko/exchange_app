import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './currencyList.css';
import { CurrencyItem } from '../CurrencyItem/CurrencyItem';
import { Tooltip } from '../Tooltip/Tooltip';
import { changeCoursId, getCurrency } from '../../store';

const CurrencyList = (props) => {
    const { setValue } = props;

    const dispatch = useDispatch();
    const { coursId, currencyRates, flag, error } = useSelector(state => state['appReducer']);

    useEffect(() => {
        dispatch(getCurrency());
    }, [coursId]);

    const setExchangeData = (coursId) => {
        const select = !flag ? 'inputCurrency' : 'outputCurrency';
        setValue(select, 'USD');
        dispatch(changeCoursId({id: coursId}))
    }

    return (
        <>
            {
                error ? <h1>{error}</h1> : <div className="currency">
                    <nav className="nav-bar">
                        <ul>
                            <Tooltip content="курс ПриватБанку (у відділеннях)">
                                <li className={coursId === 5 ? 'active' : null}
                                    onClick={() => setExchangeData(5)}>
                                    Готівковий курс
                                </li>
                            </Tooltip>
                            <Tooltip content="курс ПриватБанку (Приват24)">
                                <li className={coursId === 11 ? 'active' : null}
                                    onClick={() => setExchangeData(11)}>
                                    Безготівковий курс
                                </li>
                            </Tooltip>
                        </ul>
                    </nav>
                    <div className="currency-list">
                        <div className="tb-header">
                            <p>Валюта</p>
                            <p>Купівля</p>
                            <p>Продаж</p>
                        </div>
                        {
                            currencyRates.map((item, index) => <CurrencyItem
                                flag={flag}
                                setValue={setValue}
                                key={item.ccy}
                                item={item}
                            />)
                        }
                    </div>
                </div>
            }
        </>
    );
};

export {CurrencyList};