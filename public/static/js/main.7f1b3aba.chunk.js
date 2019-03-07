(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,a,t){e.exports=t.p+"static/media/SpaceX-Logo.6ff54c0f.svg"},42:function(e,a,t){e.exports=t(63)},47:function(e,a,t){},57:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),r=t(32),l=t.n(r),s=(t(47),t(12)),m=t(13),u=t(16),i=t(14),o=t(17),h=t(40),p=t(15),E=t(65),d=t(66),g=t(21),b=t(11),f=t.n(b),_=t(23),y=t.n(_),v=t(33),N=t.n(v),k=t(64);var j=function(e){var a=e.launch,t=a.flight_number,n=a.mission_name,r=a.launch_date_local,l=a.launch_success;return c.a.createElement("div",{className:"card card-body mb-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement("h4",null,"Mission:"," ",c.a.createElement("span",{className:y()({"text-success":l,"text-danger":!l})},n)),c.a.createElement("p",null,"Date: ",c.a.createElement(N.a,{format:"YYYY-MM-DD HH:mm"},r))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(k.a,{to:"/launch/".concat(t),className:"btn btn-secondary"},"Launch Details"))))};var O=function(){return c.a.createElement("div",{className:"my-3"},c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-success"})," = Success"),c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-danger"})," = Failure"))};function w(){var e=Object(g.a)(["\n  query LaunchesQuery {\n    launches {\n      flight_number\n      mission_name\n      launch_date_local\n      launch_success\n    }\n  }\n"]);return w=function(){return e},e}var x=f()(w()),L=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement("h1",{className:"display-4 my-3"},"Launches"),c.a.createElement(O,null),c.a.createElement(p.b,{query:x},function(e){var a=e.loading,t=e.error,r=e.data;return a?c.a.createElement("h4",null,"Loading..."):t?console.log(t):(console.log(r),c.a.createElement(n.Fragment,null,r.launches.map(function(e){return c.a.createElement(j,{key:e.flight_number,launch:e})})))}))}}]),a}(n.Component);function D(){var e=Object(g.a)(["\n  query LaunchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);return D=function(){return e},e}var Y=f()(D()),q=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.match.params.flight_number;return e=parseInt(e),c.a.createElement(n.Fragment,null,c.a.createElement(p.b,{query:Y,variables:{flight_number:e}},function(e){var a=e.loading,t=e.error,n=e.data;if(a)return c.a.createElement("h4",null,"Loading...");if(t)return console.log(t);var r=n.launch,l=r.mission_name,s=r.flight_number,m=r.launch_year,u=r.launch_success,i=r.rocket,o=i.rocket_id,h=i.rocket_name,p=i.rocket_type;return c.a.createElement("div",null,c.a.createElement("h1",{className:"display-4 my-3"},c.a.createElement("span",{className:"text-dark"},"Mission:")," ",l),c.a.createElement("h4",{className:"mb-3"},"Launch Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Flight Number: ",s),c.a.createElement("li",{className:"list-group-item"},"Launch Year: ",m),c.a.createElement("li",{className:"list-group-item"},"Launch Successful:"," ",c.a.createElement("span",{className:y()({"text-success":u,"text-danger":!u})},u?"Yes":"No"))),c.a.createElement("h4",{className:"my-3"},"Rocket Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Rocket ID: ",o),c.a.createElement("li",{className:"list-group-item"},"Rocket Name: ",h),c.a.createElement("li",{className:"list-group-item"},"Rocket Type: ",p)),c.a.createElement("hr",null),c.a.createElement(k.a,{to:"/",className:"btn btn-secondary"},"Back"))}))}}]),a}(n.Component),F=t(38),I=t.n(F),M=(t(57),new h.a({uri:"/graphql"})),R=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(p.a,{client:M},c.a.createElement(E.a,null,c.a.createElement("div",{className:"container"},c.a.createElement("img",{src:I.a,alt:"SpaceX",style:{width:"332px",height:"41px",display:"block",margin:"auto"}}),c.a.createElement(d.a,{exact:!0,path:"/",component:L}),c.a.createElement(d.a,{exact:!0,path:"/launch/:flight_number",component:q}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,1,2]]]);
//# sourceMappingURL=main.7f1b3aba.chunk.js.map