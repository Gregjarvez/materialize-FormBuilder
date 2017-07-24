import React from "react";


function UtiliItem(props){
    
    const {data, callBacks, id} = props;
    const {Onclick} = callBacks;
    
    return (
        <li className="utilities--item" onClick={() => Onclick(id)}>
            <i className={data.icon}></i>
            <div className="utilities--item-name">{data.name}</div>
        </li>  
    );
}


class Utilities extends React.Component {
    constructor(props){
        super(props);
    }
    
    
    render() {
        const utilities = [
            {name: "text field", icon: "fa fa-text-width", id:"text"},
            {name: "button", icon: "fa fa-bars", id: "button"},
            {name: "text area", icon: "fa fa-text-height", id:"textarea"},
            {name: "date field", icon: "fa fa-calendar", id:"date"},
            {name: "file uploader", icon: "fa fa-upload", id:"file"},
            {name: "checkBox group", icon: "fa fa-square-o", id:"checkbox"},
            {name: "radio group", icon: "fa fa-circle-o", id:"radio"},
            {name: "select", icon: "fa fa-table", id:"select"},
            {name: "number", icon: "fa fa-sort-numeric-asc", id:"number"}
        ];
        
        let list = utilities.map((each, index) => {
           return <UtiliItem 
               key={index} 
               id={each.id} 
               data={each}
               callBacks={this.props.funcs}
           /> 
        });
        
        return (
            <ul className="utilities">
                {list}
            </ul>  
        );
    }
}

export default Utilities;