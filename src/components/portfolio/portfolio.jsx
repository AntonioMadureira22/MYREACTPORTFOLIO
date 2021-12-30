import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/portfolioList";
import "./portfolio.scss"

export default function Portfolio() {
    const [selected,setSelected] = useState("featured")
    const list = [
        {
        id: "featured",
        title: "featured",
    },
    {
        id: "web",
        title: "Web App",
    },
    {
        id: "mobile",
        title: "Mobile App",
    },
    {
        id:"content",
        title:"Content",
    },
    ];
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
               {list.map(item=> (
                   <PortfolioList 
                   title={item.title} 
                   active={selected === item.id} 
                   setSelected={setSelected} 
                   id={item.id}
                   />
               ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="images/blogging.jpg" alt="pizza picture" />
                    <h3>PepWeb</h3>
                </div>
                <div className="item">
                    <img src="images/com-givvyquiz.jpg" alt="code quiz" />
                    <h3>Code Quiz</h3>
                </div>
            </div>
        </div>
    )
}