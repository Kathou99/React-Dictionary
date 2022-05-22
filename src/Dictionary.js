import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import './Dictionary.css'

export default function Dictionary(){
    let [keyword, setKeyword, setLanguage, language ="en"] =  useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response){
        console.log("ICI")
        console.log(response.data[0])
        setResults(response.data[0]);
        console.log(response.data[0])
        console.log(response.data[0].meanings[0].definitions[0].definitions);
     
    }
    
    function search(event){
        event.preventDefault();
        console.log(`Searching for ${language} definition`)
        //Documentation
            alert(`Searching for ${keyword} definition`);
        
              let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/${language}/${keyword}`;
              console.log("ICI KEYWORK")
              console.log(keyword)
              axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event){
      setKeyword(event.target.value);
    }

    function handlelanguage(event){
        setLanguage(event.target.value);
    }

    return <div className="Dictionary">
          <form onSubmit={search}>
             <input type="search" autoFocus={true} onChange={handleKeywordChange} placeholder="Please Enter a word"/>
         </form>
         <br></br>
         <label  htmlFor="lagnuges">Choose language:</label>
          <select id="cars" onChange={handlelanguage}>
            <option value="en" defaultValue={true}>English</option>
            <option value="fr">French</option>
            <option value="sp">Spanish</option>
           </select>
           <Results  results={results}/>
    </div>
}  