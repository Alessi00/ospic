(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{872:function(t,e,n){"use strict";n.r(e);var o=n(0),r=(n(29),n(51),n(10),n(9),n(7),n(5),n(13),n(8),n(14),n(83));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={data:function(){return{dialog:!1,role:0,editedIndex:-1,departmentId:null,headers:[{text:"ID",align:"start",sortable:!1,value:"id",class:"primary"},{text:"Name",align:"start",sortable:!1,value:"name",class:"primary"},{text:"Value",value:"value",class:"primary"},{text:"Active",value:"active",class:"primary"},{text:"Actions",value:"actions",class:"primary",sortable:!1}],editedItem:{id:"",name:"",value:!1,email:"",code:null},defaultItem:{id:"",name:"",value:!1,email:"",code:null},config:{configurationValue:0,configurationId:0},valid:!0,nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length>5||"Name must be less than 5 characters"}],emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}]}},created:function(){this.$store.dispatch("get_configurations")},methods:{editItem:function(t){this.dialog=!0,this.config.configurationId=t.id,this.config.configurationValue=parseInt(t.value)},close:function(){this.dialog=!1},edit:function(){this.config.configurationValue=parseInt(this.config.configurationValue),this.$store.dispatch("update_configuration",this.config),this.close()},updatestatus:function(t){var e=this,n={action:t.active?"deactivate":"activate",id:t.id};this.$store.dispatch("update_configuration_status",n).then((function(){setTimeout((function(){return e.$store.dispatch("get_configurations")}),e.delay_seconds)}))}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)({configurations:"configurations"})),watch:{dialog:function(t){var e=this;t||this.close(),setTimeout((function(){return e.$store.dispatch("get_configurations")}),this.delay_seconds)},dialogDelete:function(t){t||this.closeDelete()}}},d=l,v=n(42),f=n(50),m=n.n(f),h=n(159),_=n(260),y=n(60),V=n(619),x=n(604),O=n(265),k=n(137),w=n(243),C=n(608),j=n(113),$=n(78),I=n(91),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.configurations?n("v-data-table",{staticClass:"elevation-1",attrs:{dense:"",headers:t.headers,items:t.configurations,"sort-by":"id"},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:"",color:"primary",dark:""}},[n("v-toolbar-title",[t._v(t._s(t.$t("label.titles.globalconfigurations")))]),t._v(" "),n("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-dialog",{attrs:{"max-width":"500px",color:"red"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-toolbar-title",{staticClass:"primary",attrs:{flat:""}},[n("v-card-title",{staticClass:"subhead-1 pa-4 white--text"},[t._v("\n                "+t._s(t.$t("label.dialogs.editconfigurationvalue")))])],1),t._v(" "),n("v-card-text",{staticClass:"mt-2"},[n("v-text-field",{attrs:{type:"number",label:"Configuration value",min:"0",filled:""},model:{value:t.config.configurationValue,callback:function(e){t.$set(t.config,"configurationValue",e)},expression:"config.configurationValue"}})],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.dialog=!t.dialog}}},[t._v(t._s(t.$t("label.button.decline")))]),t._v(" "),n("v-btn",{attrs:{color:"warning"},on:{click:t.edit}},[t._v(t._s(t.$t("label.button.btnsave")))])],1)],1)],1)],1)]},proxy:!0},{key:"item.active",fn:function(e){return[e.item.active?n("v-icon",{staticClass:"font-weight-black",attrs:{color:"primary"}},[t._v("\n        mdi-check\n      ")]):n("v-icon",{staticClass:"font-weight-black",attrs:{small:"",color:"primary"}},[t._v("\n        mdi-close\n      ")])]}},{key:"item.actions",fn:function(e){var o=e.item;return[n("v-icon",{staticClass:"mr-2",on:{click:function(e){return t.editItem(o)}}},[t._v(" mdi-pencil ")]),t._v("\n       \n      "),n("v-btn",{staticClass:"white--text",attrs:{small:"",elevation:"0",color:o.active?"red darken-2":"primary"},on:{click:function(e){return t.updatestatus(o)}}},[o.active?n("v-icon",{attrs:{small:"",left:""}},[t._v(" mdi-close")]):n("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-check")]),t._v("\n        "+t._s(o.active?t.$t("label.button.close"):t.$t("label.button.activate"))+"\n      ")],1)]}},{key:"no-data",fn:function(){return[n("p",[t._v("No Data available")])]},proxy:!0}],null,!0)}):n("v-progress-circular",{attrs:{size:"52",color:"indigo",indeterminate:""}})],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:h.a,VCard:_.a,VCardActions:y.a,VCardText:y.c,VCardTitle:y.d,VDataTable:V.a,VDialog:x.a,VDivider:O.a,VIcon:k.a,VProgressCircular:w.a,VSpacer:C.a,VTextField:j.a,VToolbar:$.a,VToolbarTitle:I.b})}}]);