type Player = 'X' | 'O' | 'BOTH' | null

function Square({
    value, onClick, winner

}: {
    value: Player,
    winner: Player,
    onClick: () => void,
}) {
    if (!value) {
        return <button className="square" onClick={onClick} disabled={Boolean(winner)} />
    }
    return <button
        className={`square square${value.toLocaleLowerCase()}`}
        disabled>
        {value}
    </button>
}

export default Square