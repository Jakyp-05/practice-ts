import { styled } from "@mui/material";

export const ResultContainer = styled("div")(({ theme }) => ({
  width: "300px",
  height: "200px",
  border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
  textAlign: "center",
  rowGap: "10px",
}));

export const ResultTitle = styled("h2")(({ theme }) => ({
  textWrap: "wrap",
}));

export const ResultBody = styled("p")(({ theme }) => ({
  textWrap: "wrap",
}));

export const ResultButton = styled("button")(({ theme }) => ({
  width: "200px",
  height: "40px",
  backgroundColor: "#007bff",
  color: "#fff",
  borderColor: "#007bff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "18px",
  cursor: "pointer",
  border: "none",
  outline: "none",
}));
