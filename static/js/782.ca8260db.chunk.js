"use strict";(self.webpackChunkmatteocaldana=self.webpackChunkmatteocaldana||[]).push([[782],{6782:function(e,t,n){n.r(t);var i=n(2791),a=n(4721),r=n(4567),d=n(1674),s=n(1711),u=n(1508),m=n(4903),o=n(184),l=function(e){var t=s.ruo(e,(function(e){return e.sender})),n=[];return t.forEach((function(e,t){var i;""!==t&&n.push({id:t,sender:t,numMessages:e.length,numMedia:e.filter((function(e){return e.type.startsWith("media")})).length,numImages:e.filter((function(e){return e.type.startsWith("media:im")})).length,numAudio:e.filter((function(e){return e.type.startsWith("media:aud")})).length,numDeleted:e.filter((function(e){return"deleted"===e.type})).length,meanLength:(i=e.filter((function(e){return"plainText"===e.type})).map((function(e){return e.message.length})).reduce((function(e,t){return e+t}),0)/e.length,Math.round(100*(i+Number.EPSILON))/100)})})),n};t.default=function(e){var t=e.textDf;return(0,o.jsxs)(i.Fragment,{children:[(0,o.jsx)(a.Z,{style:{marginTop:10,marginBottom:10}}),(0,o.jsx)(r.Z,{variant:"h6",children:"Some Basic Statistics"}),(0,o.jsx)(d._,{style:{maxHeight:510},rows:l(t),columns:u.N,pageSize:10,density:"compact",disableSelectionOnClick:!0,components:{Toolbar:m.N}})]})}},4903:function(e,t,n){n.d(t,{N:function(){return m}});n(2791);var i=n(4265),a=n(2501),r=n(9e3),d=n(3395),s=n(1330),u=n(184),m=function(){return(0,u.jsxs)(i.D,{children:[(0,u.jsx)(a.S,{color:"info"}),(0,u.jsx)(r.M,{style:{color:"#2196f3"}}),(0,u.jsx)(d.L,{color:"info"}),(0,u.jsx)(s.Zh,{color:"info"})]})}},1508:function(e,t,n){n.d(t,{N:function(){return a},s:function(){return i}});var i=[{field:"timestamp",headerName:"Timestamp",width:210},{field:"sender",headerName:"Sender",width:90},{field:"type",headerName:"Type",width:80},{field:"message",headerName:"Message",width:500}],a=[{field:"sender",headerName:"Sender",width:150},{field:"numMessages",headerName:"#messages",width:110},{field:"numMedia",headerName:"#media",width:80},{field:"numAudio",headerName:"#audio",width:80},{field:"numImages",headerName:"#images",width:90},{field:"numDeleted",headerName:"#deleted",width:90},{field:"meanLength",headerName:"Mean Length",width:110}]}}]);
//# sourceMappingURL=782.ca8260db.chunk.js.map