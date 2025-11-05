import React,{useState} from "react";
import axios from "axios";
import './Dictionary.css';



export default function Dictionary(){

let [keyword,setKeyword]=useState("");//using states because input has got to be updated 


function handleResponse(response){
console.log(response.data);

}



function handleKeywordChange(event){
setKeyword(event.target.value);//will update the state(keeping track of the word searched)

}

 function search (event) {  //event for when a user enters the info 
event.preventDefault();

//Api intergration
let apiKey="5t2d0f5d9d5f13f50593407dab36oc25";
let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
axios.get(apiUrl).then(handleResponse);


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