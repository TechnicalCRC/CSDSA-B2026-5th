const Emp = () => {
  let arr = [1, 2, 3, 4, 5];
  let empdata = ["Aaditya", "Aarav", "Divyansh", "Faizul", "Dhruv"];

  return (
    <>
      <div>Array Values</div>
      {arr[3]}
      <br />
      {arr[2]}
      <br />
      Array values by Map
      <br />
      <ul style={{listStyleType:'none',
        backgroundColor:'green',
        height:''
      }}>
        {empdata.map((data) => (
          <li key={data} style={{display:'inline',
            margin:'10px',
            border:'2px solid blue',
            backgroundColor:'yellow'
          }}>{data}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Emp;
