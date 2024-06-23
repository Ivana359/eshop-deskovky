import cs from '../img/cz.png'
import en from '../img/en.png'
import zeme from '../img/zeme.png'
import pocet from '../img/pocet.png'
import osoba from '../img/osoba.png'
import time from '../img/time.png'

export const Product = (props) => {
    return (
    <>
 
        <div className="detail-container">
            <div className="detail-img">
                <img src={props.obrazek} alt={props.nazev} />
            </div>
            <div className="detail-info">
                <h1>{props.nazev}</h1>
                <p className="vydavatelstvi"><h3>Vydavatelství: {props.vydavatelstvi}</h3></p>
                <p className="rating">Hodnocení na BGG: <span className="rating-score">{props.bbg}</span></p>
                <p className="description"><b>O hře:</b> {props.popis}</p>
                <div className="game-info">
                    <div className="game-info-item">
                        <img src={time} alt="Herní doba" className="icon" />
                        <p>Herní doba</p>
                        <p>{props.herniDoba}</p>
                    </div>
                    <div className="game-info-item">
                        <img src={osoba} alt="Věk" className="icon" />
                        <p>Věk</p>
                        <p>{props.vek}</p>
                    </div>
                    <div className="game-info-item">
                        <img src={pocet} alt="Počet hráčů" className="icon" />
                        <p>Počet hráčů</p>
                        <p>{props.pocetHracu}</p>
                    </div>
                    <div className="game-info-item">
                        <img src={zeme} alt="Jazyk" className="icon" />
                        <p>Jazyk</p>
                        <p>{
                            props.jazyk === 'čeština' &&
                            <img src={cs} alt="Jazyk" className="icon_jazyk"/>
                        }
                        {
                            props.jazyk === 'angličtina' &&
                            <img src={en} alt="Jazyk" className="icon_jazyk"/>
                        }</p>
                    </div>
                </div>
                <p className="product-cena">Cena: {props.cena} Kč</p>
                <div className="button-container">     
                    <button className="buy-button" id="buy">Koupit</button>
                    <a href={`index.html`}><button className="back-button">Zpět na seznam</button></a>
                </div> 
            </div>
        </div>

   </>
   )
}