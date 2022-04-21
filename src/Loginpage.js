import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { API } from "./global";

export function Loginpage() {
  const history = useHistory();
  const addLogin = (login) => {
    // console.log(name, poster, rating, summary, trailer);

    fetch(`${API}/users/login`, {
      method: "POST",
      body: JSON.stringify(login),
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then((data) => console.log(data))
      .then(() => history.push("/movies"));
  };

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        password: "",
      },
      // validate : validateForm,

      onSubmit: (login) => {
        addLogin(login);
      },
    });
  return (
    <div className="App" to="/users/login">
      <form onSubmit={handleSubmit}>
        <TextField
          id="name"
          name="name"
          label="Enter user name"
          variant="standard"
          onBlur={handleBlur}
          value={values.name}
          onChange={handleChange}
          error={touched.name && errors.name}
          helperText={touched.name && errors.name}
        />
        {touched.name && errors.name ? errors.name : ""}

        <TextField
          id="password"
          name="password"
          label="Enter password"
          variant="standard"
          onBlur={handleBlur}
          value={values.password}
          onChange={handleChange}
          error={touched.password && errors.password}
          helperText={touched.password && errors.password}
        />
        {touched.password && errors.password ? errors.password : ""}

        <Button variant="outlined" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
