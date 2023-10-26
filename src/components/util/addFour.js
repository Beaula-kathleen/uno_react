const addFour=(player,pileCards)=> {
    const playerCard =[...player]
    for (let card = 0; card <4; card++) {
        playerCard.push(pileCards[card]);
        pileCards = pileCards?.filter((element) => {
          return pileCards[card].index != element.index;
        });
      }
    return [playerCard,pileCards]
}

export default addFour;