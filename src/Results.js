import React from "react";
import Meaning from "./Meaning";
import "./Results.css";
export default function Results(props){
    //We are looping through each meaning and then sending it to the Meaning component
    
if(props.results){
return(
<div className="Results">
    <section>
<h2>{props.results.word}</h2>
<h3><span className="Phonetic">{props.results.phonetic}</span></h3>
</section>
{props.results.meanings.map(function(meaning , index){
return(
<section key={index}>

<Meaning meaning={meaning}/>

</section>
);
})}</div>
);
}else{
    return null;
}
}