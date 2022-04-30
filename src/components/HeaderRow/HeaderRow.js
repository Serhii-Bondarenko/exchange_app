import React from 'react';

import './headerRow.css';

function HeaderRow() {
    return (
        <div className="header__row">
            <nav className="header__nav-bar">
                <img src="https://cdn.privat24.ua/icons/file/ServiceCurrency.svg" alt="Logo"/>
                <span>Курс валют</span>
            </nav>
        </div>
    );
}

export {HeaderRow};