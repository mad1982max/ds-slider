import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ErrorMsg from "../ErrorMsg/ErrorMsg";
import { SignUpSchema } from "../../helpers/validation";
import "./signUp.css";

const SignUp = () => {
  return (
    <>
      <Formik
        validateOnChange
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          console.log("submit:", values);
        }}
      >
        {({ errors, isValid, dirty }) => {
          return (
            <>
              <div className="signInForm-wrapper d-flex flex-column">
                <div className="logo p-2">HELLO, USER!</div>
                <div className="info-text p-2">please, sign in</div>
                <Form className="signInForm d-flex flex-column">
                  <label htmlFor="name">Name</label>
                  <Field label="name" type="text" name="name" />
                  <ErrorMessage name="name" component={ErrorMsg} />

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
                </Form>
                <div className="signUpLink p-1">
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
