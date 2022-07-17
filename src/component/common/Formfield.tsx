import React                        from "react";
import { FormFieldLableStyles }     from "../../constants/form-field-lable-style";
import { LableSizes }               from "../../constants/lable-size";

/*
**********************************************************************************
Interface
**********************************************************************************
*/

interface FormFieldProps{
    lable:          string;
    lableSize:      keyof typeof LableSizes;
    lableStyle:     keyof typeof FormFieldLableStyles;


}

/*
*************************************************************************************
COMPONENT
*************************************************************************************
*/


 class FormField extends React.Component<FormFieldProps,{}>{


   render(){
    let className   ="c-form-field";
    let props       = this.props;

    return(
        <div>
            <input 
            size    =   {props.lableSize}
            type    =   "text"
            value   =   {props.lable}>
                
            </input>
        </div>)

   }
}

export{
    FormFieldProps,
    FormField
}