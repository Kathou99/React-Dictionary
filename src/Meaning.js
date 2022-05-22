import React from "react";

export default function Meaning(props){
    console.log(props.meanings)
    return (
        <div className="Meaning">
          <h3>{props.meaning.partsOfSpeech}</h3>;
          {props.meaning.definitions.map(function(definition, index) {
              return (
                  <div key={index}>
                 <p>
                   {definition.definition}
                   <br />
                    {definition.exemple}
                 </p> 
               </div>
              )
          })}
        </div>
    );
}