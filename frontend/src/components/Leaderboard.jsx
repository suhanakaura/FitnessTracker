import React from "react";
import { Trophy } from "lucide-react";

// Sample leaderboard data
const leaderboardData = [
  { name: "Alice Johnson", score: 1200 },
  { name: "Alice Johnson", score: 1200 },
  { name: "Bob Smith", score: 1100 },
  { name: "Bob Smith", score: 1100 },
  { name: "Charlie Davis", score: 1000 },
  { name: "Charlie Davis", score: 1000 },
  { name: "David Brown", score: 950 },
  { name: "David Brown", score: 950 },
  { name: "Eva Green", score: 900 },
  { name: "Eva Green", score: 900 },
  { name: "Eva Green", score: 900 },
  { name: "Eva Green", score: 900 },
  { name: "Eva Green", score: 900 },
  { name: "Eva Green", score: 900 },
  { name: "Eva Green", score: 900 },
  { name: "Eva Green", score: 900 },
  { name: "Eva Green", score: 900 },
  { name: "Eva Green", score: 900 },
  { name: "Eva Green", score: 900 },
  { name: "Eva Green", score: 900 },
  { name: "Eva Green", score: 900 },
];

const Leaderboard = () => {
  return (
    // Full screen white background
    <div className="fixed min-h-screen bg-gray-100 flex justify-start items-center px-4">
      <div className="fixed left-5 top-1/2 transform -translate-y-1/2 w-[450px] h-[100vh] p-6 bg-gradient-to-tl from-gray-800 to-black text-white shadow-2xl rounded-lg border border-gray-800">
        <h2 className="text-4xl font-extrabold text-white mb-6 text-left tracking-wide">
          🏆 Leaderboard
        </h2>

        {/* Table displaying leaderboard data */}
        <div className="overflow-y-auto max-h-[400px] no-scrollbar">
          <table className="min-w-full table-auto text-white">
            <thead className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-lg font-semibold text-white rounded-t-lg">
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
                  className={`transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-100 hover:via-indigo-200 hover:to-indigo-300 ${
                    index < 3
                      ? "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black"
                      : "bg-gray-800"
                  }`}
                >
                  <td className="px-6 py-4 flex items-center gap-4 text-lg font-medium">
                    {index < 3 && <Trophy className="text-yellow-500" size={24} />} #{index + 1}
                  </td>
                  <td className="px-6 py-4 text-lg font-semibold">{player.name}</td>
                  <td className="px-6 py-4 text-right text-lg font-bold">{player.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-left text-gray-400 mt-6 text-sm">
          Top players are highlighted with a trophy icon and vibrant gradient backgrounds!
        </p>
      </div>
    </div>
  );
};

export default Leaderboard;
