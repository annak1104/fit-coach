import React, { useEffect, useRef, useState } from "react";

import referral from "../../assets/referral.png";
import telegram from "../../assets/telegram.svg";
import FinalThankYouPage from "../../components/FinalThankYouPage/FinalThankYouPage";
import MLMEarningsSimulator from "../../components/MLMEarningsSimulator/MLMEarningsSimulator";
import ResultsPage from "../../components/ResultsPage/ResultsPage";

// Questions for the quiz
const questions = [
  {
    question: "What’s your main fitness goal?",
    options: [
      "Gain muscle & strength",
      "Lose fat & get lean",
      "Improve endurance & overall fitness",
    ],
  },
  {
    question: "How often do you exercise?",
    options: ["Never / Rarely", "1-2 times per week", "3+ times per week"],
  },
  {
    question:
      "Would you be interested in earning money by helping others reach their fitness goals?",
    options: [
      "Yes, I’d love to inspire and earn!",
      "Maybe, if it’s easy to do.",
      "No, I’m just here to focus on my own progress.",
    ],
  },
  {
    question: "Do you often share fitness tips or progress with friends?",
    options: [
      "Yes, I post my progress online!",
      "Occasionally, I talk about fitness with friends.",
      "Not really, I keep it personal.",
    ],
  },
  {
    question:
      "How much time can you realistically commit to workouts & sharing your journey?",
    options: ["2-3 hours per week", "4-5 hours per week", "6+ hours per week"],
  },
];

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const quizRef = useRef(null);
  const resultsRef = useRef(null); // Reference for the results page

  const startQuiz = () => {
    setQuizStarted(true);
    setTimeout(() => {
      quizRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleAnswer = (answer) => {
    // Save the answer and move to the next question
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz is completed, show results page
      setQuizCompleted(true);
    }
  };

  // Scroll to the top of the results page when the quiz is completed
  useEffect(() => {
    if (quizCompleted) {
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [quizCompleted]);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div>
      {/* Show results, MLM earnings simulator, and thank you page after quiz completion */}
      {quizCompleted ? (
        <div ref={resultsRef}>
          {" "}
          {/* Attach ref to the results container */}
          <ResultsPage answers={answers} />
          <MLMEarningsSimulator />
          <FinalThankYouPage />
        </div>
      ) : (
        <>
          {/* Hero Section */}
          {!quizStarted && (
            <section className="relative h-screen bg-cover bg-center bg-[url('./assets/pic3.png')]">
              <div className="relative flex flex-col items-center justify-center h-full text-white px-6">
                <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-gray-800 mb-6 text-center">
                  Transform Your Body & Your Wallet: Get Fit, Inspire Others,
                  and Earn!
                </h1>
                <p className="font-open-sans text-lg mb-8 text-center">
                  Take this quick quiz to find the perfect workout & learn how
                  you can make money by sharing your journey.
                </p>
                <button
                  onClick={startQuiz}
                  className="bg-[#43A047] text-white font-montserrat text-lg py-4 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:bg-green-700 active:scale-95"
                >
                  Start the Quiz!
                </button>
              </div>
            </section>
          )}

          {/* MLM Info Section */}
          <section className="bg-[#F5F5F5] p-6">
            <div className="max-w-screen-md mx-auto text-center">
              <h2 className="font-montserrat text-3xl font-bold text-[#43A047] mb-6">
                Earn While You Train
              </h2>
              <p className="font-roboto text-gray-700 text-lg mb-6">
                Refer friends & earn commissions as they achieve their fitness
                goals with you!
              </p>
              {/* Add referral network illustration here */}
              <div className="flex justify-center">
                <img src={referral} alt="Referral Network" className="w-1/2" />
              </div>
            </div>
          </section>

          {/* Telegram Info Section */}
          <section className="bg-white p-6">
            <div className="max-w-screen-md mx-auto text-center">
              <img
                src={telegram}
                className="w-12 h-12 m-auto"
                alt="Telegram Logo"
              />
              <h2 className="font-montserrat text-3xl font-bold text-gray-800 mb-4">
                You’ll need Telegram
              </h2>
              <p className="font-roboto text-gray-700 text-lg mb-6">
                Get instant workout updates, nutrition guides, and start earning
                through referrals!
              </p>
              <button className="bg-[#FB8C00] text-white font-montserrat text-lg py-4 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:bg-orange-600 active:scale-95">
                Get Telegram
              </button>
            </div>
          </section>

          {/* Quiz Section */}
          {quizStarted && (
            <div
              ref={quizRef}
              className="transition-all ease-in-out duration-700 mt-[-10px] pb-10"
            >
              <div className="relative h-screen flex flex-col items-center justify-center bg-white px-6">
                {/* Progress Bar */}
                <div className="w-full bg-gray-300 h-2 mb-8">
                  <div
                    className="bg-orange-500 h-2 transition-all duration-500 ease-in-out"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>

                {/* Question */}
                <div className="text-center">
                  <h2 className="font-montserrat text-2xl font-bold text-gray-800 mb-6">
                    {questions[currentQuestion].question}
                  </h2>

                  {/* Options */}
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option)}
                      className="bg-green-600 w-full text-white font-montserrat text-lg py-3 px-6 rounded-full mb-4 transition duration-300 ease-in-out hover:bg-orange-500"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default QuizSection;
