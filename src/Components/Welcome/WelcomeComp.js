import { describeData } from '../../dataSrc/data';
import React from 'react';
import { Modal } from '../Model/model';

export const Welcome = () =>{
    return(
            <div className="welcome">
                <h2>Welcome to MyPetSpotlight!</h2>
                <p id="petcommunity">Welcome to our pet lovers community!</p>
                <p id="describe">
                    {describeData}
                </p>
                <p id="submit">
                Submit your pet's information now and share their story with the
                world!
                </p>
                <Modal />
            </div>
    )
}