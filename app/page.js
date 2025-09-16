"use client";

import { useState } from "react";

export default function Page() {
  const [routine, setRoutine] = useState([]);
  const [intervals, setIntervals] = useState(10);


  const transitionMatrix = {
    "Slow Jog": { "Slow Jog": 0.1, "Tempo": 0.5, "Sprint": 0.3, "Rest": 0.1 },
    "Tempo": { "Slow Jog": 0.4, "Tempo": 0.2, "Sprint": 0.1, "Rest": 0.3 },
    "Sprint": { "Slow Jog": 0.4, "Tempo": 0.1, "Sprint": 0.1, "Rest": 0.4 },
    "Rest": { "Slow Jog": 0.3, "Tempo": 0.3, "Sprint": 0.3, "Rest": 0.1 },
  };

  const runningState = Object.keys(transitionMatrix);

  function getNextRoutine(currentRun) {
    const probabilitiesDict = transitionMatrix[currentRun];
    const rand = Math.random(); //random number generated between 0 and 1
    let cumulative = 0;
    for (const state of runningState) { //iterate through probabilities until we pass random number generated
      cumulative += probabilitiesDict[state];
      if (rand <= cumulative){
        return state;
      }
    }
  }

  function generateRoutine(routineLength=10) {    
    const result = [];
    let current = "Slow Jog";
    for (let i = 0; i < routineLength; i++) {
      result.push(current);
      current = getNextRoutine(current);
    }
    setRoutine(result);
  }

  return (
    <main className="flex flex-col items-center min-h-screen p-6 bg-blue-100">
      <h1 className="text-3xl font-bold mb-6">Markov Fartlek Generator</h1>
      <label className="mb-4">
        Number of Intervals:{" "}
        <input
          type="number"
          value={intervals}
          onChange={(e) => setIntervals(Number(e.target.value))}
          className="border rounded px-2 py-1 w-16 text-center"
          min={1}
          max={50}
        />
      </label>
      <button
        onClick={() => generateRoutine(intervals)}
        className="px-4 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition cursor-pointer"
      >
        Generate Workout
      </button>

      {routine.length > 0 && (
        <div className="grid grid-cols-5 gap-6 w-full max-w-4xl mt-10">
          {routine.map((runningState, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center text-center rounded-2xl shadow-lg font-bold text-lg p-6 min-h-[100px]
                ${
                  runningState === "Slow Jog"
                    ? "bg-green-300"
                    : runningState === "Tempo"
                    ? "bg-yellow-300"
                    : runningState === "Sprint"
                    ? "bg-red-300"
                    : "bg-blue-300"
                }`}
            >
              <span className="text-2xl">{i + 1}</span>
              <span>{runningState}</span>
            </div>
          ))}
        </div>
      )}

    </main>
  );
}
