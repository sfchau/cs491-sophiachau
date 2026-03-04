import Room from "./Room";

function House(props) {
    return (
        <div>
            <h2>House: {props.name}</h2>
            <Room name="bedroom" houseName={props.name} />
        </div>
    );
}

export default House;