import React from "react";
import FormFactory from "../FormFactory";
import Header from "./headerPartial";
import EditTab from "./EditTab";
import SettingBuild from "./setting";


class Select extends FormFactory {
    constructor(props) {
        super(props);
        this.state = {};

        this.setToolTip = this.setToolTip.bind(this);
        this.removeTooltip = this.removeTooltip.bind(this);
        this.destruct = this.destruct.bind(this);
        this.constructSetting = this.constructSetting.bind(this);
    }

    componentDidMount() {
        return $('select').material_select();
    }

    componentWillMount() {
        let {elementType, defaultClass, option} = this.props.config;

        return this.setState({
            type: elementType,
            defaultClass: defaultClass,
            option: option,
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
                <div className="input-field col s12">
                    <select id={this.state.defaultClass} data-id={this.props.id}>
                        <option value="">Choose your option</option>
                        {
                            this.state.option.map((option, index) => {
                                return <option
                                    key={index}
                                    value={index}
                                >
                                    {option}
                                </option>
                            })
                        }
                    </select>
                </div>
                <EditTab onSubmit={this.handleSubmit}>
                    <SettingBuild state={BuildObject}/>
                </EditTab>
            </Header>
        );
    }
}

export default Select;