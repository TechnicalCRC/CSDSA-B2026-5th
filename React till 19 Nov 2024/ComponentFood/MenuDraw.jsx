import ItemData from "./ItemData"

export default function MenuDraw({weekData, currentDay, foodItems}) {
  return (
    <>
          <div>
        Today is{" "}
        <b style={{ color: "orange", fontSize: "30px" }}>{weekData[currentDay]}</b>,
        Today i will eat these :{" "}
      </div>

      <ol className="bg-danger" >
        {foodItems[currentDay].map((item) => (
          <ItemData key={item} className="text-white my-1 p-2 bg-success">{item}</ItemData>
        ))}
      </ol>
    </>
  )
}
