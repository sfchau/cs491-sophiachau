function Room(props) {
  return (
    <div>
      <h3>Room: {props.name}</h3>
      <p>This room is inside the house named: {props.houseName}</p>
    </div>
  );
}

export default Room;