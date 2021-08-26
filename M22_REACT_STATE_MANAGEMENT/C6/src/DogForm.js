import React, { useState } from "react";

function DogForm() {
  const [name, setName] = useState('')
  const [breed, setBreed] = useState('')
  const [age, setAge] = useState('')
  const handleNameChange = (event) => {setName(event.target.value)}
  const handleBreedChange = (event) => {setBreed(event.target.value)}
  const handleAgeChange = (event) => {setAge(event.target.value)}
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(name, breed, age)
    setName('')
    setBreed('')
    setAge('')
  }
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="name">
        Name
        <input
          id="name"
          type="text"
          onChange={handleNameChange}
          value={name}
        ></input>
      </label>
      <label htmlFor="breed" type="text">
        Breed{" "}
        <input
          id="breed"
          type="text"
          onChange={handleBreedChange}
          value={breed}
        ></input>
      </label>
      <label htmlFor="age">
        Age
        <input
          id="age"
          type="text"
          onChange={handleAgeChange}
          value={age}
        ></input>
      </label>
      <button type='submit'>Submit</button>
    </form>
  );
}

export default DogForm;
