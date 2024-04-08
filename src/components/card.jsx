const Card = () => {
  return (
    <div className="card">
      <h1 className="card-title text-primary">This is a card title</h1>
      <p className="card-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius minima
        velit deleniti. Corporis, voluptate in. Iure praesentium at sapiente
        eaque? <a>click me!!</a>
      </p>
      {/* <button className="text-primary-hover">Hover me</button> */}
      {/* <button className="btn-outlined-primary">Hover me</button> */}
      <button className="btn-complement-primary">Hover me</button>
    </div>
  );
};

export default Card;
