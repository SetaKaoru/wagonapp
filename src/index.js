import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

function App() {
    return <div className="container">
        <Header/>
        <Tagline/>
        <Footer/>
        <Menu/>
        <Order/>
    </div>;
}

function Header() {
    return <h1 style={{color: "crimson", fontSize: "48px", textTransform: "uppercase"}}>Wagon Store</h1>
}

function Tagline() {
    return <h2 class="tagline" style={{color: "crimson"}}>Quality Rolling Stock for your collection!</h2>
}

function Pizza(props) {
    return (
    <div class="pizza">
        <img src={props.image} alt={props.name} width="30%"/>
        <h2 class="nemu">{props.name}</h2>
        <p>{props.desc}</p>
        <p>${props.price}</p>
    </div>
    );
}

function Order() {
    return (
        <div>
            <button class="btn">START SHOPPING</button>
        </div>
    )
}

function Menu() {
    return (
    <div className="menu">
        <h2>
            On Sale:
            <Pizza
            name='Raspberry Syrup Tanker'
            image='tt05.webp'
            desc='Our most popular product!'
            price={50}/>
            <Pizza
            name='Red Express Carriage'
            image='tt04.webp'
            desc='A unique colour of carriage!'
            price={25}/>
            <Pizza
            name='Chocolate Tanker'
            image='choco.jpg'
            desc='Limited edition with banners!'
            price={10}/>
            <Pizza
            name='Brown Wagon'
            image='tt03.webp'
            desc='Comes with removable barrels!'
            price={15}/>
            <Pizza
            name='Blue Wagon'
            image='tt02.webp'
            desc='Comes with removable stone pile!'
            price={15}/>
        </h2>
    </div>
    );
}

function Footer() {
    const d = new Date();
    return (
    <div  className="footer">
        <button class="foot">
        <footer class="foot">
            {d.getHours() >= 11 && "We are currently open.＼(＾▽＾)／"}
            {d.getHours() >= 22 && "We're closed! Come back later!"}
            {d.getHours() < 11 && "We're closed! Come back later!"}
        </footer>
        </button>
    </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);