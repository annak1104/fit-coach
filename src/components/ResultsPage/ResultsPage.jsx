import React from "react";

import telegram from "../../assets/telegram.svg";

const levels = {
  "Gain muscle & strength": "Strength Builder",
  "Lose fat & get lean": "Lean & Shredded",
  "Improve endurance & overall fitness": "Endurance Master",
};

const ResultsPage = ({ answers }) => {
  if (!answers || answers.length === 0) {
    return (
      <p className="text-center text-gray-700">
        No results available. Please complete the quiz.
      </p>
    );
  }

  const userGoal = answers[0].title;

  return (
    <div className="bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Your FitCoach Plan: {userGoal} & Make Money While You Train
      </h1>

      <div className="max-w-lg w-full flex flex-col gap-6">
        {/* Workout Plan */}
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Workout Plan 💪🏻</h2>
          <p>4-week structured program with guided videos.</p>
        </div>

        {/* Nutrition Plan */}
        <div className="bg-orange-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Nutrition Plan 🥦</h2>
          <p>Tailored meal plans to fuel progress.</p>
        </div>

        {/* Progress Tracking */}
        <div className="bg-gray-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Progress Tracking 📈</h2>
          <p>Daily check-ins & expert feedback.</p>
        </div>
      </div>

      {/* CTA Button */}
      <button className="mt-8 bg-green-600 text-white font-bold text-lg py-4 px-4 rounded-full hover:bg-green-700 transition active:scale-95">
        Start Your Fitness & Earning Journey!
      </button>

      {/* Telegram Info */}
      <div className="mt-6 flex flex-col items-center">
        <img src={telegram} className="w-12 h-12 mb-2" alt="Telegram Logo" />
        <p className="text-gray-700 text-center">
          Join our Telegram community for instant updates and support!
        </p>
      </div>
    </div>
  );
};

export default ResultsPage;
