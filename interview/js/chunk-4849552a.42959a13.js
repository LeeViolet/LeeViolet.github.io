(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4849552a","chunk-44eec9ba"],{4083:function(e,t,a){},"44fb0":function(e,t,a){"use strict";a("4083")},"799d":function(e,t,a){"use strict";a("84d3")},"84d3":function(e,t,a){},"8e79":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"questions-container"},[a("el-card",[a("QuestionsSelect",{on:{submit:e.selectQuestionsFn}}),a("QuestionsList",{attrs:{questionsData:e.basicQuestionsData},on:{pagesizeChange:e.pagesizeChangeFn,pageChange:e.pageChangeFn,updateQuestions:e.updateQuestionsFn}})],1)],1)},s=[],n=a("1da1"),o=a("5530"),l=(a("96cf"),a("a262")),c=a("b9e2"),i=a("2f62"),u=Object(i["a"])("questions"),p=u.mapActions,f={name:"BasicQuestions",data:function(){return{page:1,pagesize:5,form:{}}},components:{QuestionsSelect:l["default"],QuestionsList:c["default"]},methods:Object(o["a"])(Object(o["a"])({},p(["UpdateBasicQuestionsData"])),{},{pagesizeChangeFn:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.pagesize=e,a.prev=1,a.next=4,t.UpdateBasicQuestionsData(Object(o["a"])({page:t.page,pagesize:t.pagesize},t.form));case 4:a.next=9;break;case 6:a.prev=6,a.t0=a["catch"](1),console.dir(a.t0);case 9:case"end":return a.stop()}}),a,null,[[1,6]])})))()},pageChangeFn:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.page=e,a.prev=1,a.next=4,t.UpdateBasicQuestionsData(Object(o["a"])({page:t.page,pagesize:t.pagesize},t.form));case 4:a.next=9;break;case 6:a.prev=6,a.t0=a["catch"](1),console.dir(a.t0);case 9:case"end":return a.stop()}}),a,null,[[1,6]])})))()},selectQuestionsFn:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:for(r in e)e[r]?t.form[r]=e[r]:t.form[r]=null;return a.prev=1,a.next=4,t.UpdateBasicQuestionsData(Object(o["a"])({page:t.page,pagesize:t.pagesize},t.form));case 4:a.next=9;break;case 6:a.prev=6,a.t0=a["catch"](1),console.dir(a.t0);case 9:case"end":return a.stop()}}),a,null,[[1,6]])})))()},updateQuestionsFn:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.UpdateBasicQuestionsData(Object(o["a"])({page:e.page,pagesize:e.pagesize},e.form));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),console.dir(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()}}),created:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.UpdateBasicQuestionsData({page:e.page,pagesize:e.pagesize});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),console.dir(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()},computed:Object(o["a"])({},Object(i["c"])(["basicQuestionsData"]))},m=f,b=(a("44fb0"),a("2877")),d=Object(b["a"])(m,r,s,!1,null,"3e7a4333",null);t["default"]=d.exports},a262:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"questions_select_body"},[a("div",{staticClass:"btn_wrapper"},[a("span",[e._v("说明：目前支持学科和关键字条件筛选")]),a("el-button",{attrs:{type:"success",size:"small",icon:"el-icon-edit"},on:{click:function(t){return e.$router.push("/questions/new")}}},[e._v("新增试题")])],1),a("el-form",{ref:"form",staticClass:"select-form",attrs:{model:e.form,size:"small","label-width":"80px"}},[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"学科","label-width":"80px",prop:"subjectID"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.subjectID,callback:function(t){e.$set(e.form,"subjectID",t)},expression:"form.subjectID"}},e._l(e.subjectList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.subjectName,value:e.id}})})),1)],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"二级目录",prop:"catalogID"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.catalogID,callback:function(t){e.$set(e.form,"catalogID",t)},expression:"form.catalogID"}},e._l(e.twoLevelDirectoryList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"标签",prop:"tags"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.tags,callback:function(t){e.$set(e.form,"tags",t)},expression:"form.tags"}},e._l(e.tagsList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"关键字",prop:"keyword"}},[a("el-input",{attrs:{placeholder:"根据题干搜索"},model:{value:e.form.keyword,callback:function(t){e.$set(e.form,"keyword",t)},expression:"form.keyword"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"试题类型",prop:"questionType"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.questionType,callback:function(t){e.$set(e.form,"questionType",t)},expression:"form.questionType"}},[a("el-option",{attrs:{label:"单选",value:"1"}}),a("el-option",{attrs:{label:"多选",value:"2"}}),a("el-option",{attrs:{label:"简单",value:"3"}})],1)],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"难度",prop:"difficulty"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.difficulty,callback:function(t){e.$set(e.form,"difficulty",t)},expression:"form.difficulty"}},[a("el-option",{attrs:{label:"简单",value:"1"}}),a("el-option",{attrs:{label:"一般",value:"2"}}),a("el-option",{attrs:{label:"困难",value:"3"}})],1)],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"方向",prop:"direction"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.direction,callback:function(t){e.$set(e.form,"direction",t)},expression:"form.direction"}},[a("el-option",{attrs:{label:"o2o",value:"o2o"}}),a("el-option",{attrs:{label:"外包服务",value:"外包服务"}}),a("el-option",{attrs:{label:"企业服务",value:"企业服务"}}),a("el-option",{attrs:{label:"互联网金融",value:"互联网金融"}}),a("el-option",{attrs:{label:"企业咨询",value:"企业咨询"}}),a("el-option",{attrs:{label:"互联网",value:"互联网"}}),a("el-option",{attrs:{label:"电子商务",value:"电子商务"}}),a("el-option",{attrs:{label:"其他",value:"其他"}})],1)],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"录入人",prop:"creatorID"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.creatorID,callback:function(t){e.$set(e.form,"creatorID",t)},expression:"form.creatorID"}},e._l(e.users,(function(e){return a("el-option",{key:e.id,attrs:{label:e.username,value:e.id}})})),1)],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"题目备注",prop:"remarks"}},[a("el-input",{model:{value:e.form.remarks,callback:function(t){e.$set(e.form,"remarks",t)},expression:"form.remarks"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"企业简称",prop:"shortName"}},[a("el-input",{model:{value:e.form.shortName,callback:function(t){e.$set(e.form,"shortName",t)},expression:"form.shortName"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticClass:"city",attrs:{label:"城市",prop:"province"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.province,callback:function(t){e.$set(e.form,"province",t)},expression:"form.province"}},e._l(e.cityList,(function(e,t){return a("el-option",{key:t,attrs:{label:e,value:e}})})),1),a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.city,callback:function(t){e.$set(e.form,"city",t)},expression:"form.city"}},e._l(e.areaList,(function(e,t){return a("el-option",{key:t,attrs:{label:e,value:e}})})),1)],1)],1),a("el-col",{staticClass:"manipulate",attrs:{span:6}},[a("el-button",{attrs:{size:"small"},on:{click:function(t){return e.$refs.form.resetFields()}}},[e._v(" 清除 ")]),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.onSubmit}},[e._v(" 搜索 ")])],1)],1)],1)],1)},s=[],n=a("1da1"),o=a("5530"),l=(a("96cf"),a("b59c")),c=a("2f62"),i=Object(c["a"])("questions"),u=i.mapActions,p={data:function(){return{form:{subjectID:"",catalogID:"",tags:"",keyword:"",questionType:"",difficulty:"",direction:"",creatorID:"",remarks:"",shortName:"",province:"",city:""},cityList:[],areaList:[]}},computed:Object(o["a"])({},Object(c["c"])(["subjectList","twoLevelDirectoryList","tagsList","users"])),methods:Object(o["a"])(Object(o["a"])({},u(["UpdateSubjectList","UpdateTwoLevelDirectoryList","UpdateTagsList","UpdateUsers"])),{},{onSubmit:function(){this.$emit("submit",this.form)}}),created:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.cityList=Object(l["b"])(),t.next=3,e.UpdateSubjectList();case 3:return t.next=5,e.UpdateUsers();case 5:case"end":return t.stop()}}),t)})))()},watch:{"form.subjectID":function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.UpdateTwoLevelDirectoryList({subjectID:e.form.subjectID});case 2:return t.next=4,e.UpdateTagsList({subjectID:e.form.subjectID});case 4:case"end":return t.stop()}}),t)})))()},"form.province":function(){this.areaList=Object(l["a"])(this.form.province)}}},f=p,m=(a("799d"),a("2877")),b=Object(m["a"])(f,r,s,!1,null,"5ecc3ccc",null);t["default"]=b.exports}}]);
//# sourceMappingURL=chunk-4849552a.42959a13.js.map