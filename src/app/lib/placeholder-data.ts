import { User, BoardGame, BoardGameActivity, Dashboard } from "./definitions";

export const users: User[] = [
    {
        id: 1,
        name: "Alice",
        age: 30,
        country: "USA",
        favorite_type: "Strategy"
    },
    {
        id: 2,
        name: "Bob",
        age: 25,
        country: "Canada",
        favorite_type: "Eurogames"
    },
    {
        id: 3,
        name: "Charlie",
        age: 35,
        country: "UK",
        favorite_type: "Party"
    }
];

export const boardGames: BoardGame[] = [
    {
        id: 1,
        name: "Catan",
        description: "A game of resource management and trading on a hexagonal board.",
        year: 1995,
        image_url: "https://upload.wikimedia.org/wikipedia/en/a/a3/Catan-2015-boxart.jpg",
        price: 40.99,
        max_players: 4,
        max_play_time: 90,
        type: "Strategy",
        avg_rating: 4.7,
        votes: 0,
        stars: 0,
        rank: 0
    },
    {
        id: 2,
        name: "Ticket to Ride",
        description: "A cross-country train adventure where players collect sets of colored train cars to claim railway routes connecting cities.",
        year: 2004,
        image_url: "https://upload.wikimedia.org/wikipedia/en/9/92/Ticket_to_Ride_Board_Game_Box_EN.jpg",
        price: 34.99,
        max_players: 5,
        max_play_time: 60,
        type: "Strategy",
        avg_rating: 4.2,
        votes: 0,
        stars: 0,
        rank: 0
    },
    {
        id: 3,
        name: "7 Wonders",
        description: "A card drafting game where players lead an ancient civilization to prosperity through three ages of development.",
        year: 2010,
        image_url: "https://upload.wikimedia.org/wikipedia/en/0/0b/7_Wonders_-_New_Edition_boxart.png",
        price: 49.99,
        max_players: 7,
        max_play_time: 30,
        type: "Strategy",
        avg_rating: 3.5,
        votes: 0,
        stars: 0,
        rank: 0
    }
];

export const boardGameActivities: BoardGameActivity[] = [
    {
        id: 1,
        board_game_id: 1,
        user_id: 1,
        rating: 5,
        starred: true
    },
    {
        id: 2,
        board_game_id: 2,
        user_id: 1,
        rating: 4,
        starred: false
    },
    {
        id: 3,
        board_game_id: 1,
        user_id: 2,
        rating: 3,
        starred: false
    }
];

export const  dashboard:   Dashboard = {
    top_rated: 'Catan',
    most_starred: 'Ticket to Ride',
    game_lovers: 239,
    total_games: 23498,
};