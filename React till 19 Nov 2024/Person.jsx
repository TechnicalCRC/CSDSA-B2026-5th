// props practice code

/* eslint-disable react/prop-types */

export default function Person({ branch, name, course }) {
//  let { branch, name, course } = props; // Destructuring

  return (
    <>
      <h1>Person Details</h1>
      <p>
        Hello Mr. <b>{name}</b>
      </p>
      <p>
        You are in <strong>{course}</strong>
      </p>
      <p>
        Your branch is <b>{branch}</b>
      </p>
    </>
  );
}
