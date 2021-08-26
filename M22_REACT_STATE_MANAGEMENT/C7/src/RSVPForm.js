import React, { useState } from "react";

function RSVPForm() {
  const omniFormState = {
    name: "",
    age: "",
    newMember: false,
    comment: "",
  };

  const [formData, setFormData] = useState({ ...omniFormState });
  const handleChange = ({target}) => {
      const value = target.type === 'checkbox' ? target.checked : target.value
      setFormData({
          ...formData,
          [target.name]:value
      })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData.name, formData.age, formData.newMember, formData.comment)
    setFormData({...omniFormState})
  };

  const htmlBlock = (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name{" "}
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          value={formData.name}
        ></input>{" "}
      </label>

      <label htmlFor="age">
        Age{" "}
        <select
          id="age"
          name="age"
          onChange={handleChange}
          value={formData.age}
        >
            <option value=''>Prefer not to say</option>
            <option value='0-19'>0-19</option>
            <option value='20-39'>20-39</option>
            <option value='40-59'>40-59</option>
            <option value='60+'>60+</option>
        </select>{" "}
      </label>

      <label htmlFor="member">
        New Member{" "}
        <input
          id="member"
          type="checkbox"
          name="newMember"
          onChange={handleChange}
          checked={formData.newMember}
          value='member'
        ></input>{" "}
      </label>

      <label htmlFor="comment">
        Comment{" "}
        <input
          id="comment"
          name="comment"
          type="text"
          onChange={handleChange}
          value={formData.comment}
        ></input>{" "}
      </label>

      <button type="submit">Submit</button>
    </form>
  );
  return htmlBlock;
}

export default RSVPForm;
