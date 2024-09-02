This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Data setup in Neon, Confluent, and Tinybird.

Reference files with sample data are in the /data folder

1. Create a board_game and board_game_activity table in [Neon](https://neon.tech/). board_game_activity should have fields user_id, board_game_id, rating
2. Set up a replication of board_game_activity in [Confluent](https://confluent.cloud/) following these [Neon docs instructions](https://neon.tech/docs/guides/logical-replication-kafka-confluent)
3. Create a few data sources in [Tinybird](https://tinybird.co/)
- users via csv
- copy board_games from Neon using the [postgres table function](https://www.tinybird.co/docs/ingest/postgresql)
- activity stream from Confluent using the [out of the box connector](https://www.tinybird.co/docs/ingest/confluent)
4. Create a few Tinybird Pipes
- one to join and aggregate the data sources to populate the board game table
- one to format the latest rating activity that has occured
- one to find the average rating for each game type
- whatever else you're interested in showing!
5. Publish your Pipes as API endpoints, then create charts for activity and type average

## App updates
- Make a copy of .env.example and put in your values from Neon and Tinybird
- Update the TypeRating and LatestActivity components in ui/cards.tsx based on your Tinybird charts
- Update ui/table.tsx to make sure it is populating from the board game table API

## Next steps
Things I want to do next:
- add the ability to add new games
- create more charts
- make the APIs more dynamic with parameters
- add real user auth