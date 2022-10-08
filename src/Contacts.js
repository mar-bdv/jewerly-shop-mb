function Contacts(){
    return(
        <div>
            <div className="contacts-head">
                <h2>Контакты</h2>
            </div>
                <div className="contacts-bigDiv">
                    <div className="contacts-text">
                        <p>+7 000 0000 000</p> <br/>
                        <p>example@gmail.com</p><br/>
                        <h3>Экспресс-доставка</h3><br/>
                        <p>
                            Осуществляется собственной курьерской<br/>
                            службой и компанией в день заказа или на следующий день.<br/>
                            <br/>
                            Курьер свяжется с вами перед доставкой и <br/>
                            привезёт заказ в выбранный промежуток времени.<br/>
                            <br/>
                            В течение 15 минут вы можете вскрыть посылку и <br/>
                            проверить её содержимое. Обратите внимание,<br/>
                            что заказ можно выкупить только целиком или отказаться<br/>
                            от него. Частичный выкуп невозможен.</p>
                    </div>
                    <div>
                        <iframe title="myFrame"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.6994665564475!2d37.616403199700045!3d55.76108226291055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5b56863263%3A0xa4b35a989603e527!2z0KbQo9Cc!5e0!3m2!1sru!2sru!4v1664996465942!5m2!1sru!2sru"
                            width="600"
                            height="450"
                            frameBorder="0"
                            aria-hidden="false"
                            tabIndex="0"
                            className="contacts-map"
                            >
                        </iframe>
                    </div>
            </div>
            <footer><br/><br/><br/>
                <p>Сайт не настоящий!</p><br/>
                <p>Все материалы были взяты в учебных целях</p> <br/>
                <p>Сайт был сделан <a href="http://web-mariam.glitch.me/" target="blank">Mariam</a></p>
            </footer>
        </div>
    )
}


export default Contacts;