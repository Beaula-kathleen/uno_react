import addTwo from "./addTwo";
import addFour from "./addFour";
function addDeckCard(selected, player, pile) {
  const pileCards = [...pile];
  if (selected.value === "+2") {
    const [upadatedPlayer, updatedPile] = addTwo(player, pileCards);
    return [upadatedPlayer, updatedPile];
  } else if (selected.value === "+4") {
    const [upadatedPlayer, updatedPile] = addFour(player, pileCards);
    return [upadatedPlayer, updatedPile];
  } else {
    const playerCard = [...player];
    return [playerCard, pileCards];
  }
}

export default addDeckCard;
