"use strict";(self.webpackChunkmatteocaldana=self.webpackChunkmatteocaldana||[]).push([[397],{3397:function(e,t,n){n.r(t),n.d(t,{default:function(){return W}});var r=n(9439),a=n(2791),o=n(4721),i=n(4567),c=n(1153),s=n(575),u=n(7639),l=n(977),f=n(7961),m=n(4724),h=n(5916),d=n(184),p=function(e){var t=e.textDf,n=e.threshold,r=t.slice(1).map((function(e,n){return e.timestamp-t[n].timestamp})),a=function(e,t){for(var n=[],r=[],a=0,o=0;o<e.length-1;++o)e[o+1].timestamp-e[a].timestamp>t&&(e[o+1].senderId!==e[o].senderId&&r.push(e[o+1].timestamp-e[o].timestamp),n.push(e[o+1].timestamp-e[o].timestamp),a=o+1);return{filtered:n,differentSender:r}}(t,n),o=a.filtered,i=a.differentSender,s=function(e){return Math.log10(e)},u=[1,10,60,600,3600,18e3,86400,604800,2592e3].map((function(e){return 1e3*e}));return(0,d.jsx)(c.ZP,{container:!0,justifyContent:"center",children:(0,d.jsx)(h.ZP,{data:[{type:"histogram",x:r.map(s),name:"Full"},{type:"histogram",x:o.map(s),name:"Filtered"},{type:"histogram",x:i.map(s),name:"Different<br>Sender"}],layout:{xaxis:{tickvals:u.map(s),ticktext:["1s","10s","1min","10min","1h","5h","1d","7d","30d"]}}})})},x=n(3433),g=n(3967),v=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"],y=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=[],a=e;a<t;a+=n)r.push(a);return r},j=function(e){var t=e.conversationDf,n=(0,g.Z)(),r={};return t.forEach((function(e){r[e.senderStart]?r[e.senderStart].push(e.timestampStart):r[e.senderStart]=[e.timestampStart]})),(0,d.jsx)(c.ZP,{container:!0,justifyContent:"center",children:(0,d.jsx)(h.ZP,{data:[].concat((0,x.Z)(Object.keys(r).map((function(e){return{type:"histogram",x:r[e].map((function(e){return new Date(e)})),name:e,legendgroup:e}}))),(0,x.Z)(Object.keys(r).map((function(e,t){return{type:"scatter",x:r[e].map((function(e){return new Date(e)})),y:y(1,r[e].length+1),name:"Cumulative",legendgroup:e,line:{color:v[t%v.length]},opacity:.2,yaxis:"y2"}})))),layout:{yaxis2:{tickfont:{color:n.palette.primary.contrastText},anchor:"free",overlaying:"y",side:"right",range:[1,Math.max.apply(Math,(0,x.Z)(Object.keys(r).map((function(e){return r[e].length}))))],position:.95}}})})},b=n(1711),Z=n(2626),S=n(5363),w=n(9900),C=n(4701),M=n(3034),k={PaperProps:{style:{maxHeight:180,width:250}}},P=function(e){var t=e.state,n=e.setState,r=e.list;return(0,d.jsx)("div",{children:(0,d.jsx)(S.Z,{sx:{m:1,width:300},children:(0,d.jsx)(C.Z,{multiple:!0,value:t,onChange:function(e){var t=e.target.value;n("string"===typeof t?t.split(","):t)},renderValue:function(e){return e.join(", ")},MenuProps:k,children:r.map((function(e){return(0,d.jsxs)(Z.Z,{value:e,children:[(0,d.jsx)(M.Z,{checked:t.indexOf(e)>-1}),(0,d.jsx)(w.Z,{primary:e})]},e)}))})})})},T=function(e){return e||0===!e},O=function(e){var t=e.table,n=e.reverseColors,o=void 0!==n&&n,i=Object.keys(t).filter((function(e){return""!==e})),s=(0,a.useState)(i),u=(0,r.Z)(s,2),l=u[0],f=u[1],m=l.flatMap((function(e){return l.map((function(n){return t[e][n]}))})).filter(T),h=Math.min.apply(Math,(0,x.Z)(m)),p=Math.max.apply(Math,(0,x.Z)(m)),g=b._BJ,v=function(e){return T(e)?g(function(e){return o?1-e:e}((e-h)/(p-h))/2+.5):""};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(c.ZP,{container:!0,alignItems:"center",children:["Choose the users in the table:",(0,d.jsx)(P,{list:i,state:l,setState:f})]}),(0,d.jsxs)("table",{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Sender\\Answerer"}),l.map((function(e,t){return(0,d.jsx)("th",{children:e},t)}))]})}),(0,d.jsx)("tbody",{children:l.map((function(e,n){return(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:e}),l.map((function(n,r){return(0,d.jsx)("td",{style:{backgroundColor:v(t[e][n]),color:"#222"},children:"".concat(t[e][n]?t[e][n]:"").slice(0,5)},r)}))]},n)}))})]})]})},A=n(2212),D=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"],B=function(e){return e/100},E=function(e){var t=e.setThresholdCommitted,n=(0,a.useState)(90),o=(0,r.Z)(n,2),i=o[0],u=o[1];return(0,d.jsxs)(c.ZP,{container:!0,justifyContent:"center",alignItems:"center",children:["Select smoothing: ",B(i),(0,d.jsx)(s.ZP,{style:{maxWidth:300},value:i,onChange:function(e,t){return u(t)},onChangeCommitted:function(e,n){return t(B(n))},scale:B,min:0,max:100})]})},F=function(e){var t=e.conversationDf,n=e.timeSerie,o=e.logaxis,i=void 0!==o&&o,s=Object.keys(n).filter((function(e){return""!==e})),u=(0,a.useState)(s.slice(0,2)),l=(0,r.Z)(u,2),f=l[0],m=l[1],p=(0,a.useState)(B(90)),x=(0,r.Z)(p,2),g=x[0],v=x[1],y=(0,A.RJ)(n.length,g),j=t.map((function(e){return new Date(e.timestampStart)})),b=[];f.forEach((function(e){return Object.keys(n[e]).forEach((function(t){""!==e&&""!==t&&b.push({x:n[e][t].map((function(e,t){return[e,t]})).filter((function(e){return e[0]!==1/0})).map((function(e){return j[e[1]]})),y:(0,A.BX)(n[e][t].filter((function(e){return e!==1/0})),y),type:"scatter",legendgroup:"".concat(e," Vs ").concat(t),mode:"lines",name:"Moving Average",visible:"legendonly",line:{width:7},opacity:.4})}))}));var Z=b.length;return f.forEach((function(e){return Object.keys(n[e]).forEach((function(t){""!==e&&""!==t&&b.push({x:j,y:n[e][t],type:"scatter",mode:"markers",name:"".concat(e," Vs ").concat(t),legendgroup:"".concat(e," Vs ").concat(t),visible:"legendonly",line:{color:D[(b.length-Z)%D.length]},opacity:.7})}))})),(0,d.jsxs)(c.ZP,{container:!0,justifyContent:"center",alignItems:"center",children:["Select senders: ",(0,d.jsx)(P,{list:s,state:f,setState:m}),(0,d.jsx)(E,{setThresholdCommitted:v}),(0,d.jsx)(h.ZP,{data:b,layout:{yaxis:{type:i?"log":"normal",autorange:!0}}})]})},I=function(e){var t=e.filter((function(e){return-1!==e.senderId}));if(0===t.length)return!1;var n={};return t.forEach((function(e){return n[e.sender]=(n[e.sender]||0)+1})),{followup:U(t),timestampStart:t[0].timestamp/t[0].count,senderStart:t[0].sender,numMsg:t.map((function(e){return e.count})).reduce((function(e,t){return e+t}),0),numMsgBySender:n}},R=function(e){var t={};return e.forEach((function(n){var r={};e.forEach((function(e){e!==n&&(r[e]=[])})),t[n]=r})),t},U=function(e){var t=(0,x.Z)(new Set(e.map((function(e){return e.sender})))),n=R(t);return e.forEach((function(r,a){t.forEach((function(t){t!==r.sender&&n[r.sender][t].push((function(t,n){for(var r=t+1;r<e.length;++r)if(e[r].sender===n)return e[r].timestamp/e[r].count;return 1/0}(a,t)-r.timestamp/r.count)/1e3)}))})),n},V=["Time Gap Distribution","Who Starts Conversations","User Follow-Up Time","User Follow-Up Rate","Mean Follow-Up Time","Mean Follow-Up Rate"],z=function(e){return 3e5*Math.pow(1.07,e)},J=function(e){var t=function(e){return Math.trunc(e/100)/10};return e<6e4?"".concat(t(e)," s"):e<36e5?"".concat(t(e/60)," min"):e<864e5?"".concat(t(e/3600)," h"):"".concat(t(e/86400)," day")},_=function(e){var t=e.setThresholdCommitted,n=(0,a.useState)(50),o=(0,r.Z)(n,2),i=o[0],u=o[1];return(0,d.jsxs)(c.ZP,{container:!0,children:["Threshold: ",J(z(i)),(0,d.jsx)(s.ZP,{value:i,onChange:function(e,t){return u(t)},onChangeCommitted:function(e,n){return t(z(n))},valueLabelFormat:J,scale:z,min:0,max:100})]})},W=function(e){var t=e.textDf,n=(0,a.useState)(z(50)),s=(0,r.Z)(n,2),h=s[0],g=s[1],v=function(e,t){for(var n=[],r=0,a=0;r<e.length;){for(var o=function(e){return{sender:e.sender,senderId:e.senderId,timestamp:e.timestamp,count:1}},i=[o(e[r])];a<e.length-1&&e[a+1].timestamp-e[a].timestamp<=t;){var c=i.length-1;i[c].sender===e[a+1].sender?(i[c].count++,i[c].timestamp=new Date(e[a+1].timestamp.getTime()+i[c].timestamp.getTime())):i.push(o(e[a+1])),a++}var s=I(i);s&&n.push(s),r=++a}return n}(t,h),y=function(e,t){for(var n=(0,x.Z)(new Set(e.map((function(e){return e.sender})))),r=R(n),a={},o=R(n),i=R(n),c=0;c<t.length;++c)for(var s=t[c],u=0;u<n.length;++u){var l=n[u];a[l]=(a[l]||0)+(s.numMsgBySender[l]?s.numMsgBySender[l]:0);for(var f=0;f<n.length;++f){var m=n[f];if(u!==f)if(s.followup[l]&&s.followup[l][m]){var h=s.followup[l][m].filter((function(e){return e!==1/0}));r[l][m]=r[l][m].concat(h),h.length>0?o[l][m].push(h.reduce((function(e,t){return e+t}))/h.length):o[l][m].push(1/0),i[l][m].push(h.length/s.numMsgBySender[l])}else i[l][m].push(0),o[l][m].push(1/0)}}return{meanAnswerTimeSerie:o,answerRateSerie:i,allAnswers:r,numMsgSent:a}}(t,v),b=y.meanAnswerTimeSerie,Z=y.answerRateSerie,S=function(e,t){for(var n=Object.keys(e),r=R(n),a=R(n),o=0;o<n.length;++o)for(var i=n[o],c=0;c<n.length;++c){var s=n[c];o!==c&&(r[i][s]=e[i][s].reduce((function(e,t){return e+t}),0)/e[i][s].length,a[i][s]=e[i][s].length/t[i])}return{meanAnswerTime:r,answerRate:a}}(y.allAnswers,y.numMsgSent),w=S.meanAnswerTime,C=S.answerRate;return(0,d.jsxs)(a.Fragment,{children:[(0,d.jsx)(o.Z,{style:{marginTop:10,marginBottom:10}}),(0,d.jsxs)(c.ZP,{container:!0,children:[(0,d.jsx)(i.Z,{variant:"h6",children:"Partition Messages into Conversations and Analyze Follow-Up Times"}),(0,d.jsx)(u.Z,{title:(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:"Toggle the sender by clicking on the legend on the right"}),(0,d.jsx)("li",{children:"Fine tune the separation parameter manually using the slider"})]}),children:(0,d.jsx)(l.Z,{size:"small",children:(0,d.jsx)(f.Z,{})})})]}),(0,d.jsx)(_,{setThresholdCommitted:g}),(0,d.jsx)(m.Z,{labels:V,tabs:[{component:function(){return(0,d.jsx)(p,{textDf:t,threshold:h})}},{component:function(){return(0,d.jsx)(j,{conversationDf:v})}},{component:function(){return(0,d.jsx)(F,{logaxis:!0,timeSerie:b,conversationDf:v})}},{component:function(){return(0,d.jsx)(F,{timeSerie:Z,conversationDf:v})}},{component:function(){return(0,d.jsx)(O,{table:w})}},{component:function(){return(0,d.jsx)(O,{reverseColors:!0,table:C})}}]})]})}},4724:function(e,t,n){var r=n(9439),a=n(1413),o=n(5987),i=n(2791),c=n(9347),s=n(1474),u=n(4554),l=n(184),f=["children","value","index"],m=function(e){var t=e.children,n=e.value,r=e.index,i=(0,o.Z)(e,f);return(0,l.jsx)("div",(0,a.Z)((0,a.Z)({role:"tabpanel",hidden:n!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},i),{},{children:t}))};t.Z=function(e){var t=e.labels,n=e.tabs,o=(0,i.useState)(0),f=(0,r.Z)(o,2),h=f[0],d=f[1];return(0,l.jsxs)(u.Z,{sx:{width:"100%"},children:[(0,l.jsx)(u.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,l.jsx)(c.Z,{variant:"scrollable",scrollButtons:!0,allowScrollButtonsMobile:!0,value:h,onChange:function(e,t){d(t)},textColor:"inherit",children:t.map((function(e,t){return(0,l.jsx)(s.Z,(0,a.Z)({label:e},{id:"simple-tab-".concat(n=t),"aria-controls":"simple-tabpanel-".concat(n)}),t);var n}))})}),n.map((function(e,t){return(0,l.jsx)(m,{value:h,index:t,children:(0,l.jsx)(e.component,{})},t)}))]})}},5916:function(e,t,n){var r=n(4942),a=(n(2791),n(418)),o=n(8286),i=n(184);function c(e){return e&&"object"===typeof e&&!Array.isArray(e)}function s(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];if(!n.length)return e;var o=n.shift();if(c(e)&&c(o))for(var i in o)c(o[i])?(e[i]||Object.assign(e,(0,r.Z)({},i,{})),s(e[i],o[i])):Object.assign(e,(0,r.Z)({},i,o[i]));return s.apply(void 0,[e].concat(n))}t.ZP=function(e){var t=function(e){return{width:"100%",height:500,margin:{l:40,r:20,b:18,t:30,pad:0},paper_bgcolor:e.palette.background.paper,plot_bgcolor:e.palette.background.paper,xaxis:{color:e.palette.text.primary},yaxis:{color:e.palette.text.primary},legend:{font:{color:e.palette.text.primary}},title:{font:{color:e.palette.text.primary}},scene:{xaxis:{color:e.palette.text.primary},yaxis:{color:e.palette.text.primary},zaxis:{color:e.palette.text.primary}}}}((0,a.Z)());return(0,i.jsx)(o.Z,{data:e.data,layout:e.layout?s(e.layout,t):t})}},2212:function(e,t,n){n.d(t,{BX:function(){return i},RJ:function(){return s},tq:function(){return c}});var r=n(3433),a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=[];if(e<t)for(var a=e;a<t;a+=n)r.push(a);else for(var o=e;o>t;o+=n)r.push(o);return r},o=function(e,t){for(var n=0,r=0;r<e.length;++r)n+=e[r]*t[r];return n},i=function(e,t){for(var n=t.length,r=e.length,a=Math.trunc(n/2),i=[],c=0;c<r;++c){var s=t.slice(a-c,a-c+r);i.push(o(s,e)/s.reduce((function(e,t){return e+t}),0))}return i},c=function(e,t){return[].concat((0,r.Z)(Array(e-t+1).fill(0)),(0,r.Z)(a(1,t)),(0,r.Z)(a(t,0,-1)),(0,r.Z)(Array(e-t+1).fill(0)))},s=function(e,t){return[].concat((0,r.Z)(a(e,0,-1).map((function(e){return Math.pow(t,e)}))),(0,r.Z)(a(0,e+1).map((function(e){return Math.pow(t,e)}))))}},5987:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(3366);function a(e,t){if(null==e)return{};var n,a,o=(0,r.Z)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}}}]);
//# sourceMappingURL=397.47d8e3ee.chunk.js.map