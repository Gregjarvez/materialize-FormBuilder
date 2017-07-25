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
        value: "value",
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
        disabled: "disabled"
    },
    textarea: {
        elementType: "textarea",
        defaultClass: "factory--for-textarea",
        placeHolder: "Text Area",
        value: "Message",
        disabled: "disabled",
        wrap: ["hard", "soft"],
    },
    date: {
        elementType: "date",
        defaultClass:"factory--for-date"
    },
    file: {
        elementType: "file",
        defaultClass: "factory--for-file",
        disabled: false,
        action: null,
        label: "File"
    },
    checkbox: {
        elementType: "checkbox",
        defaultClass: "factory--for-checkbox",
        disabled: false,
        checked: false
    },
    radio: {
        elementType: "radio",
        defaultClass: "factory--for-radio",
        disabled: false,
        checked: false
    },
    select: {
        elementType: "select",
        defaultClass: "factory--for-select",
        option: ["option 1", "option 2","option 3", "option 4"]
    },
    number: {
        elementType: "number",
        defaultClass: "factory--for-number",
        value: 0
    }
};


export { ConfigObject};

