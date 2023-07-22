import GetData from "../../JS/data";
import Card from "./card";


function Main(){
    return(
        <div>
            <div class="welcome">
                <h2>Welcome to MyPetSpotlight!</h2>
                <p id="petcommunity">Welcome to our pet lovers community!</p>
                <p id="describe">
                We are excited to provide you with a platform where you can showcase
                your furry friends and their unique personalities. Our website allows
                you to submit your pet's name, age, and favourite toy, giving them the
                spotlight they deserve. Whether you have a playful pup or a lazy
                feline, we want to see them all! Join us in celebrating the love and
                joy that our pets bring into our lives.
                </p>
                <p id="submit">
                Submit your pet's information now and share their story with the
                world!
                </p>
                <nav>
                <a class="navbar-button" href="https://github.com/gabrysia694/MyPetSpotlight" target="_blank">
                Add your pet!
                </a>
                </nav>
                </div>
                <div id="petType">
                <ul>
                <li><a data-filter="all">All</a></li>
                <li><a data-filter="Dog">Dogs</a></li>
                <li><a data-filter="Cat">Cats</a></li>
                <li><a data-filter="others">Others</a></li>
                </ul>
                </div>


                <div id="list">
                    {GetData.map(it => {return <Card props={it}/>})}
                </div>

                <button id="back-to-top-btn">
                    <i class="fa fa-arrow-up"></i>
                </button>

        </div>
    )
}

export default Main;