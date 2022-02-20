import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

import css from './converterForm.module.css';

const ConverterForm = ({customRates}) => {

    const [inSelectState, setInSelectState] = useState(false);
    const [outSelectState, setOutSelectState] = useState(true);

    const {
        handleSubmit,
        register,
        watch,
        setValue,
        reset
    } = useForm({

        defaultValues: {
            inputCurrency: 'USD',
            outputCurrency: 'UAH',
            give: '0.00',
            take: '0'
        }
    });

    const inValue = watch('inputCurrency');
    const outValue = watch('outputCurrency');
    const moneyCount = watch('give');

    // конвертер валют
    const converter = (e, number = null) => {
        const cash = e?.target.value || number;
        let result;

        if (inValue === 'UAH') {
            const {sale} = customRates.find(value => value.ccy === outValue);
            result = cash / sale;
            setValue('take', result.toFixed(2));

            return;
        }

        const {buy} = customRates.find(value => value.ccy === inValue);
        result = buy * cash;
        setValue('take', result);
    }

    // запуск по зміні валюти
    const converterStart = () => {
        converter(null, moneyCount);
    }

    // зміна покупка/продаж
    const swap = () => {
        reset({
            inputCurrency: outValue,
            outputCurrency: inValue
        }, {keepDefaultValues: true})

        if (inSelectState && !outSelectState) {
            setInSelectState(false);
            setOutSelectState(true);

            return;
        }

        setInSelectState(true);
        setOutSelectState(false);
    }

    return (
        <>
            <form className={css.calc} onSubmit={handleSubmit}>

                <div className={css.inputData}>
                    <p>Міняю</p>

                    <input type="number" {...register('give', {onChange: converter})}/>

                    <select disabled={inSelectState} {...register('inputCurrency')} onClick={converterStart}>
                        {customRates.map(value => <option key={value.ccy} value={value.ccy}>
                            {value.ccy}
                        </option>)}
                    </select>
                </div>

                <div className={css.switch}>
                    <i className="fas fa-exchange-alt" onClick={swap}></i>
                </div>

                <div className={css.outputData}>
                    <p>Отримую</p>

                    <input type="number" {...register('take')} readOnly/>

                    <select disabled={outSelectState} {...register('outputCurrency')} onClick={converterStart}>
                        {customRates.map(value => <option key={value.ccy} value={value.ccy}>
                            {value.ccy}
                        </option>)}
                    </select>
                </div>

            </form>
        </>
    );
};

export {ConverterForm};