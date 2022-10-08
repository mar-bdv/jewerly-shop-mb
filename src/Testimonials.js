import { useState } from "react";
import { dataSlides } from "./dataSlides"
import right from "./images/arrow-right.svg"
import left from "./images/arrow-left.svg"

function Testimonials(){
    const [person, setPerson] = useState(0);
     // eslint-disable-next-line
    const {id, name, description, image} = dataSlides[person];
    const previousPerson = () =>{
        setPerson((person =>{
            person --;
            if(person < 0){
                return dataSlides.length - 1;
            }
            return person
        }))
    }
    const nextPerson = () =>{
        setPerson((person =>{
            person ++;
            if(person > dataSlides.length - 1){
                person = 0;
            }
            return person
        }))
    }
    return(
        <div>
            <div className="contacts-head">
                <h2>ОТЗЫВЫ</h2>
            </div>
            <div className="slides-div">
                <img src={image} alt="girl"/>
                <div className="slides-text">
                    <h3>{name}</h3>
                    <p>{description}</p>

                </div>
            </div>
            <div className="contacts-btns">
                <button><img className="contacts-img" src={left} alt="left" onClick={previousPerson}/></button>
                <p>{id}</p>
                <button><img className="contacts-img"  src={right} alt="right" onClick={nextPerson}/></button>
            </div>
            <footer><br/><br/><br/>
                <p>Сайт не настоящий!</p><br/>
                <p>Все материалы были взяты в учебных целях</p> <br/>
                <p>Сайт был сделан <a href="http://web-mariam.glitch.me/" target="blank">Mariam</a></p>
            </footer>
        </div>
    )
}


export default Testimonials;