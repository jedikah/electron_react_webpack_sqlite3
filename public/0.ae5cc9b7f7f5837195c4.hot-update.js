exports.id=0,exports.modules={5:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),a=n(2),l=n.n(a),o=n(3),i=n(1);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}process.env.ELECTRON_DISABLE_SECURITY_WARNINGS="true";class u extends s.a.Component{constructor(e){super(e),c(this,"componentDidMount",()=>{this.setState({loading:!1});new(n(4).verbose().Database)("eotdb.sqlite")}),c(this,"_handleClick",()=>{var e=o.ipcRenderer.sendSync("get-result",{name:"react"});alert(e)}),this.showAlert=this.showAlert.bind(this),this.state={text:""}}showAlert(){alert("Hello world!")}render(){return s.a.createElement("div",{className:"App"},s.a.createElement(i.View,{style:{alignItems:"center",top:"25%",position:"absolute"}},s.a.createElement(i.Text,null,"Hello ",this.props.name,"!")))}}var d=u;process.env.ELECTRON_DISABLE_SECURITY_WARNINGS="true",l.a.render(s.a.createElement("div",null,s.a.createElement(d,null)),document.getElementById("app")),e.hot.accept()}};
//# sourceMappingURL=0.ae5cc9b7f7f5837195c4.hot-update.js.map