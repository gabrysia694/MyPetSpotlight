import { GetData, animalTypeObj } from '../../dataSrc/data';
import React, { useState } from 'react';
import Card from '../Card/card';



export const Body = () =>{
    const[animalType,setAnimalType] = useState("all")
    
    window.addEventListener('scroll', function() {
        var scrollY = window.scrollY || window.pageYOffset;
        var petSec = document.getElementById('petType');
        var cardList = this.document.getElementById('list');
          if (scrollY >= window.innerHeight) {
            petSec.classList.add('fixed');
            cardList.style.cssText = "margin-top: 70px;";
          } else {
            petSec.classList.remove('fixed');
            cardList.style.cssText = "margin-top: 0px;";
          }
      });
    return(
        <>
            <div id="petType" >
                <ul >
                    {animalTypeObj.map((it,i) => {
                        return <li key={i} onClick={e=> setAnimalType(it.type)} style={{color:animalType === it.type?"#4cf74c":"white"}}>
                            {it.name}
                        </li>
                    })}
                </ul>
            </div>


            <div id="list">
                {GetData(animalType).map((it,i) => {return <Card key={i} props={it}/>})}
            </div>
        </>
 
    )
}