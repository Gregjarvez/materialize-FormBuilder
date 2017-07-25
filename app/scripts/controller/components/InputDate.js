import React from "react"
import FormFactory from "../FormFactory";
import Header from "./headerPartial";
import EditTab from "./EditTab";
import SettingBuild from "./setting";



class InputDate extends FormFactory {
    constructor(props) {
        super(props);
        this.state = {};

        this.setToolTip = this.setToolTip.bind(this);
        this.removeTooltip = this.removeTooltip.bind(this);
        this.destruct = this.destruct.bind(this);
        this.constructSetting = this.constructSetting.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentWillMount() {

        let {elementType, defaultClass} = this.props.config;
        return this.setState({
            type: elementType,
            defaultClass: defaultClass,
            disabled: false,
            tooltip: false
        });
    }
    
    render() {
        let buildConfig = [this.state, ["tooltip", "editTab"]]
        let BuildObject = Reflect.apply(this.constructSetting, null, buildConfig);
        return (
            <Header 
                    mouseIn={this.setToolTip}
                    mouseOut={this.removeTooltip}
                    id={this.props.id}
                    destruct={this.destruct}
                    visible={this.state.tooltip}
            >
                <input
                    type={this.state.type}
                    className="timepicker"
                    id={this.props.id}
                />
                <EditTab>
                    <SettingBuild state={BuildObject} onsubmit={this.handleSubmit}/>
                </EditTab>
            </Header>
        );
    }
}

export default InputDate;