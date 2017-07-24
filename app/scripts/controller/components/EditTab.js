import React from "react";



const EditTab = props => {
    
    function handleSubmit(e){
        return e.preventDefault()
    }
    
    return (
        <div className="factory--editTap">
            <div className="setting">
                <div className="setting--default setting--is-active">Default</div>
                <div className="setting--default">advanced</div>
            </div>
            <form className="factory--forms" onSubmit={(e) =>handleSubmit(e)}>
                {props.children}
            </form>
        </div>
    );
}
export default EditTab;