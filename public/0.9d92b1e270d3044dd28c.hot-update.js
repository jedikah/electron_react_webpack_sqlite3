exports.id=0,exports.modules={5:function(e,t,l){"use strict";l.r(t);var r=l(0),n=l.n(r),a=l(2),s=l.n(a),o=l(3),c=l(1);function i(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}process.env.ELECTRON_DISABLE_SECURITY_WARNINGS="true";class u extends n.a.Component{constructor(e){super(e),i(this,"componentDidMount",()=>{this.setState({loading:!1});new(l(4).verbose().Database)("eotdb.sqlite")}),i(this,"_handleClick",()=>{var e=o.ipcRenderer.sendSync("get-result",{name:"react"});alert(e)}),this.showAlert=this.showAlert.bind(this),this.state={text:""}}showAlert(){alert("Hello world!")}render(){return n.a.createElement(c.View,{className:"App",style:{flex:1,flexDirection:"col",height:"100%"}},n.a.createElement(c.View,{style:{flex:1,backgroundColor:"blue"}},n.a.createElement("p",null,"dsf")),n.a.createElement(c.View,{style:{flex:2,backgroundColor:"skyblue"}},n.a.createElement("p",null,"dsf")),n.a.createElement(c.View,{style:{flex:3,backgroundColor:"steelblue"}},n.a.createElement("p",null,"dsf")))}}var d=u;process.env.ELECTRON_DISABLE_SECURITY_WARNINGS="true",s.a.render(n.a.createElement("div",null,n.a.createElement(d,null)),document.getElementById("app")),e.hot.accept()}};
//# sourceMappingURL=0.9d92b1e270d3044dd28c.hot-update.js.map