"use client";
import { useEffect, useState } from "react";

export default function Rankings() {
  const [rankings, setRankings] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/rankings/teams/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setRankings(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(rankings);

  return (
    <div className="">
      <h1>Rankings</h1>
      <ul>
        {rankings.map((item) => (
          <li key={item.rank}>{item.team} {item.rating}</li>
        ))}
      </ul>
    </div>
  );
}
