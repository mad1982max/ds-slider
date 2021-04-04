import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import ErrorMsg from "../ErrorMsg/ErrorMsg";
import { SignUpSchema } from "../../helpers/validation";
import { auth, generateUserDocument } from "../../firebase";
import "./signUp.css";

const SignUp = () => {
  const [error, setError] = useState(null);
  const createUserWithEmailAndPasswordHandler = async (email, password) => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      generateUserDocument(user, { email });
    } catch (error) {
      setError(error.message);
      setTimeout(() => setError(""), 3000);
    }
  };

  return (
    <>
      <Formik
        validateOnChange
        initialValues={{
          name: "Maksym Bezrodnyi",
          email: "mad1982max@gmail.com",
          password: "12345678",
          confirmPassword: "12345678",
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          const { email, password } = values;
          createUserWithEmailAndPasswordHandler(email, password);
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
                    // disabled={!(isValid && dirty)}
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
