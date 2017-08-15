"use strict";import React, { Component } from "react";import Materialize from "materialize-css";import { ConfigObject } from "./controller/ConfigType";import Utilities from "./controller/Utilities";import Display from "./controller/Display";import FactoryBuild from "./controller/Factory";require("../sass/app.scss");class App extends Component {  constructor ( props ) {    super(props);    this.state = {      all    : [],      tooltip: false,      editTab: false,    };    this.OnUtilityClick = this.OnUtilityClick.bind(this);    this.deleteComponent = this.deleteComponent.bind(this);    this.updateAll = this.updateAll.bind(this);    this.concatAll = this.concatAll.bind(this);  }  componentDidMount () {    let components = Reflect.ownKeys(ConfigObject);    components.forEach(each => {      return this.setState(() => {        return { [each]: [] }      });    });  }  concatAll () {    let state = this.state;    let allArray = [];    for ( let entity in state ) {      if ( state.hasOwnProperty(entity) && entity !== "all" ) {        allArray.push(...state[ entity ])      }    }    return allArray;  }  updateAll () {    let all = this.concatAll();    return this.setState({      all: all    });  }  OnUtilityClick ( type ) {    let temp, typeLength, object, all;    let currentBuildConfiguration = Reflect.get(ConfigObject, type);    let FormComponent = FactoryBuild[ type ](currentBuildConfiguration);    temp = this.state[ type ];    typeLength = temp.length;    object = {      embeddedComponent: FormComponent,      configuration    : currentBuildConfiguration,      id               : `${type}-${typeLength}`    };    temp.push(object);    all = this.state.all;    all.push(object);    this.setState({ all });    this.setState({ [type]: temp });  };  deleteComponent ( id ) {    let [ type ] = id.split("-");    let typeState = this.state[ type ];    let index = typeState.findIndex(( each ) => each.id === id);    typeState.splice(index, 1);    this.setState({ [type]: typeState }, () => {      this.updateAll();    });  }  render () {    const utilProps = {      Onclick: this.OnUtilityClick    };    return (      <div className="container">        <div className="header">          <h2 className="header--title">FORM BUILDER</h2>          <p className="header--subtitle">            <strong>Full-featured</strong>            Form Editing          </p>        </div>        <div className="playground">          <Utilities funcs={ utilProps }/>          <Display            components={ this.state.all }            del={ this.deleteComponent }          />        </div>      </div>    );  }}export default App;