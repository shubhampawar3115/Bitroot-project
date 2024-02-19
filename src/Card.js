import React from "react";


function Card(props){
    return(
        <>
            <div className="Card">
                    <img className="Card-img" src={props.src} alt="myphoto"/>
                    <div className="Containt">
                        <div className="symboll">
                            <p className="skyblue"></p>
                            <p className="orange"></p>
                        </div>
                        <h1>{props.title}</h1>
                        <p>{props.content}
                        </p>
                        <div className="footer">
                            <p className="owner">{props.author}-{props.role}</p>
                            <p className="date">{props.date}</p>
                        </div>
                    </div>
             </div>        
        </>
    )
}

export default Card;