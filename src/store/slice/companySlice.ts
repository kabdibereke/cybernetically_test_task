import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICompany } from "../../interface/interface";


interface ICompanySlice {
	companies: ICompany[]
}

const initialState: ICompanySlice = {
	companies: []
};

export const CompanySlice = createSlice({
	name: "companies",
	initialState,
	reducers: {
		setCompanies: (state, action) => {
			state.companies.push(...action.payload);
		},
		deleteAll: (state) => {
			state.companies=[]
		}
	},
});

export const { setCompanies,deleteAll } =
    CompanySlice.actions;

export default CompanySlice.reducer;
