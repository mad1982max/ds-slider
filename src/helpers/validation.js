import * as Yup from "yup";

const SignInSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
  email: Yup.string().email(),
});

const SignUpSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
  email: Yup.string().email(),
  name: Yup.string()
    .min(4, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
});

export { SignInSchema, SignUpSchema };
