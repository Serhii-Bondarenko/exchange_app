import React from 'react';

import { setCurrentExchange } from '../../../store';

const Selector = (props) => {
    const {
        flag,
        register,
        converterStart,
        customRates,
        converter,
        currencyRates,
        dispatch,
        name,
        status,
        inputName
    } = props;

    return (
        <div className={name}>
            <select disabled={flag} {...register(name, {
                onChange: e => dispatch(setCurrentExchange({name: e.target.value}))
            })}
                    onClick={converterStart}>
                {
                    flag ? customRates.map(value => <option key={value.ccy} value={value.ccy}>
                        {value.ccy}
                    </option>) : currencyRates.map(value => <option key={value.ccy} value={value.ccy}>
                        {value.ccy}
                    </option>)
                }
            </select>
            <div className="content">
                <input className='in' type="number" {...register(inputName, { onChange: converter })} readOnly={status}/>
                <span className="border"/>
            </div>
        </div>
    );
};

export {Selector};