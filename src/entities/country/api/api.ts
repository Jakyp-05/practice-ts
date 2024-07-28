import axios from "axios";
import { countryResponse } from "../model/types";

export const fetchCountrys = async (): Promise<countryResponse> => {
  const res = await axios.get("https://flagcdn.com/en/codes.json");
  return res.data;
};
