import React,{useState} from "react";
import './Dictionary.css';
export default function Dictionary(){

let [keyword,setKeyword]=useState("");//using states because input has got to be updated 

function handleKeywordChange(event){

setKeyword(event.target.value);//will update the state(keeping track of the word searched)

}


 function search (event) {  //event for when a user enters the info 
event.preventDefault();
alert(`Searching for ${keyword} definition`)

 } 

return ( 
/*have an event listner on the form that will trigger my function*/

    <div className="Dictionary"> 
    <form onSubmit={search}>
<input type="search" onChange={handleKeywordChange}/>


    </form>
    </div>
)

}