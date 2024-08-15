import { GameRules } from "./components/GameRules";
import "./App.css";
import { usePlayerStats } from "./features/playerStats/hooks/usePlayerStats";
import { ControlButtons } from "./components/ControlButton";
import { PlayerStats } from "./components/PlayerStats";

function App() {
  const { playerStats, addExp, addLevel, resetStats } = usePlayerStats();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="flex flex-col w-1/2">
        <GameRules />
        <div className="flex flex-col bg-gray-700 gap-8 p-4 rounded">
          <PlayerStats stats={playerStats} />
          <ControlButtons
            onAddExp={addExp}
            onAddLevel={addLevel}
            onReset={resetStats}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
