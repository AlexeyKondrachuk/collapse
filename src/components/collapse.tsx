import {  useState } from "react"

interface IProps {
    collapsedLabel?: string,
    expandedLabel?: string
}


export default function Collapse({collapsedLabel, expandedLabel}:IProps) {

    
    collapsedLabel = collapsedLabel ? collapsedLabel : "Развернуть"
    expandedLabel = expandedLabel ? expandedLabel : "Свернуть"

    const [show, setShow] = useState(true)
  
    
    const onClick = () => {
        setShow(!show)
    }

    return (
        <div className="collapse__wrapper">
            <button className="btn btn-primary"  onClick={onClick}>
             {show ? collapsedLabel : expandedLabel}
            </button>
            <div className={show? "collapse": "collapse show"}>
              <div style={{height: show? "190px" : "0"}}>{"Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger. "}</div>
            </div>
        </div>
    )
}