exports.id=0,exports.modules={1:function(e,t){e.exports=require("react-native-electron")},5:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),s=r(2),l=r.n(s),o=r(3),i=r(1);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}process.env.ELECTRON_DISABLE_SECURITY_WARNINGS="true";class d extends a.a.Component{constructor(e){super(e),c(this,"componentDidMount",()=>{this.setState({loading:!1});new(r(4).verbose().Database)("eotdb.sqlite")}),c(this,"_handleClick",()=>{var e=o.ipcRenderer.sendSync("get-result",{name:"react"});alert(e)}),this.showAlert=this.showAlert.bind(this),this.state={text:""}}showAlert(){alert("Hello world!")}render(){return a.a.createElement("div",{className:"App"},a.a.createElement("div",{style:{alignItems:"center",border:"2px solid red"}},a.a.createElement(i.Text,null,"Hello ",this.props.name,"!")))}}var u=d;process.env.ELECTRON_DISABLE_SECURITY_WARNINGS="true",l.a.render(a.a.createElement("div",null,a.a.createElement(u,null)),document.getElementById("app")),e.hot.accept()}};
//# sourceMappingURL=0.958d73cf304352d01ac8.hot-update.js.map