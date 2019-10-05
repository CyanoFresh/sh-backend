(this["webpackJsonpsh-frontend"]=this["webpackJsonpsh-frontend"]||[]).push([[21],{194:function(e,a,t){"use strict";t.r(a);var r=t(11),n=t.n(r),o=t(18),c=t(10),l=t(460),u=t(461),i=t(462),s=t(321),m=t(329),d=t(328),h=t(388),p=t(463),b=t(378),f=t(0),E=t.n(f),v=t(380),y=t(392),g=t(577),j=t(168),k=t(326),O=t(16),x=Object(j.a)((function(e){return{formControl:{marginBottom:e.spacing(2),width:"50%"}}}));function w(e){var a,t=e.id,r=e.core,l=e.name,u=e.suffix,i=x(),p=Object(f.useState)("6_hours"),b=Object(c.a)(p,2),j=b[0],k=b[1],O=Object(f.useState)([]),w=Object(c.a)(O,2),C=w[0],S=w[1],_=Object(f.useState)(!1),P=Object(c.a)(_,2),F=P[0],D=P[1],M=Object(f.useState)(null),W=Object(c.a)(M,2),A=W[0],J=W[1];return Object(f.useMemo)((function(){(function(){var e=Object(o.a)(n.a.mark((function e(){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(!0),e.prev=1,e.next=4,r.authenticatedRequest({url:"/variable/".concat(t,"/history?period=").concat(j),responseType:"json",method:"get"});case 4:if(a=e.sent,D(!1),a.data.ok){e.next=8;break}return e.abrupt("return",J("Wrong server response"));case 8:J(null),S(a.data.history),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(1),D(!1),J("Cannot load history"),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}})()()}),[j,t,r]),a=F?E.a.createElement("div",null,E.a.createElement(v.a,null)):A?E.a.createElement(y.a,{bgcolor:"error.main",color:"background.paper",p:2},A):C&&C.length?E.a.createElement(g.e,{aspect:2},E.a.createElement(g.b,{data:C},E.a.createElement(g.g,{dataKey:"date",tickFormatter:function(e){return new Date(1e3*e).toLocaleTimeString()}}),E.a.createElement(g.h,{domain:["dataMin - 5","dataMax + 5"]}),E.a.createElement(g.c,{strokeDasharray:"3 3"}),E.a.createElement(g.f,{labelFormatter:function(e){return new Date(1e3*e).toLocaleString()}}),E.a.createElement(g.d,null),E.a.createElement(g.a,{type:"monotone",dataKey:"value",stroke:"red",name:l,unit:u,isAnimationActive:!1}))):E.a.createElement(y.a,{bgcolor:"text.secondary",color:"background.paper",p:2},"No history for selected period"),E.a.createElement(E.a.Fragment,null,E.a.createElement(s.a,{className:i.formControl},E.a.createElement(m.a,{htmlFor:"historyPeriod"},"Period"),E.a.createElement(d.a,{value:j,onChange:function(e){return k(e.target.value)},inputProps:{name:"historyPeriod",id:"historyPeriod"}},E.a.createElement(h.a,{value:"3_days"},"3 days"),E.a.createElement(h.a,{value:"24_hours"},"24 hours"),E.a.createElement(h.a,{value:"12_hours"},"12 hours"),E.a.createElement(h.a,{value:"6_hours"},"6 hours"),E.a.createElement(h.a,{value:"3_hours"},"3 hours"))),a)}a.default=function(e){var a=e.id,t=e.name,r=e.suffix,n=e.open,o=e.onClose,c=e.core,s=Object(O.a)(),m=Object(k.a)(s.breakpoints.down("sm"));return E.a.createElement(l.a,{open:n,onClose:o,fullScreen:m,fullWidth:!0,maxWidth:"md","aria-labelledby":"variable-dialog-title"},E.a.createElement(u.a,{id:"variable-dialog-title"},"History of ",t),E.a.createElement(i.a,null,E.a.createElement(w,{core:c,id:a,name:t,suffix:r})),E.a.createElement(p.a,null,E.a.createElement(b.a,{onClick:o,color:"primary"},"Close")))}}}]);