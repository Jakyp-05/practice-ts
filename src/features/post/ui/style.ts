import { styled } from "@mui/material";

export const PostContainer = styled("div")(({ theme }) => ({}));

export const PostFirst = styled("form")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  columnGap: "10px",
}));

export const PostLast = styled("div")(({ theme }) => ({
  marginTop: "50px",
  display: "flex",
  alignItems: "flex-start",
  gap: "30px",
}));

export const PostTitle = styled("textarea")(({ theme }) => ({
  width: "300px",
  height: "60px",
  outline: "none",
  padding: "10px",
  fontSize: "16px",
}));

export const PostBody = styled("textarea")(({ theme }) => ({
  width: "300px",
  height: "60px",
  outline: "none",
  padding: "10px",
  fontSize: "16px",
}));

export const PostBtn = styled("button")(({ theme }) => ({
  width: "150px",
  height: "40px",
  cursor: "pointer",
  border: "none",
  backgroundColor: "#007bff",
  color: "#fff",
  fontSize: "16px",
}));
