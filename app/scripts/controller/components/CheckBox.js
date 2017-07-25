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
    
    handleChecked(e){
        return this.setState({checked: e.target.checked})
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
                <p id={this.props.id}>
                    <input
                        type={this.state.type}
                        className="filled-in"
                        disabled={this.state.disabled}
                        onChange={(e) => this.handleChecked(e)}
                        checked={this.state.checked}
                        id="checkbox"
                        value=""
                    />
                    <label htmlFor="checkbox">Filled in</label>
                </p>
                <EditTab>
                    <SettingBuild state={BuildObject} onsubmit={this.handleSubmit}/>
                </EditTab>
            </Header>
        );
    }
}

export default CheckBox;