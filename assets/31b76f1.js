(window.webpackJsonp=window.webpackJsonp||[]).push([[28,48],{670:function(t,e,n){"use strict";n.r(e);var l={props:{staff:{type:Object,default:null}}},r=n(43),o=n(50),c=n.n(o),h=n(165),d=n(264),m=n(64),f=n(647),v=n(140),I=n(213),x=n(166),S=n(271),_=n(31),y=n(648),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"ma-1 pa-0",attrs:{flat:"",elevation:"1",color:"grey lighten-4"}},[n("v-list-item",{attrs:{ripple:"staff.id",to:"/staffs/"+t.staff.id}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:" font-weight-black ",domProps:{innerHTML:t._s(null==t.staff.fullName?t.staff.username:t.staff.fullName)}}),t._v(" "),n("v-list-item-subtitle",{staticClass:"light-blue--text font-italic",domProps:{innerHTML:t._s(t.staff.email)}})],1),t._v(" "),n("v-list-item-avatar",{attrs:{size:"60"}},[n("v-img",{attrs:{src:null==t.staff.imageUrl?t.thumbnail:t.staff.imageUrl}})],1)],1),t._v(" "),n("v-card-text",{staticClass:"ma-0 pa-0"},[n("v-row",{staticClass:"ma-0 pa-0",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"mt-0 pa-0",attrs:{cols:"12",sm:"12",md:"7",align:"center"}},[n("v-btn",{attrs:{small:"",fab:"",text:""}},[n("v-icon",{attrs:{color:"blue",small:""}},[t._v("mdi-facebook")])],1),t._v(" "),n("v-btn",{attrs:{small:"",fab:"",text:""}},[n("v-icon",{attrs:{color:"purple darken-4",small:""}},[t._v("mdi-instagram")])],1),t._v(" "),n("v-btn",{attrs:{small:"",fab:"",text:""}},[n("v-icon",{attrs:{color:"blue",small:""}},[t._v("mdi-twitter")])],1)],1),t._v(" "),n("v-col",{staticClass:"mt-2 ",attrs:{cols:"12",sm:"12",align:"center",md:"5"}},[n("v-icon",{staticClass:"ml-4",attrs:{color:"blue","x-small":""}},[t._v("mdi-check-circle")]),t._v(" "),n("v-icon",{attrs:{color:"green","x-small":""}},[t._v("mdi-close-circle-outline")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:h.a,VCard:d.a,VCardText:m.c,VCol:f.a,VIcon:v.a,VImg:I.a,VListItem:x.a,VListItemAvatar:S.a,VListItemContent:_.a,VListItemSubtitle:_.b,VListItemTitle:_.c,VRow:y.a})},682:function(t,e,n){var content=n(693);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("50788f08",content,!0,{sourceMap:!1})},693:function(t,e,n){var l=n(17)(!1);l.push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),t.exports=l},721:function(t,e,n){"use strict";n(12),n(9),n(14),n(8),n(15);var l=n(0),r=(n(39),n(5),n(7),n(73),n(54),n(103),n(36),n(61),n(682),n(179)),o=n(113),c=n(38),h=n(1);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=m(m({},r.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=r.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:r.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m(m({},r.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(h.s)(e,t.itemText),text=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=r.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),m(m({},f),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=r.a.options.computed.listData.call(this);return data.props=m(m({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;if(t!==e){if(!this.autoSelectFirst){var l=e[this.$refs.menu.listIndex];l?this.setMenuIndex(t.findIndex((function(i){return i===l}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&t.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===h.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===h.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==h.z.backspace&&t!==h.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var l=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[l]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=l}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,r.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=o.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(h.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(h.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=r.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?r.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[h.z.home,h.z.end].includes(e)||r.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){r.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){r.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){r.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var l=this.selectedItems[this.selectedIndex],r=this.getText(l);null==(e=t.clipboardData)||e.setData("text/plain",r),null==(n=t.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",r),t.preventDefault()}}}})},769:function(t,e,n){"use strict";n.r(e);var l=n(2),r=(n(20),n(27),{components:{"staff-card":n(670).default},props:{staff:{type:Object,default:null},staffs:{type:Array,default:null}},data:function(){return{selectedstaffId:null}},methods:{_assign_staff:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$put("consultations/".concat(t.$route.params.id,"/").concat(t.selectedstaffId.id,"/")).then((function(e){null!==e&&t.$emit("update-service")})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}}}),o=n(43),c=n(50),h=n.n(c),d=n(721),m=n(267),f=n(275),v=n(647),I=n(213),x=n(271),S=n(31),_=n(648),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"start",align:"start",fluid:""}},[null==t.staff?n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}}):t._e(),t._v(" "),null!==t.staff?n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("staff-card",{attrs:{staff:t.staff}})],1):t._e(),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"2"}}),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[n("v-autocomplete",{staticClass:"ma-2 d-flex",attrs:{dense:"",items:t.staffs,"item-text":"fullName","item-value":"id",label:"Select staffs to assign","persistent-hint":"","return-object":"",filled:"",chips:"",clearable:"",hint:"Re/Assign staffs"},on:{change:function(e){return t._assign_staff()}},scopedSlots:t._u([{key:"selection",fn:function(data){return[n("v-chip",t._b({attrs:{"input-value":data.selected,close:""},on:{click:data.select,"click:close":function(e){return t.remove(data.item)}}},"v-chip",data.attrs,!1),[n("v-avatar",{attrs:{left:""}},[n("v-img",{attrs:{src:null===data.item.imageUrl?t.thumbnail:data.item.imageUrl}})],1),t._v("\n          "+t._s(null===data.item.fullName?data.item.username:data.item.fullName)+"\n        ")],1)]}},{key:"item",fn:function(data){return["object"!=typeof data.item?[n("v-list-item-content",{domProps:{textContent:t._s(data.item)}})]:[n("v-list-item-avatar",[n("v-img",{attrs:{src:null===data.item.imageUrl?t.thumbnail:data.item.imageUrl,alt:"image"}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{innerHTML:t._s(null===data.item.fullName?data.item.username:data.item.fullName)}}),t._v(" "),n("v-list-item-subtitle",[t._v("\n              "+t._s(data.item.department.name)+" [\n              "+t._s(data.item.user.roles[0].name)+" ]\n            ")])],1)]]}}]),model:{value:t.selectedstaffId,callback:function(e){t.selectedstaffId=e},expression:"selectedstaffId"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{StaffCard:n(670).default}),h()(component,{VAutocomplete:d.a,VAvatar:m.a,VChip:f.a,VCol:v.a,VImg:I.a,VListItemAvatar:x.a,VListItemContent:S.a,VListItemSubtitle:S.b,VListItemTitle:S.c,VRow:_.a})}}]);