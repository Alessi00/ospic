(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{657:function(t,e,n){"use strict";var r=n(55),o=n(3);e.a=o.default.extend({name:"rippleable",directives:{ripple:r.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}})},658:function(t,e,n){"use strict";var r=n(0),o=(n(36),n(60),n(216),n(7),n(5),n(9),n(50),n(53),n(11),n(8),n(13),n(14),n(6)),l=n(101),c=n(119);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:d({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},659:function(t,e,n){var content=n(661);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("2e2bc7da",content,!0,{sourceMap:!1})},660:function(t,e,n){"use strict";n.d(e,"b",(function(){return h}));n(5),n(70),n(7);var r=n(85),o=n(657),l=n(173),c=n(6);function h(t){t.preventDefault()}e.a=Object(c.a)(r.a,o.a,l.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=r.a.options.methods.genLabel.call(this);return label?(label.data.on={click:h},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:h},ref:"input"})},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown:function(t){}}})},661:function(t,e,n){var r=n(16)(!1);r.push([t.i,'.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:inherit}.v-input--selection-controls.v-input--is-disabled:not(.v-input--is-readonly){pointer-events:none}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),t.exports=r},760:function(t,e,n){"use strict";n.r(e);var r=n(164),o=n(265),l=n(63),c=n(650),h=n(641),d=n(652),v=n(637),m=n(268),f=n(658),_=n(140),w=n(247),y=n(649),x=n(178),k=n(639),O=(n(11),n(8),n(7),n(5),n(13),n(9),n(14),n(91)),C=n(0),$=(n(175),n(176),n(659),n(829),n(660)),I=n(85),S=n(288),j=n(113),A=n(1),V=["title"];function P(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function D(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(e){Object(C.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var B=$.a.extend({name:"v-switch",directives:{Touch:S.a},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return D(D({},I.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(O.a)(t,V));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",D(D({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",D({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",D({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(j.c,{},[!1===this.loading?null:this.$slots.progress||this.$createElement(w.a,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===A.z.left&&this.isActive||t.keyCode===A.z.right&&!this.isActive)&&this.onChange()}}}),E=n(111),z=n(80),T=n(90),M=n(643),F=(n(27),n(215),n(35),n(50),{props:{services:{type:Array,default:null}},data:function(){return{dialog:!1,search:"",sortDesc:!1,editedIndex:-1,valid:!0,switch1:!0,headers:[{text:"ID",value:"id",sortable:!0,class:"primary"},{text:"Name",value:"name",class:"primary"},{text:"Is Active",value:"isActive",class:"primary",sortable:!1},{text:"Price",value:"price",class:"primary"},{text:"Service type",value:"serviceTypeName",class:"primary"},{text:"Actions",value:"actions",class:"primary",sortable:!1}],editedItem:{id:"",name:"",price:0,medicalServiceType:0,units:""},defaultItem:{id:"",name:"",price:0,medicalServiceType:0,units:""}}},methods:{handleClick:function(t){this.$router.push("roles/"+t.id)},editItem:function(t){this.editedIndex=this.services.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1,t.$emit("update")}))},enableDisableService:function(t){var e=this,data={id:t.id,action:t.isActive?"enable":"disable"};t.isActive,this.$store.dispatch("enable_disable_medical_service",data).then((function(t){setTimeout((function(){return e.$emit("update")}),e.delay_seconds)}))},deleteItem:function(t){var e=this;this.$store.dispatch("delete_medical_service",t).then((function(t){setTimeout((function(){return e.$emit("update")}),e.delay_seconds)}))},save:function(){this.editedIndex>-1?(console.log(this.editedItem),this.$store.dispatch("update_medical_service",this.editedItem)):(delete this.editedItem.id,this.$store.dispatch("create_new_medical_service",this.editedItem)),this.close()}},computed:{formTitle:function(){return-1===this.editedIndex?"label.titles.newservice":"label.titles.editservice"},routename:function(){return this.$route.params.service}}}),L=n(43),component=Object(L.a)(F,(function(){var t=this,e=t._self._c;return e(o.a,{staticClass:"mx-auto"},[t.services?e(d.a,{staticClass:"default",attrs:{dense:"",headers:t.headers,items:t.services,search:t.search,"sort-by":"isActive","sort-desc":t.sortDesc,"mobile-breakpoint":"100"},scopedSlots:t._u([{key:"top",fn:function(){return[e(z.a,{attrs:{flat:"",dark:"",color:"primary"}},[e(T.b,[t._v(t._s(t.$t("label.titles.servicetypesmanagement")))]),t._v(" "),e(m.a,{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),e("h3",[t._v(t._s(t.routename))]),t._v(" "),e(k.a),t._v(" "),e(k.a),t._v(" "),e(x.a,{attrs:{items:t.servicetypes,"item-text":"name","item-value":"name",chips:"","small-chips":"",rules:[function(t){return!!t||"You must select one to continue!"}],label:"Filter by service types",required:"","persistent-hint":"","single-line":""},on:{click:t.fetch_medical_service_types,change:t.filter_medical_services}}),t._v(" "),e(k.a),t._v(" "),e(v.a,{attrs:{"max-width":"700px"},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,l=n.attrs;return[t.isMdAndUp?e(r.a,t._g(t._b({staticClass:"button",attrs:{"x-large":""}},"v-btn",l,!1),o),[e(_.a,{attrs:{small:"",left:""}},[t._v("mdi-plus")]),t._v("\n              "+t._s(t.$t("label.button.btnaddnewservice")))],1):e(r.a,t._g(t._b({staticClass:"mb-2 button",attrs:{fab:"",small:"",dark:""}},"v-btn",l,!1),o),[e(_.a,[t._v("mdi-plus")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),e(o.a,[e(l.d,{staticClass:"primary"},[e("span",[t._v(t._s(t.$t(t.formTitle)))])]),t._v(" "),e(l.c,[e(h.a,[e(f.a,{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(y.a,[e(c.a,{attrs:{cols:"12",sm:"12",md:"6"}},[e(E.a,{attrs:{label:"Service name",required:""},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1),t._v(" "),e(c.a,{attrs:{cols:"12",sm:"12",md:"6"}},[e(E.a,{attrs:{label:"Price",required:"",type:"number",min:"0"},model:{value:t.editedItem.price,callback:function(e){t.$set(t.editedItem,"price",e)},expression:"editedItem.price"}})],1),t._v(" "),e(c.a,{attrs:{cols:"12",sm:"12",md:"6"}},[e(x.a,{attrs:{items:t.servicetypes,"item-text":"name","item-value":"id",chips:"","small-chips":"",rules:[function(t){return!!t||"You must select one to continue!"}],label:"Service types",required:"","persistent-hint":"","single-line":""},on:{click:t.fetch_medical_service_types},model:{value:t.editedItem.medicalServiceType,callback:function(e){t.$set(t.editedItem,"medicalServiceType",e)},expression:"editedItem.medicalServiceType"}})],1),t._v(" "),e(c.a,{attrs:{cols:"12",sm:"6",md:"6"}},[e(x.a,{attrs:{items:t.measures,"item-text":"unit","item-value":"symbol",chips:"","small-chips":"",rules:[function(t){return!!t||"You must select one to continue!"}],label:"Measure unit",required:"","persistent-hint":"","single-line":""},on:{click:t.fetch_measures},model:{value:t.editedItem.units,callback:function(e){t.$set(t.editedItem,"units",e)},expression:"editedItem.units"}})],1)],1)],1)],1)],1),t._v(" "),e(l.a,[e(k.a),t._v(" "),e(r.a,{attrs:{color:"primary",small:""},on:{click:t.close}},[t._v("\n                "+t._s(t.$t("label.button.btncancel"))+"\n              ")]),t._v(" "),e(r.a,{attrs:{color:"warning",small:""},on:{click:t.save}},[t._v("\n                "+t._s(t.$t("label.button.btnsave"))+"\n              ")])],1)],1)],1)],1)]},proxy:!0},{key:"item.isActive",fn:function(n){return[n.item.isActive?e(M.a,{attrs:{right:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e(_.a,t._g(t._b({attrs:{small:"",color:"red lighten-2"}},"v-icon",o,!1),r),[t._v("mdi-check")])]}}],null,!0)},[t._v(" "),e("span",[t._v("Active")])]):e("div")]}},{key:"item.actions",fn:function(n){var r=n.item;return[e("td",{on:{click:function(t){t.stopPropagation()}}},[e(_.a,{staticClass:"mr-2",on:{click:function(e){return t.editItem(r)}}},[t._v(" mdi-pencil ")])],1),t._v(" "),e("td",{on:{click:function(t){t.stopPropagation()}}},[e(_.a,{staticClass:"mr-2",attrs:{color:"red"},on:{click:function(e){return t.deleteItem(r.id)}}},[t._v("\n          mdi-trash-can\n        ")])],1),t._v(" "),e("td",{on:{click:function(t){t.stopPropagation()}}},[e(B,{attrs:{inset:"",dense:"",color:"green lighten-1"},on:{change:function(e){return t.enableDisableService(r)}},model:{value:r.isActive,callback:function(e){t.$set(r,"isActive",e)},expression:"item.isActive"}})],1)]}},{key:"no-data",fn:function(){return[e("p",{staticClass:"mt-2"},[t._v(t._s(t.$t("label.message.nodataavailable")))])]},proxy:!0}],null,!0)}):e(w.a,{attrs:{size:"52",color:"primary",indeterminate:""}})],1)}),[],!1,null,null,null);e.default=component.exports},829:function(t,e,n){var content=n(830);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("beda1088",content,!0,{sourceMap:!1})},830:function(t,e,n){var r=n(16)(!1);r.push([t.i,".theme--light.v-input--switch .v-input--switch__thumb{color:#fff}.theme--light.v-input--switch .v-input--switch__track{color:rgba(0,0,0,.38)}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#fafafa!important}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:rgba(0,0,0,.12)!important}.theme--dark.v-input--switch .v-input--switch__thumb{color:#bdbdbd}.theme--dark.v-input--switch .v-input--switch__track{color:hsla(0,0%,100%,.3)}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#424242!important}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:hsla(0,0%,100%,.1)!important}.v-input--switch__thumb,.v-input--switch__track{background-color:currentColor;pointer-events:none;transition:inherit}.v-input--switch__track{border-radius:8px;width:36px;height:14px;left:2px;position:absolute;opacity:.6;right:2px;top:calc(50% - 7px)}.v-input--switch__thumb{border-radius:50%;top:calc(50% - 10px);height:20px;position:relative;width:20px;display:flex;justify-content:center;align-items:center;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-input--switch .v-input--selection-controls__input{width:38px}.v-input--switch .v-input--selection-controls__ripple{top:calc(50% - 24px)}.v-input--switch.v-input--dense .v-input--switch__thumb{width:18px;height:18px}.v-input--switch.v-input--dense .v-input--switch__track{height:12px;width:32px}.v-input--switch.v-input--dense.v-input--switch--inset .v-input--switch__track{height:22px;width:44px;top:calc(50% - 12px);left:-3px}.v-input--switch.v-input--dense .v-input--selection-controls__ripple{top:calc(50% - 22px)}.v-input--switch.v-input--is-dirty.v-input--is-disabled{opacity:.6}.v-application--is-ltr .v-input--switch .v-input--selection-controls__ripple{left:-14px}.v-application--is-ltr .v-input--switch.v-input--dense .v-input--selection-controls__ripple{left:-12px}.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)}.v-application--is-rtl .v-input--switch .v-input--selection-controls__ripple{right:-14px}.v-application--is-rtl .v-input--switch.v-input--dense .v-input--selection-controls__ripple{right:-12px}.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(-20px)}.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-input--switch--inset .v-input--selection-controls__input,.v-input--switch--inset .v-input--switch__track{width:48px}.v-input--switch--inset .v-input--switch__track{border-radius:14px;height:28px;left:-4px;opacity:.32;top:calc(50% - 14px)}.v-application--is-ltr .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset .v-input--switch__thumb{transform:translate(0)!important}.v-application--is-rtl .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset .v-input--switch__thumb{transform:translate(-6px)!important}.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)!important}.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(-26px)!important}",""]),t.exports=r}}]);