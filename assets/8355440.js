(window.webpackJsonp=window.webpackJsonp||[]).push([[65,34,36],{643:function(t,e,n){var content=n(672);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("a88801d0",content,!0,{sourceMap:!1})},652:function(t,e,n){t.exports=n.p+"img/icon.48b0ae1.png"},653:function(t,e,n){t.exports=n.p+"img/logo.17bb66c.png"},671:function(t,e,n){"use strict";n(643)},672:function(t,e,n){var r=n(17),l=n(213),o=n(652),c=n(653),d=r(!1),v=l(o),m=l(c);d.push([t.i,"#invoice-POS[data-v-83006aa0]{box-shadow:0 0 1in -.25in rgba(0,0,0,.5);padding:2mm;margin:0 auto;width:100%;background:#fff;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#invoice-POS[data-v-83006aa0] ::-moz-selection{background:#f31544;color:#fff}#invoice-POS[data-v-83006aa0] ::selection{background:#f31544;color:#fff}#invoice-POS[data-v-83006aa0] ::moz-selection{background:#f31544;color:#fff}#invoice-POS h1[data-v-83006aa0]{font-size:1.5em;color:#222}#invoice-POS h2[data-v-83006aa0]{font-size:.9em}#invoice-POS h3[data-v-83006aa0]{font-size:1.2em;font-weight:300;line-height:2em}#invoice-POS p[data-v-83006aa0]{font-size:.8em;color:#666;line-height:1.2em}#invoice-POS #bot[data-v-83006aa0],#invoice-POS #mid[data-v-83006aa0],#invoice-POS #top[data-v-83006aa0]{border-bottom:1px solid #eee}#invoice-POS #top[data-v-83006aa0]{min-height:100px}#invoice-POS #mid[data-v-83006aa0]{min-height:80px}#invoice-POS #bot[data-v-83006aa0]{min-height:50px}#invoice-POS #top .logo[data-v-83006aa0]{height:60px;width:60px;background:url("+v+") no-repeat;background-size:60px 60px}#invoice-POS .clientlogo[data-v-83006aa0]{float:left;height:60px;width:60px;background:url("+m+") no-repeat;background-size:60px 60px;border-radius:50px}#invoice-POS .info[data-v-83006aa0]{display:block;margin-left:0}#invoice-POS .title[data-v-83006aa0]{float:right}#invoice-POS .title p[data-v-83006aa0]{text-align:right}#invoice-POS table[data-v-83006aa0]{width:100%;border-collapse:collapse}#invoice-POS .tabletitle[data-v-83006aa0]{font-size:1.1em;background:#eee}#invoice-POS .service[data-v-83006aa0]{border-bottom:1px solid #eee}#invoice-POS .item[data-v-83006aa0]{width:24mm}#invoice-POS .itemtext[data-v-83006aa0]{font-size:.9em}#invoice-POS #legalcopy[data-v-83006aa0]{margin-top:5mm}",""]),t.exports=d},682:function(t,e,n){"use strict";n.r(e);var r=n(2),l=(n(21),{props:{bill:{type:Object,default:null}},data:function(){return{}},methods:{getbill:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$api.$get("bills/".concat(t)).then((function(t){})).catch((function(t){console.log(t)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))()}},created:function(){}}),o=(n(671),n(42)),c=n(50),d=n.n(c),v=n(606),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[null!==t.bill?n("div",{attrs:{id:"invoice-POS"}},[n("center",{attrs:{id:"top"}},[n("div",{staticClass:"logo"}),t._v(" "),n("div",{staticClass:"info"},[n("h2",[t._v("Ospic Memorial Hospital")])])]),t._v(" "),n("div",{attrs:{id:"mid"}},[n("div",{staticClass:"info"},[n("h2",[t._v("Receipt Info")]),t._v(" "),n("p",[t._v(" \n            Client : "+t._s(t.bill.patientName)),n("br"),t._v("\n            Email   : "+t._s(t.bill.emailAddress)),n("br"),t._v("\n            Phone   : "+t._s(t.bill.phoneNumber)+" "),n("br"),t._v("\n            Address : "+t._s(t.bill.address)+"\n        ")])])]),t._v(" "),n("div",{attrs:{id:"bot"}},[null!==t.bill?n("div",{attrs:{id:"table"}},[n("table",[n("tr",{staticClass:"tabletitle"},[n("td",{staticClass:"item"},[n("h2",[t._v("ID")])]),t._v(" "),n("td",{staticClass:"Hours"},[n("h2",[t._v("Service")])]),t._v(" "),n("td",{staticClass:"Hours"},[n("h2",[t._v("Medicine")])]),t._v(" "),n("td",{staticClass:"Rate"},[n("h2",[t._v("Price")])])]),t._v(" "),t._l(t.bill.transactionResponse.transactions,(function(e,r){return n("tr",{key:r,staticClass:"service"},[n("td",{staticClass:"tableitem"},[n("p",{staticClass:"itemtext"},[t._v(t._s(r+1))])]),t._v(" "),n("td",{staticClass:"tableitem"},[n("p",{staticClass:"itemtext"},[t._v(t._s(null===e.medicalServiceName?"------":e.medicalServiceName))])]),t._v(" "),n("td",{staticClass:"tableitem"},[n("p",{staticClass:"itemtext"},[t._v(t._s(null===e.medicineName?"------":e.medicineName))])]),t._v(" "),n("td",{staticClass:"tableitem"},[n("p",{staticClass:"itemtext"},[t._v(t._s(e.amount))])])])})),t._v(" "),n("tr",{staticClass:"tabletitle"},[n("td"),n("td"),t._v(" "),n("td",{staticClass:"Rate"},[n("h2",[t._v("Tax")])]),t._v(" "),n("td",{staticClass:"payment"},[n("h2",[t._v(t._s(t.tax))])])]),t._v(" "),n("tr",{staticClass:"tabletitle"},[n("td"),n("td"),t._v(" "),n("td",{staticClass:"Rate"},[n("h2",[t._v("Total")])]),t._v(" "),n("td",{staticClass:"payment"},[n("h2",[t._v(t._s(t.bill.transactionResponse.totalAmount))])])])],2)]):t._e(),t._v(" "),n("div",{attrs:{id:"legalcopy"}},[n("div",[t.bill.isPaid?n("span",{staticClass:"stamp",staticStyle:{height:"90px"}},[t._v("Paid ")]):n("span",{staticClass:"stamp is-approved"},[t._v("OutStanding !")])])])])],1):t._e()])}),[],!1,null,"83006aa0",null);e.default=component.exports;d()(component,{VContainer:v.a})},736:function(t,e,n){"use strict";n.r(e);var r={props:["amount"],data:function(){return{}}},l=n(42),o=n(50),c=n.n(o),d=n(263),v=n(260),m=n(616),f=n(137),_=n(30),h=n(617),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:" mx-3 mt-2 pa-3",attrs:{rounded:"10",elevation:"1",flat:""}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{sm:"6"}},[n("v-avatar",{attrs:{color:"black",rounded:"",size:"53"}},[n("v-icon",{attrs:{large:"",color:"white"}},[t._v("\n          mdi-bitcoin\n        ")])],1),t._v(" "),n("h1",{staticClass:"mt-1 font-weight-black",domProps:{innerHTML:t._s("$ "+t.amount)}}),t._v(" "),n("v-list-item-subtitle",{staticClass:"font-weight-normal"},[t._v("45% This week")])],1),t._v(" "),n("v-col",{attrs:{sm:"6"}},[n("v-icon",{staticClass:"d-flex justify-end",attrs:{color:"black"}},[t._v("mdi-dots-vertical")]),t._v(" "),n("br"),t._v(" "),n("v-icon",{staticClass:"d-flex justify-end",attrs:{color:"black",large:""}},[t._v("mdi-zodiac-leo")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAvatar:d.a,VCard:v.a,VCol:m.a,VIcon:f.a,VListItemSubtitle:_.b,VRow:h.a})},865:function(t,e,n){"use strict";n.r(e);n(10),n(9),n(7),n(5),n(13),n(8),n(14);var r=n(0),l=n(2),o=(n(21),n(83)),c=n(682);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var v={components:{"total-amount":n(736).default,receipt:c.default},data:function(){return{title:"45% This week",dialog:!1,search:null,service_transactions:null,type:"service",amount:0,bill:null,headers:[{text:"NID",value:"id",class:"primary"},{text:"Patient",value:"patientName",class:"primary"},{text:"Amount",value:"totalAmount",class:"primary",sortable:!1},{text:"Paid Amount",value:"paidAmount",class:"primary"},{text:"Paid ?",value:"isPaid",class:"primary"},{text:"No.",value:"extraId",class:"primary",sortable:!0},{text:"CI",value:"consultationId",class:"primary"},{text:"Active",value:"isActive",class:"primary",sortable:!0},{text:"Created Date",value:"createdDate",class:"primary"},{text:"Last modified Date",value:"lastUpdatedDate",class:"primary"},{text:"Actions",value:"actions",class:"primary",sortable:!1}]}},methods:{viewconsultation:function(t){this.$router.push("/finance/bills/"+t.id)},viewreceipt:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.dialog=!0,e.bill=null,n.next=4,e.$api.$get("bills/".concat(t)).then((function(t){e.bill=t})).catch((function(t){console.log(t)}));case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()}},created:function(){this.$store.dispatch("get_bills")},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({bills:"bills"}))},m=v,f=n(42),_=n(50),h=n.n(_),x=n(260),O=n(60),C=n(616),y=n(606),P=n(619),k=n(604),w=n(137),S=n(261),j=n(608),V=n(113),D=n(78),$=n(91),z=n(615),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"breadcrumb"},[n("router-link",{attrs:{to:"/"}},[t._v(t._s(t.$t("label.breadcrumb.dashboard")))]),t._v(" "),n("router-link",{attrs:{to:"/finance"}},[t._v(t._s(t.$t("label.breadcrumb.finance")))]),t._v(" "),n("router-link",{staticClass:"active",attrs:{to:"/finance/bills"}},[t._v(t._s(t.$t("label.breadcrumb.bills")))])],1),t._v(" "),n("v-card",[n("v-card-title",{staticClass:"ma-0 pa-0"},[n("v-toolbar",{attrs:{flat:"",color:"primary",dark:""}},[n("v-toolbar-title",[t._v("Bills")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-col",{attrs:{cols:"12",md:"3"}},[n("v-text-field",{attrs:{"append-icon":"search",label:"Enter search text ...",rounded:"",dense:"",outlined:"","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),t._v(" "),n("v-dialog",{staticClass:"ma-0 pa-0",attrs:{"max-width":"600px","hide-overlay":"","open-delay":"12"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[null==t.bill?n("v-progress-linear",{attrs:{"background-color":"white",indeterminate:"",color:"cyan"}}):n("receipt",{attrs:{bill:t.bill}})],1)],1),t._v(" "),n("v-card-text",{staticClass:"ma-0 pa-0"},[null==t.bills?n("v-progress-linear",{attrs:{indeterminate:""}}):n("v-container",{staticClass:"ma-0 pa-0",attrs:{fluid:""}},[n("v-data-table",{staticClass:"default",attrs:{dense:"",headers:t.headers,items:t.bills,search:t.search,"mobile-breakpoint":"100","group-by":"lastUpdatedDate"},on:{"click:row":t.viewconsultation},scopedSlots:t._u([{key:"item.service",fn:function(e){var r=e.item;return[null!=r.medicalServiceName?n("p",[t._v("\n              "+t._s(r.medicalServiceName)+"\n            ")]):n("p",[t._v(t._s(r.medicineName))])]}},{key:"item.actions",fn:function(e){var r=e.item;return[n("td",{staticClass:"none-clickable",on:{click:function(t){t.stopPropagation()}}},[n("v-tooltip",{attrs:{bottom:"",color:"primary lighten-1"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,o=e.attrs;return[n("v-icon",t._g(t._b({staticClass:"blue--text",attrs:{small:""},on:{click:function(e){return t.viewreceipt(r.id)}}},"v-icon",o,!1),l),[t._v("\n                    mdi-receipt\n                  ")])]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(t.$t("label.tooltip.viewreceipt")))])])],1)]}},{key:"no-data",fn:function(){return[n("p",{staticClass:"mt-2"},[t._v("No Data available for "+t._s(t.routename))])]},proxy:!0}],null,!0)})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VCard:x.a,VCardText:O.c,VCardTitle:O.d,VCol:C.a,VContainer:y.a,VDataTable:P.a,VDialog:k.a,VIcon:w.a,VProgressLinear:S.a,VSpacer:j.a,VTextField:V.a,VToolbar:D.a,VToolbarTitle:$.b,VTooltip:z.a})}}]);