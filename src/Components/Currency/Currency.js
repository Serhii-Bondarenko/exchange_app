import React from 'react';

import css from "./currency.module.css";

const Currency = ({date, currency: {ccy, buy, sale}}) => {
    return (
        <>
            <div className={css.currency}>
                <p>{ccy}</p>
                <p>{date}</p>
                <p>{buy.slice(0, -2)}</p>
                <p>{sale.slice(0, -2)}</p>
            </div>
            <hr/>

        </>
    );
};

export {Currency};