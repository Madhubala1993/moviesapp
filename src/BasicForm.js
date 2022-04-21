import { useFormik } from "formik";
import * as yup from "yup";

// const validateForm= (values) =>
// {
//     const errors={};
//     console.log("ValidateForm" , values);

//     if(values.email.length <5){
//         errors.email = "Please provide a longer email"
//     }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {

//         errors.email = 'Invalid email address';
//       }

//     if(values.password.length < 8){
//         errors.password = "Please provide a longer password"
//     }else if(values.password.length >12){
//         errors.password = "Please provide a shorter password"
//     }

//     console.log(errors);
//     return errors;
// }
const formValidationSchema = yup.object({
  email: yup
    .string()
    .min(5, "Enter valid email")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Pattern not matched 😒"
    )
    .required("Required"),
  password: yup
    .string()
    .min(8, "Enter big")
    .max(12, "Enter small")
    .required("Required"),
});

export function BasicForm() {
  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: { email: "", password: "" },
      // validate : validateForm,
      validationSchema: formValidationSchema,
      onSubmit: (values) => {
        console.log("OnSubmit", values);
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="email"
        type="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        placeholder="Enter your email"
      />
      {touched.email && errors.email ? errors.email : ""}
      <input
        id="password"
        type="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        placeholder="Enter your password"
      />
      {touched.password && errors.password ? errors.password : ""}
      <button type="submit">submit</button>
    </form>
  );
}
