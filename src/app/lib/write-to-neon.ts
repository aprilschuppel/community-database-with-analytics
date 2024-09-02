"use server";

import { neon } from '@neondatabase/serverless';

export async function writeActivity(rating: number, starred: boolean, board_game_id: number, user_id: number) {
  const sql = neon(process.env.DATABASE_URL!);
  const id = Math.floor(Math.random() * 1000)

  await sql("INSERT INTO board_game_activity (id, board_game_id, user_id, rating, starred) VALUES ($1, $2, $3, $4, $5)", [id, board_game_id, user_id, rating, starred]);
}
