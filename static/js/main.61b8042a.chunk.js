(this["webpackJsonpsimple-weather-app"]=this["webpackJsonpsimple-weather-app"]||[]).push([[0],{99:function(t,e,n){"use strict";n.r(e);var r=n(5),c=n(0),i=n.n(c),a=n(10),o=n.n(a),u=n(127),s=n(129),d=n(130),l=n(44),j=n(131),f=n(132),p=n(69),b=n.n(p),O=n(68),h=n.n(O),y=n(14),m=function(t){return t.ui},v=function(t){return m(t).requests>0},g=function(t){return m(t).theme},x=function(t){return m(t).isAddCityWindowOpen},C="INIT_APP",E="MULTI",T="API_START",_="API_END",A="ADD_CITY",w="FETCH_CURRENT_WEATHER",I="FETCH_CURRENT_WEATHER_SUCCESS",S="FETCH_CURRENT_WEATHER_ERROR",N="SET_CURRENT_WEATHER",W="DELETE_CITY",R="UPDATE_ALL_WEATHER",D="CREATE_TOAST",L="DELETE_LAST_TOAST",k="TOGGLE_THEME",U="ADD_CITY_WINDOW_OPEN",H="ADD_CITY_WINDOW_CLOSE",P=function(t,e,n){return{type:A,city:{id:"".concat(e,",").concat(n),name:t,lat:e,lng:n}}},q=function(t){return{type:w,cityId:t}},F=function(){return{type:H}},G=Object(u.a)((function(){return{root:{flexGrow:1},title:{flexGrow:1}}})),J={updateAllWeather:function(){return{type:R}},toggleTheme:function(){return{type:k}}},B=Object(y.b)((function(t){return{isLoading:v(t)}}),J)((function(t){var e=t.isLoading,n=t.updateAllWeather,c=t.toggleTheme,i=G();return Object(r.jsx)("div",{className:i.root,children:Object(r.jsx)(s.a,{position:"static",children:Object(r.jsxs)(d.a,{children:[Object(r.jsx)(l.a,{variant:"h6",className:i.title,children:"Weather"}),Object(r.jsx)(j.a,{color:"inherit",onClick:c,children:Object(r.jsx)(h.a,{})}),e?Object(r.jsx)(f.a,{color:"secondary"}):Object(r.jsx)(j.a,{color:"inherit",onClick:n,children:Object(r.jsx)(b.a,{})})]})})})})),M=n(12),Y=n(137),z=n(138),X=n(150),V=n(139),K=n(71),Q=n.n(K),Z=n(16),$=n(147),tt=n(135),et=n(134),nt=n(136),rt=n(70),ct=n.n(rt),it=Object(u.a)((function(){return{root:{height:"60vh"}}})),at={addCity:P,addCityWindowClose:F},ot=Object(y.b)(void 0,at)((function(t){var e=t.addCity,n=t.addCityWindowClose,i=it(),a=Object(c.useState)(""),o=Object(Z.a)(a,2),u=o[0],s=o[1],d=Object(c.useState)([]),l=Object(Z.a)(d,2),j=l[0],f=l[1];Object(c.useEffect)((function(){fetch("cities.json").then((function(t){return t.json()})).then((function(t){return t.map((function(t,e){return{id:e,name:t[0],country:t[1],lat:t[2],lng:t[3]}}))})).then(f)}),[]);var p=j.filter((function(t){return t.name.toUpperCase().includes(u.toUpperCase())})).slice(0,25),b=0===p.length?"Not found":p.length<25?"":"...";return Object(r.jsxs)("div",{className:i.root,children:[Object(r.jsx)($.a,{value:u,onChange:function(t){s(t.target.value)},fullWidth:!0,autoFocus:!0,margin:"normal",InputProps:{startAdornment:Object(r.jsx)(tt.a,{position:"start",children:Object(r.jsx)(ct.a,{})})}}),Object(r.jsxs)(et.a,{children:[p.map((function(t){return Object(r.jsx)(nt.a,{onClick:(c=t.id,function(){var t=j[c];e(t.name,t.lat,t.lng),n()}),button:!0,children:"".concat(t.name,", ").concat(t.country)},t.id);var c})),Object(r.jsx)(nt.a,{children:b})]})]})})),ut=Object(u.a)((function(t){return{appBar:{position:"relative"},title:{marginLeft:t.spacing(2),flex:1}}})),st=i.a.forwardRef((function(t,e){return Object(r.jsx)(Y.a,Object(M.a)({direction:"up",ref:e},t))})),dt={onClose:F},lt=Object(y.b)((function(t){return{open:x(t)}}),dt)((function(t){var e=t.title,n=t.open,c=t.onClose,i=ut(),a=Object(z.a)("(max-width: 769px)");return Object(r.jsxs)(X.a,{open:n,fullScreen:a,fullWidth:!0,onClose:c,TransitionComponent:st,children:[Object(r.jsx)(s.a,{className:i.appBar,children:Object(r.jsxs)(d.a,{children:[Object(r.jsx)(j.a,{edge:"start",color:"inherit",onClick:c,"aria-label":"close",children:Object(r.jsx)(Q.a,{})}),Object(r.jsx)(l.a,{variant:"h6",className:i.title,children:e})]})}),Object(r.jsx)(V.a,{children:Object(r.jsx)(ot,{})})]})})),jt=n(140),ft=n(72),pt=n.n(ft),bt=Object(u.a)((function(t){return{button:{position:"fixed",right:t.spacing(3),bottom:t.spacing(3)}}})),Ot={openAddCityWindow:function(){return{type:U}}},ht=Object(y.b)(void 0,Ot)((function(t){var e=t.openAddCityWindow,n=bt();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(jt.a,{onClick:e,color:"primary","aria-label":"add",className:n.button,children:Object(r.jsx)(pt.a,{})}),Object(r.jsx)(lt,{title:"Choose city"})]})})),yt=n(148),mt=n(144),vt=function(t){return t.cities},gt=function(t){return Object.keys(vt(t))},xt=function(t,e){return vt(t)[e]},Ct=n(141),Et=n(142),Tt=n(143),_t=n(73),At=n.n(_t),wt=Object(u.a)((function(t){return{current:{textAlign:"center",fontSize:"2em",marginBottom:t.spacing(1)},center:{textAlign:"center"}}})),It={deleteCity:function(t){return{type:W,cityId:t}}},St=Object(y.b)((function(t,e){var n=e.id;return{city:xt(t,n)}}),It)((function(t){var e,n,c=t.city,i=t.deleteCity,a=wt();return Object(r.jsxs)(Ct.a,{children:[Object(r.jsx)(Et.a,{title:c.name,action:Object(r.jsx)(j.a,{"aria-label":"delete-city",onClick:function(){return i(c.id)},children:Object(r.jsx)(At.a,{})})}),Object(r.jsx)(Tt.a,{children:c.currentWeather?Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:a.current,children:null===(e=c.currentWeather)||void 0===e?void 0:e.temperature}),Object(r.jsx)(mt.a,{container:!0,spacing:2,justify:"center",children:null===(n=c.forecast)||void 0===n?void 0:n.slice(1,6).map((function(t,e){var n=new Date(+new Date+24*(e+1)*60*60*1e3).toLocaleString("en-us",{weekday:"short"});return Object(r.jsxs)(mt.a,{item:!0,children:[Object(r.jsx)("div",{className:a.center,children:n}),Object(r.jsx)("div",{className:a.center,children:t.temperature})]},e)}))})]}):"Loading"})]})})),Nt=Object(y.b)((function(t){return{citiesIds:gt(t)}}))((function(t){var e=t.citiesIds;return Object(r.jsx)(yt.a,{m:4,children:Object(r.jsx)(mt.a,{container:!0,spacing:2,children:e.map((function(t){return Object(r.jsx)(mt.a,{item:!0,xs:12,sm:6,md:4,children:Object(r.jsx)(St,{id:t})},t)}))})})})),Wt=n(151),Rt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;return{type:D,toast:{message:t,timeout:e}}},Dt=function(t){var e=function(t){return t.toasts}(t);return e.length?e[0]:null},Lt={deleteLastToast:function(){return{type:L}}},kt=Object(y.b)((function(t){return{toast:Dt(t)}}),Lt)((function(t){var e=t.toast,n=t.deleteLastToast,i=Object(c.useState)(!1),a=Object(Z.a)(i,2),o=a[0],u=a[1];return Object(c.useEffect)((function(){null!==e?(u(!0),setTimeout((function(){return u(!1)}),e.timeout)):u(!1)}),[e]),Object(r.jsx)(Wt.a,{message:null===e||void 0===e?void 0:e.message,open:o,anchorOrigin:{vertical:"bottom",horizontal:"left"},onExited:function(){return n()}})})),Ut=n(145),Ht=n(146),Pt=n(74);var qt={initApp:function(){return{type:C}}},Ft=Object(y.b)((function(t){return{theme:g(t)}}),qt)((function(t){var e=t.initApp,n=t.theme;Object(c.useEffect)((function(){e()}),[e]);var i=function(t){return Object(Pt.a)({palette:{type:t}})}(n);return Object(r.jsx)("div",{children:Object(r.jsxs)(Ut.a,{theme:i,children:[Object(r.jsx)(Ht.a,{}),Object(r.jsx)(B,{}),Object(r.jsx)(Nt,{}),Object(r.jsx)(ht,{}),Object(r.jsx)(kt,{})]})})})),Gt=(n(98),n(18)),Jt=n(26),Bt=n(11),Mt={},Yt=[],zt={requests:0,theme:"light",isAddCityWindowOpen:!1},Xt=Object(Jt.c)({cities:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case A:var n=e.city;return Object(M.a)(Object(M.a)({},t),{},Object(Bt.a)({},n.id,n));case N:var r=e.payload,c=r.cityId,i=r.weather,a=r.forecast;return Object(M.a)(Object(M.a)({},t),{},Object(Bt.a)({},c,Object(M.a)(Object(M.a)({},t[c]),{},{currentWeather:i,forecast:a})));case W:var o=e.cityId,u=Object(M.a)({},t);return delete u[o],u;default:return t}},ui:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:zt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case T:return Object(M.a)(Object(M.a)({},t),{},{requests:t.requests+1});case _:return Object(M.a)(Object(M.a)({},t),{},{requests:t.requests-1});case k:return Object(M.a)(Object(M.a)({},t),{},{theme:"light"===t.theme?"dark":"light"});case U:return Object(M.a)(Object(M.a)({},t),{},{isAddCityWindowOpen:!0});case H:return Object(M.a)(Object(M.a)({},t),{},{isAddCityWindowOpen:!1});default:return t}},toasts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Yt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case D:var n,r=e.toast,c=null===(n=t[t.length-1])||void 0===n?void 0:n.message;return c===r.message?t:[].concat(Object(Gt.a)(t),[r]);case L:return t.slice(1);default:return t}}}),Vt=function(t,e,n,r){return{type:T,payload:{url:t,method:"GET",pending:e,success:n,error:r}}},Kt=function(t){return{type:E,actions:t}},Qt=[function(){return function(t){return function(e){try{t(e)}catch(n){console.log(n)}}}},function(t){var e=t.dispatch;return function(t){return function(n){t(n),n.type===E&&n.actions.forEach((function(t){return e(t)}))}}},function(t){var e=t.dispatch;return function(t){return function(n){if(t(n),n.type===T){var r=n.payload,c=r.method,i=r.pending,a=r.success,o=r.error,u=r.data,s=r.url,d=n.payload,l={method:c,headers:{"Content-Type":"application/json"},body:JSON.stringify(u)||void 0};e(i),fetch(encodeURI("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5"+s+"&units=metric&appid=5d2145b1e3153ce2a87bbad571a98ba4"),l).then((function(t){return t.json()})).then((function(t){d.success.payload.data=t,e(a)})).catch((function(t){o.payload.data=t,e(o)})).then((function(){return e({type:_})}))}}}},function(t){var e=t.dispatch;return function(t){return function(n){t(n),n.type===C&&navigator.geolocation.getCurrentPosition((function(t){var n=t.coords,r=n.latitude,c=n.longitude;e(P("Current",r,c))}),(function(){e(Rt("Could not access current location"))}))}}},function(t){var e=t.dispatch,n=t.getState;return function(t){return function(r){if(r.type===A&&6===gt(n()).length)return void e(Rt("Only 6 cities allowed"));t(r)}}},function(t){var e=t.dispatch,n=t.getState;return function(t){return function(r){if(t(r),r.type===C){var c=JSON.parse(localStorage.getItem("cities"));c&&e(Kt(c.map((function(t){return P(t.name,t.lat,t.lng)}))))}if(r.type===A||r.type===W){var i=Object.values(n().cities).filter((function(t){return"Current"!==t.name}));localStorage.setItem("cities",JSON.stringify(i))}}}},function(t){var e=t.dispatch,n=t.getState;return function(t){return function(r){if(t(r),r.type===A&&e(q(r.city.id)),r.type===w){var c=r.cityId,i={type:"FETCH_CURRENT_WEATHER_PENDING",id:c},a=function(t){return{type:I,cityId:t,payload:{data:void 0}}}(c),o=function(t){return{type:S,cityId:t,payload:{data:void 0}}}(c),u=c.split(","),s=Object(Z.a)(u,2),d=s[0],l=s[1];e(Vt("/onecall?lat=".concat(d,"&lon=").concat(l,"&exclude=minutely,hourly,alerts"),i,a,o))}if(r.type===S&&e(Rt("Could not update weather")),r.type===I){var j=r.cityId,f=r.payload.data,p={temperature:f.current.temp},b=f.daily.map((function(t){return{temperature:t.temp.day}}));xt(n(),j)&&e(function(t,e,n){return{type:N,payload:{cityId:t,weather:e,forecast:n}}}(j,p,b))}}}},function(t){var e=t.dispatch,n=t.getState;return function(t){return function(r){t(r),r.type===R&&e(Kt(gt(n()).map((function(t){return q(t)}))))}}}],Zt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Jt.d,$t=Object(Jt.e)(Xt,Zt(Jt.a.apply(void 0,Object(Gt.a)(Qt))));o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsxs)(y.a,{store:$t,children:[Object(r.jsx)(Ht.a,{}),Object(r.jsx)(Ft,{})]})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.61b8042a.chunk.js.map