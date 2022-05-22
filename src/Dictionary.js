import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import './Dictionary.css';
import Photos from "./Photos";

export default function Dictionary(props){
    let [keyword, setKeyword, setLanguage, language ="en"] =  useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState("");
    let [photos, setPhotos] = useState(null);

    function handleDictionResponse(response){
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response){
        setPhotos(response.data.photos);
    }
    
    function search(){
          //Documentation
         /*  alert(`Searching for ${keyword} definition`); */
          let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/${language}/${keyword}`;
          axios.get(apiUrl).then(handleDictionResponse);

          let pexelsApiKey = "563492ad6f9170000100000120db3d40d40f45eb93687101d45ada38";

          let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;

          let headers = { Authorization: `Bearer ${pexelsApiKey}` };

          axios.get(pexelApiUrl, {headers: headers,}).then(handlePexelsResponse);
  }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event){
      setKeyword(event.target.value);
    }

    function handlelanguage(event){
        setLanguage(event.target.value);
    }

    function load(){
        setLoaded(true);
        search();
    }

    if (loaded){
        return <div className="Dictionary">
        <section>
            <h4>What word do you want to look up??</h4>
            <br />
        <form onSubmit={handleSubmit}>
             <input type="search" autoFocus={true} onChange={handleKeywordChange} defaultValue={props.defaultKeyword}   placeholder="Please Enter a word"/>
         </form>
         <br></br>
         <label id="lang" htmlFor="lagnuges">Choose language:</label>
          <select id="cars" onChange={handlelanguage}>
            <option value="en" defaultValue={true}>English</option>
            <option value="fr">French</option>
            <option value="sp">Spanish</option>
           </select>
        </section>
           <Results  results={results}/>

           <Photos photos={photos} />
      </div>
    }else {
        load();
        return "Loading";
    }
}

    

