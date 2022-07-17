import { CoreUtils }      from "@utils/core-utils";
import { StringUtils }          from "@utils/string";
import { BaseComponent }        from "kop-classes/base-component";
import { Alignment }            from "kop-constants/alignment";
import { Colors }               from "kop-constants/color";
import * as React               from "react";
import { LabelSizes }           from "../_constants/label-sizes";
import { LabelTypes }           from "../_constants/label-types";
/*-----------------------------------------------------------------------------------------Interfaces-----------------------------------------------------------------------------------------*/
// #region Interfaces
interface LabelProps {    defaultValue?:       string;    align?:              keyof typeof Alignment;    ariaLevel?:          number;    color?:              keyof typeof Colors;    cssClassName?:       string;    dangerouslySetHtml?: boolean;    htmlFor?:            string;    rawHtml?:            string;    role?:               string;    size?:               keyof typeof LabelSizes;    themed?:             boolean;    type?:               keyof typeof LabelTypes;    id?:                 string}
// #endregion Interfaces
/*-----------------------------------------------------------------------------------------Component-----------------------------------------------------------------------------------------*/
// #region Component
class Label extends BaseComponent<LabelProps, {}> {
    /*    -----------------------------------------------------------------------------------------    Properties    -----------------------------------------------------------------------------------------    */
    // #region Properties
    private _cssClassName: string;    private _rawHtml:      { __html: string };
    // #endregion Properties
    /*    -----------------------------------------------------------------------------------------    Constructor    -----------------------------------------------------------------------------------------    */
    // #region Constructor
    constructor(props: LabelProps) {        super(props);    }
    // #endregion Constructor
    /*    -----------------------------------------------------------------------------------------    Public Methods    -----------------------------------------------------------------------------------------    */
    // #region Public Methods
    public render(): JSX.Element {        this._cssClassName  = "";
     if (CoreUtils.isNotNullOrUndefined(this.props.cssClassName)) {            this._cssClassName += ` ${this.props.cssClassName}`;        }
     if (CoreUtils.isNotNullOrUndefined(this.props.size)) {            this._cssClassName += ` ${this.props.size}`;        }
 if (CoreUtils.isNotNullOrUndefined(this.props.type)) {            this._cssClassName += ` ${this.props.type}`;        }
     if (CoreUtils.isNotNullOrUndefined(this.props.color)) {            this._cssClassName += ` ${this.props.color}`;        }
 if (CoreUtils.isNotNullOrUndefined(this.props.align)) {            this._cssClassName += ` ${this.props.align}`;        }
 if (this.props.themed) {            this._cssClassName += " -themed";        }
 if (this.props.dangerouslySetHtml && CoreUtils.isNotNullOrUndefined(this.props.rawHtml)) {            const cleanHtml = StringUtils.removeScriptTags(this.props.rawHtml);            this._rawHtml   = CoreUtils.stringHasValue(cleanHtml) ? { __html: cleanHtml } : null;        }
        return (            <label id  =   {this.props.id}                defaultValue =   {this.props.defaultValue}                aria-level   =   { this.props.ariaLevel }                className    =   { this._cssClassName }                htmlFor      =   { this.props.htmlFor }                role         =   { this.props.role }                { ...CoreUtils.isNotNullOrUndefined(this.props.dangerouslySetHtml) && { dangerouslySetInnerHTML: this._rawHtml } }>                { CoreUtils.isNullOrUndefined(this.props.rawHtml) ? this.props.children : null }            </label>        );    }
    // #endregion Public Methods}
// #endregion Component
export {    Label,    LabelProps,};
