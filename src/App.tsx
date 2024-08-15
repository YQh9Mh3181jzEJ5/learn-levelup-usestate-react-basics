import React from "react";
import bgImage from "@/assets/images/pokemon_bg.jpg";
import { CountUp, Header } from "@/components";

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-900">
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-30"
        style={{ backgroundImage: `url(${bgImage})`, filter: "blur(4px)" }}
      ></div>
      <div className="relative z-10 flex justify-center min-h-screen bg-gray-900 bg-opacity-50 text-white">
        <div className="flex flex-col w-1/2">
          <Header />
          <CountUp />
        </div>
      </div>
    </div>
  );
};

export default App;
