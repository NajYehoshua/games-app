import { API_KEY, RAWG_URL } from "../utils/config";
import httpRequest from "../utils/httpRequest";
import state from "./model";
import gameCards from "./views/GameCards";

// ! load game controller function
export const loadGameController = async () => {
  // ! request data from API
  state.games = await httpRequest(`${RAWG_URL}/games?key=${API_KEY}`);

  // ! generate new markup with gamecards
  const gamesArr = state.games.map((game) => {
    return gameCards.generateMarkup(game);
  });

  // ! render the games into the DOM
  gameCards.render(gamesArr.join());
};
