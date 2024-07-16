import { styled } from "@mui/material";

export const ContainerWishlist = styled("div")(({ theme }) => ({
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  flexWrap: "wrap",
  gap: "30px",
}));

export const WishItems = styled("div")(({ theme }) => ({
  width: "380px",
  height: "300px",
  border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  rowGap: "20px",
}));

export const RemoveWish = styled("button")(({ theme }) => ({
  width: "150px",
  height: "40px",
  cursor: "pointer",
  border: "none",
  backgroundColor: "#fb0f1f",
  color: "#fff",
  fontSize: "16px"
}));
