import * as Yup from "yup";

const SignInSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
  email: Yup.string().email().required("Required"),
});

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email().required("Required"),
});

const SignUpSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
  email: Yup.string().email().required("Required"),
  name: Yup.string()
    .min(4, "Too Short!")
    .max(25, "Too Long!")
    .required("Required"),
  confirmPassword: Yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords missmatched!")
      .required("Required"),
  }),
});

export { SignInSchema, SignUpSchema, ForgotPasswordSchema };
