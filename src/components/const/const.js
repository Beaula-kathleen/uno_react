import Start from "../pages/start";
import Game from "../pages/game";
import Score from "../pages/score";
export const cardColor = ["red", "green", "yellow", "blue"];
export const unoCard = [{ color: "black", value: "UNO" }];
export const specialCards = ["⇄", "⊘", "+2"];
export const wildCard = ["+4", "W"];
export const uniqueCards = ["⇄", "⊘", "+2", "+4", "W"];
export const routing = [
  { path: "/", element: <Start /> },
  { path: "game", element: <Game /> },
  { path: "score", element: <Score /> },
];
