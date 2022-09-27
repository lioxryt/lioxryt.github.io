(function(t){function e(e){for(var n,s,u=e[0],o=e[1],c=e[2],m=0,p=[];m<u.length;m++)s=u[m],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,u=1;u<a.length;u++){var o=a[u];0!==r[o]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var n={};a.r(n),a.d(n,"getValue",(function(){return H}));var r={};a.r(r),a.d(r,"setValue",(function(){return J})),a.d(r,"setTotalAmount",(function(){return F})),a.d(r,"setName",(function(){return L})),a.d(r,"setImage",(function(){return R}));var i={};a.r(i),a.d(i,"decrement",(function(){return U})),a.d(i,"increment",(function(){return z}));a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navbar",{attrs:{appName:"Spend Money"}}),a("div",{staticClass:"container"},[t.headerName?a("Header",{attrs:{name:t.headerName,image:t.headerImage}}):t._e()],1),a("div",{staticClass:"container container__row"},[a("MoneyCard"),t._l(t.items,(function(t){return a("div",{key:t.name,staticClass:"col-4"},[a("ItemCard",{attrs:{image:t.image,name:t.name,price:t.price}})],1)}))],2)],1)},o=[],c=(a("7db0"),a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar"},[a("h1",[t._v(t._s(t.appName))])])}),l=[],m={name:"Navbar",props:{appName:String}},p=m,d=a("2877"),f=Object(d["a"])(p,c,l,!1,null,null,null),g=f.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card header"},[t.image?a("img",{attrs:{alt:t.name,src:t.image}}):t._e(),a("h1",[t._v(t._s("Spend "+t.name+" Money"))])])},v=[],b={name:"Header",props:{name:String,image:String},methods:{}},y=b,_=Object(d["a"])(y,h,v,!1,null,null,null),w=_.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card card__success card__money"},[a("h1",[t._v("$"+t._s(t.value)+" left")])])},j=[],C={name:"MoneyCard",data:function(){return{}},computed:{value:{get:function(){return this.$store.state.wallet.value}}}},M=C,O=Object(d["a"])(M,N,j,!1,null,null,null),$=O.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card card__item"},[t.image?a("img",{attrs:{alt:t.name,src:t.image}}):t._e(),a("h2",[t._v(t._s(t.name))]),a("h3",[t._v("$"+t._s(t.price))]),a("div",{staticClass:"card__footer"},[a("button",{staticClass:"button button__danger",on:{click:t.sell}},[t._v("Sell")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],staticClass:"input",attrs:{min:"0",type:"number"},domProps:{value:t.quantity},on:{input:function(e){e.target.composing||(t.quantity=e.target.value)}}}),a("button",{staticClass:"button button__success",on:{click:t.buy}},[t._v("Buy")])])])},S=[],V=(a("a9e3"),{name:"ItemCard",props:{image:String,name:String,price:String},data:function(){return{quantity:0,lastMaxQuantity:0}},computed:{moneyValue:{get:function(){return this.$store.state.wallet.value}}},methods:{buy:function(){this.quantity++},sell:function(){this.quantity>0&&this.quantity--},getMaxQuatity:function(){var t=Math.floor(Number(this.moneyValue)/Number(this.price));return t>0&&(this.lastMaxQuantity=t),t}},watch:{quantity:function(t,e){t=Number(t),e=Number(e);var a=this.getMaxQuatity(),n=Math.abs(t-e),r=Math.abs(Number(this.price)*n),i=Number(this.lastMaxQuantity);t>e&&0!=a?this.$store.dispatch("wallet/decrement",r):t<e&&0!==this.moneyValue||0===this.moneyValue?this.$store.dispatch("wallet/increment",r):i>0&&0===a&&0===this.moneyValue&&(this.$store.dispatch("wallet/decrement",Number(this.price)*e),this.quantity=i),this.getMaxQuatity()}}}),A=V,q=Object(d["a"])(A,x,S,!1,null,null,null),P=q.exports,E=[{id:1,name:"Bill Gates",image:"static/images/persons/billgates.png",totalAmount:10e10}],k=[{image:"static/images/items/bigmac.jpg",name:"Big Mac",price:"2"},{image:"static/images/items/cupofcoffee.jpg",name:"Cup Of Coffee",price:"4"},{image:"static/images/items/book.jpg",name:"Book",price:"15"},{image:"static/images/items/videogame.jpg",name:"Video Game",price:"60"},{image:"static/images/items/gamingconsole.jpg",name:"Gaming Console",price:"600"},{image:"static/images/items/drone.jpg",name:"Drone",price:"800"},
{image:"static/images/items/smartphone.jpg",name:"Smartphone",price:"1000"},
{image:"static/images/items/land.jpg",name:"1 Acre of Land",price:"3000"},
{image:"static/images/items/ring.jpg",name:"Diamond Ring",price:"10000"},
{image:"static/images/items/tesla.jpg",name:"Tesla Car",price:"100000"},{image:"static/images/items/ferrari.jpg",name:"Ferrari",price:"400000"},
{image:"static/images/items/mcdonalds.jpg",name:"McDonalds Franchise",price:"1500000"},
{image:"static/images/items/mansion.jpg",name:"Mansion",price:"45000000"},
{image:"static/images/items/earth.jpg",name:"Earth",price:"90000000000"}],I={name:"App",components:{Navbar:g,Header:w,MoneyCard:$,ItemCard:P},data:function(){return{items:[]}},computed:{headerName:{get:function(){return this.$store.state.wallet.name}},headerImage:{get:function(){return this.$store.state.wallet.image}}},methods:{getPerson:function(t){return E.find((function(e){return e.id===t}))}},created:function(){var t=this.getPerson(1);this.$store.commit("wallet/setTotalAmount",t.totalAmount),this.$store.dispatch("wallet/increment",t.totalAmount),this.$store.commit("wallet/setName",t.name),this.$store.commit("wallet/setImage",t.image),this.items=k}},Q=I,T=(a("5c0b"),Object(d["a"])(Q,u,o,!1,null,null,null)),B=T.exports,D=a("2f62"),G=function(){return{value:0,totalAmount:0,name:null,image:null}};function H(t){return t.value}function J(t,e){t.value=e||0}function F(t,e){t.totalAmount=e||null}function L(t,e){t.name=e||null}function R(t,e){t.image=e||null}function U(t,e){var a=t.commit,n=t.state,r=Number(n.value)-Number(e);r>=0&&a("setValue",r),r<0&&a("setValue",0)}function z(t,e){var a=t.commit,n=t.state,r=Number(n.value)+Number(e);r<=n.totalAmount&&r>0&&a("setValue",r),r>=n.totalAmount&&a("setValue",n.totalAmount)}var K={namespaced:!0,getters:n,mutations:r,actions:i,state:G};s["a"].use(D["a"]);var W=function(){var t=new D["a"].Store({modules:{wallet:K},plugins:[],strict:Object({NODE_ENV:"production",BASE_URL:"/"}).DEV});return t};s["a"].config.productionTip=!1,new s["a"]({store:W,render:function(t){return t(B)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),r=a.n(n);r.a},"9c0c":function(t,e,a){}});
//# sourceMappingURL=app.a1302e37.js.map