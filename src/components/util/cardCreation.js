import {
  cardColor,
  unoCard,
  specialCards,
  wildCard,
  uniqueCards,
} from "../const/const";
const cardCreation = () => {
  let allCards = [];
  const player = [];
  const cpu = [];
  const deck = [];
  for (let card = 0; card < 2; card++) {
    for (let colors = 0; colors < cardColor.length; colors++) {
      for (let cardNum = 1; cardNum <= 9; cardNum++) {
        allCards.push({ color: cardColor[colors], value: cardNum });
      }
      for (let special = 0; special < specialCards.length; special++) {
        allCards.push({
          color: cardColor[colors],
          value: specialCards[special],
        });
      }
    }
  }
  for (let wildValues = 0; wildValues < 2; wildValues++) {
    for (let wild = 0; wild < wildCard.length; wild++) {
      allCards.push({ color: "black", value: wildCard[wild] });
    }
    for (let colors = 0; colors < cardColor.length; colors++) {
      allCards.push({ color: cardColor[colors], value: 0 });
    }
  }
  allCards = allCards.map((element, index) => {
    return { ...element, index: index };
  });
  allCards.sort(() => Math.random() - 0.5);
  for (let card = 0; card < 15; card++) {
    if (card != 14) {
      if (card % 2 === 0) {
        player.push(allCards[card]);
      } else {
        cpu.push(allCards[card]);
      }
    } else {
      // uniqueCards.includes(`${allCards[card].value}`)?cardCreation():
      // deck.push(allCards[card]);
      if (uniqueCards.includes(`${allCards[card].value}`)) {
        return cardCreation();
      } else {
        deck.push(allCards[card]);
      }
    }
    allCards = allCards.filter((element, index) => {
      return card != index;
    });
  }
  return [allCards, player, cpu, deck, unoCard];
};

export default cardCreation;
