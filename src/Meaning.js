import React from "react";
import Synonyms from "./Synonyms.js"

export default function Meaning(props){
    return (
        <div className="Meaning">
          <h3>{props.meaning.partsOfSpeech}</h3>;
          {props.meaning.definitions.map(function(definition, index) {
              return (
                  <div key={index}>
                 <p>
                  <strong> Definition:</strong> {definition.definition}
                   <br /> <strong>Exemple:</strong> <em>{definition.exemple}</em>
                   <br />
                   <strong>synonyms:</strong>
                   <Synonyms synonyms={definition.synonyms}/>
                  {definition.synonyms}
                 </p> 
               </div>
              )
          })}
        </div>
    );
}