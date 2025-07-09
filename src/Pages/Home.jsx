import React from "react";

const WelcomePage = ({ name = "Developer", description, onGetStarted }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-white text-gray-800 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome, {name}!</h1>
      <p className="text-lg md:text-xl max-w-xl mb-6">
        {description ||
          "This is a reusable welcome page for your React projects. Use it as a starting point or customize it as you grow."}
      </p>
      {onGetStarted && (
        <button
          onClick={onGetStarted}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition"
        >
          Get Started
        </button>
      )}
    </div>
  );
};

export default WelcomePage;
