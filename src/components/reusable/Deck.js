import { cardColor } from "../const/const";
import drawCard from "../util/drawCard";
import { uniqueCards } from "../const/const";
import addDeckCard from "../util/addDeckCard";
function Deck(props) {
  const drawPlayerCard = (updatedValue, updatedPile) => {
    props?.onPlayerCard(updatedValue);
    props?.onTurn(false);
  };
  return (
    <>
      <div className="deckArea">
        {props.deck.map((product, index) => {
          let cursor = "auto";
          if (!props.turn && product.value === "UNO") {
            cursor = "pointer";
          }
          return (
            <div
              className="cards"
              key={index}
              id={index}
              style={{
                backgroundColor: `${product.color}`,
                cursor: `${cursor}`,
              }}
              onClick={() => {
                props?.onTurn(false);
                if (!props.play && props.turn && !props.uno) {
                  const playerCards = [...props?.player];
                  const pileCards = [...props?.pile];
                  const [updatedValue, updatedPile, addCard] = drawCard(
                    playerCards,
                    pileCards
                  );
                  props?.onPile(updatedPile);
                  if (
                    addCard.value === props.oldDeck[0].value ||
                    addCard.color === props.oldDeck[0].color ||
                    addCard.color === "black"
                  ) {
                    props?.onOptionCard([addCard]);
                    props.onPlayPass(true);
                    props?.onTurn(true);
                  } else {
                    drawPlayerCard(updatedValue, updatedPile);
                  }
                }
              }}
            >
              {product.value}
            </div>
          );
        })}
        {props.playPass && (
          <>
            <button
              onClick={() => {
                props?.onPlayPass(false);
                const newCard = [...props?.deck];
                props?.onDeckCard(newCard);
                if (uniqueCards.includes(newCard[0].value)) {
                  if (newCard[0].value === "+4" || newCard[0].value === "W") {
                    props?.onSetColorDisplay(true);
                  }
                  const [updatedValue, updatedPile] = addDeckCard(
                    newCard[0],
                    props?.cpu,
                    props?.pile
                  );
                  console.log(
                    updatedValue,
                    updatedPile,
                    "updatedValue, updatedPile"
                  );
                  props?.onCpuCard(updatedValue);
                  props?.onPile(updatedPile);
                  props.onTurn(true);
                } else {
                  props.onTurn(false);
                }
              }}
            >
              Play
            </button>
            <button
              onClick={() => {
                const newCard = [...props?.deck];
                props?.onPlayPass(false);
                props.onTurn(false);
                props?.onPlayerCard((prev) => {
                  return [...prev, ...newCard];
                });
              }}
            >
              Pass
            </button>
          </>
        )}
        {props.colorDisplay &&
          cardColor.map((element) => {
            return (
              <button
                key={element}
                style={{
                  backgroundColor: element,
                  height: "15px",
                  width: "50px",
                }}
                onClick={() => {
                  props?.wildColor(element);
                  props?.onSetColorDisplay(false);
                }}
              ></button>
            );
          })}
        {props.showButton && (
          <button
            onClick={() => {
              props?.onUnoButton();
            }}
          >
            UNO!
          </button>
        )}
      </div>
    </>
  );
}

export default Deck;
