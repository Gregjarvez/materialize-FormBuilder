import React from "react";

function Float (props){
    
    
    return (
      <span className="floater">
          <span className="floater--code">{`{ }`}</span>
          <span className="floater--edit">
              <i className="fa fa-pencil"></i>
          </span>
          <span className="floater--close" 
                onClick={() => props.del(props.id)}
          >
              <i className="fa fa-close" />
          </span>
      </span>  
    );
}


export default Float;


