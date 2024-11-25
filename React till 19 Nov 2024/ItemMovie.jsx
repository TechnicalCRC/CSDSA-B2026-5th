export default function ItemMovie({MovieObj}) {
  return (
    <div
    className="col-3"
    style={{
      display: "inline-block",
      margin: "20px",
      padding: "5px 10px",
      float: "left",
      backgroundColor: "yellow",
      border: "2px double red",
      width: "300px",
    }}
  >
    <div className="card">
      <div
        className="card-body text-center"
        style={{
          textAlign: "center",
        }}
      >
        <h1 className="card-title">{MovieObj.MovieName}</h1>
        <h4 className="card-title">Id: {MovieObj.MovieId}</h4>
        <p className="card-title">
          <b>Desc:</b> {MovieObj.MovieDesc}
        </p>
        <h1 className="card-title">Price: {MovieObj.Price}</h1>
        <p className="card-title">Director Name: {MovieObj.Director}</p>
      </div>
    </div>
  </div>
  )
}
