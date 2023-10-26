// import addDeckCard from "./addDeckCard";
// import { cardColor, uniqueCards } from "../const/const";
// import drawCard from "./drawCard";
// function CpuTurn(props) {
//   const selectedValue = props.cpu.find((element) => {
//     if (
//       element.value === props?.deck[0].value ||
//       element.color === props?.deck[0].color ||
//       element.color === "black"
//     ) {
//       return element;
//     }
//   });
//   if (!selectedValue) {
//     const cpuCards = [...props?.cpu];
//     const pileCards = [...props?.pile];
//     const [updatedValue, updatedPile] = drawCard(cpuCards, pileCards);
//     props?.onCpuCard(updatedValue);
//     props?.onPile(updatedPile);
//     props?.onTurn(true);
//   } else {
//     if (
//       selectedValue.value === "+2" ||
//       selectedValue.value === "+4" ||
//       selectedValue.value === "W"
//     ) {
//       if (selectedValue.value === "+4" || selectedValue.value === "W") {
//         const addCard = cardColor[Math.floor(cardColor.length * Math.random())];
//         props?.onDeckCard((prev) => {
//           console.log([{ ...prev, color: `${addCard}` , value: prev[0].value }]);
//           return [{ ...prev, color: `${addCard}`, value: prev[0].value  }];
//         });
//       } else {
//         props?.onDeckCard([selectedValue]);
//       }
//       const [updatedValue, updatedPile] = addDeckCard(
//         selectedValue,
//         props?.player,
//         props?.pile
//       );
//       const updatedCpu = props.cpu.filter((element) => {
//         console.log(selectedValue, "wildSelect");
//         return element.index != selectedValue.index;
//       });
//       props?.onCpuCard(updatedCpu);
//       props?.onPlayerCard(updatedValue);
//       props?.onPile(updatedPile);
//     } else {
//       const updatedValue = props.cpu.filter((element) => {
//         return element.index != selectedValue.index;
//       });
//       props?.onCpuCard(updatedValue);
//       props?.onDeckCard([selectedValue]);
//     }
//     if (uniqueCards.includes(selectedValue.value)) {
//       props?.onTurn(false);
//     } else {
//       props?.onTurn(true);
//     }
//   }
// }

// export default CpuTurn;


