import AppName from "./AppName";
import CurrentDate from "./CurrentDate";
import MenuDraw from "./MenuDraw";

let FoodPlanner = () => {
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
 
    let curDay = new Date().getDay();
 
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
      <AppName aName={"Food Planner for Hostel"}></AppName>
      <CurrentDate Date={curDate} />   
      <MenuDraw weekData={week} currentDay={curDay} foodItems={fp} />
    </>
  );
};
export default FoodPlanner;
