// TODO - update to use data from Tinybird instead of placeholder
"use client"

import { Table, BarList } from '@tinybirdco/charts'

import {
  TrophyIcon,
  UserGroupIcon,
  StarIcon,
  PuzzlePieceIcon
} from '@heroicons/react/24/outline';
import { dashboard } from '../lib/placeholder-data';

const iconMap = {
  1: TrophyIcon,
  2: StarIcon,
  3: UserGroupIcon,
  4: PuzzlePieceIcon,
};

const baseUrl = process.env.NEXT_PUBLIC_TINYBIRD_BASE_URL;
const token = process.env.NEXT_PUBLIC_TINYBIRD_ADMIN_TOKEN;

export function Ratings() {

  return (
    <div className="rounded-lg bg-tinybird-mint-green p-2 shadow-lg">
      <TypeRatings />
    </div>
  );
};

export function Activity() {

  return (
    <div className="rounded-lg bg-tinybird-mint-green p-2 shadow-lg">
      <LatestActivity />
    </div>
  );
};


export function TypeRatings() {
\
  return (
    <BarList
      endpoint='ENDPOINT'
      token='TOKEN'
      index="type"
      categories={['avg_rating']}
      colorPalette={['#27F795', '#008060', '#0EB1B9', '#9263AF', '#5A6FC0', '#86BFDB', '#FFC145', '#FF6B6C', '#DC82C8', '#FFC0F1']}
      title="Type Ratings"
      height="500px"
       padding='6px'
    />
  )
}

export function LatestActivity() {
  return (
    
    <Table
      endpoint='ENDPOINT'
      token='TOKEN'
      categories={['activity']}
      height="500px"
       width="200%"
       padding='6px'
    />
  )
}

export function CardWithTitle({
  title,
  value,
  order,
}: {
  title: string;
  value: number | string;
  order: 1 | 2 | 3 | 4;
}) {
  const Icon = iconMap[order as keyof typeof iconMap];

  return (
    <div className="rounded-lg bg-tinybird-mint-green p-2 shadow-lg">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-tinybird-space-cadet" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className='truncate rounded-xl bg-tinybird-gray-background px-4 py-8 text-center text-2xl'
      >
        {value}
      </p>
    </div>
  );
};

export function Card() {

  return (
    <div className="rounded-lg bg-tinybird-mint-green p-2 shadow-lg">
      <p
        className='truncate rounded-xl bg-tinybird-gray-background px-4 py-8 text-center text-2xl'
      >
      </p>
    </div>
  );
};

export default function DashboardMetrics() {
  const {
    top_rated,
    most_starred,
    game_lovers,
    total_games,
  } = dashboard;

  return (
    <>
      <CardWithTitle title="Top Rated" value={top_rated} order={1} />
      <CardWithTitle title="Most Starred" value={most_starred} order={2} />
      <CardWithTitle title="Game Lovers" value={game_lovers} order={3} />
      <CardWithTitle title="Total Games" value={total_games} order={4} />
    </>
  );
}
