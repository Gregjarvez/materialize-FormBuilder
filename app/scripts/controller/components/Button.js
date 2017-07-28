import React from "react"import FormFactory from "../FormFactory"import Header from "./headerPartial"import EditTab from "./EditTab"import SettingBuild from "./setting"class Button extends FormFactory {    constructor(props) {        super(props)        this.state = {}        this.setToolTip = this.setToolTip.bind(this)        this.removeTooltip = this.removeTooltip.bind(this)        this.destruct = this.destruct.bind(this)        this.constructSetting = this.constructSetting.bind(this)        this.handleSubmit = this.handleSubmit.bind(this)        this.toggleEdit = this.toggleEdit.bind(this)    }    componentWillMount() {        let {elementType, defaultClass, disabled, label,} = this.props.config        return this.setState({            type: elementType,            defaultClass: defaultClass,            disabled: disabled,            label: label,            tooltip: false,            editTab: false        })    }    render() {        let buildConfig = [this.state, ["tooltip", "editTab"]]        let BuildObject = Reflect.apply(this.constructSetting, null, buildConfig)        return (            <Header                mouseIn={this.setToolTip}                mouseOut={this.removeTooltip}                id={this.props.id}                destruct={this.destruct}                visible={this.state.tooltip}                toggleEdit={this.toggleEdit}            >                <div id={this.props.id}>                    <button                        className={`btn waves-effect waves-light ${this.state.defaultClass}`}                        type={this.state.elementType}                        disabled={this.state.disabled}                    >                        {this.state.label}                    </button>                </div>                {                    this.state.editTab &&                    <EditTab>                        <SettingBuild state={BuildObject} onsubmit={this.handleSubmit}/>                    </EditTab>                }            </Header>        )    }}export default Button