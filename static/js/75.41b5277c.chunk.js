"use strict";(self.webpackChunkmatteocaldana=self.webpackChunkmatteocaldana||[]).push([[75],{2075:function(t,e,n){n.r(e);var r=n(1413),a=n(2791),o=n(4721),i=n(4567),l=n(1153),s=n(7639),c=n(977),u=n(7961),p=n(5916),m=n(1711),d=n(4724),h=n(184),f=function(t){var e,n=t.map((function(t){return t.timestamp})),r=t.map((function(t){return t.y})).map((e=0,function(t){return e+=t}));if(n.length<=200)return{x:n,y:r};for(var a=[],o=[],i=0;i<n.length;i+=Math.trunc(n.length/200)+1)a.push(n[i]),o.push(r[i]);return a.push(n[n.length-1]),o.push(r[n.length-1]),{x:a,y:o}},x=function(t){var e=m.ruo(t,(function(t){return t.sender})),n=[];return e.forEach((function(t,e){""!==e&&n.push((0,r.Z)((0,r.Z)({type:"scatter"},f(t)),{},{mode:"lines+markers",name:e}))})),function(){return(0,h.jsx)(l.ZP,{container:!0,justifyContent:"center",children:(0,h.jsx)(p.ZP,{data:[(0,r.Z)((0,r.Z)({type:"scatter",mode:"lines+markers"},f(t)),{},{name:"Total"})].concat(n)})})}};e.default=function(t){var e=t.textDf;return(0,h.jsxs)(a.Fragment,{children:[(0,h.jsx)(o.Z,{style:{marginTop:10,marginBottom:10}}),(0,h.jsxs)(l.ZP,{container:!0,children:[(0,h.jsx)(i.Z,{variant:"h6",children:"Cumulative Stats"}),(0,h.jsx)(s.Z,{title:(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:"Toggle the sender by clicking on the legend on the right"}),(0,h.jsx)("li",{children:"Some points may have been removed to avoid stressing the CPU"})]}),children:(0,h.jsx)(c.Z,{size:"small",children:(0,h.jsx)(u.Z,{})})})]}),(0,h.jsx)(d.Z,{labels:["Number of Messages","Number of Characters"],tabs:[{component:x(e.map((function(t){return{timestamp:t.timestamp,sender:t.sender,y:1}})))},{component:x(e.filter((function(t){return"plainText"===t.type})).map((function(t){return{timestamp:t.timestamp,sender:t.sender,y:t.message.length}})))}]})]})}},4724:function(t,e,n){var r=n(9439),a=n(1413),o=n(5987),i=n(2791),l=n(9347),s=n(1474),c=n(4554),u=n(184),p=["children","value","index"],m=function(t){var e=t.children,n=t.value,r=t.index,i=(0,o.Z)(t,p);return(0,u.jsx)("div",(0,a.Z)((0,a.Z)({role:"tabpanel",hidden:n!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},i),{},{children:e}))};e.Z=function(t){var e=t.labels,n=t.tabs,o=(0,i.useState)(0),p=(0,r.Z)(o,2),d=p[0],h=p[1];return(0,u.jsxs)(c.Z,{sx:{width:"100%"},children:[(0,u.jsx)(c.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,u.jsx)(l.Z,{variant:"scrollable",scrollButtons:!0,allowScrollButtonsMobile:!0,value:d,onChange:function(t,e){h(e)},textColor:"inherit",children:e.map((function(t,e){return(0,u.jsx)(s.Z,(0,a.Z)({label:t},{id:"simple-tab-".concat(n=e),"aria-controls":"simple-tabpanel-".concat(n)}),e);var n}))})}),n.map((function(t,e){return(0,u.jsx)(m,{value:d,index:e,children:(0,u.jsx)(t.component,{})},e)}))]})}},5916:function(t,e,n){var r=n(4942),a=(n(2791),n(418)),o=n(8286),i=n(184);function l(t){return t&&"object"===typeof t&&!Array.isArray(t)}function s(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];if(!n.length)return t;var o=n.shift();if(l(t)&&l(o))for(var i in o)l(o[i])?(t[i]||Object.assign(t,(0,r.Z)({},i,{})),s(t[i],o[i])):Object.assign(t,(0,r.Z)({},i,o[i]));return s.apply(void 0,[t].concat(n))}e.ZP=function(t){var e=function(t){return{width:"100%",height:500,margin:{l:40,r:20,b:18,t:30,pad:0},paper_bgcolor:t.palette.background.paper,plot_bgcolor:t.palette.background.paper,xaxis:{color:t.palette.text.primary},yaxis:{color:t.palette.text.primary},legend:{font:{color:t.palette.text.primary}},title:{font:{color:t.palette.text.primary}},scene:{xaxis:{color:t.palette.text.primary},yaxis:{color:t.palette.text.primary},zaxis:{color:t.palette.text.primary}}}}((0,a.Z)());return(0,i.jsx)(o.Z,{data:t.data,layout:t.layout?s(t.layout,e):e})}},5987:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(3366);function a(t,e){if(null==t)return{};var n,a,o=(0,r.Z)(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}}}]);
//# sourceMappingURL=75.41b5277c.chunk.js.map