import React, { useState, useEffect } from "react";
import useToken from "@galvanize-inc/jwtdown-for-react";

function Game() {
  const [gameData, setGameData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [showDropdown, setShowDropdown] = useState(true);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [yoloCount, setYoloCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasFetchedData, setHasFetchedData] = useState(false);
  const { token, fetchWithCookie } = useToken();

  const fetchGameData = async () => {
    try {
      let apiUrl = `${process.env.REACT_APP_API_HOST}/games`;
      if (selectedLanguage) {
        apiUrl += `?language=${selectedLanguage}`;
      }

      setIsLoading(true);

      const response = await fetch(apiUrl, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        const filteredData = data.filter((item) => {
          return !selectedLanguage || item.language === selectedLanguage;
        });
        setGameData(filteredData);
        setHasFetchedData(true);
      }
    } catch (error) {
      console.error("Error fetching game data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const shuffleAnswers = (question) => {
    const options = [question.answer, question.wrong_answer, "YOLO"];
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    question.options = options;
  };

  const getRandomQuestion = () => {
    if (gameData.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * gameData.length);
    const question = { ...gameData[randomIndex] };
    shuffleAnswers(question);
    return question;
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const submitAnswer = () => {
    if (!selectedAnswer) {
      return;
    }

    if (selectedAnswer === currentQuestion.answer) {
      setCorrectAnswers(correctAnswers + 1);
    }

    if (selectedAnswer === "YOLO") {
      setYoloCount(yoloCount + 1);
    }

    setSelectedAnswer(null);
    setCurrentQuestion(getRandomQuestion());
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
    setShowDropdown(false);
  };

  useEffect(() => {
    if (selectedLanguage !== "" && !hasFetchedData) {
      fetchGameData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, fetchWithCookie, selectedLanguage, hasFetchedData]);

  useEffect(() => {
    if (gameData.length > 0 && !currentQuestion) {
      setCurrentQuestion(getRandomQuestion());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameData]);

  return (
    <div className="game">
      <div className="counter color-green font-size-20">
        Correct Answers: {correctAnswers}
      </div>
      <div className="yolo-counter color-green font-size-20">
        YOLOs: {yoloCount}
      </div>
      <div className="filters button-spacing">
        {showDropdown ? (
          <select
            onChange={handleLanguageChange}
            value={selectedLanguage}
            className="btn btn-warning dropdown-toggle"
          >
            <option value="">Language</option>
            <option value="Python">Python</option>
            <option value="JavaScript">JavaScript</option>
          </select>
        ) : null}
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : currentQuestion ? (
        <div className="question-section title-spacing">
          <div className="question-text button-spacing font-size question-styling">
            {currentQuestion.question}
          </div>
          <div className="answer-options question-spacing font-size color-light-green">
            {currentQuestion.options.map((option) => (
              <div key={option}>
                <label className="question-spacing">
                  <input
                    type="radio"
                    name="answer"
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={() => handleAnswerSelect(option)}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>

          <div className="button-spacing">
            <button onClick={submitAnswer} className="btn btn-warning">
              Submit Answer
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Game;
