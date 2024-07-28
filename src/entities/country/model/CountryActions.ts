import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCountrys } from "../api/api";
import { countryResponse } from "./types";

export const getCountries = createAsyncThunk<countryResponse>(
  "countries",
  async () => {
    const data = await fetchCountrys();
    return data;
  }
);
