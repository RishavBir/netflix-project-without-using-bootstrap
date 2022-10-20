
import React from "react"
import ReactDOM from "react-dom"
import Card from "./Card"
import "./index.css"
import SData from "./Sdata"


ReactDOM.render(
  <>
  <h1 className="heading_style">List Of Top 5 Netflix Series</h1>
    <Card imgsrc={SData[0].imgsrc}
      title={SData[0].title}
      sname={SData[0].sname}
      link={SData[0].links}/>

<Card imgsrc={SData[1].imgsrc}
      title={SData[1].title}
      sname={SData[1].sname}
      link={SData[1].links}/>

<Card imgsrc={SData[2].imgsrc}
      title={SData[2].title}
      sname={SData[2].sname}
      link={SData[2].links}/>

<Card imgsrc={SData[3].imgsrc}
      title={SData[3].title}
      sname={SData[3].sname}
      link={SData[3].links}/>

<Card imgsrc={SData[4].imgsrc}
      title={SData[4].title}
      sname={SData[4].sname}
      link={SData[4].links}/>
  </>,
  document.getElementById("root")
)

