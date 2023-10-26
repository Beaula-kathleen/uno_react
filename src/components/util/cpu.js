import addDeckCard from "./addDeckCard";
import { cardColor, uniqueCards } from "../const/const";
import drawCard from "./drawCard";
const cpu = (
  playerCards,
  turn,
  uno,
  deckCard,
  cardPile,
  cpuCards,
  setPlayerCards,
  setTurn,
  setDeckCard,
  setCardPile,
  setCpuCards,
  wildColor
) => {
  if (!turn && !uno) {
    const selectedValue = cpuCards.find((element) => {
      if (
        element.value === deckCard[0].value ||
        element.color === deckCard[0].color ||
        element.color === "black"
      ) {
        return element;
      }
    });
    if (!selectedValue) {
      const cpu = [...cpuCards];
      const pileCards = [...cardPile];
      const [updatedValue, updatedPile] = drawCard(cpu, pileCards);
      setCpuCards(updatedValue);
      setCardPile(updatedPile);
      setTurn(true);
    } else {
      if (
        selectedValue.value === "+2" ||
        selectedValue.value === "+4" ||
        selectedValue.value === "W"
      ) {
        if (selectedValue.value === "+4" || selectedValue.value === "W") {
          const addCard =
            cardColor[Math.floor(cardColor.length * Math.random())];
          setDeckCard([selectedValue]);
          wildColor(addCard);
        } else {
          setDeckCard([selectedValue]);
        }
        const [updatedValue, updatedPile] = addDeckCard(
          selectedValue,
          playerCards,
          cardPile
        );
        const updatedCpu = cpuCards.filter((element) => {
          return element.index != selectedValue.index;
        });
        setCpuCards(updatedCpu);
        setPlayerCards(updatedValue);
        setCardPile(updatedPile);
      } else {
        const updatedValue = cpuCards.filter((element) => {
          return element.index != selectedValue.index;
        });
        setCpuCards(updatedValue);
        setDeckCard([selectedValue]);
      }
      if (uniqueCards.includes(selectedValue.value)) {
        setTurn(false);
      } else {
        setTurn(true);
      }
    }
  }
};

export default cpu;
