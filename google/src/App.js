
import './App.css';
import {useState} from "react"
import axios from "axios"
function App() {
  function Submit(e) {
  const formEle = document.querySelector("form");
  const formDatab = new FormData(formEle);
  fetch(
    "https://script.google.com/macros/s/AKfycbwTUuBLAFjF87GZ75dwszumu5aTCbuORqYArmqnPI6bFiFMsDwN5EpmSnsuqHVZX2A/exec",
    {
      method: "POST",
      body: formDatab
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
  return (
    <div className="App">
       <h1>Recipe form</h1>
      <h2>
        If you have any Recipe. Please do submit!
      </h2>
      <div>
        <form className="form" onSubmit={(e) => Submit(e)}>
          <input placeholder="Your Name" name="Name" type="text" />
          <input placeholder="Your Ingredients" name="Ingredients" type="text" />
          <input placeholder="Your Instructions" name="Instructions"  type="text" />
          <input name="Name" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default App;


//https://script.google.com/macros/s/AKfycbwTUuBLAFjF87GZ75dwszumu5aTCbuORqYArmqnPI6bFiFMsDwN5EpmSnsuqHVZX2A/exec

