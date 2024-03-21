import {combineReducers } from "redux";
import randomUserReducer from "../slices/randomUserSlice";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { persistReducer } from "redux-persist";

// const getConfig: any = (key: string, whitelist: any) => {
//     const persistConfig = {
//         key: key,
//         storage: AsyncStorage,
//         whitelist,
//         timeout: null, // There is an issue in the source code of redux-persist (default setTimeout does not cleaning)
//         transforms: [],
//     };
//     return persistConfig;
// };
const rootReducer = combineReducers({
    randomUser: randomUserReducer
})

export default rootReducer;