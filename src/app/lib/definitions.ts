export type User = {
    id: number;
    name: string;
    age: number;
    country: string;
    favorite_type: 'Strategy' | 'Eurogames' | 'Party' | 'Cooperative' | 'Deck-building' | 'RPGs';
  };
  
  export type BoardGame = {
    id: number;
    name: string;
    image_url: string;
    year: number;
    description: string;
    type: string;
    avg_rating: string;
    votes: number;
  };

export type BoardGameActivity = {
    id: number;
    board_game_id: number;
    user_id: number;
    rating: 1 | 2 | 3 | 4 | 5;
    starred: boolean;
};

export type Dashboard = {
  top_rated: string;
  most_starred: string;
  game_lovers: number;
  total_games: number;
};
