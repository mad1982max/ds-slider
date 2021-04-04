import { useState } from "react";
import { Link } from "react-router-dom";
import ErrorMsg from "../ErrorMsg/ErrorMsg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ForgotPasswordSchema } from "../../helpers/validation";
import { waitingBeforeErrMsgDisapp } from "../../constants";
import { auth } from "../../firebase";

const PasswordReset = () => {
  const [msg, setMsg] = useState(null);
  const sendResetEmail = (email) => {
    auth
      .sendPasswordResetEmail(email)
      .then((response) => {
        setMsg("Reset instruction are sent. Please, check your mail!");
        setTimeout(() => setMsg(""), waitingBeforeErrMsgDisapp);
      })
      .catch((error) => {
        setMsg(error.message);
        setTimeout(() => setMsg(""), waitingBeforeErrMsgDisapp);
      });
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={ForgotPasswordSchema}
        onSubmit={(values) => {
          console.log("submit:", values);
          sendResetEmail(values.email);
        }}
      >
        {({ isValid, dirty }) => {
          return (
            <>
              <div className="signInForm-wrapper d-flex flex-column">
                <div className="logo p-2">Forget Password?</div>
                <div className="info-text p-1">please, enter to your email</div>
                <Form className="signInForm d-flex flex-column">
                  <label htmlFor="email">EMAIL</label>
                  <Field type="email" name="email" />
                  <ErrorMessage name="email" component={ErrorMsg} />

                  <button
                    disabled={!(isValid && dirty)}
                    className="signIn-btn mt-4 mb-2"
                    type="submit"
                  >
                    {isValid && dirty
                      ? "Send notification"
                      : "Fill in email field"}
                  </button>
                </Form>
                {msg && <ErrorMsg msg={msg} />}
                <div className="signUpLink p-1">
                  Return to <Link to="/">Sign In</Link>
                </div>
                <div className="signUpLink p-1">
                  Go to <Link to="/signUp">Sign Up</Link>
                </div>
              </div>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default PasswordReset;
