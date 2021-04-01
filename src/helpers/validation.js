import * as Yup from "yup";

const SignInSchema = Yup.object().shape({
  login: Yup.string()
    .min(8, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
});

export { SignInSchema };
