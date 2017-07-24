import React from "react"
import FormFactory from "../FormFactory";
import Header from "./headerPartial";
import EditTab from "./EditTab";
import SettingBuild from "./setting";


class File extends FormFactory {
    constructor(props) {
        super(props);
        this.state = {};

        this.setToolTip = this.setToolTip.bind(this);
        this.removeTooltip = this.removeTooltip.bind(this);
        this.destruct = this.destruct.bind(this);
        this.constructSetting = this.constructSetting.bind(this);

    }

    componentWillMount() {
        let {elementType, defaultClass, action, label} = this.props.config;
        
        return this.setState({
            type: elementType,
            defaultClass: defaultClass,
            action: action,
            disabled: false,
            label: label,
            tooltip: false
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
                <form action={this.state.action}>
                    <div className="file-field input-field">
                        <div className="btn waves-effect waves-light">
                            <span>{this.state.label}</span>
                            <input type={this.state.type}/>
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text"/>
                        </div>
                    </div>
                </form>
                <EditTab onSubmit={this.handleSubmit}>
                    <SettingBuild state={BuildObject} />
                </EditTab>
            </Header>
        );
    }
}

export default File;