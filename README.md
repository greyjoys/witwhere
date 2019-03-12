# witwhere

## Front page

Landing page where users can login and register and oath.

if not authenticated go to landing page.

if authenticated, go to sessions page, where they can start a session and join a session.

to handle start session, the user can select how many players in the game. must be greater than 3

join session -> the player joins the particular session. and once the number of players === target players, game will start.

once session starts: randomly pick 2 player (people that provide input).

display prompt

users will both submit input

game will display the submissions.

everyone but the users will vote

tally score, increment the winner

repeat

when score === max score, then game over.

take back to sessions page

once all players have submitted a card.

---

Connection:
http connection to start... and when authenticated, move to session route and initiate websocket.
