"use client";
import { useEffect, useState } from "react";

export default function Rankings() {
  const [player_rankings, setPlayerRankings] = useState<any[]>([
    {
      name: "John Smith",
      team: "Duke",
      conference: "ACC",
      rank: 1,
      rating: 99,
    },
    {
      name: "Emily Johnson",
      team: "Kansas",
      conference: "Big 12",
      rank: 2,
      rating: 98,
    },
    {
      name: "Michael Williams",
      team: "Villanova",
      conference: "Big East",
      rank: 3,
      rating: 97,
    },
    {
      name: "Sarah Davis",
      team: "Kentucky",
      conference: "SEC",
      rank: 4,
      rating: 96,
    },
    {
      name: "James Brown",
      team: "Michigan",
      conference: "B10",
      rank: 5,
      rating: 95,
    },
    {
      name: "Amanda Martinez",
      team: "UCLA",
      conference: "Pac-12",
      rank: 6,
      rating: 94,
    },
    {
      name: "Christopher Garcia",
      team: "Houston",
      conference: "AAC",
      rank: 7,
      rating: 93,
    },
    {
      name: "Jessica Rodriguez",
      team: "Dayton",
      conference: "A-10",
      rank: 8,
      rating: 92,
    },
    {
      name: "Matthew Anderson",
      team: "San Diego State",
      conference: "MWC",
      rank: 9,
      rating: 91,
    },
    {
      name: "Elizabeth Wilson",
      team: "Gonzaga",
      conference: "WCC",
      rank: 10,
      rating: 90,
    },
    {
      name: "Daniel Lee",
      team: "Western Kentucky",
      conference: "C-USA",
      rank: 11,
      rating: 89,
    },
    {
      name: "Sophia Thompson",
      team: "Loyola Chicago",
      conference: "MVC",
      rank: 12,
      rating: 88,
    },
    {
      name: "David Hernandez",
      team: "Akron",
      conference: "MAC",
      rank: 13,
      rating: 87,
    },
    {
      name: "Olivia Moore",
      team: "UC Santa Barbara",
      conference: "BWC",
      rank: 14,
      rating: 86,
    },
    {
      name: "Ryan Taylor",
      team: "Hofstra",
      conference: "CAA",
      rank: 15,
      rating: 85,
    },
    {
      name: "Madison Scott",
      team: "Furman",
      conference: "SoCon",
      rank: 16,
      rating: 84,
    },
    {
      name: "Kevin Nguyen",
      team: "South Dakota State",
      conference: "Summit",
      rank: 17,
      rating: 83,
    },
    {
      name: "Ashley King",
      team: "Wright State",
      conference: "Horizon",
      rank: 18,
      rating: 82,
    },
    {
      name: "Brandon Thomas",
      team: "Belmont",
      conference: "OVC",
      rank: 19,
      rating: 81,
    },
    {
      name: "Lauren White",
      team: "Vermont",
      conference: "America East",
      rank: 20,
      rating: 80,
    },
    {
      name: "Erica Allen",
      team: "Weber State",
      conference: "Big Sky",
      rank: 21,
      rating: 79,
    },
    {
      name: "Joshua Martinez",
      team: "Liberty",
      conference: "ASUN",
      rank: 22,
      rating: 78,
    },
    {
      name: "Taylor Brown",
      team: "Yale",
      conference: "Ivy League",
      rank: 23,
      rating: 77,
    },
    {
      name: "Jordan Thompson",
      team: "Quinnipiac",
      conference: "MAAC",
      rank: 24,
      rating: 76,
    },
    {
      name: "Rachel Lee",
      team: "Mount St. Mary's",
      conference: "NEC",
      rank: 25,
      rating: 75,
    },
    {
      name: "Nathan Wilson",
      team: "Sam Houston State",
      conference: "Southland",
      rank: 26,
      rating: 74,
    },
    {
      name: "Alexis Davis",
      team: "Texas Southern",
      conference: "SWAC",
      rank: 27,
      rating: 73,
    },
    {
      name: "Tyler Garcia",
      team: "UC Irvine",
      conference: "Big West",
      rank: 28,
      rating: 72,
    },
    {
      name: "Kayla Thomas",
      team: "Norfolk State",
      conference: "MEAC",
      rank: 29,
      rating: 71,
    },
    {
      name: "Justin Rodriguez",
      team: "Colgate",
      conference: "Patriot",
      rank: 30,
      rating: 70,
    },
    {
      name: "Samantha Smith",
      team: "Longwood",
      conference: "Big South",
      rank: 31,
      rating: 69,
    },
    {
      name: "William Johnson",
      team: "Brown",
      conference: "Ivy League",
      rank: 32,
      rating: 68,
    },
    {
      name: "Hannah Martinez",
      team: "Rider",
      conference: "MAAC",
      rank: 33,
      rating: 67,
    },
    {
      name: "Andrew Taylor",
      team: "Abilene Christian",
      conference: "Southland",
      rank: 34,
      rating: 66,
    },
    {
      name: "Brianna Wilson",
      team: "Grambling State",
      conference: "SWAC",
      rank: 35,
      rating: 65,
    },
    {
      name: "Jonathan Davis",
      team: "Cal Poly",
      conference: "Big West",
      rank: 36,
      rating: 64,
    },
    {
      name: "Madeline Thompson",
      team: "Howard",
      conference: "MEAC",
      rank: 37,
      rating: 63,
    },
    {
      name: "Tyler Brown",
      team: "Lehigh Mountain",
      conference: "Patriot",
      rank: 38,
      rating: 62,
    },
    {
      name: "Megan Wilson",
      team: "UNC Asheville",
      conference: "Big South",
      rank: 39,
      rating: 61,
    },
    {
      name: "Jacob Garcia",
      team: "Dartmouth Big",
      conference: "Ivy League",
      rank: 40,
      rating: 60,
    },
    {
      name: "Sophie Johnson",
      team: "Niagara Purple",
      conference: "MAAC",
      rank: 41,
      rating: 59,
    },
    {
      name: "Ethan Martinez",
      team: "Incarnate Word",
      conference: "Southland",
      rank: 42,
      rating: 58,
    },
    {
      name: "Isabella Thompson",
      team: "Jackson State",
      conference: "SWAC",
      rank: 43,
      rating: 57,
    },
    {
      name: "Noah Wilson",
      team: "UC Davis",
      conference: "Big West",
      rank: 44,
      rating: 56,
    },
    {
      name: "Emma Davis",
      team: "Coppin State",
      conference: "MEAC",
      rank: 45,
      rating: 55,
    },
    {
      name: "Logan Johnson",
      team: "Army Black",
      conference: "Patriot",
      rank: 46,
      rating: 54,
    },
    {
      name: "Ava Martinez",
      team: "Presbyterian",
      conference: "Big South",
      rank: 47,
      rating: 53,
    },
    {
      name: "Elijah Wilson",
      team: "Harvard",
      conference: "Ivy League",
      rank: 48,
      rating: 52,
    },
    {
      name: "Grace Johnson",
      team: "Siena",
      conference: "MAAC",
      rank: 49,
      rating: 51,
    },
    {
      name: "Gabriel Garcia",
      team: "Texas A&M Corpus Christi",
      conference: "Southland",
      rank: 50,
      rating: 50,
    },
  ]);
  const [team_rankings, setTeamRankings] = useState<any[]>([
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
    },{
      team: "SE Louisiana",
      conference: "Southland",
      rating: 99,
      o_rating: 26,
      d_rating: 55,
      rank: 26,
    },
    {
      team: "Vermont",
      conference: "AEC",
      rating: 99,
      o_rating: 39,
      d_rating: 57,
      rank: 27,
    },
    {
      team: "Illinois",
      conference: "B10",
      rating: 98,
      o_rating: 86,
      d_rating: 2,
      rank: 28,
    },
    {
      team: "Oregon",
      conference: "Pac-12",
      rating: 98,
      o_rating: 63,
      d_rating: 3,
      rank: 29,
    },
    {
      team: "Idaho State",
      conference: "Big Sky",
      rating: 98,
      o_rating: 77,
      d_rating: 89,
      rank: 30,
    },
    {
      team: "SE Louisiana",
      conference: "Southland",
      rating: 99,
      o_rating: 26,
      d_rating: 55,
      rank: 31,
    },
    {
      team: "Vermont",
      conference: "AEC",
      rating: 99,
      o_rating: 39,
      d_rating: 57,
      rank: 32,
    },
    {
      team: "Illinois",
      conference: "B10",
      rating: 98,
      o_rating: 86,
      d_rating: 2,
      rank: 33,
    },
    {
      team: "Oregon",
      conference: "Pac-12",
      rating: 98,
      o_rating: 63,
      d_rating: 3,
      rank: 34,
    },
    {
      team: "Idaho State",
      conference: "Big Sky",
      rating: 98,
      o_rating: 77,
      d_rating: 89,
      rank: 35,
    }
  ]);
  const [conference_rankings, setConferenceRankings] = useState<any[]>([
    {
      rank: 1,
      conference: "ACC",
      rating: 99,
    },
    {
      rank: 2,
      conference: "Big 12",
      rating: 98,
    },
    {
      rank: 3,
      conference: "Big East",
      rating: 97,
    },
    {
      rank: 4,
      conference: "SEC",
      rating: 96,
    },
    {
      rank: 5,
      conference: "B10",
      rating: 95,
    },
    {
      rank: 6,
      conference: "Pac-12",
      rating: 94,
    },
    {
      rank: 7,
      conference: "AAC",
      rating: 93,
    },
    {
      rank: 8,
      conference: "A-10",
      rating: 92,
    },
    {
      rank: 9,
      conference: "MWC",
      rating: 91,
    },
    {
      rank: 10,
      conference: "WCC",
      rating: 90,
    },
    {
      rank: 11,
      conference: "C-USA",
      rating: 89,
    },
    {
      rank: 12,
      conference: "MVC",
      rating: 88,
    },
    {
      rank: 13,
      conference: "MAC",
      rating: 87,
    },
    {
      rank: 14,
      conference: "BWC",
      rating: 86,
    },
    {
      rank: 15,
      conference: "CAA",
      rating: 85,
    },
    {
      rank: 16,
      conference: "SoCon",
      rating: 84,
    },
    {
      rank: 17,
      conference: "Summit",
      rating: 83,
    },
    {
      rank: 18,
      conference: "Horizon",
      rating: 82,
    },
    {
      rank: 19,
      conference: "OVC",
      rating: 81,
    },
    {
      rank: 20,
      conference: "America East",
      rating: 80,
    },
    {
      rank: 21,
      conference: "Big Sky",
      rating: 79,
    },
    {
      rank: 22,
      conference: "ASUN",
      rating: 78,
    },
    {
      rank: 23,
      conference: "Ivy League",
      rating: 77,
    },
    {
      rank: 24,
      conference: "MAAC",
      rating: 76,
    },
    {
      rank: 25,
      conference: "NEC",
      rating: 75,
    },
    {
      rank: 26,
      conference: "Southland",
      rating: 74,
    },
    {
      rank: 27,
      conference: "SWAC",
      rating: 73,
    },
    {
      rank: 28,
      conference: "Big West",
      rating: 72,
    },
    {
      rank: 29,
      conference: "MEAC",
      rating: 71,
    },
    {
      rank: 30,
      conference: "Patriot",
      rating: 70,
    },
    {
      rank: 31,
      conference: "Big South",
      rating: 69,
    },
    {
      rank: 32,
      conference: "Ivy League",
      rating: 68,
    },
  ]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://127.0.0.1:8000/rankings/players/");
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

  // console.log(rankings);

  return (
    <div className="p-8">
      <h1 className="text-center pb-4 text-2xl">Rankings</h1>
      <div className="flex justify-evenly">
        <table className="text-l border-solid border-black border-2">
          <thead className="border-b border-solid border-black border-2">
            <tr>
              <th className="">Rank</th>
              <th className="">Name</th>
              <th className="">Team</th>
              <th className="">Conference</th>
              <th className="">Rating</th>
            </tr>
          </thead>
          <tbody>
            {player_rankings.map((player, row) => (
              <tr key={row} className="h-4">
                <td className="pr-5">{player.rank}</td>
                <td className="px-5">{player.name}</td>
                <td className="px-5">{player.team}</td>
                <td className="px-5">{player.conference}</td>
                <td className="px-5">{player.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
            {team_rankings.map((team, row) => (
              <tr key={row} className="h-4">
                <td className="pr-5">{team.rank}</td>
                <td className="px-5">{team.team}</td>
                <td className="px-5">{team.conference}</td>
                <td className="px-5">{team.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="text-l border-solid border-black border-2">
          <thead className="border-b border-solid border-black border-2">
            <tr>
              <th className="">Rank</th>
              <th className="">Conference</th>
              <th className="">Rating</th>
            </tr>
          </thead>
          <tbody>
            {conference_rankings.map((conference, row) => (
              <tr key={row} className="h-4">
                <td className="pr-5">{conference.rank}</td>
                <td className="px-5">{conference.conference}</td>
                <td className="px-5">{conference.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
