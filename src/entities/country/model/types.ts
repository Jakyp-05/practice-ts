export interface countryState {
  countries: { [key: string]: string };
  loading: boolean;
  error: string | null;
}

export interface countryResponse {
  [key: string]: string;
}
