import React from "react"
import FormFactory from "../FormFactory";
import Header from "./headerPartial";
import EditTab from "./EditTab";
import SettingBuild from "./setting";


class TextArea extends FormFactory {
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
        let {elementType, defaultClass , placeHolder, wrap, value} = this.props.config;

        return this.setState({
            type: elementType,
            defaultClass: defaultClass,
            placeHolder: placeHolder,
            value: value,
            disabled: false,
            wrap: wrap,
            tooltip: false,
            editTab: false
        });
    }
    
    render() {
        let buildConfig = [this.state, ["tooltip", "editTab"]];
        let BuildObject = Reflect.apply(this.constructSetting, null, buildConfig);
        return (
            <Header
                mouseIn={this.setToolTip}
                mouseOut={this.removeTooltip}
                id={this.props.id}
                destruct={this.destruct}
                visible={this.state.tooltip}
                 >
                <div className="row">
                    <div className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <textarea
                                    id={this.props.id}
                                    className={`materialize-textarea ${this.state.defaultClass}`}
                                >
                                </textarea>
                                <label htmlFor={this.props.id}>{this.state.placeHolder}</label>
                            </div>
                            <EditTab>
                                <SettingBuild state={BuildObject} onsubmit={this.handleSubmit}/>
                            </EditTab>
                        </div>
                    </div>
                </div>
            </Header>
        )
    }
}
export default TextArea;