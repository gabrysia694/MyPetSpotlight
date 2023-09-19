import { Body } from "../Body/Body";
import { Welcome } from "../Welcome/WelcomeComp";
import { ScrollToTopBtn } from "../ScrollBtn/scrollbtn";

function Main(){
    
    return(
        <div>
            <Welcome />
            <Body />
            <ScrollToTopBtn />
        </div>
    )
}

export default Main;