import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { currencyService } from '../services';

export const getCurrency = createAsyncThunk(
    'appSlice/getCurrency',
    async (_, {dispatch, rejectWithValue, getState}) => {
        try {
            const { appReducer: { coursId } } = await getState();
            const data = await currencyService.getCurrentRates(coursId);

            dispatch(setCurrencyData({ data }));
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

const appSlice = createSlice({
    name: 'appSlice',
    initialState: {
        flag: false,
        currentExchange: null,
        coursId: 5,
        currencyRates: [],
        error: null
    },
    reducers: {
        setCurrencyData: (state, action) => {
            const currencyList = action.payload.data.reduce((acc, value) => {
                if (value.ccy === 'USD') {
                    value = {...value, icon: 'US', name: 'Долар США', sign: 'Dollar'}
                    acc.push(value);
                } else if (value.ccy === 'EUR') {
                    value = {...value, icon: 'EU', name: 'Євро', sign: 'Euro'};
                    acc.push(value);
                } else if (value.ccy === 'RUR') {
                    value = {...value, icon: 'RU', name: 'Російський рубль', sign: 'Rub'}
                    acc.push(value);
                }

                return acc;
            }, []);

            state.currentExchange = currencyList[0];
            state.currencyRates = currencyList;
        },

        changeCoursId: (state, action) => {
            state.coursId = action.payload.id;
        },

        changeFlagState: (state, action) => {
            state.flag = !state.flag;
        },

        setCurrentExchange: (state, action) => {
            if (!action.payload.value) {
                const value = state.currencyRates.find(item => item.ccy === action.payload.name);
                state.currentExchange = value;

                return;
            }

            state.currentExchange = action.payload.value;
        }
    },

    extraReducers: {
        [getCurrency.rejected]: (state, action) => {
            state.error = action.payload;
        }
    }
})

const appReducer = appSlice.reducer;

export default appReducer;

export const {setCurrencyData, changeCoursId, changeFlagState, setCurrentExchange} = appSlice.actions;