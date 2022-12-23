import React from "react";
import Card from "./Card"
import "./index.css"
import SeriesData from "./SeriesData"



function App() {
    return (
        <>
            <h1 className="heading_style">List Of Top 9 Netflix Series</h1>

            {SeriesData.map((element)=> {
                return (
                    <Card
                        imgsrc={element.imgsrc}
                        title={element.title}
                        sname={element.sname}
                        links={element.links}
                        downloadLink = {element.downloadLink} />
                )
            })}
        </>
    )
}


export default App