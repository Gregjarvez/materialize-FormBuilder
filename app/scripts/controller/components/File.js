import React from "react"
import FormFactory from "../FormFactory"
import Header from "./headerPartial"
import EditTab from "./EditTab"
import SettingBuild from "./setting"


class File extends FormFactory {
    constructor(props) {
        super(props)
        this.state = {}

        this.setToolTip = this.setToolTip.bind(this)
        this.removeTooltip = this.removeTooltip.bind(this)
        this.destruct = this.destruct.bind(this)
        this.constructSetting = this.constructSetting.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.toggleEdit = this.toggleEdit.bind(this)

    }

    componentWillMount() {
        let {elementType, defaultClass, action, label} = this.props.config
        
        return this.setState({
            type: elementType,
            defaultClass: defaultClass,
            action: action,
            disabled: false,
            label: label,
            tooltip: false
        })
    }

    render() {
        let buildConfig = [this.state, ["tooltip", "editTab"]]
        let BuildObject = Reflect.apply(this.constructSetting, null, buildConfig)
        return (
            <Header 
                    mouseIn={this.setToolTip}
                    mouseOut={this.removeTooltip}
                    id={this.props.id}
                    destruct={this.destruct}
                    visible={this.state.tooltip}
                    toggleEdit={this.toggleEdit}
            >
                <form>
                    <div className="file-field input-field" id={this.props.id}>
                        <div className="btn waves-effect waves-light">
                            <span>{this.state.label}</span>
                            <input type={this.state.type} disabled={this.state.disabled}/>
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text" disabled={this.state.disabled}/>
                        </div>
                    </div>
                </form>
                {
                    this.state.editTab &&
                    <EditTab>
                        <SettingBuild state={BuildObject} onsubmit={this.handleSubmit}/>
                    </EditTab>
                }
            </Header>
        )
    }
}

export default File