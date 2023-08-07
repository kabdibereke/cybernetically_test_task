import { configureStore } from "@reduxjs/toolkit";
import  companyReducer  from "./slice/companySlice";

export const store = configureStore({
	reducer: {
		companyList: companyReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
