(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0970af2e"],{"3bdd":function(e,t,a){},6041:function(e,t,a){"use strict";a("3bdd")},fd6e:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"m-item-index m-item-normal"},[a("div",{staticClass:"m-items-list"},[a("Items",{attrs:{items:e.items}})],1),a("el-pagination",{attrs:{background:"",total:e.items_total,"hide-on-single-page":"",layout:"prev, pager, next","current-page":e.page,"page-size":e.length,"prev-html":"&laquo;","next-html":"&raquo;"},on:{"current-change":e.page_change_handle}})],1)},s=[],i=a("188f"),r=a("ee8f"),u=r.JX3BOX,o={name:"Normal",props:[],data:function(){return{items:null,items_total:0,page:1,length:20,auc_genre:null,auc_sub_type:null}},components:{Items:i["a"]},methods:{get_items:function(e){var t=this;this.$http({method:"GET",url:"".concat(u.__helperUrl,"api/item/menu_list"),headers:{Accept:"application/prs.helper.v2+json"},params:{auc_genre:this.$store.state.sidebar.AucGenre,auc_sub_type_id:this.$store.state.sidebar.AucSubTypeID,page:e,limit:this.length},withCredentials:!0}).then((function(e){e=e.data,200===e.code&&(t.items=e.data.data,t.items_total=e.data.total)}),(function(){t.items=!1}))},page_change_handle:function(e){this.$router.push({name:"normal",params:{AucGenre:this.$store.state.sidebar.AucGenre,AucSubTypeID:this.$store.state.sidebar.AucSubTypeID},query:{page:e}})}},mounted:function(){},watch:{$route:{immediate:!0,handler:function(){this.page=parseInt(this.$route.query.page),this.get_items(this.page)}}}},l=o,c=(a("6041"),a("2877")),p=Object(c["a"])(l,n,s,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-0970af2e.d7f7c7d4.js.map