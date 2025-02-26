import { AnimatePresence, motion } from "framer-motion";

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
      { title: "Build muscles", description: "Get strong & fit" },
      { title: "Lose weight", description: "Get rid of fat & become lean" },
      { title: "Keep Fit", description: "Improve endurance & overall fitness" },
    ],
  },
  {
    question: "How often do you exercise?",
    options: [
      {
        title: "Rarely",
        description: "I hardly ever find the time or motivation to exercise",
      },
      {
        title: "Occasionally",
        description: "I work out once in a while but not on a strict schedule",
      },
      {
        title: "Regularly",
        description:
          "I consistently follow a workout routine throughout the week",
      },
    ],
  },
  {
    question:
      "Would you be interested in earning money by helping others reach their fitness goals?",
    options: [
      { title: "Yes", description: "I’d love to inspire and earn!" },
      { title: "Maybe", description: "If it’s easy to do so" },
      { title: "No", description: "I’m just here to focus on my own progress" },
    ],
  },
  {
    question: "Do you often share fitness tips or progress with friends?",
    options: [
      { title: "Yes", description: "I post my progress online!" },
      {
        title: "Occasionally",
        description: "I talk about fitness with friends.",
      },
      { title: "Not really", description: "I keep it personal." },
    ],
  },
  {
    question:
      "How much time can you realistically commit to workouts & sharing your journey?",
    options: [
      {
        title: "2-3 hours per week",
        description:
          "I can set aside some time each week for workouts and updates",
      },
      {
        title: "4-5 hours per week",
        description:
          "I’m ready to devote more time to training and progress tracking",
      },
      {
        title: "6+ hours per week",
        description: "I’m all in on rigorous workouts and detailed tracking ",
      },
    ],
  },
];

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const quizRef = useRef(null);
  const resultsRef = useRef(null);

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
            <section className="relative h-screen bg-cover bg-center bg-[url('./assets/fitnes.jpg')]">
              <div className="absolute inset-0 backdrop-blur-sm"></div>
              <div className="relative flex flex-col items-center justify-center h-full text-white px-6">
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="font-montserrat font-bold text-4xl md:text-5xl mb-6 text-center"
                >
                  Transform Your Body & Your Wallet: Get Fit, Inspire Others,
                  and Earn!
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="font-open-sans text-lg mb-8 text-center"
                >
                  Take this quick quiz to find the perfect workout & learn how
                  you can make money by sharing your journey.
                </motion.p>
                <motion.button
                  onClick={startQuiz}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#43A047] text-white font-montserrat text-lg font-bold py-4 px-8 rounded-full transition-all duration-300 ease-in-out"
                >
                  Start the Quiz!
                </motion.button>
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
              <button className="bg-[#FB8C00] text-white font-montserrat font-bold text-lg py-4 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:bg-orange-600 active:scale-95">
                Get Telegram
              </button>
            </div>
          </section>

          {/* Quiz Section */}
          {quizStarted && (
            <div ref={quizRef} className="mt-9 h-screen pb-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative flex flex-col items-center justify-center bg-white px-6"
              >
                <p className="text-lg font-semibold text-gray-700 mt-9 mb-2">
                  Step {currentQuestion + 1} of {questions.length}
                </p>
                <div className="w-full bg-gray-300 h-2 mb-8 mt-8">
                  <motion.div
                    initial={{
                      width: `${(currentQuestion / questions.length) * 100}%`,
                    }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                    className="bg-orange-500 h-2"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                  {questions[currentQuestion].question}
                </h2>

                <AnimatePresence mode="sync">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswer(option)}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="w-full flex flex-col text-left bg-white text-gray-800 font-bold p-4 rounded-lg mb-4 shadow-md transition-all hover:border-green-500 hover:shadow-lg"
                    >
                      <span className="text-lg font-bold">{option.title}</span>
                      <span className="text-sm text-gray-400">
                        {option.description}
                      </span>
                    </motion.button>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default QuizSection;
