import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Board from "../components/Boads";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [tempBoardSize, setTempBoardSize] = useState(null);
  const [boardSize, setBoardSize] = useState(null);
  const [startGame, setStartGame] = useState(false);

  function handleSubmit(e: any) {
    e.preventDefault();
    setBoardSize(tempBoardSize);
    setStartGame(true);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Tic tac toe</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          {startGame ? (
            <div className="game-board">
              <Board boardSize={boardSize} />
            </div>
          ) : (
            <p>Choose board size to start game</p>
          )}
          <label>Enter board size: </label>
          <input
            type="text"
            placeholder="Enter a number"
            id="board-size"
            onChange={(e) => setTempBoardSize(e.target.value)}
          />
          <button
            type="submit"
            className="button"
            onClick={(e) => handleSubmit(e)}
          >
            Start Game
          </button>
        </div>
        {/* <Board></Board> */}
      </main>
    </div>
  );
};

export default Home;
