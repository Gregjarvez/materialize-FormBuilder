import React from "react";
import {
    InputComponent,
    Button,
    TextArea,
    InputDate,
    File,
    CheckBox,
    Radio,
    Select,
    Number 
} from "./components/Components"


class FactoryBuild {

    static text() {
        return InputComponent
    }
    static button() {
        return Button
    }

    static textarea(){
        return TextArea
    }

    static date(){
        return InputDate
    }

    static file(){
        return File
    }

    static checkbox (){
        return CheckBox
    }

    static radio(){
        return Radio
    }


    static select(){
        return Select
    }

    static number (props){
        return Number
    }
}
export default FactoryBuild;