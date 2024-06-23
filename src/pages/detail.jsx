import { render } from '@czechitas/render';
import './detail.css';
import '../global.css';
import { Product } from '../components/Product.jsx'

import bannerHTML from '../components/ProductPage';
const params = new URLSearchParams(window.location.search); 
const id = params.get('id');

const response = await fetch(`http://localhost:4000/api/games/${id}`);
const json = await response.json();
const games = json.data;

function handleBuyClick() {
    alert('Zboží bylo přidáno do nákupního košíku.');
}

document.querySelector('#root').innerHTML = render(
    <div>
       <div dangerouslySetInnerHTML={{ __html: bannerHTML }}></div>

<Product obrazek={games.obrazek} nazev = {games.nazev} vydavatelstvi = {games.vydavatelstvi} bbg = {games.bbg} popis = {games.popis} herniDoba = {games.herniDoba} vek = {games.vek} pocetHracu = {games.pocetHracu} jazyk = {games.jazyk} cena = {games.cena}

       />
   
     
     
    </div>
);

document.querySelector("#buy").addEventListener("click", handleBuyClick);
