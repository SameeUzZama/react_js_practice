import React from "react";

//this the simple using props
// const Props = (props) => {

//its the destructuring method
// const Props = ({ name, heroname }) => {

//also the destructuring method
const Props = (props) => {
  const { name, heroname } = props;
  return (
    <div>
      <h1>
        {/* this the simple using props */}
        {/* Hello {props.name} a.k.a {props.heroname} */}
        {/*  */}
        {/*  */}
        {/* its the destructuring method */}
        Hello {name} a.k.a {heroname}
      </h1>
    </div>
  );
};

export default Props;
