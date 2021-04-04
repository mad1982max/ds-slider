import { useState } from "react";
import { Link } from "react-router-dom";
import ErrorMsg from "../ErrorMsg/ErrorMsg";
import { auth, signInWithGoogle } from "../../firebase";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SignInSchema } from "../../helpers/validation";
import { waitingBeforeErrMsgDisapp } from "../../constants";
import "./signIn.css";

const SignIn = () => {
  const [error, setError] = useState(null);
  const signInWithEmailAndPasswordHandler = (email, password) => {
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      setError(error.message);
      setTimeout(() => setError(""), waitingBeforeErrMsgDisapp);
    });
  };
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignInSchema}
        onSubmit={(values) => {
          console.log("submit:", values);
          const { email, password } = values;
          signInWithEmailAndPasswordHandler(email, password);
        }}
      >
        {({ errors, isValid, dirty }) => {
          return (
            <>
              <div className="signInForm-wrapper d-flex flex-column">
                <div className="logo p-2">HELLO, USER!</div>
                <div className="info-text p-1">
                  please, enter to your account
                </div>
                <Form className="signInForm d-flex flex-column">
                  <label htmlFor="email">EMAIL</label>
                  <Field type="email" name="email" />
                  <ErrorMessage name="email" component={ErrorMsg} />

                  <label htmlFor="password">PASSWORD</label>
                  <Field label="PASSWORD" type="password" name="password" />
                  <ErrorMessage name="password" component={ErrorMsg} />

                  <button
                    disabled={!(isValid && dirty)}
                    className="signIn-btn mt-4 mb-2"
                    type="submit"
                  >
                    {isValid && dirty ? "Sign in" : "Fill in all fields first"}
                  </button>
                  <div className="separator">
                    <span>or</span>
                  </div>
                  <button
                    type="button"
                    className="signInWithGoogle mt-2 mb-2"
                    onClick={signInWithGoogle}
                  >
                    Sign in with GOOGLE
                  </button>
                </Form>
                {error && <ErrorMsg msg={error} />}
                <div className="signUpLink p-1">
                  Don't have an account? <Link to="/signUp">Sign Up</Link>
                </div>
                <div className="forgotPSW p-1 mb-2">
                  <Link to="/passwordReset">Forgot Password?</Link>
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
