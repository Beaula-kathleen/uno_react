import addDeckCard from "../util/addDeckCard";
import { uniqueCards } from "../const/const";
const Player = (props) => {
  return (
    <>
      <div className="userArea">
        {props.turn && (
          <span
            style={{
              backgroundColor: "lavender",
              fontSize: "xx-large",
              marginRight: "15px",
            }}
          >
            👉
          </span>
        )}
        {props.player.map((product, index) => {
          let cursor = "auto";
          if (
            product.value === props.deck[0].value ||
            product.color === props.deck[0].color ||
            product.color === "black"
          ) {
            cursor = "pointer";
          }
          return (
            <div
              className="cards"
              key={index}
              id={index}
              onClick={() => {
                if (props?.turn && !props.playPass && !props.uno) {
                  if (
                    props.player[index].value === props.deck[0].value ||
                    props.player[index].color === props.deck[0].color ||
                    props.player[index].color === "black"
                  ) {
                    if (uniqueCards.includes(props.player[index].value)) {
                      if (
                        props.player[index].value === "+4" ||
                        props.player[index].value === "W"
                      ) {
                        props?.onSetColorDisplay(true);
                      }
                      const [replacedValue, updatedPile] = addDeckCard(
                        props.player[index],
                        props.cpu,
                        props.pile
                      );
                      props?.onPile(updatedPile);
                      props?.onCpuCard(replacedValue);
                      props?.onTurn(true);
                    } else {
                      props?.onTurn(false);
                    }
                    const updatedValue = props.player.filter((element) => {
                      return element.index != props.player[index].index;
                    });
                    props?.onPlayerCard(updatedValue);
                    props?.onDeckCard([props.player[index]]);
                  }
                }
                props?.onSetEndGame(true);
              }}
              style={{
                backgroundColor: `${product.color}`,
                cursor: `${cursor}`,
              }}
            >
              {product.value}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Player;
