import { Formik, Form, Field, ErrorMessage } from "formik";
import ErrorMsg from "../ErrorMsg/ErrorMsg";
import { SignInSchema } from "../../helpers/validation";
import "./signIn.css";

const SignIn = () => {
  return (
    <>
      <Formik
        initialValues={{
          login: "",
          password: "",
        }}
        validationSchema={SignInSchema}
        onSubmit={(values) => {
          console.log("submit", values);
        }}
      >
        {({ errors, touched }) => {
          return (
            <>
              <div className="signInForm-wrapper d-flex flex-column">
                <div className="logo p-2">LOGO</div>
                <div className="header-text p-2">WELLCOME!!!</div>
                <div className="sub-header-text p-2">
                  please, enter to your account
                </div>
                <Form className="signInForm d-flex flex-column">
                  <label htmlFor="login">LOGIN</label>
                  <Field type="login" name="login" />
                  <ErrorMessage name="login" component={ErrorMsg} />

                  <label htmlFor="password">PASSWORD</label>
                  <Field label="PASSWORD" type="password" name="password" />
                  <ErrorMessage name="password" component={ErrorMsg} />

                  <button className="signIn-btn mt-4 mb-2" type="submit">
                    ENTER
                  </button>
                </Form>
                <div className="signUpLink p-1">
                  Don't have an account? <a href="#">Sign Up</a>
                </div>
                <div className="forgotPSW p-1">
                  <a href="#">Forgot password?</a>
                </div>
              </div>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default SignIn;
