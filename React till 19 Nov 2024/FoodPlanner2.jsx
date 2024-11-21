let FoodPlanner2 = () => {
  let fp = [
    ["fisun1Breakfast", "fisun2Lunch", "fisun3ETea", "fisun4Dinner"],
    ["fimon1Breakfast", "fimon2Lunch", "fimon3ETea", "fimon4Dinner"],
    ["fitue1Breakfast", "fitue2Lunch", "fitue3ETea", "fitue4Dinner"],
    ["fiwed1Breakfast", "fiwed2Lunch", "fiwed3ETea", "fiwed4Dinner"],
    [
      "fithurs1Breakfast - Milk/Tea, Daliya",
      "fithurs2Lunch - Dal Makhni, Naan, Salad",
      "fithurs3ETea",
      "fithurs4Dinner",
    ],
    ["fifri1Breakfast", "fifri2Lunch", "fifri3ETea", "fifri4Dinner"],
    ["fisat1Breakfast", "fisat2Lunch", "fisat3ETea", "fisat4Dinner"],
  ];

  let curDate =
    new Date().getDate() +
    " - " +
    (new Date().getMonth() + 1) +
    " - " +
    new Date().getFullYear();
  let curday = new Date().getDay();
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
    
  return (
    <>
      <h1 className="bg-primary text-center text-white p-4">Food Planner</h1>
      <p>Today's date is  
        <span className="bg-warning fs-1"> '{curDate}' </span></p>
      <div>
        Today is{" "}
        <b style={{ color: "orange", fontSize: "30px" }}>{week[curday]}</b>,
        Today i will eat these :{" "}
      </div>

      <ol className="bg-danger" >
        {fp[curday].map((item) => (
          <li key={item} className="text-white my-1 p-2 bg-success">{item}</li>
        ))}
      </ol>
    </>
  );
};
export default FoodPlanner2;