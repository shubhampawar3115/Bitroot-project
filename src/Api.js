import React, { useEffect, useState } from "react";
import axios from 'axios';
import Card from "./Card";




const Api = () => {
    const [state, setState] = useState([]);
    useEffect(
        () => {
            axios.get('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts').then((fetchdata) => {
                setState(fetchdata.data)
            })
        }, []
    )
    return (

        <>
            <div className="container">{
                state.map((value) => {
                    let newdate = new Date(value.date);
                    newdate = newdate.toLocaleDateString('en-us', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                    })
                    return (
                        <Card src={value.thumbnail.large} title={value.title} content={value.content}
                            author={value.author.name}
                            role={value.author.role}
                            date={newdate} />
                    )
                })
            }
            </div>
        </>

    )
}

export { Api };
