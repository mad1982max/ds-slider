import { Formik } from "formik";
import { useFormik } from "formik";

const SignUp = () => {
  return (
    <>
      <div>Sign Up</div>
      <Formik
        initialValues={{
          login: "",
          password: "",
          confirmPassword: "",
          email: "",
          phone: "",
        }}
        onSubmit={(values) => {
          console.log("submit", values);
        }}
      >
        {() => {
          return (
            <>
              <div>1</div>
              <div>2</div>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default SignUp;
