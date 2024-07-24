import * as Yup from "yup";

export const validationSchema = Yup.object({
  title: Yup.string()
    .min(5, "Title must be at least 5 characters long")
    .required("Title is required"),
  body: Yup.string()
    .min(10, "Body must be at least 10 characters long")
    .required("Body is required"),
});
