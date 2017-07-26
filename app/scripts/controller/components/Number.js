import React from "react"
import FormFactory from "../FormFactory";
import Header from "./headerPartial";
import EditTab from "./EditTab";
import SettingBuild from "./setting";
 
class Number extends FormFactory {
    constructor(props) {
        super(props);
        this.state = {};

        this.setToolTip = this.setToolTip.bind(this);
        this.removeTooltip = this.removeTooltip.bind(this);
        this.destruct = this.destruct.bind(this);
        this.constructSetting = this.constructSetting.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        let {elementType, defaultClass, value} = this.props.config;

        return this.setState({
            type: elementType,
            defaultClass: defaultClass,
            value: value,
            tooltip: false
        });
    }
    
    handleChange(e){
        return this.setState({value: e.target.value})    
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
                <div className={`input-field col s6 ${this.state.defaultClass}`}>
                    <input
                        type={this.state.type}
                        value={this.state.value}
                        onChange={(e) => this.handleChange(e)}
                    />
                </div>
                <EditTab>
                    <SettingBuild state={BuildObject} onsubmit={this.handleSubmit}/>
                </EditTab>
            </Header>
        );
    }
}

export default Number;
