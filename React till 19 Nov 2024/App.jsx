import Emp from "./Emp";
//import FoodPlanner from "./FoodPlanner";
import FoodPlanner1 from "./FoodPlanner1";
import BootStrapEx from './BootStrapEx.jsx';
import FoodPlanner2 from "./FoodPlanner2.jsx";
import FoodPlanner from "./ComponentFood/FoodPlanner.jsx";
import Person from "./Person.jsx";

 export default function App() {
   let nameData = "Atul";
   let branchData = "B.Tech";
   let courseData = "CSDS";

  return <>
      {/* FoodPlanner Project by components division and props */}   
      <FoodPlanner></FoodPlanner>
   
    {/*  props practice - pass attribute */} 
    {/* <Person name={nameData} course={courseData} branch={branchData}></Person> */} 
  </>
 }








// export default function App() {
//   let name = "Pinaki";
//   let age = 23;
   
//   let show=()=>{
//    return <h1>Show function</h1>
//   }

//   return <>

//           <FoodPlanner></FoodPlanner>
//           {/* <FoodPlanner1></FoodPlanner1> */}
//           {/* <BootStrapEx></BootStrapEx> */}



//             {/* Hello Mr. {name}
//             <br />
//             Your age is {age}
//              {show()}
//           <Emp></Emp> */}

//         </>;
// }









// import Hello from "./Hello.jsx";
// import Greet from "./Greet.jsx";
// import Image3 from "./Image3.jsx";
// import Image1 from "./Image1.jsx";
// import Image2 from "./Image2.jsx";
// import * as boundle from "./abc.jsx";

// import { GName,show } from "./Greet.jsx";

// import * as aaditya from './Greet.jsx'

// function App(){
//   return <>
//            <Image3></Image3>
//            <Image1></Image1>
//            <Image2></Image2>
//            Hello
//            <br />
//            {GName}
//            <br />
//            <Greet></Greet>
//            <br />
//            {show()}
//            <br />
//            {boundle.abc()}
//            <br />
//            {boundle.arr}
//            <br />
//            {aaditya.GName}
//            <br />
//            {aaditya.show()}
//            <br />
//            {aaditya.default()}
//            <br />
//            <aaditya.default></aaditya.default>
//          </>
// }

// export default App;
