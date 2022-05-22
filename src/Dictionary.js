import React, { useState } from "react";
import axios from "axios";
import './Dictionary.css'

export default function Dictionary(){
    let [keyword, setKeyword, setLanguage, language ="en"] =  useState("");

    function handleResponse(response){
        console.log(response.data[0]);
    }
    
    function search(event){
   
        event.preventDefault();
        
            alert(`Searching for ${keyword} definition`);
              let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/${language}/${keyword}`;
              axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event){
        console.log(event.target.value)
      setKeyword(event.target.value);
    }

    function handlelanguage(event){
        console.log(event.target.value)
        setLanguage(event.target.value);
    }

    return <div className="Dictionary">
          <form onSubmit={search}>
             <input type="search" autoFocus={true} onChange={handleKeywordChange} placeholder="Please Enter a word"/>
         </form>

         <label  htmlFor="lagnuges">Choose language:</label>
          <select id="cars" onChange={handlelanguage}>
            <option value="en" defaultValue={true}>English</option>
            <option value="fr">French</option>
            <option value="sp">Spanish</option>
           </select>
    </div>
}  