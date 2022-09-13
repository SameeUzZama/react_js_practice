import React from "react";
import Person from "./Person";

const NameList = () => {
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Vue",
    },
  ];

  const personList = persons.map((person) => (
    // <h2>
    //   I am {person.name}. I am {person.age} year old. I know {person.skill}
    // </h2>
    <Person key={person.id} person={person} />
  ));

  // (1)(2)
  //   const names = ["Bruce", "Clark", "Diana"];
  // (2)
  //   const NameList = names.map((name) => <h2>{name}</h2>);
  return (
    <div>
      {/* (1) */}
      {/* <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2> */}

      {/* (2) */}
      {/* {names.map((name) => (
        <h2>{name}</h2>
      ))} */}

      {/* (2) */}
      {/* <div>{NameList}</div> */}

      <div>{personList}</div>
    </div>
  );
};

export default NameList;
