import { styled } from "@mui/material";

export const CommentsContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "30px",
}));

export const CommentsBlock = styled("div")(({ theme }) => ({
  width: "277px",
  height: "350px",
  border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "10px",
  rowGap: "10px",
}));

export const Name = styled("h2")(({ theme }) => ({
  textTransform: "uppercase",
  fontSize: "18px",
}));

export const Email = styled("span")(({ theme }) => ({
  fontSize: "16px",
  fontWeight: "700",
}));

export const Content = styled("p")(({ theme }) => ({
  fontSize: "18px",
}));

export const PostButton = styled("button")(({ theme }) => ({
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
