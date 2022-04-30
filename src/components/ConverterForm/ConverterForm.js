import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './converterForm.css';
import { changeFlagState } from '../../store';
import { Selector } from './Selector/Selector';

const ConverterForm = (props) => {
    const {
        handleSubmit,
        register,
        reset,
        setValue,
        watch
    } = props;

    const dispatch = useDispatch();
    const { flag, currencyRates, currentExchange } = useSelector(state => state['appReducer']);

    const customRates = [...currencyRates, { ccy: "UAH", buy: "1", sale: "1", icon: 'UA', sign: 'Uah' }]

    const inValue = watch('inputCurrency');
    const outValue = watch('outputCurrency');
    const giveMoney = watch('give');
    const takeMoney = watch('take');

    useEffect(() => {
        converterStart();
    }, [inValue, outValue]);

    const converter = (e, number = null) => {
        const cash = e?.target.value || number;
        let result;

        if (inValue === 'UAH') {
            const ccy = customRates?.find(value => value.ccy === outValue);
            result = cash / ccy?.sale;
            setValue('take', Math.ceil(result));

            return;
        }

        const ccy = customRates.find(value => value.ccy === inValue);
        result = ccy?.buy * cash;
        setValue('take', result.toFixed(2));
    }

    const converterStart = () => converter(null, giveMoney);

    const swap = () => {
        reset({
            inputCurrency: outValue,
            outputCurrency: inValue,
            give: takeMoney
        });

        dispatch(changeFlagState());
    }

    return (
        <>
            {
                !!currencyRates.length && <form className="calc" onSubmit={handleSubmit}>
                    <Selector
                        flag={flag}
                        register={register}
                        name={'inputCurrency'}
                        inputName={'give'}
                        status={false}
                        converter={converter}
                        converterStart={converterStart}
                        customRates={customRates}
                        currencyRates={currencyRates}
                        dispatch={dispatch}
                    />
                    <div className="exchange-action">
                        <div className="switch" onClick={swap}>
                            <i className="fas fa-exchange-alt"/>
                        </div>
                        <div className="cur-rate">
                            <p>1</p>
                            <img src={`https://cdn.privat24.ua/icons/file/${currentExchange?.sign}.svg`}
                                 alt={currentExchange?.ccy}/>
                            <p>=</p>
                            <p>{!flag ? currentExchange?.buy : currentExchange?.sale}</p>
                            <img src={`https://cdn.privat24.ua/icons/file/${customRates[customRates.length - 1].sign}.svg`}
                                 alt={customRates[customRates.length - 1].ccy}/>
                        </div>
                    </div>
                    <Selector
                        flag={!flag}
                        register={register}
                        name={'outputCurrency'}
                        inputName={'take'}
                        status={true}
                        converterStart={converterStart}
                        customRates={customRates}
                        currencyRates={currencyRates}
                        dispatch={dispatch}
                    />
                </form>
            }
        </>
    );
};

export {ConverterForm};