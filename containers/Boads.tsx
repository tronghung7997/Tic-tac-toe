import { useEffect, useState } from "react";
import Square from "../components/Square";
import styled from "styled-components";

type Player = "X" | "O" | "BOTH" | null;

function Board() {
    const [tempBoardSize, setTempBoardSize] = useState(null);
    const [boardSize, setBoardSize] = useState(null);
    const [startGame, setStartGame] = useState(false);

    function handleSubmit(e: any) {
        e.preventDefault();
        setBoardSize(tempBoardSize);
        setStartGame(true);
    }

    const [rows, setRows] = useState(0);
    const [squares, setSquares] = useState(Array(rows * rows).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
        Math.round(Math.random()) === 1 ? "X" : "O"
    );
    const [winner, setWinner] = useState(null);

    const createBoard = (n: number) => {
        return [...Array(n)].map((row) => Array(n).fill(null));
    };

    const Grid = styled.div`
    display: grid;
    grid-gap: 1px;
    grid-template-columns: repeat(${(props) => props.rows}, 1fr);
  `;

    function setSquaresValue(index: number) {
        const newData = squares.map((val, i) => {
            if (i === index) {
                return currentPlayer;
            }
            return val;
        });
        setSquares(newData);
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }

    function reset() {
        setSquares(Array(rows * rows).fill(null));
        setWinner(null);
        setCurrentPlayer(Math.round(Math.random()) === 1 ? "X" : "O");
    }

    function handleOption(event: any) {
        setRows(event.target.value);
    }

    function calWinner(squares: Player[]) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (
                squares[a] &&
                squares[a] === squares[b] &&
                squares[a] === squares[c]
            ) {
                return squares[a];
            }
        }
        return null;
    }

    // useEffect(() => {
    //     const w = calWinner(squares);
    //     if (w) {
    //         setWinner(w);
    //     }
    // });

    return (
        <div>
            {/* Please Select quantity of rows
            <select id="cars" onChange={handleOption}>
                <option value=""></option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            {rows && (
                <>
                    {<p>{currentPlayer} turn</p>}
                    {winner && <p>{winner} WIN</p>}
                    <Grid rows={rows}>
                        {Array(rows * rows)
                            .fill(null)
                            .map((_, i) => {
                                return (
                                    <Square
                                        winner={winner}
                                        key={i}
                                        onClick={() => setSquaresValue(i)}
                                        value={squares[i]}
                                    />
                                );
                            })}
                    </Grid>
                    <button className="reset" onClick={reset}>
                        Reset
                    </button>
                </>
            )} */}

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
        </div>
    );
}

export default Board;
