import earrings from './images/home-earrings.png';
import girl from './images/home-girl.png';
import { Link } from 'react-router-dom'

function Home(){
    // const shopLink = (item) => () => {
    //     window.location.href = item;
    // } onClick = {() => shopLink('./shop')}
    
    return(
        <div>
            <div className='home-mainDiv'>
                <div className='home-bigText'>
                    <h1>Новая коллекция</h1>
                    <p className="par-home">Успейте приобрести!</p>
                    <img src={earrings} alt="earrings"/><br/>
                    <Link to="/Shop">
                        <button  className='home-btn'>
                            ПЕРЕЙТИ В КАТАЛОГ 
                        </button>
                    </Link>
                </div>
                <div className='home-bigImg'>
                    <img src={girl} alt="girl"/>
                </div>
            </div>

            <footer><br/><br/><br/>
                <p>Все материалы были взяты в учебных целях</p> <br/>
            </footer>
        </div>
    )
}


export default Home;
