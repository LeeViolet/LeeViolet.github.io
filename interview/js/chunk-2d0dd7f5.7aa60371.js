(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dd7f5"],{8249:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:e.className,style:{height:e.height,width:e.width}})},n=[],r=i("313e"),s=i.n(r),c=i("ed08");i("817d");var h={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"100%"}},data:function(){return{chart:null}},mounted:function(){var e=this;this.initChart(),this.__resizeHanlder=Object(c["a"])((function(){e.chart&&e.chart.resize()}),100),window.addEventListener("resize",this.__resizeHanlder)},beforeDestroy:function(){this.chart&&(window.removeEventListener("resize",this.__resizeHanlder),this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=s.a.init(this.$el,"macarons"),this.chart.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},calculable:!0,series:[{name:"WEEKLY WRITE ARTICLES",type:"pie",roseType:"radius",radius:[15,50],center:["50%","50%"],data:[{value:320,name:"Industries"},{value:240,name:"Technology"},{value:149,name:"Forex"},{value:100,name:"Gold"},{value:59,name:"Forecasts"}],animationEasing:"cubicInOut",animationDuration:2600}]})}}},l=h,o=i("2877"),u=Object(o["a"])(l,a,n,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0dd7f5.7aa60371.js.map