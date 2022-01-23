import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import css from './exchange.module.css';
import {dateService} from "../../services";

const Exchange = ({rates}) => {

    let customRates = [...rates, {ccy: 'UAH', buy: "1"}]

    const [switchCurrency, setSwitchCurrency] = useState('UAH');
    const [selectState, setSelectState] = useState(false);

    const {
        handleSubmit,
        register,
        watch,
        setValue
    } = useForm({
        defaultValues: {
            inputCurrency: 'USD'
        }
    });

    const selectCurrency = watch('inputCurrency');

    const converter = (e) => {

        let cash = e.target.value;

        if (selectCurrency.includes('UAH')) {
            let reverseCurrency = customRates.find(value => value.ccy === switchCurrency);
            let reverseRes = cash / reverseCurrency.buy;
            setValue('take', reverseRes.toFixed(2));

        } else {
            let targetCurrency = customRates.find(value => value.ccy === selectCurrency);
            let result = targetCurrency.buy * cash;
            setValue('take', result);

        }
    }

    const swap = () => {
        setSwitchCurrency(selectCurrency);
        setValue('inputCurrency', 'UAH');

        if (!selectState) {
            setSelectState(true);
        }else {
            setSelectState(false);
        }
    }

    return (
        <div className={css.exchange}>
            <h3>КОНВЕРТЕР ВАЛЮТ</h3>
            <div className={css.calc}>
                <div className={css.inputData}>
                    <p>Міняю</p>
                    <form onSubmit={handleSubmit}>
                        <input type="number" defaultValue="0.00" {...register('give')} onChange={converter}/>
                        <select disabled={selectState} {...register('inputCurrency')}>
                            {customRates.map(value => <option key={value.ccy} value={value.ccy}>
                                {value.ccy}
                            </option>)}
                        </select>
                    </form>
                </div>
                <div className={css.changer}>
                    <i className="fas fa-exchange-alt" onClick={swap}></i>
                </div>
                <div className={css.outputData}>
                    <p>Отримую</p>
                    <form onSubmit={handleSubmit}>
                        <input type="number" defaultValue="0" {...register('take')} readOnly/>
                        <div>{switchCurrency}</div>
                    </form>
                </div>
            </div>
            <span>По курсу ПриватБанк на {dateService()}</span>
        </div>
    )
        ;
};

export {Exchange};