function drawCard(cpu, pileCards) {
  const addCard = pileCards[Math.floor(pileCards.length * Math.random())];
  pileCards = pileCards?.filter((element) => {
    return addCard.index != element.index;
  });
  cpu.push(addCard)
  return [cpu,pileCards,addCard]
}

export default drawCard;
