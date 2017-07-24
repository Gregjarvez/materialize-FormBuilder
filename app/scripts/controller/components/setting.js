import React from "react";

class SettingBuild extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.state;

        this.updateFormField = this.updateFormField.bind(this);
    }

    updateFormField(e, state) {
        return this.setState({[state]: e.target.value})
    }

    render() {
        let Build = Reflect.ownKeys(this.props.state);

        return (
            <div>
                <ul className="setting--config">
                    <li>
                        <span>Type: </span>
                        <div className="setting--text">
                            {this.state.type}
                        </div>
                    </li>
                    <li>
                        <span className="setting--text">Class Name:</span>
                        <input
                            type="text"
                            className="browser-default setting--input-text"
                            onChange={(e) => this.updateFormField(e, "defaultClass")}
                            value={this.state.defaultClass.trim()}
                        />
                    </li>
                    {
                        Build.includes("placeHolder") &&
                        <li>
                            <span className="setting--text">PlaceHolder:</span>
                            <input
                                type="text"
                                className="browser-default setting--input-text"
                                onChange={(e) => this.updateFormField(e, "placeHolder")}
                                value={this.state.placeHolder}
                            />
                        </li>
                    }
                    {
                        Build.includes("value")  &&
                        <li>
                            <span className="setting--text">Value:</span>
                            <input
                                type="text"
                                className="browser-default setting--input-text"
                                onChange={(e) => this.updateFormField(e, "value")}
                                value={this.state.value}
                            />
                        </li>
                    }
                    {
                        Build.includes("disabled") &&
                        <li>
                            <span className="setting--text">Disabled:</span>
                            <select
                                className="browser-default setting--select"
                                value={this.state.disabled}
                                onChange={e => this.updateFormField(e, "disabled")}
                            >
                                <option value="">false</option>
                                <option value="true">True</option>
                            </select>
                        </li>
                    }
                    {
                        Build.includes("label") &&
                        <li>
                            <span className="setting--text">Label: </span>
                            <input
                                type="text"
                                className="browser-default setting--input-text"
                                onChange={(e) => this.updateFormField(e, "label")}
                                value={this.state.label}
                            />
                        </li>
                    }
                    {
                        Build.includes("subtype") &&
                        <li>
                            <span className="setting--text">Subtype:</span>
                            <select
                                className="browser-default setting--select"
                                onChange={e => this.updateFormField(e, "type")}
                            >
                                {
                                    this.props.state.subtype.map((each) => {
                                        return <option key={each} value={each}>{each}</option>
                                    })
                                }
                            </select>
                        </li>
                    }
                    {
                       Build.includes("wrap") &&
                        <li>
                            <span className="setting--text">Wrap:</span>
                            <select
                                className="browser-default setting--select"
                                onChange={e => this.updateFormField(e, "wrap")}
                            >
                                {
                                    this.props.state.wrap.map((each) => {
                                        return <option key={each} value={each}>{each}</option>
                                    })
                                }
                            </select>
                        </li>
                    }
                    {
                        Build.includes("value") &&
                        <li>
                            <p className="setting--paragraph">
                                <input type="checkbox"
                                       id="required"
                                       className="filled-in"
                                       onChange={(e) => this.updateFormField(e, "required")}
                                />
                                <label htmlFor="required">Required</label>
                            </p>
                        </li>
                    }

                </ul>
                <div
                    onClick={() => this.props.onsubmit(this.state)}
                    className="setting--button"
                >
                    Save
                </div>
            </div>

        );
    }
}

export default SettingBuild;