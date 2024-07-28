import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { countryState } from "./types";
import { getCountries } from "./CountryActions";

const initialState: countryState = {
  countries: {},
  loading: false,
  error: null,
};

const countrtSlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.countries = action.payload;
        state.loading = false;
      })
      .addCase(getCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch countries";
      });
  },
});
