import React from "react";
import InputFactory from "../FormFactory.js"
import Header from "./headerPartial";
import EditTab from "./EditTab";
import SettingBuild from "./setting";


class InputComponent extends InputFactory {
    constructor(props) {
        super(props);
        this.state = {};



        this.setToolTip = this.setToolTip.bind(this);
        this.removeTooltip = this.removeTooltip.bind(this);
        this.destruct = this.destruct.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.constructSetting = this.constructSetting.bind(this);
    }

    componentWillMount() {
        let {
            elementType, defaultClass, placeHolder, value, required, disabled,
            subtype,label
        } = this.props.config;

        return this.setState({
            type: elementType,
            defaultClass: defaultClass,
            placeHolder: placeHolder,
            value: value,
            required: required,
            disabled: disabled,
            subtype: subtype,
            label: label,
            tooltip: false,
            editTab: false
        })
    };
    
    componentDidMount(){
        let el;
        this.textInput.focus();
        el = document.querySelector(`#${this.props.id}`);
        console.log(el.outerHTML.toString());
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
                editTap={this.state.editTab}
            >
                <div className="row">
                    <div className="input-field"  id={this.props.id}>
                        <input
                            placeholder={this.state.placeHolder}
                            type={this.state.type}
                            className={`validate ${this.state.defaultClass}`}
                            ref={(input) => this.textInput = input}
                            disabled={this.state.disabled === "true" ? "disabled": null}
                        />
                        <label htmlFor={this.props.id}>{this.state.label}</label>
                    </div>
                    <EditTab>
                        <SettingBuild state={BuildObject} onsubmit={this.handleSubmit}/>
                    </EditTab>
                </div>
            </Header>
        );
    }
}

export default InputComponent;
