import "./App.css";
import { ControlButtons, PlayerStats, GameRules } from "@/components";
import { usePlayerStats } from "@/features/playerStats/hooks";

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
            playerStats={playerStats}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
