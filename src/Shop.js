import { useState } from "react"
import { dataShop } from "./dataShop";

function Shop(){
    const [products, setProducts] = useState(dataShop);
    const chosenProducts = (product) => {
        const newProducts = dataShop.filter(element =>
            element.product === product)
        setProducts(newProducts)
    }
    // const chosenProductsTwo = (allProducts) => {
    //     const newProducts = dataShop.filter(element =>
    //         element.allProducts === allProducts)
    //     setProducts(newProducts)
    // }
    const [showText, setShowText] = useState(true)

    const showTextClick = (element) =>{
        element.showMore = !element.showMore;
        setShowText(!showText)
    }

    

    return(
        <div>
            
            <div className="contacts-head">
                <h2>КАТАЛОГ</h2>
            </div>
            <div className="sidebar">
                <h3>РАЗДЕЛ</h3>
                <button  onClick={() => setProducts(dataShop)}>Всё (19)</button>
                <button onClick={() => chosenProducts("earrings")}>Серьги (6)</button>
                <button onClick={() => chosenProducts("ring")}>Кольца (5)</button>
                <button onClick={() => chosenProducts("bracelet")}>Браслеты (3)</button>
                <button onClick={() => chosenProducts("necklace")}>Колье (5)</button>
            </div>
            <div className="main">
                <div className="product-bigDiv">
                    {products.map((element =>{
                        const {id, name, description, image, price, showMore} = element;
                        return(
                            <div key={id} className="product-div">
                                <img src={image} alt="product"/>
                                <h3>{price} ₽</h3>
                                <p className="product-name">{name}</p>
                                <p className="product-text">{showMore ? description : description.substring(0,25) + "..."}<br/> 
                                <button onClick={() => showTextClick(element)}>
                                    {showMore ? "Свернуть" : "Показать больше"}
                                </button></p>
                                <button className="product-btn">В КОРЗИНУ</button>
                                
                            </div>
                        )
                    }))}
                    
                </div>
            </div>
            <footer><br/><br/><br/>
                <p>Все материалы были взяты в учебных целях</p> <br/>
            </footer>
        </div>
    )
}


export default Shop;
