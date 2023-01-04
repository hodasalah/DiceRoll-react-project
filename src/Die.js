export default function Die(props) {
  return (
    <div className={`dice ${props.isRolling ? "animate" : " "}`}>
      <i className={`fas fa-dice-${props.face}`}></i>
    </div>
  );
}
