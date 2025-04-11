import React from "react";
import telegramIcon from "../../assets/telegram.svg";

const FinalThankYouPage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white text-center p-6 shadow-lg">
      {/* Motivational Headline */}
      <h1 className="font-montserrat font-bold text-3xl md:text-4xl text-gray-800 mb-6">
        You’re One Step Closer to a Healthier Body & a Bigger Wallet!
      </h1>

      {/* Encouraging CTA */}
      <button className="bg-green-600 text-white font-bold font-montserrat text-lg py-4 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:bg-green-700 active:scale-95">
        Start Now & Earn!
      </button>

      {/* Telegram & Quick Payment Reminder */}
      <div className="mt-8 flex flex-col items-center">
        <img src={telegramIcon} alt="Telegram Logo" className="w-12 h-12 mb-4" />
        <p className="font-open-sans text-lg text-gray-700 max-w-lg">
        Join FitCoach on Telegram and access your unique invite link to start referring and earning rewards!
        </p>
      </div>
    </div>
  );
};

export default FinalThankYouPage;
