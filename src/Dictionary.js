import React,{useState} from "react";
import axios from "axios";
import Results from './Results';
import './Dictionary.css';



export default function Dictionary(props){

let [keyword,setKeyword]=useState(props.defaultKeyword);//state for the word
let [results,setResults]=useState(null);//state for the definition,antonyms etc.....
let[loaded,setLoaded]=useState(false);
function handleResponse(response){
    console.log(response.data[0]);
console.log(response.data);//log to see all the array or object info
//console.log(response.data.meanings[0].definition);***used it to see how i can get the exact definition

setResults(response.data);

}



function handleKeywordChange(event){
setKeyword(event.target.value);//will update the state(keeping track of the word searched)

}

function search(){
//Api intergration
let apiKey="5t2d0f5d9d5f13f50593407dab36oc25";
let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
axios.get(apiUrl).then(handleResponse);
}

 function handleSubmit (event) {  //event for when a user enters the info 
event.preventDefault();
search();
 } 

function load(){//changes state to true and will show form
setLoaded(true);
search();
}


if(loaded){
return ( 
/*have an event listner on the form that will trigger my function*/

    <div className="Dictionary"> 
    <section>
<h1>What word do you want to look up?</h1>
<form onSubmit={handleSubmit}>
<input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
</form>
<div className="hint">
    suggested words : sunset,animals,weather,money etc......
</div>


</section>
    <Results results={results}/> 
    </div>
);

}else{
    load();
    return "Loading";
}


}