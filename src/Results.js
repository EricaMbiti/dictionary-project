import React from "react";
import Meaning from "./Meaning";

export default function Results(props){
    //We are looping through each meaning and then sending it to the Meaning component
    console.log(props.results);
if(props.results){
return(
<div className="Results">
<h2>{props.results.word}</h2>
{props.results.meanings.map(function(meaning , index){
return(
<div key={index}>

<Meaning meaning={meaning}/>

</div>
);
})}</div>
);
}else{
    return null;
}
}