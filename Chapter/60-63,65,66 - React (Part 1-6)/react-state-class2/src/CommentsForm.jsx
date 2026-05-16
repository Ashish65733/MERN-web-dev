import { useState } from "react";
import { useFormik } from "formik";
import "./CommentsForm.css"

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Username cannot be empty!";
  }
  return errors;
};

export default function CommentsForm({ addNewComment }) {
  //   let [formData, setFormData] = useState({
  //     username: "",
  //     remarks: "",
  //     rating: 3,
  //   });

  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: 3,
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      addNewComment(values);
      resetForm();
    },
  });

  //   let handleInputChange = (event) => {
  //     setFormData((currData) => {
  //       return {
  //         ...currData,
  //         [event.target.name]: event.target.value,
  //       };
  //     });
  //   };

  //   let handleSubmit = (event) => {
  //     event.preventDefault();
  //     console.log(formData);
  //     addNewComment(formData);
  //     setFormData({
  //       username: "",
  //       remarks: "",
  //       rating: 3,
  //     });
  //   };

  return (
    <div className="comments-form-container">
      <h4>Give a comment!</h4>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
        </div>

        {formik.errors.username ? (
          <p style={{ color: "red" }}>{formik.errors.username}</p>
        ) : null}

        <div className="form-group">
          <label htmlFor="remarks">Remarks</label>
          <textarea
            id="remarks"
            name="remarks"
            placeholder="Enter your remarks here"
            value={formik.values.remarks}
            onChange={formik.handleChange}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <input
            type="range"
            id="rating"
            name="rating"
            min={1}
            max={5}
            value={formik.values.rating}
            onChange={formik.handleChange}
          />
        </div>

        <button type="submit">Submit Comment</button>
      </form>
    </div>
  );
}
