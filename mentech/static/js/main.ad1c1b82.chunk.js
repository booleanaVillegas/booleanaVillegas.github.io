(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{292:function(e,a,t){e.exports=t(608)},297:function(e,a,t){},300:function(e,a,t){},303:function(e,a,t){},305:function(e,a,t){},400:function(e,a,t){},402:function(e,a,t){},411:function(e,a,t){},413:function(e,a,t){},536:function(e,a,t){},538:function(e,a,t){},540:function(e,a,t){},542:function(e,a,t){},544:function(e,a,t){},562:function(e,a,t){},564:function(e,a,t){},566:function(e,a,t){},568:function(e,a,t){},608:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(7),o=t.n(l),c=(t(297),t(22)),i=t(23),s=t(26),m=t(24),u=t(25),h=(t(300),t(618)),d=t(615),p=(t(302),t(76)),g=t(13),E=(t(303),t(305),t(616)),f=t(610),b=t(94),v=t(611),y=t(619),O=t(613),j=E.a.Item,C=function(e){return r.a.createElement("section",{className:"form-login-component"},r.a.createElement(E.a,{onSubmit:e.submit,className:"login-form actual-login-form"},r.a.createElement(j,{className:"input-form-login"},r.a.createElement(f.a,{prefix:r.a.createElement(b.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),id:"email",placeholder:"Correo Electr\xf3nico",onChange:e.change})),r.a.createElement(j,{className:"input-form-login"},r.a.createElement(f.a,{prefix:r.a.createElement(b.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",id:"password",placeholder:"Contrase\xf1a",onChange:e.change})),r.a.createElement(v.a,{type:"primary",htmlType:"submit",className:"login-button"},"Iniciar sesi\xf3n"),r.a.createElement(O.a,{to:"/signup"}," ",r.a.createElement(v.a,{type:"primary",className:"login-button",style:{marginTop:"10px"}},"Ir al registro"))),e.error?r.a.createElement(y.a,{message:"Error",description:e.error,type:"error",showIcon:!0,closable:!0}):null)},N=t(16),S=t(617),x=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).handleChange=function(e){t.setState(Object(p.a)({},e.target.id,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.signIn(t.state)},t.state={email:"",password:""},t.handleChange=t.handleChange.bind(Object(g.a)(Object(g.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(g.a)(Object(g.a)(t))),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return this.props.auth.uid?n.createElement(S.a,{to:"/"}):n.createElement("section",{className:"login"},n.createElement(C,{submit:this.handleSubmit,change:this.handleChange,error:this.props.authError}))}}]),a}(n.Component),I=Object(N.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signIn:function(a){return e((t=a,function(e,a,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(t.email,t.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(a){e({type:"LOGIN_ERROR",err:a})})}));var t}}})(x),w=(t(400),t(402),t(609)),P=E.a.Item,R=w.a.Option,A=function(e){return r.a.createElement(h.a,null,r.a.createElement("section",{className:"form-signup-component"},r.a.createElement(E.a,{onSubmit:e.submit,className:"signup-form actual-signup-form",layout:"horizontal"},r.a.createElement(P,{className:"input-form-signup",label:"Nombre"},r.a.createElement(f.a,{placeholder:"Nombre",id:"nombre",onChange:e.change})),r.a.createElement(P,{className:"input-form-signup",label:"Apellido"},r.a.createElement(f.a,{placeholder:"Apellido",id:"apellido",onChange:e.change})),r.a.createElement(P,{className:"input-form-signup",label:"Correo Electr\xf3nico"},r.a.createElement(f.a,{placeholder:"Email",id:"email",onChange:e.change})),r.a.createElement(P,{className:"input-form-signup",label:"Contrase\xf1a"},r.a.createElement(f.a,{placeholder:"Contrase\xf1a",id:"password",type:"password",onChange:e.change})),r.a.createElement(P,{className:"input-form-signup",label:"Confirmar contrase\xf1a"},r.a.createElement(f.a,{placeholder:"Confirmar Contrase\xf1a",id:"confPass",type:"password",onChange:e.change})),r.a.createElement(P,{className:"input-form-signup",label:"Edad"},r.a.createElement(w.a,{style:{color:"rgba(0,0,0,.25)"},id:"edad",defaultValue:"Edad",onChange:e.cEdad},r.a.createElement(R,{id:"edad",value:"Edad",disabled:!0},"Edad"),r.a.createElement(R,{id:"edad",value:"11"},"11"),r.a.createElement(R,{id:"edad",value:"12"},"12"),r.a.createElement(R,{id:"edad",value:"13"},"13"),r.a.createElement(R,{id:"edad",value:"14"},"14"),r.a.createElement(R,{id:"edad",value:"15"},"15"),r.a.createElement(R,{id:"edad",value:"16"},"16"),r.a.createElement(R,{id:"edad",value:"17"},"17"))),r.a.createElement(P,{className:"input-form-signup",label:"Barrio"},r.a.createElement(w.a,{style:{color:"rgba(0,0,0,.25)"},id:"barrio",defaultValue:"Barrio",onChange:e.cBarrio},r.a.createElement(R,{value:"Barrio",disabled:!0},"Barrio"),r.a.createElement(R,{value:"Potrero Grande"},"Potrero Grande"),r.a.createElement(R,{value:"Conquistadores"},"Conquistadores"),r.a.createElement(R,{value:"Agua Blanca"},"Agua Blanca"),r.a.createElement(R,{value:"Obrero"},"Obrero"),r.a.createElement(R,{value:"Siloe"},"Siloe"),r.a.createElement(R,{value:"Limonar"},"Limonar"),r.a.createElement(R,{value:"Las Granjas"},"Las Granjas"))),r.a.createElement(v.a,{type:"primary",htmlType:"submit",className:"signup-button"},"Crear Cuenta")),e.error?r.a.createElement(y.a,{message:"Error",description:e.error,type:"error",showIcon:!0,closable:!0}):null))},B=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).handleChange=function(e){t.setState(Object(p.a)({},e.target.id,e.target.value)),console.log(t.state)},t.handleChangeEdad=function(e){t.setState({edad:e})},t.handleChangeBarrio=function(e){t.setState({barrio:e})},t.handleSubmit=function(e){e.preventDefault(),console.log("holita"),t.state.confPass===t.state.password&&t.props.signUp(t.state)},t.state={nombre:"",apellido:"",email:"",password:"",confPass:"",edad:"",barrio:""},t.handleChange=t.handleChange.bind(Object(g.a)(Object(g.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(g.a)(Object(g.a)(t))),t.handleChangeEdad=t.handleChangeEdad.bind(Object(g.a)(Object(g.a)(t))),t.handleChangeBarrio=t.handleChangeBarrio.bind(Object(g.a)(Object(g.a)(t))),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement(S.a,{to:"/"}):r.a.createElement("section",{className:"sign-up"},r.a.createElement(A,{submit:this.handleSubmit,change:this.handleChange,error:this.props.authError,cEdad:this.handleChangeEdad,cBarrio:this.handleChangeBarrio}))}}]),a}(n.Component),k=Object(N.b)(function(e){return console.log(e),{auth:e.firebase.auth}},function(e){return{signUp:function(a){return e(function(e){return function(a,t,n){var r=n.getFirebase,l=n.getFirestore,o=r(),c=l();o.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(a){return c.collection("users").doc(a.user.uid).set({nombre:e.nombre,email:e.email,apellido:e.apellido,edad:e.edad,barrio:e.barrio,nivel:"0",avatar:"https://firebasestorage.googleapis.com/v0/b/mentech-f7725.appspot.com/o/monster.svg?alt=media&token=e6027f63-35e6-40c3-bd8d-5113ef33d1d5"})}).then(function(){a({type:"SIGNUP_SUCCESS"})}).catch(function(e){a({type:"SIGNUP_ERROR",err:e})})}}(a))}}})(B),L=(t(411),function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return this.props.auth.uid?n.createElement("section",{className:"main"},n.createElement("h1",{style:{padding:"15px"}}," A\xfan no hay fotos o videos subidos, podr\xe1s verlos en unas semans "),n.createElement(v.a,{style:{marginBottom:"20px"},type:"primary",onClick:this.props.signOut,className:"login-button"},"Cerrar Sesi\xf3n")):n.createElement(S.a,{to:"/login"})}}]),a}(n.Component)),F=Object(N.b)(function(e){return{auth:e.firebase.auth}},function(e){return{signOut:function(){return e(function(e,a,t){(0,t.getFirebase)().auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})})})}}})(L),U=(t(413),t(38)),_=t(30),G=(t(536),function(e){return r.a.createElement("div",{className:"profile-info"},r.a.createElement("div",{className:"profilepic"},r.a.createElement("img",{src:e.image,alt:""})),r.a.createElement("div",{className:"mentor-info"},r.a.createElement("h1",{className:"profile-name"}," ",e.name," "),r.a.createElement("h1",{className:"lil-info",style:{marginBottom:"0"}},e.barrio),r.a.createElement("h1",{className:"lil-info",style:{marginBottom:"0"}},"Nivel "+e.level)))}),q=(t(538),function(){return r.a.createElement("section",{className:"profile-menu"},r.a.createElement(O.a,{style:{color:"#1d2539"},to:"/perfil/stats"}," ",r.a.createElement("div",{className:"profile-item"},r.a.createElement(b.a,{className:"icon-profile",type:"bar-chart",theme:"outlined"}),r.a.createElement("p",{style:{marginBottom:"0"}},"Estad\xedsticas")," ")),r.a.createElement(O.a,{style:{color:"#1d2539"},to:"/perfil/trophies"},r.a.createElement("div",{className:"profile-item"}," ",r.a.createElement(b.a,{className:"icon-profile",type:"trophy",theme:"outlined"}),r.a.createElement("p",{style:{marginBottom:"0"}},"Logros")," ")),r.a.createElement(O.a,{style:{color:"#1d2539"},to:"/perfil/activity"},r.a.createElement("div",{className:"profile-item"}," ",r.a.createElement(b.a,{className:"icon-profile",type:"radar-chart",theme:"outlined"}),r.a.createElement("p",{style:{marginBottom:"0"}},"Actividad")," ")," "))}),D=(t(540),function(e){return r.a.createElement("ul",{className:"logros"},e.logros.map(function(e,a){return r.a.createElement("li",{key:a,className:"item-logro"},r.a.createElement("img",{className:"img-logro",src:e.img,alt:""}),r.a.createElement("div",{className:"info-logro"},r.a.createElement("h1",{style:{fontWeight:"bold",margin:"0"}},e.nombre),r.a.createElement("p",{style:{margin:"0"}},e.desc)))}))}),T=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).uploadPicture=function(){console.log("Subi foto")},t.uploadPicture=t.uploadPicture.bind(Object(g.a)(Object(g.a)(t))),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.auth,t=e.profile,r=e.logros;if(!a.uid)return n.createElement(S.a,{to:"/login"});var l=[];if(r&&t.logros)for(var o=0;o<t.logros.length;o++)l.push(r[t.logros[o]]);return n.createElement("section",{className:"profile"},n.createElement("div",{className:"cont-img-name"},n.createElement(G,{image:t.avatar,name:t.nombre+" "+t.apellido,age:t.edad,barrio:t.barrio,level:t.nivel,editProfile:this.uploadPicture})),n.createElement("div",{className:"cont-logros-menu"},n.createElement(q,null),n.createElement(D,{logros:l})))}}]),a}(n.Component),z=Object(_.d)(Object(N.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile,logros:e.firestore.data.logros}}),Object(U.firestoreConnect)([{collection:"users"},{collection:"logros"}]))(T),M=(t(542),t(544),function(e){switch(e.type){case"complex":return r.a.createElement("section",{className:"indv-challenge"},r.a.createElement("figure",{className:"fig-challenge-complex"},r.a.createElement("img",{className:"img-challenge",src:"https://images-eu.ssl-images-amazon.com/images/I/41BhKPIAyjL.png",alt:"icon-group"})),r.a.createElement("div",{className:"cont-info-reto"},r.a.createElement("h1",{style:{padding:"15px",fontSize:"20pt"}},"Conflicto"),r.a.createElement("p",{className:"text-challenge"},e.challenge.identificacion),r.a.createElement("p",{className:"text-challenge"},e.challenge.posibilitacion),r.a.createElement("p",{className:"text-challenge"},e.challenge.proposicion),r.a.createElement(v.a,{style:{marginBottom:"20px"},type:"primary",onClick:e.volver,className:"login-button"},"Volver")));case"simple":return r.a.createElement("section",{className:"indv-challenge"},r.a.createElement("figure",{className:"fig-challenge"},r.a.createElement("img",{className:"img-challenge",src:"https://images-eu.ssl-images-amazon.com/images/I/41BhKPIAyjL.png",alt:"icon-group"})),r.a.createElement("div",{className:"cont-info-reto"},r.a.createElement("h1",{style:{padding:"15px",fontSize:"20pt"}},e.challenge.tema),r.a.createElement("p",{className:"text-challenge"},e.challenge.descripcion),r.a.createElement(v.a,{style:{marginBottom:"20px"},type:"primary",onClick:e.volver,className:"login-button"},"Volver")));case"none":default:return r.a.createElement("div",null)}}),W=t(194),J=t.n(W),Q=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).complexChallenge=function(){t.setState({typeChallenge:"complex"})},t.simpleChallenge=function(){t.setState({typeChallenge:"simple"})},t.noChallenge=function(){t.setState({typeChallenge:"none"})},t.handleQR=function(){t.setState({typeChallenge:"qr"})},t.state={complex:!1,simple:!1,typeChallenge:"none",result:"No result"},t.complexChallenge=t.complexChallenge.bind(Object(g.a)(Object(g.a)(t))),t.handleScan=t.handleScan.bind(Object(g.a)(Object(g.a)(t))),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"handleScan",value:function(e){e&&(console.log(e),this.setState({typeChallenge:e,result:e}))}},{key:"handleError",value:function(e){console.error(e)}},{key:"render",value:function(){var e=this.props,a=e.challenges,t=e.auth,r=e.complex,l=a?Math.floor(Math.random()*(a.length-1)):0,o=r?Math.floor(Math.random()*(r.length-1)):0,c=a?a[l]:null,i=r?r[o]:null;if(!t.uid)return n.createElement(S.a,{to:"/login"});switch(this.state.typeChallenge){case"none":return n.createElement("section",{className:"challenge"},n.createElement("div",{className:"buttons"},n.createElement(v.a,{style:{margin:"10px"},type:"primary",onClick:this.complexChallenge,className:"login-button"},"Retos compuestos"),n.createElement(v.a,{style:{margin:"10px"},type:"primary",onClick:this.simpleChallenge,className:"login-button"},"Retos Simples"),n.createElement(v.a,{style:{margin:"10px"},type:"primary",onClick:this.handleQR,className:"login-button"},"Leer c\xf3digo"),n.createElement(v.a,{style:{margin:"10px"},type:"primary",onClick:this.handleQR,className:"login-button"},"Pregunta")));case"simple":return n.createElement("section",{className:"challenge"},n.createElement(M,{challenge:c,volver:this.noChallenge,type:this.state.typeChallenge}));case"complex":return n.createElement("section",{className:"challenge"},n.createElement(M,{challenge:i,volver:this.noChallenge,type:this.state.typeChallenge}));case"qr":return n.createElement("section",{className:"challenge"},n.createElement("div",{className:"qr-container"},n.createElement("h1",null,"Escanea el codigo que hay en el tablero"),n.createElement(J.a,{delay:100,onError:this.handleError,onScan:this.handleScan,className:"qr-reader"}),n.createElement("p",null,this.state.result)));default:return n.createElement("section",{className:"challenge"},n.createElement("div",{className:"qr-container"},n.createElement("h1",null,"Por favor, escanea un c\xf3digo v\xe1lido"),n.createElement(J.a,{delay:100,onError:this.handleError,onScan:this.handleScan,className:"qr-reader"}),n.createElement("p",null,this.state.result)))}}}]),a}(n.Component),V=Object(_.d)(Object(N.b)(function(e){return{complex:e.firestore.ordered.complex,challenges:e.firestore.ordered.challenges,auth:e.firebase.auth}}),Object(U.firestoreConnect)([{collection:"complex"},{collection:"challenges"}]))(Q),K=(t(562),function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return this.props.auth.uid?n.createElement("section",{className:"learned"},n.createElement("h1",{style:{padding:"15px"}}," A\xfan no has aprendido ningun tema nuevo ")):n.createElement(S.a,{to:"/login"})}}]),a}(n.Component)),X=Object(N.b)(function(e){return console.log(e),{auth:e.firebase.auth}})(K),$=(t(564),Object(N.b)(function(e){return{auth:e.firebase.auth}})(function(e){return e.auth.uid?r.a.createElement("section",{className:"nav-menu"},r.a.createElement(O.a,{style:{color:"#1d2539"},to:"/"}," ",r.a.createElement("div",{className:"nav-item"},r.a.createElement(b.a,{className:"icon-nav",type:"home",theme:"outlined"}),r.a.createElement("p",{style:{marginBottom:"0"}},"Inicio")," ")),r.a.createElement(O.a,{style:{color:"#1d2539"},to:"/juego"},r.a.createElement("div",{className:"nav-item"}," ",r.a.createElement(b.a,{className:"icon-nav",type:"star",theme:"outlined"}),r.a.createElement("p",{style:{marginBottom:"0"}},"Juego")," ")," "),r.a.createElement(O.a,{style:{color:"#1d2539"},to:"/lecciones"},r.a.createElement("div",{className:"nav-item"}," ",r.a.createElement(b.a,{className:"icon-nav",type:"team",theme:"outlined"}),r.a.createElement("p",{style:{marginBottom:"0"}},"Lecciones")," ")),r.a.createElement(O.a,{style:{color:"#1d2539"},to:"/perfil"},r.a.createElement("div",{className:"nav-item"}," ",r.a.createElement(b.a,{className:"icon-nav",type:"user",theme:"outlined"}),r.a.createElement("p",{style:{marginBottom:"0"}},"Perfil")," ")," ")):r.a.createElement("div",null)})),H=(t(566),t(614)),Y=Object(H.a)(Object(N.b)(function(e){return{auth:e.firebase.auth}})(function(e){return e.auth.uid?r.a.createElement("div",{className:"top-bar"},r.a.createElement("h1",{className:"title"},e.location.pathname.substr(1,e.location.pathname.length-1).length>1?e.location.pathname.substr(1,e.location.pathname.length-1):"home")):r.a.createElement("div",null)})),Z=t(620),ee=(t(568),function(e){return function(a,t,n){n.getFirebase;for(var r=(0,n.getFirestore)(),l=Math.floor(e.jugadores.length/2),o=[],c=[],i=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}return e}(e.jugadores),s=0;s<e.jugadores.length;s++)s<=l?o.push(i[s]):c.push(i[s]);r.collection("partidas").add({jugadores:e.jugadores,fecha:new Date,enCurso:!0,finalizada:!1,equipo1:o,equipo2:c,ganador:""}).then(function(){a({type:"PARTIDA_CREATED",partida:e})}).catch(function(e){a({type:"PARTIDA_ERROR",err:e})})}});var ae=Z.a.Option,te=[],ne=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).handleSearch=function(e){for(var a=[],n=t.props.users,r=0;r<n.length;r++)(n[r].nombre.toLowerCase().includes(e.toLowerCase())||n[r].apellido.toLowerCase().includes(e.toLowerCase()))&&a.push(n[r]);t.setState({usersAutoC:a,valueAuto:e})},t.onSelect=function(e){te.push(e),t.setState({usersForPartida:te}),console.log(e);var a=document.getElementById("autocomplete");console.log(a)},t.agregarPartida=function(){t.props.crearPartida({jugadores:t.state.usersForPartida})},t.state={usersAutoC:[],usersForPartida:[]},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.usersPorId,a=e?this.state.usersForPartida.map(function(a,t){return r.a.createElement("li",{key:t},e[a].nombre+" "+e[a].apellido)}):null,t=this.state.usersAutoC.map(function(e,a){return r.a.createElement(ae,{value:e.id,key:a},e.nombre+" "+e.apellido)});return r.a.createElement("section",{className:"moderador"},r.a.createElement("div",{className:"container-autocomplete"},r.a.createElement("h1",{className:"title"},"Elige aqui a los jugadores"),r.a.createElement(Z.a,{id:"autocomplete",style:{width:"90%"},onSearch:this.handleSearch,placeholder:"Agrega a los mentores a la partida",onSelect:this.onSelect,allowClear:!0},t)),r.a.createElement("div",{className:"container-users-puntos"},r.a.createElement("h1",{className:"title"},"Jugadores elegidos"),r.a.createElement("ul",null,a),r.a.createElement(v.a,{type:"primary",onClick:this.agregarPartida,className:"login-button"},"Crear partida")))}}]),a}(n.Component);var re=Object(_.d)(Object(N.b)(function(e){return{users:e.firestore.ordered.users,usersPorId:e.firestore.data.users}},function(e){return{crearPartida:function(a){return e(ee(a))}}}),Object(U.firestoreConnect)([{collection:"users"}]))(ne),le=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("section",null,r.a.createElement(d.a,{path:"/",component:$}),r.a.createElement(d.a,{path:"/",component:Y}),r.a.createElement(d.a,{exact:!0,path:"/login",component:I}),r.a.createElement(d.a,{exact:!0,path:"/signup",component:k}),r.a.createElement(d.a,{exact:!0,path:"/",component:F}),r.a.createElement(d.a,{exact:!0,path:"/juego",component:V}),r.a.createElement(d.a,{path:"/perfil",component:z}),r.a.createElement(d.a,{exact:!0,path:"/lecciones",component:X}),r.a.createElement(d.a,{exact:!0,path:"/moderador",component:re})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=t(101),ce={authError:null},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOGIN_ERROR":return console.log("login failed"),Object(oe.a)({},e,{authError:a.err.message});case"LOGIN_SUCCESS":return console.log("login sucess"),Object(oe.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup sucess"),Object(oe.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("sign up error"),Object(oe.a)({},e,{authError:a.err.message});default:return e}},se={},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se;arguments.length>1&&arguments[1];return e},ue={},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"PARTIDA_CREATED":return console.log("created partida",a.partida),e;case"PARTIDA_ERROR":return console.log("Error creating partida",a.err),e;default:return e}},de=t(99),pe=Object(_.c)({auth:ie,challenge:me,firestore:de.firestoreReducer,firebase:U.firebaseReducer,partida:he}),ge=t(290),Ee=t(131),fe=t.n(Ee);t(601),t(603);fe.a.initializeApp({apiKey:"AIzaSyCjs4O_dmEL0DXuQvBEcWP3I00-v4cJjmg",authDomain:"mentech-f7725.firebaseapp.com",databaseURL:"https://mentech-f7725.firebaseio.com",projectId:"mentech-f7725",storageBucket:"mentech-f7725.appspot.com",messagingSenderId:"818938297933"});fe.a.firestore().settings({timestampsInSnapshots:!0});var be=fe.a,ve=Object(_.e)(pe,Object(_.d)(Object(_.a)(ge.a.withExtraArgument({getFirebase:U.getFirebase,getFirestore:de.getFirestore})),Object(de.reduxFirestore)(be),Object(U.reactReduxFirebase)(be,{useFirestoreForProfile:!0,attachAuthIsReady:!0,userProfile:"users"})));ve.firebaseAuthIsReady.then(function(){o.a.render(r.a.createElement(N.a,{store:ve},r.a.createElement(le,null)),document.getElementById("root"))}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[292,2,1]]]);
//# sourceMappingURL=main.ad1c1b82.chunk.js.map