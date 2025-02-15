import React from "react";
import { Trophy } from "lucide-react";

// Sample leaderboard data
const leaderboardData = [
  { name: "Alice Johnson", score: 1200 },
  { name: "Bob Smith", score: 1100 },
  { name: "Charlie Davis", score: 1000 },
  { name: "David Brown", score: 950 },
  { name: "Eva Green", score: 900 },
];

const Leaderboard = () => {
  return (
    // Full screen white background
    <div className="min-h-screen bg-white flex justify-start">
      {/* Fixed position leaderboard card on the extreme left */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 w-[300px] p-6 bg-white shadow-lg rounded-lg border border-gray-200">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-left tracking-wide">
          🏆 Leaderboard
        </h2>

        {/* Table displaying leaderboard data */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-gray-800">
            <thead className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-lg font-semibold text-white">
              <tr>
                <th className="px-6 py-4 text-left">Rank</th>
                <th className="px-6 py-4 text-left">Player</th>
                <th className="px-6 py-4 text-right">Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((player, index) => (
                <tr
                  key={index}
                  className={`transition-all duration-300 ease-in-out hover:scale-105 hover:bg-indigo-50 ${
                    index < 3
                      ? "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"
                      : "bg-white"
                  }`}
                >
                  <td className="px-6 py-4 flex items-center gap-4 text-lg font-medium">
                    {index < 3 && <Trophy className="text-yellow-500" size={24} />} #{index + 1}
                  </td>
                  <td className="px-6 py-4 text-lg font-semibold">{player.name}</td>
                  <td className="px-6 py-4 text-right text-lg font-bold text-gray-800">{player.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-left text-gray-600 mt-6 text-sm">
          Top players are highlighted with a trophy icon and vibrant gradient backgrounds!
        </p>
      </div>
    </div>
  );
};

export default Leaderboard;
