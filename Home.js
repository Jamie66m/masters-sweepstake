
import React, { useEffect, useState } from "react";

export function Home() {
  const [totalPayments, setTotalPayments] = useState(0);
  const [entryCount, setEntryCount] = useState(0);

  useEffect(() => {
    const updateStats = () => {
      try {
        const saved = localStorage.getItem("submittedTeams");
        if (saved) {
          const teams = JSON.parse(saved);
          if (Array.isArray(teams)) {
            setEntryCount(teams.length);
            setTotalPayments(teams.length * 10);
          }
        }
      } catch (e) {
        console.error("Failed to parse submitted teams from localStorage:", e);
      }
    };

    updateStats();
    const interval = setInterval(updateStats, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Golf Masters Sweepstake</h1>
      <p className="mb-2">
        Enter the sweepstake by selecting 5 players for your team and staying within a £200 million budget. It costs £10 to enter.
      </p>
      <p className="text-lg mt-4 font-medium">
        🧑‍💼 Total Entries: <span className="text-green-700 font-bold">{entryCount}</span>
      </p>
      <p className="text-lg font-medium">
        💰 Total Collected: <span className="text-green-700 font-bold">£{totalPayments}</span>
      </p>
    </div>
  );
}
