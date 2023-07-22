import React from "react";

function Card({props}){
    return (
        <div class="card">
            <div class="image">
                {/* <div class="loader"></div> */}
                <img src={'images/'+props.imgURL} alt={props.altName} />
            </div> 
            <div class="content">
            <div class="name">
                <strong> Name: {props.name}</strong>
            </div>

            <div class="animal">
                <strong> Type of animal: {props.type}</strong>
            </div>

            <div class="age">
                <strong> Age: {props.age}</strong>
            </div>

            <div class="personality">
                <strong> Personality: {props.personalities.map(it => {return<li>{it}</li>})}</strong>
            </div>

            <div class="toy">
                <strong> Favourite toy: {props.toy}</strong>
            </div>

            <div class="owner">
                <strong> Owner: </strong>
                <a href={props.ownerURL}> {props.owner} </a> 
            </div>
            </div>
        </div>
    );
}
export default Card;