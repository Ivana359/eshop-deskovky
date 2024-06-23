import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import osoba from '../img/osoba.png';
import pocet from '../img/pocet.png';
import time from '../img/time.png';
import zeme from '../img/zeme.png';
import cs from '../img/cz.png';
import en from '../img/en.png';
import bannerHTML from '../components/ProductPage';
import { HomePage } from '../components/HomePage';

const response = await fetch ("http://localhost:4000/api/games")
const json = await response.json()
const games = json.data

function handleBuyClick() {
    alert('Zboží bylo přidáno do nákupního košíku.');
}

document.querySelector('#root').innerHTML = render (
    <>
    <div dangerouslySetInnerHTML={{ __html: bannerHTML }}></div>
<HomePage />
    <div className="games-grid">
        {
            games.map((item) => (
                <div key={item.id} className="game-container"> 
                <h2 className="game-title">{item.nazev}</h2>
                <img src={item.obrazek} alt={item.nazev} className="game-image" />
                <p className="price">Cena: {item.cena} Kč</p>
                <div className="button-container">           
                <button className="buy-button" id={`buy-${item.id}`}>Koupit</button>
                <a href={`detail.html?id=${item.id}`}><button className="details-button">Detailní informace</button></a>
                </div>  
                
                <div className="game-info">
                        <div className="game-info-item">
                            <img src={time} alt="Herní doba" className="icon" />
                            <p>{item.herniDoba}</p>
                        </div>
                        <div className="game-info-item">
                            <img src={osoba} alt="Věk" className="icon" />
                            <p>{item.vek}</p>
                        </div>
                        <div className="game-info-item">
                            <img src={pocet} alt="Počet hráčů" className="icon" />
                            <p>{item.pocetHracu}</p>
                        </div>
                        <div className="game-info-item">
                            <img src={zeme} alt="Jazyk" className="icon" />
                          
                            <p>{
                  item.jazyk === 'čeština' &&
                  <img src={cs} alt="Jazyk" className="icon_jazyk"/>
                }
                {
                  item.jazyk === 'angličtina' &&
                  <img src={en} alt="Jazyk" className="icon_jazyk"/>
                }</p>
                            
                        </div>
                    </div>
                </div>
            
            ))
        }
        </div>
    </>
)
games.forEach((item) => {
    document.querySelector(`#buy-${item.id}`).addEventListener("click", handleBuyClick);
});