let FoodPlanner = () => {
  let fpsun = ["fisun1Breakfast", "fisun2Lunch", "fisun3ETea", "fisun4Dinner"];
  let fpmon = ["fimon1Breakfast", "fimon2Lunch", "fimon3ETea", "fimon4Dinner"];
  let fptue = ["fitue1Breakfast", "fitue2Lunch", "fitue3ETea", "fitue4Dinner"];
  let fpwed = ["fiwed1Breakfast", "fiwed2Lunch", "fiwed3ETea", "fiwed4Dinner"];
  let fpthurs = [
    "fithurs1Breakfast - Milk/Tea, Daliya",
    "fithurs2Lunch - Dal Makhni, Naan, Salad",
    "fithurs3ETea",
    "fithurs4Dinner",
  ];
  let fpfri = ["fifri1Breakfast", "fifri2Lunch", "fifri3ETea", "fifri4Dinner"];
  let fpsat = ["fisat1Breakfast", "fisat2Lunch", "fisat3ETea", "fisat4Dinner"];

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


  
  if(curday==0)
    return (
      <>
        <h1>Food Planner</h1>
        <div>Today is <b> {week[curday]} </b>, Today i will eat these : </div>
  
        <ol>
          {
            fpsun.map((item)=>
            <li key={item}>{item}</li>)
          }
        </ol>
      </>
    );

    if(curday==1)
      return (
        <>
          <h1>Food Planner</h1>
          <div>Today is {week[curday]}, Today i will eat these : </div>
    
          <ol>
            {
              fpmon.map((item)=>
              <li key={item}>{item}</li>)
            }
          </ol>
        </>
      );
      
      if(curday==2)
        return (
          <>
            <h1>Food Planner</h1>
            <div>Today is {week[curday]}, Today i will eat these : </div>
      
            <ol>
              {
                fptue.map((item)=>
                <li key={item}>{item}</li>)
              }
            </ol>
          </>
        );

        if(curday==3)
          return (
            <>
              <h1>Food Planner</h1>
              <div>Today is {week[curday]}, Today i will eat these : </div>
        
              <ol>
                {
                  fpwed.map((item)=>
                  <li key={item}>{item}</li>)
                }
              </ol>
            </>
          );

          if(curday==4)
            return (
              <>
                <h1>Food Planner</h1>
                <div>Today is {week[curday]}, Today i will eat these : </div>
          
                <ol>
                  {
                    fpthurs.map((item)=>
                    <li key={item}>{item}</li>)
                  }
                </ol>
              </>
            );

            if(curday==5)
              return (
                <>
                  <h1>Food Planner</h1>
                  <div>Today is {week[curday]}, Today i will eat these : </div>
            
                  <ol>
                    {
                      fpfri.map((item)=>
                      <li key={item}>{item}</li>)
                    }
                  </ol>
                </>
              );

              if(curday==6)
                return (
                  <>
                    <h1>Food Planner</h1>
                    <div>Today is {week[curday]}, Today i will eat these : </div>
              
                    <ol>
                      {
                        fpsat.map((item)=>
                        <li key={item}>{item}</li>)
                      }
                    </ol>
                  </>
                );
                                                        


};
export default FoodPlanner;