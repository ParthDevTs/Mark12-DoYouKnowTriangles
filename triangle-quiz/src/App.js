import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [answer1, setAnswer1] = useState("");

  function firstquestionhandler(event) {
    setAnswer1(event.target.value);
  }

  const [answer2, setAnswer2] = useState("");

  function secondquestionhandler(event) {
    setAnswer2(event.target.value);
  }
  const [answer3, setAnswer3] = useState("");

  function thirdquestionhandler(event) {
    setAnswer3(event.target.value);
  }
  const [answer4, setAnswer4] = useState("");

  function fourthquestionhandler(event) {
    setAnswer4(event.target.value);
  }

  const [finalScore, setFinalScore] = useState("0");
  const [displayMessage, setDisplayMessage] = useState("");

  function checkAnswer() {
    let totalScore = 0;

    if (answer1 === "90 degrees") {
      totalScore += 1;
    }
    if (answer2 === "right angle") {
      totalScore += 1;
    }
    if (answer3 === "One Right Angle") {
      totalScore += 1;
    }
    if (answer4 === "12,16,20") {
      totalScore += 1;
    }

    setFinalScore("" + totalScore + "/4");
    if (totalScore > 3) {
      setDisplayMessage("You really Know triangles well!");
    } else {
      setDisplayMessage("Go and Study Triangles :/");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Fun with Triangles</h3>

        <div className="finalScoreDisplay">
          <div className="score__display">
            Your Score = <span className="score">{finalScore}</span>
          </div>
          <p className="displayMessage">{displayMessage}</p>
        </div>
      </header>
      <main>
        <h2 className="main__heading">Quiz on Triangles</h2>
        <p className="main__subheading">
          For Each correct answer you will get one point
        </p>
        <div className="first__question__div  question">
          <span className="label">
            Question1 - What should be third angle of triangle when Angle1 = 45
            Degrees and Angle2 = 45 Degrees?{" "}
          </span>
          <span className="first__options options">
            <input
              onClick={firstquestionhandler}
              type="radio"
              id="html"
              name="first__question"
              value="45 degrees"
            />
            <label for="html">45 degrees</label>
            <br />
            <input
              onClick={firstquestionhandler}
              type="radio"
              id="css"
              name="first__question"
              value="90 degrees"
            />
            <label for="css">90 degrees</label>
            <br />
            <input
              onClick={firstquestionhandler}
              type="radio"
              id="css"
              name="first__question"
              value="60 degrees"
            />
            <label for="css">60 degrees</label>
            <br />
          </span>
        </div>
        <div className="second__question__div question">
          <span className="label">
            Question2 - What should be third angle of triangle when Angle1 = 45
            Degrees and Angle2 = 45 Degrees?{" "}
          </span>
          <span className="second__options options">
            <input
              onClick={secondquestionhandler}
              type="radio"
              id="html"
              name="second__question"
              value="obtuse"
            />
            <label for="html">Obtuse</label>
            <br />
            <input
              onClick={secondquestionhandler}
              type="radio"
              id="css"
              name="second__question"
              value="acute"
            />
            <label for="css">Acute</label>
            <br />
            <input
              onClick={secondquestionhandler}
              type="radio"
              id="css"
              name="second__question"
              value="right angle"
            />
            <label for="css">Right Angle</label>
            <br />
          </span>
        </div>
        <div className="third__question__div question">
          <span className="label">Question3 - A triangle can have :</span>
          <span className="third__options options">
            <input
              type="radio"
              id="html"
              name="third__question"
              value="One Right Angle"
              onClick={thirdquestionhandler}
            />
            <label for="html">One Right Angle</label>
            <br />
            <input
              type="radio"
              id="css"
              name="third__question"
              value="Two Right Angles"
              onClick={thirdquestionhandler}
            />
            <label for="css">Two Right Angles</label>
            <br />
          </span>
        </div>
        <div className="fourth__question__div question">
          <span className="label">
            Question4 - Which one of them can form a right triangle?
          </span>
          <span className="fourth__options options">
            <input
              onClick={fourthquestionhandler}
              type="radio"
              id="html"
              name="fourth__question"
              value="14,15,26"
            />
            <label for="html">14,15,26</label>
            <br />
            <input
              onClick={fourthquestionhandler}
              type="radio"
              id="css"
              name="fourth__question"
              value="12,16,20"
            />
            <label for="css">12,16,20</label>
            <br />
          </span>

          <button onClick={checkAnswer} className="check__answer">
            Check Answers
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
