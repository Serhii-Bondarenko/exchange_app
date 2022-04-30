import React from 'react';
import { useForm } from 'react-hook-form';

import './layout.css';
import { HeaderRow } from '../HeaderRow/HeaderRow';
import { CurrencyList } from '../CurrencyList/CurrencyList';
import { ConverterForm } from '../ConverterForm/ConverterForm';

const Layout = () => {

    const {
        handleSubmit,
        register,
        watch,
        setValue,
        reset,
    } = useForm({
        defaultValues: {
            inputCurrency: 'USD',
            outputCurrency: 'UAH',
            give: '0.00',
            take: '0'
        }
    });

    return (
        <div className="wrapper">
            <div className="header">
                <HeaderRow />
            </div>
            <div className="main">
                <CurrencyList setValue={setValue}/>
                <ConverterForm
                    handleSubmit={handleSubmit}
                    register={register}
                    watch={watch}
                    setValue={setValue}
                    reset={reset}
                />
            </div>
        </div>
    );
};

export {Layout};