webpackJsonp([3],{"3cXf":function(t,e,s){t.exports={default:s("q1bu"),__esModule:!0}},DHKC:function(t,e){},Pv68:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("3cXf"),i=s.n(a),n=s("+jZO"),o=s("Muz9"),r=s.n(o),c=s("qvKF");r.a.defaults.withCredentials=!0;var d={name:"Login",components:{Head:c.a},data:function(){return{username:"",password:"",code:"",numcode:"",show:!1}},mounted:function(){this.chang()},methods:{chang:function(){var t=this;r.a.post("https://elm.cangdu.org/v1/captchas",{}).then(function(e){t.numcode=e.data.code})},login:function(){var t=this;r.a.post("http://elm.cangdu.org/v2/login",{captcha_code:this.code,username:this.username,password:this.password}).then(function(e){if(t.userid=e.data.user_id,0==e.data.status)""!==t.user&&""!==t.password&&""!==t.numcode&&Object(n.MessageBox)(e.data.message);else{localStorage.setItem("login",i()({username:t.username,code:t.code,password:t.password}));var s={user_id:e.data.id,username:e.data.username};t.$store.commit("login",s),t.$router.push("/Ding")}""==t.user?Object(n.MessageBox)("请输入账号"):""==t.password?Object(n.MessageBox)("请输入密码"):""==t.code&&Object(n.MessageBox)("请输入验证码")})}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[s("header",[s("Head",[s("div",{staticClass:"he login_he",attrs:{slot:"a"},slot:"a"},[s("div",{staticClass:"left"},[s("a-Icon",{staticStyle:{"line-height":"0.5rem"},attrs:{type:"left"},on:{click:function(e){return t.$router.go(-1)}}})],1),t._v(" "),s("div",{staticClass:"content",staticStyle:{"line-height":"0.5rem"}},[t._v("密码登录")])])])],1),t._v(" "),s("form",[s("div",{staticStyle:{background:"white"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",placeholder:"账号"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),s("div",{staticStyle:{background:"white"}},[0==t.show?s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"text",placeholder:"密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),s("div",{staticClass:"form_rigth",staticStyle:{width:"10%"}})]),t._v(" "),s("div",{staticStyle:{background:"white"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],attrs:{type:"text",placeholder:"验证码"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}}),t._v(" "),s("div",{staticClass:"form_rigth",staticStyle:{"margin-right":"0.2rem"}},[s("div",{staticClass:"numb"},[s("img",{attrs:{src:t.numcode}})]),t._v(" "),s("div",{staticClass:"change"},[s("div",{staticStyle:{height:"50%","text-align":"center","line-height":"0.32rem"}},[t._v("看不清")]),t._v(" "),s("input",{attrs:{type:"button",value:"换一张"},on:{click:function(e){return t.chang()}}})])])]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"enter"},[s("input",{attrs:{type:"button",value:"登录"},on:{click:function(e){return t.login()}}})]),t._v(" "),s("div",{staticStyle:{"margin-top":"0.2rem",display:"flex"}},[s("div",{staticStyle:{width:"80%"}}),t._v(" "),s("router-link",{staticStyle:{width:"20%",height:"50%","font-size":"0.2rem"},attrs:{to:"/Reset"}},[t._v("\n            重置密码\n          ")])],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warm"},[e("div",[this._v("温馨提示：未注册过 的账号，登录时将自动注册")]),this._v(" "),e("div",[this._v("注册过的用户可凭账号密码登录")])])}]};var l=s("C7Lr")(d,u,!1,function(t){s("DHKC")},null,null);e.default=l.exports},q1bu:function(t,e,s){var a=s("Rv9F"),i=a.JSON||(a.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}}});
//# sourceMappingURL=3.65bc299dca9c80aad5d5.js.map