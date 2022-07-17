import React, { useState } from "react";

export default function Forms(props) {
  const [form, setForm] = useState({
    text: "",
  });

  const handleChange = ({ target }) => {
    const name = target.name;
    setForm((prevForm) => ({ ...prevForm, [name]: target.value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleAdd(form);
    setForm({text:""});
  };

  return (
    <div className="forms">
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">New Note</label>
        <textarea
          name="text"
          id="text"
          cols="50"
          rows="7"
          onChange={handleChange}
          value={form.text}
        ></textarea>
        <button className="btn">
          <img
            src="https://cdn-icons-png.flaticon.com/512/724/724954.png"
            alt="icons"
          />
        </button>
      </form>
    </div>
  );
}
