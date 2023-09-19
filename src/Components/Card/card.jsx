import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Card({props}){
    return ( 
        <div className="card">
            <div className="image">
                <LazyLoadImage effect="blur" 
                src={'assets/images/'+props.imgURL}
                alt={props.altName}
                />
            </div> 
            <div className="content">
            <div className="name">
                <strong> Name: {props.name}</strong>
            </div>

            <div className="animal">
                <strong> Type of animal: {props.type}</strong>
            </div>

            <div className="age">
                <strong> Age: {props.age}</strong>
            </div>

            <div className="personality">
                <strong> Personality: <ul>{props.personalities.map((it,i) => {return<li key={i}>{it}</li>})}</ul></strong>
            </div>

            <div className="toy">
                <strong> Favourite toy: {props.toy}</strong>
            </div>

            <div className="owner">
                <strong> Owner: </strong>
                <a href={props.ownerURL}> {props.owner} </a> 
            </div>
            </div>
        </div>
    );
}
export default Card;