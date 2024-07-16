import { styled } from "@mui/material";

export const HeaderContainer = styled("header")(({ theme }) => ({
  padding: "20px 0",
}));

export const HeaderNav = styled("nav")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const HeaderLogo = styled("h2")(({ theme }) => ({
  fontSize: "24px",
  textTransform: "uppercase",
}));

export const HeaderMenu = styled("ul")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  columnGap: "30px"
}));

export const HeaderBtns = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  columnGap: "10px"
}));
