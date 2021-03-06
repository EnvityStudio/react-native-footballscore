import { combineReducers } from "redux";
import competition from "./competition";
import fixtures from "./fixture";
import news from "./news";
import leagueTable from "./leagueTable";
import auth from "./login";

export default combineReducers({
  competition,
  fixtures,
  news,
  leagueTable,
  auth
});
