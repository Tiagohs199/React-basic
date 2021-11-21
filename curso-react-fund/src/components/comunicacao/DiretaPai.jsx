import DiretaFilho from "./DiretaFilho"

export default props => {
    return(
        <div>
            <DiretaFilho texto="Filho 1" numero={21} bool={true} />
            <DiretaFilho texto="Filho 2" numero={21} bool={false} />
        </div>
    )
}