import { styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  width: "1000px",
  minHeight: "300px",
  margin: "50px auto",
  border: "1px solid black",
  padding: "10px",
}));

export const PostText = styled("h2")(({ theme }) => ({
  textAlign: "center",
  fontSize: "40px",
  textTransform: "uppercase",
}));

export const PostContent = styled("div")(({ theme }) => ({}));

export const CardPost = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "40px",
  marginTop: "30px"
}));
