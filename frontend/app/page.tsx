'use client'

import "./globals.css"
import { useEffect, useState } from "react";

export default function Index() {
  const [rankings, setRankings] = useState<any[]>([
    {
      team: "USC",
      conference: "Pac-12 Conference",
      rating: 100,
      o_rating: 33,
      d_rating: 18,
      rank: 1,
    },
    {
      team: "Creighton",
      conference: "Big East Conference",
      rating: 100,
      o_rating: 58,
      d_rating: 75,
      rank: 2,
    },
    {
      team: "UNC Wilmington",
      conference: "Colonial Athletic Association",
      rating: 100,
      o_rating: 23,
      d_rating: 3,
      rank: 3,
    },
    {
      team: "Michigan State",
      conference: "Big Ten Conference",
      rating: 99,
      o_rating: 95,
      d_rating: 43,
      rank: 4,
    },
    {
      team: "Lafayette",
      conference: "Patriot League",
      rating: 99,
      o_rating: 29,
      d_rating: 76,
      rank: 5,
    },
    {
      team: "Southeastern Louisiana",
      conference: "Southland Conference",
      rating: 99,
      o_rating: 26,
      d_rating: 55,
      rank: 6,
    },
    {
      team: "Vermont",
      conference: "America East Conference",
      rating: 99,
      o_rating: 39,
      d_rating: 57,
      rank: 7,
    },
    {
      team: "Illinois",
      conference: "Big Ten Conference",
      rating: 98,
      o_rating: 86,
      d_rating: 2,
      rank: 8,
    },
    {
      team: "Oregon",
      conference: "Pac-12 Conference",
      rating: 98,
      o_rating: 63,
      d_rating: 3,
      rank: 9,
    },
    {
      team: "Idaho State",
      conference: "Big Sky Conference",
      rating: 98,
      o_rating: 77,
      d_rating: 89,
      rank: 10,
    },
  ]);

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await fetch("http://127.0.0.1:8000/rankings/players/25/");
    //       if (!response.ok) {
    //         throw new Error("Network response was not ok");
    //       }
    //       const jsonData = await response.json();
    //       setRankings(jsonData);
    //     } catch (error) {
    //       console.error("Error fetching data:", error);
    //     }
    //   };

    //   fetchData();
    // }, []);

    console.log(rankings);
  return (
    <div className="">
      <h1>Rankings</h1>
      <table>
        <thead>
          <tr>
            <th>Rating</th>
            <th>Name</th>
            <th>Team</th>
            <th>Conference</th>
          </tr>
        </thead>
        <tbody>
          {rankings.map((item) => (
            <tr key={item.rank}>
              <td>{item.rating}</td>
              <td>{item.name}</td>
              <td>{item.team}</td>
              <td>{item.conference}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
