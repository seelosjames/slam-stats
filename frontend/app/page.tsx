"use client";

import AuthContext from "@/context/AuthContext";
import "./globals.css";
import { useEffect, useState, useContext } from "react";


const Home = () => {
  const [rankings, setRankings] = useState<any[]>([
    {
      team: "USC",
      conference: "Pac-12",
      rating: 100,
      o_rating: 33,
      d_rating: 18,
      rank: 1,
    },
    {
      team: "Creighton",
      conference: "Big East",
      rating: 100,
      o_rating: 58,
      d_rating: 75,
      rank: 2,
    },
    {
      team: "UNC Wilmington",
      conference: "CAA",
      rating: 100,
      o_rating: 23,
      d_rating: 3,
      rank: 3,
    },
    {
      team: "Michigan State",
      conference: "B10",
      rating: 99,
      o_rating: 95,
      d_rating: 43,
      rank: 4,
    },
    {
      team: "Lafayette",
      conference: "Patriot",
      rating: 99,
      o_rating: 29,
      d_rating: 76,
      rank: 5,
    },
    {
      team: "SE Louisiana",
      conference: "Southland",
      rating: 99,
      o_rating: 26,
      d_rating: 55,
      rank: 6,
    },
    {
      team: "Vermont",
      conference: "AEC",
      rating: 99,
      o_rating: 39,
      d_rating: 57,
      rank: 7,
    },
    {
      team: "Illinois",
      conference: "B10",
      rating: 98,
      o_rating: 86,
      d_rating: 2,
      rank: 8,
    },
    {
      team: "Oregon",
      conference: "Pac-12",
      rating: 98,
      o_rating: 63,
      d_rating: 3,
      rank: 9,
    },
    {
      team: "Idaho State",
      conference: "Big Sky",
      rating: 98,
      o_rating: 77,
      d_rating: 89,
      rank: 10,
    },
    {
      team: "SE Louisiana",
      conference: "Southland",
      rating: 99,
      o_rating: 26,
      d_rating: 55,
      rank: 11,
    },
    {
      team: "Vermont",
      conference: "AEC",
      rating: 99,
      o_rating: 39,
      d_rating: 57,
      rank: 12,
    },
    {
      team: "Illinois",
      conference: "B10",
      rating: 98,
      o_rating: 86,
      d_rating: 2,
      rank: 13,
    },
    {
      team: "Oregon",
      conference: "Pac-12",
      rating: 98,
      o_rating: 63,
      d_rating: 3,
      rank: 14,
    },
    {
      team: "Idaho State",
      conference: "Big Sky",
      rating: 98,
      o_rating: 77,
      d_rating: 89,
      rank: 15,
    },
    {
      team: "SE Louisiana",
      conference: "Southland",
      rating: 99,
      o_rating: 26,
      d_rating: 55,
      rank: 16,
    },
    {
      team: "Vermont",
      conference: "AEC",
      rating: 99,
      o_rating: 39,
      d_rating: 57,
      rank: 17,
    },
    {
      team: "Illinois",
      conference: "B10",
      rating: 98,
      o_rating: 86,
      d_rating: 2,
      rank: 18,
    },
    {
      team: "Oregon",
      conference: "Pac-12",
      rating: 98,
      o_rating: 63,
      d_rating: 3,
      rank: 19,
    },
    {
      team: "Idaho State",
      conference: "Big Sky",
      rating: 98,
      o_rating: 77,
      d_rating: 89,
      rank: 20,
    },
    {
      team: "SE Louisiana",
      conference: "Southland",
      rating: 99,
      o_rating: 26,
      d_rating: 55,
      rank: 21,
    },
    {
      team: "Vermont",
      conference: "AEC",
      rating: 99,
      o_rating: 39,
      d_rating: 57,
      rank: 22,
    },
    {
      team: "Illinois",
      conference: "B10",
      rating: 98,
      o_rating: 86,
      d_rating: 2,
      rank: 23,
    },
    {
      team: "Oregon",
      conference: "Pac-12",
      rating: 98,
      o_rating: 63,
      d_rating: 3,
      rank: 24,
    },
    {
      team: "Idaho State",
      conference: "Big Sky",
      rating: 98,
      o_rating: 77,
      d_rating: 89,
      rank: 25,
    },
  ]);

  let { contextData } = useContext(AuthContext)

  console.log(contextData)
  return (
    <div className="flex h-screen p-8">
      <div className="w-3/5">
        <h1 className="text-7xl">Slam Stats</h1>
        {/* {contextData.user ? <p>{ contextData.user }</p> : <p>Not Authenticated</p>} */}
      </div>
      <div>
        <table className="text-l border-solid border-black border-2">
          <thead className="border-b border-solid border-black border-2">
            <tr>
              <th className="">Rank</th>
              <th className="">Team</th>
              <th className="">Conference</th>
              <th className="">Rating</th>
            </tr>
          </thead>
          <tbody>
            {rankings.map((team, row) => (
              <tr key={row} className="h-4">
                <td className="pr-5">{team.rank}</td>
                <td className="px-5">{team.team}</td>
                <td className="px-5">{team.conference}</td>
                <td className="px-5">{team.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
