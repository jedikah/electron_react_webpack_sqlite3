exports.id=0,exports.modules={5:function(e,t,r){"use strict";r.r(t);var n=r(0),l=r.n(n),s=r(2),a=r.n(s),o=r(3),i=r(1);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}process.env.ELECTRON_DISABLE_SECURITY_WARNINGS="true";class d extends l.a.Component{constructor(e){super(e),c(this,"componentDidMount",()=>{this.setState({loading:!1});new(r(4).verbose().Database)("eotdb.sqlite")}),c(this,"_handleClick",()=>{var e=o.ipcRenderer.sendSync("get-result",{name:"react"});alert(e)}),this.showAlert=this.showAlert.bind(this),this.state={text:""}}showAlert(){alert("Hello world!")}render(){return l.a.createElement("div",{className:"App"},l.a.createElement(i.View,{style:{alignItems:"center",border:"2px solid red",flex:3}},l.a.createElement(i.Text,null,"Hello ",this.props.name,"!")))}}var u=d;process.env.ELECTRON_DISABLE_SECURITY_WARNINGS="true",a.a.render(l.a.createElement("div",null,l.a.createElement(u,null)),document.getElementById("app")),e.hot.accept()}};
//# sourceMappingURL=0.10fcbdae7c5e7d529410.hot-update.js.map