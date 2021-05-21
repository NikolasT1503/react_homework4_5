function Scooter(props) {
  const classes = ["card"];
  if (props.scooter.marked) {
    classes.push("marked");
  }
  return (
    <div className={classes.join(" ")} onClick={props.onMarked}>
      <div className="card-img">
        <img src={props.scooter.img} alt={props.scooter.name} />
      </div>
      <div>
        <h3>{props.scooter.name}</h3>
      </div>
      <div>
        <p>Заряд: {props.scooter.battery} руб</p>
        <p>Стоимость в час: {props.scooter.costHour}</p>
      </div>
    </div>
  );
}

export default Scooter;
