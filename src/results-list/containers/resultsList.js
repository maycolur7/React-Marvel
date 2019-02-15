import React from "react";
import HeroCard from "../components/heroCard";

function ResultsList(props) {
  console.log(props);
  if (props.searching) {
    return (
      <h1 className="text-danger">Loading...</h1>
    );
  } else if (props.results.length > 0) {
    return props.results.map((hero, index) => {
      return <HeroCard key={index} {...hero} />;
    });
  } else {
    return <h1 className="text-danger text-center" >SEARCH A HERO</h1>
  }
}

export default ResultsList;
