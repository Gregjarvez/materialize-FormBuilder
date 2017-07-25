/*
 {name: "text Field", icon: "fa fa-text-width"},
 {name: "Button", icon: "fa fa-bars"},
 {name: "Text Area", icon: "fa fa-text-height"},
 {name: "Date Field", icon: "fa fa-calendar"},
 {name: "File Uploader", icon: "fa fa-upload"},
 {name: "CheckBox Group", icon: "fa fa-square-o"},
 {name: "Radio Group", icon: "fa fa-circle-o"},
 {name: "Select", icon: "fa fa-table"},
 {name: "Number", icon: "fa fa-sort-numeric-asc"},
 {name: "Paragraph", icon: "fa fa-paragraph"},

 */

const ConfigObject = {
    text: {
        elementType: "text",
        defaultClass: "factory--for-text",
        placeHolder: "placeholder",
        required: "required",
        disabled: "disabled",
        subtype: [ "text", "email", "password"],
        label: "Input Name"
    },
    button: {
        elementType: "submit",
        defaultClass: "factory--for-button",
        label: "Button",
        disabled: ""
    },
    textarea: {
        elementType: "textarea",
        defaultClass: "factory--for-textarea",
        placeHolder: "Text Area",
        disabled: "",
        wrap: "hard"
    },
    date: {
        elementType: "date",
        defaultClass:"factory--for-date"
    },
    file: {
        elementType: "file",
        defaultClass: "factory--for-file",
        disabled: "",
        label: "File"
    },
    checkbox: {
        elementType: "checkbox",
        defaultClass: "factory--for-checkbox",
        disabled: "",
        checked: ""
    },
    radio: {
        elementType: "radio",
        defaultClass: "factory--for-radio",
        disabled: "",
        checked: ""
    },
    select: {
        elementType: "select",
        defaultClass: "factory--for-select",
        option: Array(3).fill()
    },
    number: {
        elementType: "number",
        defaultClass: "factory--for-number",
        value: 0
    }
};


export { ConfigObject};

