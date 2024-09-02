"use client";

import Image from 'next/image';
import { BoardGame } from '../lib/definitions';
import useFetchApi from '../lib/fetch-from-tinybird';
import { writeActivity } from '../lib/write-to-neon';
import { useEffect, useState } from 'react';

const baseUrl = process.env.NEXT_PUBLIC_TINYBIRD_BASE_URL;
const token = process.env.NEXT_PUBLIC_TINYBIRD_ADMIN_TOKEN;

interface UserProps {
  selectedUserId: number; 
}

export default function BoardGameTable({ selectedUserId }: UserProps) {
  const url = `${baseUrl}pipes/board_game_table.json?token=${token}`
  const [refresh, setRefresh] = useState(url);

  const { data: board_games, loading, error } = useFetchApi<BoardGame[]>(refresh);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRefresh(url + `&timestamp=${new Date().getTime()}`);
    }, 1000); // Refresh every 1 second

    return () => clearInterval(intervalId);
  }, [url]);
    
  return (
    <div className="w-full">
      <div className="mt-6 flow-root rounded-md bg-white border border-gray-200 shadow-lg">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md md:pt-0">
              <table className="hidden min-w-full rounded-md text-gray-900 md:table bg-tinybird-mint-green ">
                <thead className="rounded-md text-center text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Game
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6 text-left">
                      Game
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Avg Rating
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Votes
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Type
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Rate
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900 text-center">
                  {board_games?.map((board_game) => (
                    <tr key={board_game.id} className="group">
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                      <Image
                            src={board_game.image_url}
                            alt={`${board_game.name}'s profile picture`}
                            width={75}
                            height={75}
                            className="h-auto w-75"
                          />
                      </td>
                      <td className="overflow-hidden whitespace-wrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6 text-start">
                        <div className="flex items-center gap-3">
                         
                          <p>
                            <b>{board_game.name} ({board_game.year})<br /></b>
                            {board_game.description}
                          </p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {board_game.avg_rating === null ? "No ratings yet" : board_game.avg_rating ?? "N/A"}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {board_game.votes}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {board_game.type}
                      </td>
                      <td className="whitespace-nowrap bg-white px-3 py-5 text-sm">
                        <select
                          onChange={(e) => writeActivity(parseInt(e.target.value), false, board_game.id, selectedUserId)}
                          className="border border-gray-300 rounded-md p-2"
                        >
                          <option value="" disabled>Rate</option>
                          {[1, 2, 3, 4, 5].map(rating => (
                            <option key={rating} value={rating}>{rating}</option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}