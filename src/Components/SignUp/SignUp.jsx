import { useState } from "react";
import { Link } from "react-router-dom";
import ErrorMsg from "../ErrorMsg/ErrorMsg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SignUpSchema } from "../../helpers/validation";
import { auth, generateUserDocument } from "../../firebase";
import { waitingBeforeErrMsgDisapp } from "../../constants";
import "./signUp.css";

const SignUp = () => {
  const [error, setError] = useState(null);
  const createUserWithEmailAndPasswordHandler = async (
    email,
    password,
    name
  ) => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      generateUserDocument(user, { displayName: name });
    } catch (error) {
      setError(error.message);
      setTimeout(() => setError(""), waitingBeforeErrMsgDisapp);
    }
  };

  return (
    <>
      <Formik
        validateOnChange
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          const { email, password, name } = values;
          createUserWithEmailAndPasswordHandler(email, password, name);
        }}
      >
        {({ errors, isValid, dirty }) => {
          return (
            <>
              <div className="signInForm-wrapper d-flex flex-column">
                <div className="logo p-2">HELLO, USER!</div>
                <div className="info-text p-1">please, sign up</div>
                <Form className="signInForm d-flex flex-column">
                  <label htmlFor="name">NAME</label>
                  <Field label="name" type="text" name="name" />
                  <ErrorMessage name="name" component={ErrorMsg} />

                  <label htmlFor="email">EMAIL</label>
                  <Field type="email" name="email" />
                  <ErrorMessage name="email" component={ErrorMsg} />

                  <label htmlFor="password">PASSWORD</label>
                  <Field label="PASSWORD" type="password" name="password" />
                  <ErrorMessage name="password" component={ErrorMsg} />

                  <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
                  <Field
                    label="confirmPassword"
                    type="password"
                    name="confirmPassword"
                  />
                  <ErrorMessage name="confirmPassword" component={ErrorMsg} />

                  <button
                    disabled={!(isValid && dirty)}
                    className="signIn-btn mt-4 mb-2"
                    type="submit"
                  >
                    {isValid && dirty ? "Sign up" : "Fill in all fields first"}
                  </button>
                </Form>
                {error && <ErrorMsg msg={error} />}
                <div className="signUpLink p-1 mb-2">
                  Return to Sign In? <Link to="/">Click here</Link>
                </div>
              </div>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default SignUp;
