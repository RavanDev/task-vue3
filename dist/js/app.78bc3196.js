(function(e){function t(t){for(var s,o,c=t[0],i=t[1],l=t[2],u=0,p=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],s=!0,c=1;c<r.length;c++){var i=r[c];0!==n[i]&&(s=!1)}s&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var s={},n={app:0},a=[];function o(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=s,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(r,s,function(t){return e[t]}.bind(null,s));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("7a23"),n={class:"container"},a=Object(s["e"])('<div class="row row-cols-auto my-3 justify-content-center"><p class="fs-1 rounded-3 bg-success fw-bold text-uppercase bg-opacity-75 p-2 m-0"> ToDo Tasks Application </p></div><div class="row my-2"><div class="col-sm-6 p-0 m-0"><p class="fs-5 rounded-3 bg-success bg-opacity-75 p-2 m-0"><strong>Used Tools:</strong> Vue.js 3, Bootstrap 5, Axios.js </p></div></div><div class="row my-2"><div class="col-sm-6 p-0 m-0"><p class="fs-5 rounded-3 bg-success bg-opacity-75 p-2 m-0"><strong>Made By:</strong> Anvar Khamidov </p></div></div>',3),o=Object(s["g"])("div",{class:"row mt-5"},[Object(s["g"])("footer")],-1);function c(e,t,r,c,i,l){var d=Object(s["j"])("todo-list");return Object(s["h"])(),Object(s["c"])(s["a"],null,[Object(s["g"])("div",n,[a,Object(s["g"])(d)]),o],64)}var i={class:"row mt-4 mb-4"},l={class:"col-sm-10 p-0 m-0"},d={class:"row my-2"},u={class:"col-sm-10 p-0 m-0"},p={key:0};function b(e,t,r,n,a,o){var c=Object(s["j"])("task-item-create"),b=Object(s["j"])("error-alert"),k=Object(s["j"])("todo-item"),g=Object(s["j"])("spinner-large");return Object(s["h"])(),Object(s["c"])(s["a"],null,[Object(s["g"])("div",i,[Object(s["g"])("div",l,[Object(s["g"])(c,{onAddTask:o.addTask},null,8,["onAddTask"])])]),Object(s["g"])("div",d,[Object(s["g"])("div",u,[a.showErrorAlert?(Object(s["h"])(),Object(s["c"])(b,{key:0,"error-message":a.errorMessage,onCloseAlert:o.toggleAlert},null,8,["error-message","onCloseAlert"])):Object(s["d"])("",!0)])]),a.isTasksLoading?(Object(s["h"])(),Object(s["c"])(g,{key:1})):(Object(s["h"])(),Object(s["c"])("div",p,[(Object(s["h"])(!0),Object(s["c"])(s["a"],null,Object(s["i"])(o.getTasksComputed,(function(e){return Object(s["h"])(),Object(s["c"])(k,{key:e.id,task:e,onDeleteTask:o.deleteTask,onMakeTaskDone:o.makeTaskCompleted},null,8,["task","onDeleteTask","onMakeTaskDone"])})),128))]))],64)}var k=r("2909"),g=r("ade3"),m=r("5530"),h=r("1da1"),f=(r("159b"),r("4de4"),r("d81d"),r("96cf"),{class:"row my-2"}),j={class:"input-group p-0 m-0"},O={class:"col-1 input-group-text"};function v(e,t,r,n,a,o){var c=Object(s["j"])("spinner-small");return Object(s["h"])(),Object(s["c"])("div",f,[Object(s["g"])("div",j,[Object(s["g"])("div",O,[Object(s["g"])("input",{class:"form-check",type:"checkbox",id:r.task.id,checked:r.task.completed,disabled:r.task.isDisabled,onChange:t[1]||(t[1]=function(){return o.makeTaskDone&&o.makeTaskDone.apply(o,arguments)})},null,40,["id","checked","disabled"])]),Object(s["g"])("label",{class:["col-9 bg-primary p-3 bg-opacity-75 fw-bold fs-5 text-uppercase text-start",o.checkedClass]},[Object(s["f"])(Object(s["k"])(r.task.title)+" ",1),r.task.isDisabled?(Object(s["h"])(),Object(s["c"])(c,{key:0})):Object(s["d"])("",!0)],2),Object(s["g"])("button",{class:"col-2 btn btn-danger",onClick:t[2]||(t[2]=function(){return o.deleteTask&&o.deleteTask.apply(o,arguments)}),disabled:r.task.isDisabled}," Delete ",8,["disabled"])])])}var y={class:"spinner-border text-danger",role:"status"};function T(e,t,r,n,a,o){return Object(s["h"])(),Object(s["c"])("div",y)}var w={};w.render=T;var x=w,A={components:{SpinnerSmall:x},props:{task:{type:Object,required:!0}},methods:{deleteTask:function(){this.$emit("deleteTask",this.task.id)},makeTaskDone:function(){this.$emit("makeTaskDone",this.task)}},computed:{checkedClass:function(){return this.task.completed?"bg-warning text-decoration-line-through":""}}};A.render=v;var L=A,D={class:"d-flex justify-content-center mt-5"},C=Object(s["g"])("div",{class:"spinner-border text-primary",style:{width:"10rem",height:"10rem"},role:"status"},null,-1);function M(e,t,r,n,a,o){return Object(s["h"])(),Object(s["c"])("div",D,[C])}var S={};S.render=M;var P=S,_=r("bc3a"),R=r.n(_),I={class:"alert alert-danger alert-dismissible fade show",role:"alert"};function V(e,t,r,n,a,o){return Object(s["h"])(),Object(s["c"])("div",I,[Object(s["g"])("strong",null,Object(s["k"])(r.errorMessage),1),Object(s["g"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert",onClick:t[1]||(t[1]=function(){return o.closeAlert&&o.closeAlert.apply(o,arguments)})})])}var E={props:{errorMessage:{type:String,required:!0}},data:function(){return{flag:!1}},methods:{closeAlert:function(){this.$emit("closeAlert",this.flag)}}};E.render=V;var $=E,q={class:"input-group p-0 m-0"};function B(e,t,r,n,a,o){return Object(s["h"])(),Object(s["c"])("div",q,[Object(s["m"])(Object(s["g"])("input",{type:"text",class:"form-control",placeholder:"Write your new task here...","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.taskText=e}),onKeyup:t[2]||(t[2]=Object(s["n"])((function(){return o.addTask&&o.addTask.apply(o,arguments)}),["enter"]))},null,544),[[s["l"],a.taskText]]),Object(s["g"])("button",{class:"btn btn-success",type:"button",disabled:0===a.taskText.length,onClick:t[3]||(t[3]=function(){return o.addTask&&o.addTask.apply(o,arguments)})}," Add Task ",8,["disabled"])])}var J={data:function(){return{taskText:""}},methods:{addTask:function(){if(0!==this.taskText.length){var e={completed:!1,id:Math.floor(1e5*Math.random()),title:this.taskText,userId:1};this.$emit("addTask",e),this.taskText=""}}}};J.render=B;var K=J,U={components:{TodoItem:L,SpinnerLarge:P,ErrorAlert:$,TaskItemCreate:K},data:function(){return{tasksList:[],tasksPage:1,tasksLimit:10,isTasksLoading:!1,showErrorAlert:!1,errorMessage:"Something went wrong! There is a network error!"}},methods:{addTask:function(e){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.toggleAlert(!1),r.next=4,R.a.post("https://jsonplaceholder.typicode.com/todos",e);case 4:r.sent,t.tasksList.push(Object(m["a"])(Object(m["a"])({},e),{},{isDisabled:!1})),r.next=12;break;case 8:r.prev=8,r.t0=r["catch"](0),console.error(r.t0),t.toggleAlert(!0);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})))()},toggleAlert:function(e){this.showErrorAlert=e},getTasks:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isTasksLoading=!0,e.toggleAlert(!1),t.next=5,R.a.get("https://jsonplaceholder.typicode.com/todos?sort_by=id:desc",{params:{_page:e.tasksPage,_limit:e.tasksLimit}});case 5:r=t.sent,e.tasksList=r.data,e.tasksList.forEach((function(e){return e.isDisabled=!1})),t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](0),console.error(t.t0),e.toggleAlert(!0);case 14:return t.prev=14,e.isTasksLoading=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[0,10,14,17]])})))()},deleteTask:function(e){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.toggleAlert(!1),r.next=4,R.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e));case 4:r.sent,t.tasksList=t.tasksList.filter((function(t){return t.id!==e})),r.next=12;break;case 8:r.prev=8,r.t0=r["catch"](0),console.error(r.t0),t.toggleAlert(!0);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})))()},makeTaskCompleted:function(e){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.toggleAlert(!1),t.tasksList=t.updateTaskItemValue(e,"isDisabled",!0),r.next=5,R.a.patch("https://jsonplaceholder.typicode.com/todos/".concat(e.id),{data:{completed:!e.completed}});case 5:r.sent,t.tasksList=t.updateTaskItemValue(e,"completed",!e.completed),r.next=13;break;case 9:r.prev=9,r.t0=r["catch"](0),console.error(r.t0),t.toggleAlert(!0);case 13:return r.prev=13,t.tasksList=t.updateTaskItemValue(e,"isDisabled",!1),r.finish(13);case 16:case"end":return r.stop()}}),r,null,[[0,9,13,16]])})))()},updateTaskItemValue:function(e,t,r){return this.tasksList.map((function(s){return s.id===e.id?Object(m["a"])(Object(m["a"])({},s),{},Object(g["a"])({},t,r)):s}))}},mounted:function(){this.getTasks()},computed:{getTasksComputed:function(){return Object(k["a"])(this.tasksList).reverse()}}};U.render=b;var W=U,z={components:{TodoList:W}};z.render=c;var F=z;r("f9e3"),r("4989");Object(s["b"])(F).mount("#app")}});
//# sourceMappingURL=app.78bc3196.js.map