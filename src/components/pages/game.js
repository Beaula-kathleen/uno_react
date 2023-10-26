import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import cardCreation from "../util/cardCreation";
import Cpu from "../reusable/Cpu";
import Player from "../reusable/Player";
import Deck from "../reusable/Deck";
import addDeckCard from "../util/addDeckCard";
import cpu from "../util/cpu";

function Game() {
  const [cardPile, setCardPile] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);
  const [cpuCards, setCpuCards] = useState([]);
  const [deckCard, setDeckCard] = useState([]);
  const [unoCard, setUnoCard] = useState([]);
  const [turn, setTurn] = useState(true);
  const [playPass, setPlayPass] = useState(false);
  const [optionCard, setOptionCard] = useState([]);
  const [colorDisplay, setColorDisplay] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [uno, setUno] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [endGame, setEndGame] = useState(false);
  const [seconds, setSeconds] = useState(120);
  const clickedRef = useRef(false);
  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search);
  const user = query.get("player");

  useEffect(() => {
    const [card, player, cpu, deck, uno] = cardCreation();
    setPlayerCards(player);
    setCpuCards(cpu);
    setDeckCard(deck);
    setCardPile(card);
    setUnoCard(uno);
  }, []);

  useEffect(() => {
    if (playerCards.length === 2) {
      setUno(true);
      setShowButton(true);
      setTimeout(() => {
        console.log(clickedRef, "clickedRef");
        if (!clickedRef.current) {
          const selected = { value: "+2" };
          const [updatedValue, updatedPile] = addDeckCard(
            selected,
            playerCards,
            cardPile
          );
          setPlayerCards(updatedValue);
          setCardPile(updatedPile);
        }
        // clickedRef.current = false;
        setShowButton(false);
        setUno(false);
      }, 10000);
    } else {
      setShowButton(false);
      setUno(false);
      clickedRef.current = false;
    }
  }, [playerCards]);

  useEffect(() => {
    if (endGame) {
      if (playerCards.length === 0) {
        navigate(`/score?won=${user}`);
      } else if (cpuCards.length === 0) {
        navigate(`/score?won=cpu`);
      }
    }
  }, [playerCards, cpuCards]);
  useEffect(() => {
    if (seconds > 0) {
      const intervalId = setInterval(() => {
        setSeconds(seconds - 1);
      }, 5000);

      return () => clearInterval(intervalId);
    }
  }, [seconds]);
  if (seconds === 0) {
    navigate("/score?won=Draw");
  }
  const clickHandel = () => {
    return cpu(
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
    );
  };
  if (!turn) {
    const timeoutId = setTimeout(() => {
      clickHandel();
    }, 1000);
    if (turn) {
      clearTimeout(timeoutId);
    }
  }
  const unoButton = () => {
    clickedRef.current = true;
    setShowButton(false);
    setUno(false);
    setTurn(true);
    console.log(clickedRef.current);
  };
  const wildColor = (element) => {
    setDeckCard((prev) => {
      return [{ ...prev[0], color: `${element}` }];
    });
  };
  return (
    <div className="GameArea">
      <h1>{`${Math.floor(seconds / 60)}:${seconds % 60 < 10 ? "0" : ""}${
        seconds % 60
      }`}</h1>
      <div className="cpuArea">
        <Cpu cpu={cpuCards} turn={turn} />
      </div>
      <div className="DiscardArea">
        <Deck deck={deckCard} />
        <Deck
          deck={unoCard}
          player={playerCards}
          turn={turn}
          oldDeck={deckCard}
          pile={cardPile}
          cpu={cpuCards}
          colorDisplay={colorDisplay}
          wildColor={wildColor}
          showButton={showButton}
          play={playPass}
          uno={uno}
          onPlayerCard={setPlayerCards}
          onTurn={setTurn}
          onDeckCard={setDeckCard}
          onPile={setCardPile}
          onCpuCard={setCpuCards}
          onOptionCard={setOptionCard}
          onPlayPass={setPlayPass}
          onSetColorDisplay={setColorDisplay}
          onUnoButton={unoButton}
          onSetClicked={setClicked}
        />
        {playPass && turn && !uno && (
          <Deck
            deck={optionCard}
            playPass={playPass}
            cpu={cpuCards}
            pile={cardPile}
            colorDisplay={colorDisplay}
            wildColor={wildColor}
            onPile={setCardPile}
            onDeckCard={setDeckCard}
            onPlayPass={setPlayPass}
            onTurn={setTurn}
            onUnoButton={unoButton}
            onPlayerCard={setPlayerCards}
            onOptionCard={setOptionCard}
            onCpuCard={setCpuCards}
            onSetColorDisplay={setColorDisplay}
          />
        )}
      </div>
      <div className="playerArea">
        <Player
          player={playerCards}
          playPass={playPass}
          turn={turn}
          deck={deckCard}
          pile={cardPile}
          cpu={cpuCards}
          uno={uno}
          colorDisplay={colorDisplay}
          wildColor={wildColor}
          onPlayerCard={setPlayerCards}
          onTurn={setTurn}
          onDeckCard={setDeckCard}
          onPile={setCardPile}
          onCpuCard={setCpuCards}
          onSetColorDisplay={setColorDisplay}
          onSetEndGame={setEndGame}
        />
      </div>
    </div>
  );
}

export default Game;
