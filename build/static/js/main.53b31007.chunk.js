(this["webpackJsonpanki-tower"]=this["webpackJsonpanki-tower"]||[]).push([[0],{25:function(e,t,n){},35:function(e,t,n){e.exports=n(47)},40:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),i=n.n(c),o=(n(40),n(9)),u=n(11),l=(n(25),n(21)),s=n.n(l),h=n(22),f=n(19),m=n(12),d=function(){function e(t){var n=t.name,a=t.goal,r=void 0===a?1:a,c=t.successRate,i=void 0===c?.85:c,o=t.ease,u=void 0===o?2:o,l=t.current,s=void 0===l?0:l,h=t.id,m=t.deleteCallback;Object(f.a)(this,e),this.name=n,this.goal=r,this.successRate=i,this.ease=u||2,this.current=s,this.id=h,this.deleteCallback=m}return Object(m.a)(e,[{key:"export",value:function(){return{name:this.name,goal:this.goal,successRate:this.successRate,ease:this.ease,current:this.current}}},{key:"increment",value:function(e){this.current+=parseInt(e)}},{key:"cron",value:function(e){switch(!1!==(e=parseInt(e))&&this.current<this.goal&&(e=0),this.ease*=this.current/this.goal,e){case!1:break;case 0:this.decreaseEase(),this.goal=1;break;case 1:this.goal=Math.max(this.goal,this.current)*this.ease;break;case 2:this.increaseEase(),this.goal=Math.max(this.goal,this.current)*this.ease;break;default:console.log("unknown grade ",e)}this.current=0}},{key:"getGoal",value:function(){return Math.ceil(this.goal)}},{key:"decreaseEase",value:function(){this.ease=.5*this.ease}},{key:"increaseEase",value:function(){this.ease=this.ease*Math.pow(.5,1-1/this.successRate)}},{key:"delete",value:function(){console.log(this),console.log(this.deleteCallback),this.deleteCallback()}},{key:"ease",set:function(e){this._ease=Math.max(e,1.3)},get:function(){return this._ease}}]),e}(),v=n(30),b=n.n(v),p=!1,g=function(){},E={set:function(e,t,n){return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(p){a.next=2;break}return a.abrupt("return");case 2:return e[t]=n,a.next=5,s.a.awrap(y(k).then((function(){return!0})).catch((function(e){return!1})));case 5:case"end":return a.stop()}}))}},k=[];function y(e){return Object(h.b)("HABIT_OBJECTS_ARRAY",e.map((function(e){return e.export()}))).then((function(){g(e)}))}function w(e){var t=b()();e.id=t,e.deleteCallback=function(e){return function(){for(var t=k.length;t--;)if(k[t].id===e)return void(k=k.splice(t,1))}}(t);var n=new d(e),a=new Proxy(n,E);return n.getGoal=n.getGoal.bind(a),n.increment=n.increment.bind(a),n.cron=n.cron.bind(a),a}Object(h.a)("HABIT_OBJECTS_ARRAY").then((function(e){if(e)for(var t=0;t<e.length;t++)k[t]=w(e[t])})).catch((function(e){return console.log(e)})).then((function(){k=new Proxy(k,E),g(k),p=!0}));var C=Object(a.createContext)(k),x=n(67),O=n(62),j=n(66),R=n(63),A=n(64);function D(e){var t=e.habit,n=t.name,c=t.current,i=t.getGoal,o=t.increment,l=t.cron,s=Object(a.useState)(0),h=Object(u.a)(s,2),f=h[0],m=h[1];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",null,n),r.a.createElement("p",null,"You have done ",c," today"),r.a.createElement("p",null,"Your goal for today is ",i())),r.a.createElement("input",{onChange:function(e){return m(e.target.value)},value:f,type:"number"}),r.a.createElement("button",{onClick:function(e){e.preventDefault(),o(f)}},"Increment"),r.a.createElement("div",null,"Score yesterday's work!",r.a.createElement("button",{onClick:function(e){e.preventDefault(),l(2)}},"Easy"),r.a.createElement("button",{onClick:function(e){e.preventDefault(),l(1)}},"Okay"),r.a.createElement("button",{onClick:function(e){e.preventDefault(),l(0)}},"I'm sore"),r.a.createElement("button",{onClick:function(e){e.preventDefault(),l(-1)}},"Just reset")),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(e){e.preventDefault(),t.delete()}},"Delete Habit")))}var I=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(a.useContext)(C),o=Object(a.useState)(0),l=Object(u.a)(o,2),s=l[0],h=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{value:i.length?s:"new",onChange:function(e,t){h(t)},indicatorColor:"primary",textColor:"primary",centered:!0},i&&i.map((function(e,t){return r.a.createElement(O.a,{key:t,label:e.name})})),r.a.createElement(O.a,{value:"new",label:"Add new"})),r.a.createElement(j.a,{my:"50px",padding:"20px"},r.a.createElement(R.a,{maxWidth:"md"},r.a.createElement(A.a,{padding:"20px"},r.a.createElement(j.a,{my:"50px",padding:"20px"},"new"===s||0===i.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{value:n,onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{onClick:function(e){e.preventDefault(),function(e){var t=w({name:e});k.push(t)}(n),c("")}},"Add New Habit")):r.a.createElement(D,{key:i[s].name,habit:i[s]}))))))};var S=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){g=function(e){return c(Object(o.a)(e))}||function(){}}),[]),r.a.createElement(C.Provider,{value:n},r.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.53b31007.chunk.js.map