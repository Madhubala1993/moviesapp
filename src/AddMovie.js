import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { API } from "./global";

const formValidationSchema = yup.object({
  name: yup
    .string()
    .min(2, "Enter valid movie name")
    .max(30, "Name is too big")
    .required("Required"),
  rating: yup
    .number()
    .min(5, "Invalid rating")
    .max(10, "Invalid rating")
    .required("Required"),
  poster: yup.string().required("Please enter website"),
  summary: yup
    .string()
    .min(10, "Please type atleast 10 characters")
    .max(500, "Please type within 500 characters")
    .required("Required"),
  trailer: yup.string().required("Please enter website"),
});

export function AddMovie() {
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");

  const history = useHistory();

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        poster: "",
        rating: "",
        summary: "",
        trailer: "",
      },
      // validate : validateForm,
      validationSchema: formValidationSchema,
      onSubmit: (newMovie) => {
        addMovie(newMovie);
      },
    });

  const addMovie = (newMovie) => {
    // console.log(name, poster, rating, summary, trailer);

    fetch(`${API}/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then((data) => console.log(data))
      .then(() => history.push("/movies"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="addmovie-container">
        <TextField
          id="name"
          name="name"
          label="Enter movie name"
          variant="standard"
          onBlur={handleBlur}
          value={values.name}
          onChange={handleChange}
          error={touched.name && errors.name}
          helperText={touched.name && errors.name}
        />
        {touched.name && errors.name ? errors.name : ""}

        <TextField
          id="poster"
          name="poster"
          label="Enter Poster URL"
          variant="standard"
          onBlur={handleBlur}
          value={values.poster}
          onChange={handleChange}
          error={touched.poster && errors.poster}
          helperText={touched.poster && errors.poster}
        />
        {touched.poster && errors.poster ? errors.poster : ""}

        <TextField
          id="rating"
          name="rating"
          label="Enter movie rating"
          variant="standard"
          onBlur={handleBlur}
          value={values.rating}
          onChange={handleChange}
          error={touched.rating && errors.rating}
          helperText={touched.rating && errors.rating}
        />
        {touched.rating && errors.rating ? errors.rating : ""}

        <TextField
          id="summary"
          name="summary"
          label="Enter movie summary"
          variant="standard"
          onBlur={handleBlur}
          value={values.summary}
          onChange={handleChange}
          error={touched.summary && errors.summary}
          helperText={touched.summary && errors.summary}
        />
        {touched.summary && errors.summary ? errors.summary : ""}

        <TextField
          id="trailer"
          name="trailer"
          label="Enter Trailer URL"
          variant="standard"
          onBlur={handleBlur}
          value={values.trailer}
          onChange={handleChange}
          error={touched.trailer && errors.trailer}
          helperText={touched.trailer && errors.trailer}
        />
        {touched.trailer && errors.trailer ? errors.trailer : ""}

        <Button
          variant="outlined"
          type="submit"
          // onClick={() => (values ? addMovie : console.log(values))}
        >
          Add Movie
        </Button>
      </div>
    </form>
  );
}
