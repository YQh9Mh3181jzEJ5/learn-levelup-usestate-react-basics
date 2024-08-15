import "./App.css";
import { CountUp } from "@/components";

import { Header } from "@/components";

function App() {
  return (
    <div className="flex justify-center min-h-screen bg-gray-900 text-white">
      <div className="flex flex-col w-1/2">
        <Header />
        <CountUp />
      </div>
    </div>
  );
}

export default App;
