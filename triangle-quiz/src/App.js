import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  //quiz
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
    if (totalScore >= 3) {
      setDisplayMessage("You really Know triangles well!");
    } else {
      setDisplayMessage("Go and Study Triangles :/");
    }
  }

  // Hypotenuse Calculation
  const [perpendiculer, setperpendiculer] = useState(0);
  const [base, setBase] = useState(0);
  const [hypotenuse, setHypotenuse] = useState("");

  function baseHandler(event) {
    setBase(event.target.value);
  }
  function perpendicularHandler(event) {
    setperpendiculer(event.target.value);
  }

  function calculateHype() {
    let hyp = Math.sqrt(perpendiculer * perpendiculer + base * base);
    hyp = Math.ceil(hyp);
    setHypotenuse(hyp + "m");
  }

  //area calculation

  const [height, setHeight] = useState(0);
  const [base2, setBase2] = useState(0);
  const [area, setArea] = useState("");
  function base2Handler(event) {
    setBase2(event.target.value);
  }
  function heightHandler(event) {
    setHeight(event.target.value);
  }
  function calculateArea() {
    let area = 0.5 * base2 * height;
    setArea(area + "m^2");
  }

  //Triangle check from angles:

  const [angle1, setAngle1] = useState(0);
  const [angle2, setAngle2] = useState(0);
  const [angle3, setAngle3] = useState(0);
  const [angleCheckMessage, setAngleCheckMessage] = useState("");

  function angle1Handler(event) {
    setAngle1(parseInt(event.target.value));
  }
  function angle2Handler(event) {
    setAngle2(parseInt(event.target.value));
  }
  function angle3Handler(event) {
    setAngle3(parseInt(event.target.value));
  }

  function checkTriangle() {
    console.log(angle1, angle2, angle3);

    if (angle1 === 0 || angle2 === 0 || angle3 === 0) {
      setAngleCheckMessage("Please recheck the angle values");
    } else {
      let sumOfAngles = angle1 + angle2 + angle3;

      if (sumOfAngles === 180) {
        setAngleCheckMessage("It is a Triangle!");
      } else {
        setAngleCheckMessage("No, It Doesnt Form a Triangle");
      }
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
      <main className="main">
        <div className="quiz__box">
          <h2 className="main__heading">Quiz on Triangles</h2>
          <p className="main__subheading">
            For Each correct answer you will get one point
          </p>
          <div className="first__question__div  question">
            <span className="label">
              Question1 - What should be third angle of triangle when Angle1 =
              45 Degrees and Angle2 = 45 Degrees?{" "}
            </span>
            <span className="first__options options">
              <input
                onClick={firstquestionhandler}
                type="radio"
                id="html"
                name="first__question"
                value="45 degrees"
              />
              <label>45 degrees</label>
              <br />
              <input
                onClick={firstquestionhandler}
                type="radio"
                id="css"
                name="first__question"
                value="90 degrees"
              />
              <label>90 degrees</label>
              <br />
              <input
                onClick={firstquestionhandler}
                type="radio"
                id="css"
                name="first__question"
                value="60 degrees"
              />
              <label>60 degrees</label>
              <br />
            </span>
          </div>
          <div className="second__question__div question">
            <span className="label">
              Question2 - What should be third angle of triangle when Angle1 =
              45 Degrees and Angle2 = 45 Degrees?{" "}
            </span>
            <span className="second__options options">
              <input
                onClick={secondquestionhandler}
                type="radio"
                id="html"
                name="second__question"
                value="obtuse"
              />
              <label>Obtuse</label>
              <br />
              <input
                onClick={secondquestionhandler}
                type="radio"
                id="css"
                name="second__question"
                value="acute"
              />
              <label>Acute</label>
              <br />
              <input
                onClick={secondquestionhandler}
                type="radio"
                id="css"
                name="second__question"
                value="right angle"
              />
              <label>Right Angle</label>
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
              <label>One Right Angle</label>
              <br />
              <input
                type="radio"
                id="css"
                name="third__question"
                value="Two Right Angles"
                onClick={thirdquestionhandler}
              />
              <label>Two Right Angles</label>
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
              <label>14,15,26</label>
              <br />
              <input
                onClick={fourthquestionhandler}
                type="radio"
                id="css"
                name="fourth__question"
                value="12,16,20"
              />
              <label>12,16,20</label>
              <br />
            </span>
            <button onClick={checkAnswer} className="check__answer">
              Check Answers
            </button>
          </div>
        </div>

        <div className="calculate__hyp">
          <h2 className="hyp__heading">Calculate Hypotenuse</h2>
          <div className="main__hyp">
            <div className="hypo__input">
              <label htmlFor="perpendicular">
                Length of Perpendicular(in m)
              </label>
              <input
                onChange={perpendicularHandler}
                type="number"
                name="perpendicular"
                id="perpendicular"
              />
              <label htmlFor="base">Length of Perpendicular(in m)</label>
              <input
                onChange={baseHandler}
                type="number"
                name="base"
                id="base"
              />

              <button className="calc__button" onClick={calculateHype}>
                Calculate
              </button>
            </div>
            <div className="output__box">
              <h3>The lenght of Hypotenuse is:</h3>
              <div className="output">{hypotenuse}</div>
            </div>
          </div>
        </div>
        <div className="calculate__hyp">
          <h2 className="hyp__heading">Calculate Area of 🛆</h2>
          <div className="main__hyp">
            <div className="hypo__input">
              <label htmlFor="perpendicular">Length of Height (in m)</label>
              <input
                onChange={heightHandler}
                type="number"
                name="perpendicular_2"
                id="perpendicular"
              />
              <label htmlFor="base">Length of Base (in m)</label>
              <input
                onChange={base2Handler}
                type="number"
                name="base_2"
                id="base"
              />

              <button className="calc__button" onClick={calculateArea}>
                Calculate
              </button>
            </div>
            <div className="output__box">
              <h3>The Area of 🛆 is:</h3>
              <div className="output">{area}</div>
            </div>
          </div>
        </div>
        <div className="calculate__hyp">
          <h2 className="hyp__heading">Check Sum of Angles</h2>
          <div className="main__hyp">
            <div className="hypo__input">
              <label htmlFor="angle1">1st Angle (in Deg)</label>
              <input
                onChange={angle1Handler}
                type="number"
                name="angle1"
                id="angle1 "
                className="angle"
              />
              <label htmlFor="angle2">2nd Angle (in Deg)</label>
              <input
                onChange={angle2Handler}
                type="number"
                name="baangle2"
                id="angle2"
                className="angle"
              />
              <label htmlFor="angle3">3rd Angle (in Deg)</label>
              <input
                onChange={angle3Handler}
                type="number"
                name="angle3"
                id="angle3"
                className="angle"
              />

              <button className="calc__button" onClick={checkTriangle}>
                Check Result
              </button>
            </div>
            <div className="output__box">
              <h3>Result:</h3>
              <div className="output output__angle">{angleCheckMessage}</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
