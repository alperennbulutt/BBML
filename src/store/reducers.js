import { combineReducers } from "redux";

import settingsR from 'store/slices/Settings/SettingsSlice'
import brandsR from 'store/slices/Production/Brands/BrandsSlice'

const rootReducer = combineReducers({
    settings: settingsR,
    brands: brandsR
});

export default rootReducer();
