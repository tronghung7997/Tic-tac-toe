import styled from 'styled-components'

type Player = 'X' | 'O' | 'BOTH' | null

interface SquareValue {
    squareValue: String
    onClick: () => void
}

const SquareBtn = styled.button<SquareValue>`
    width: 100px;
    height: 100px;
    font-size: 5rem;
    color: rgb(129, 129, 129);
    border: solid 1px black;
    background-color: ${(props) => {
        if(!props.squareValue)  return;
        if(props.squareValue === "X")  return "crimson";
        if(props.squareValue === "O")  return "greenyellow";
    }};
`

function Square({
    value, onClick, winner

}: {
    value: Player,
    winner: Player,
    onClick: () => void,
}) {
    if (!value) {
        return <SquareBtn onClick={onClick} disabled={Boolean(winner)} />
    }
    return <SquareBtn
        squareValue = {value}
        disabled>
        {value}
    </SquareBtn>
}

export default Square