(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{908:function(t,e,n){"use strict";n.r(e);var o=n(164),r=n(265),c=n(63),l=n(650),d=n(641),m=n(652),v=n(637),f=n(140),_=n(649),h=n(639),I=n(111),k=n(80),y=n(90),x=n(643),O=(n(35),n(11),n(8),n(7),n(5),n(13),n(9),n(14),n(0)),w=(n(112),n(69));function D(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function $(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?D(Object(source),!0).forEach((function(e){Object(O.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):D(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j={data:function(){return{dialog:!1,dialogDelete:!1,editedIndex:-1,sortDesc:!0,headers:[{text:"ID",align:"start",sortable:!1,value:"id",class:"primary"},{text:"Name",align:"start",sortable:!1,value:"name",class:"primary"},{text:"SID",value:"sid",class:"primary"},{text:"Token",value:"token",class:"primary"},{text:"From Number",value:"phoneNumber",class:"primary"},{text:"Is Active?",value:"isActive",class:"primary"},{text:"Actions",value:"actions",class:"primary",sortable:!1}],editedItem:{id:"",name:"",sid:"",token:"",phoneNumber:"",isActive:!1},defaultItem:{id:"",name:"",sid:"",token:"",phoneNumber:"",isActive:!1}}},beforeMount:function(){this.$store.dispatch("fetch_sms_configurations")},methods:{updatedata:function(){this.$store.dispatch("fetch_sms_configurations")},editItem:function(t){this.editedIndex=this.smsconfigurations.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){this.editedIndex=this.smsconfigurations.indexOf(t),this.editedItem=Object.assign({},t),this.dialogDelete=!0},activateItem:function(t){var e=this;console.log(t),this.$store.dispatch("activate_sms_configuration",t).then((function(){e.updatedata()}))},deleteItemConfirm:function(){this.smsconfigurations.splice(this.editedIndex,1),this.closeDelete()},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},closeDelete:function(){var t=this;this.dialogDelete=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},save:function(){var t=this;this.editedIndex>-1?(this.$store.dispatch("update_sms_configuration",this.editedItem).then((function(){t.updatedata()})),this.close()):(delete this.editedItem.id,this.$store.dispatch("create_sms_configuration",this.editedItem).then((function(){t.updatedata()})),this.close())}},computed:$($({},Object(w.b)({smsconfigurations:"smsconfigurations"})),{},{formTitle:function(){return-1===this.editedIndex?"label.titles.newsmsconfigurations":"label.titles.updatesmsconfigurations"}}),watch:{dialog:function(t){t||this.close()},dialogDelete:function(t){t||this.closeDelete()}}},A=n(43),component=Object(A.a)(j,(function(){var t=this,e=t._self._c;return e(m.a,{staticClass:"elevation-1",attrs:{dense:"",headers:t.headers,items:t.smsconfigurations,"sort-by":"isActive","sort-desc":t.sortDesc},scopedSlots:t._u([{key:"top",fn:function(){return[e(k.a,{attrs:{flat:"",dark:"",color:"primary"}},[e(y.b,[t._v(t._s(t.$t("label.titles.smsconfigurations")))]),t._v(" "),e(h.a),t._v(" "),e(v.a,{attrs:{"max-width":"700px"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,c=n.attrs;return[t.isMdAndUp?e(o.a,t._g(t._b({staticClass:"button",attrs:{"x-large":"",dark:""}},"v-btn",c,!1),r),[e(f.a,{attrs:{small:""}},[t._v("mdi-plus")]),t._v("\n            "+t._s(t.$t("label.button.btnnewsmsconfig")))],1):e(o.a,t._g(t._b({staticClass:"button",attrs:{fab:"",dark:""}},"v-btn",c,!1),r),[e(f.a,[t._v("mdi-plus")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),e(r.a,[e(c.d,{staticClass:"primary"},[e("span",[t._v(t._s(t.$t(t.formTitle)))])]),t._v(" "),e(c.c,[e(d.a,[e(_.a,[e(l.a,{attrs:{cols:"12",sm:"6",md:"6"}},[e(I.a,{attrs:{label:"Name"},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",sm:"6",md:"6"}},[e(I.a,{attrs:{label:"SID",required:""},model:{value:t.editedItem.sid,callback:function(e){t.$set(t.editedItem,"sid",e)},expression:"editedItem.sid"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",sm:"6",md:"6"}},[e(I.a,{attrs:{label:"Token",required:""},model:{value:t.editedItem.token,callback:function(e){t.$set(t.editedItem,"token",e)},expression:"editedItem.token"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",sm:"6",md:"6"}},[e(I.a,{attrs:{label:"Phone number",required:""},model:{value:t.editedItem.phoneNumber,callback:function(e){t.$set(t.editedItem,"phoneNumber",e)},expression:"editedItem.phoneNumber"}})],1)],1)],1)],1),t._v(" "),e(c.a,[e(h.a),t._v(" "),e(o.a,{attrs:{color:"primary",small:""},on:{click:t.close}},[t._v("\n              "+t._s(t.$t("label.button.btncancel"))+"\n            ")]),t._v(" "),e(o.a,{attrs:{color:"warning",small:""},on:{click:t.save}},[t._v("\n              "+t._s(t.$t("label.button.btnsave"))+"\n            ")])],1)],1)],1),t._v(" "),e(v.a,{attrs:{"max-width":"500px",color:"red"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[e(r.a,[e(c.d,{staticClass:"subhead-1 pa-4"},[t._v("\n            "+t._s(t.$t("label.dialogs.deleteconfirmdialog")))]),t._v(" "),e(c.a,[e(h.a),t._v(" "),e(o.a,{attrs:{color:"primary"},on:{click:t.closeDelete}},[t._v(t._s(t.$t("label.button.btnno")))]),t._v(" "),e(o.a,{attrs:{color:"warning"},on:{click:t.deleteItemConfirm}},[t._v(t._s(t.$t("label.button.btnyes")))]),t._v(" "),e(h.a)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(n){var o=n.item;return[o.isActive?e(x.a,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,c=n.attrs;return[e(f.a,t._g(t._b({attrs:{color:"warning"},on:{click:function(e){return t.activateItem(o.id)}}},"v-icon",c,!1),r),[t._v("\n          mdi-circle\n        ")])]}}],null,!0)},[t._v(" "),e("span",[t._v(t._s(t.$t("label.tooltip.active")))])]):e(x.a,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,c=n.attrs;return[e(f.a,t._g(t._b({on:{click:function(e){return t.activateItem(o.id)}}},"v-icon",c,!1),r),[t._v("\n          mdi-power\n        ")])]}}],null,!0)},[t._v(" "),e("span",[t._v(t._s(t.$t("label.tooltip.activate")))])]),t._v(" "),e(f.a,{staticClass:"mr-2",on:{click:function(e){return t.editItem(o)}}},[t._v(" mdi-pencil ")]),t._v(" "),e(f.a,{on:{click:function(e){return t.deleteItem(o)}}},[t._v(" mdi-delete ")])]}},{key:"item.isActive",fn:function(n){return[n.item.isActive?e(f.a,{staticClass:"font-weight-black",attrs:{color:"primary"}},[t._v("\n      mdi-check\n    ")]):t._e()]}},{key:"no-data",fn:function(){return[e("p",[t._v("No Data available")])]},proxy:!0}],null,!0)})}),[],!1,null,null,null);e.default=component.exports}}]);