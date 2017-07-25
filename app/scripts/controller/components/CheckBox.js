import React from "react"
import FormFactory from "../FormFactory";
import Header from "./headerPartial";
import EditTab from "./EditTab";
import SettingBuild from "./setting";

class CheckBox extends FormFactory {
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

        let {elementType, defaultClass, disabled, checked} = this.props.config;
        return this.setState({
            type: elementType,
            defaultClass: defaultClass,
            checked: checked,
            disabled: disabled,
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
                <p>
                    <input
                        type={this.state.type}
                        className="filled-in"
                        id={this.props.id}

                    />
                    <label htmlFor={this.props.id}>Filled in</label>
                </p>
                <EditTab>
                    <SettingBuild state={BuildObject} onsubmit={this.handleSubmit}/>
                </EditTab>
            </Header>
        );
    }
}

export default CheckBox;