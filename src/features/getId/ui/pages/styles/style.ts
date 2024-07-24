import { styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  width: "1200px",
  minHeight: "300px",
  maxHeight: "550px",
  margin: "40px auto",
  border: "1px solid black",
  borderRadius: "5px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "30px",
}));

export const PostTitle = styled("h2")(({ theme }) => ({
  textAlign: "center",
}));

export const PostIdContent = styled("div")(({ theme }) => ({
  width: "300px",
  padding: "20px",
  boxSizing: "border-box",
  textAlign: "center",
}));

export const ButtonNavigate = styled("button")(({ theme }) => ({
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
  marginTop: "10px",
  marginLeft: "110px",
  border: "none",
  outline: "none",
}));

export const ButtonCart = styled("button")(({ theme }) => ({
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
  marginTop: "10px",
  marginLeft: "110px",
  border: "none",
  outline: "none",
}));

export const ButtonWish = styled("button")(({ theme }) => ({
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
  marginTop: "10px",
  marginLeft: "110px",
  border: "none",
  outline: "none",
}));

export const ButtonComments = styled("button")(({ theme }) => ({
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
  marginTop: "10px",
  marginLeft: "110px",
  border: "none",
  outline: "none",
}));
