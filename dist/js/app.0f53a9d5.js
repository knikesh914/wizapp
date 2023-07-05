(function(){"use strict";var e={9907:function(e,t,n){var i=n(9963),r=n(6252),a=n(3577);const o={class:"navbar-container container"},s=(0,r.uE)('<input type="checkbox" name="" id=""><div class="hamburger-lines"><span class="line line1"></span><span class="line line2"></span><span class="line line3"></span></div>',2),c={class:"menu-items"},d=(0,r._)("li",null,[(0,r._)("a",{href:"#"})],-1),u=(0,r._)("li",null,[(0,r._)("a",{href:"#"})],-1),l=(0,r._)("li",null,[(0,r._)("a",{href:"#"})],-1),p=(0,r._)("li",null,[(0,r._)("a",{href:"#"})],-1),m=(0,r._)("i",{class:"fa fa-shopping-basket"},null,-1),g={class:"logo"};function h(e,t,n,i,h,y){const f=(0,r.up)("router-link"),v=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",{class:(0,a.C_)(["navbar",{onDark:h.darkMode}])},[(0,r._)("div",o,[s,(0,r._)("ul",c,[d,u,l,p,(0,r._)("li",null,[(0,r.Wm)(f,{class:"text-decoration-none",to:"/cart"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(e.cartItems.length)+" ",1),m])),_:1})]),(0,r._)("li",null,[(0,r._)("a",{onClick:t[0]||(t[0]=(...e)=>y.toggleDarkMode&&y.toggleDarkMode(...e)),color:"primary"},(0,a.zw)(h.darkMode?"Light Mode":"Dark Mode"),1)])]),(0,r._)("h5",g,[(0,r.Wm)(f,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Shopping")])),_:1})])])],2),(0,r.Wm)(v)],64)}var y=n(3907),f={data(){return{darkMode:!1}},computed:{...(0,y.rn)(["cartItems"])},methods:{toggleDarkMode(){this.darkMode=!this.darkMode,this.darkMode?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode")}}},v=n(3744);const b=(0,v.Z)(f,[["render",h]]);var w=b,k=n(2201);const C={class:"appMain"},I={class:"text-center"},x=["onClick"];function _(e,t,n,i,o,s){const c=(0,r.up)("v-text-field"),d=(0,r.up)("v-btn"),u=(0,r.up)("v-list-item-title"),l=(0,r.up)("v-list-item"),p=(0,r.up)("v-list"),m=(0,r.up)("v-menu"),g=(0,r.up)("v-toolbar"),h=(0,r.up)("v-card"),y=(0,r.up)("v-img"),f=(0,r.up)("v-card-title"),v=(0,r.up)("v-card-subtitle"),b=(0,r.up)("v-spacer"),w=(0,r.up)("v-card-actions"),k=(0,r.up)("v-col"),_=(0,r.up)("v-row"),S=(0,r.up)("v-container");return(0,r.wg)(),(0,r.iD)("div",C,[(0,r.Wm)(S,{class:"my-5"},{default:(0,r.w5)((()=>[(0,r.Wm)(h,{class:"pa-1",flat:"",height:"100px"},{default:(0,r.w5)((()=>[(0,r.Wm)(g,{dense:""},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{class:"search-textarea",rows:"1",placeholder:"Search",modelValue:o.searchQuery,"onUpdate:modelValue":t[0]||(t[0]=e=>o.searchQuery=e)},null,8,["modelValue"]),(0,r._)("span",{onClick:t[1]||(t[1]=e=>s.toggleSortDirection("price"))}," Price "),(0,r._)("span",{onClick:t[2]||(t[2]=e=>s.toggleSortDirection("review")),style:{"margin-left":"8px"}}," Review "),(0,r._)("div",I,[(0,r.Wm)(m,{"open-on-hover":""},{activator:(0,r.w5)((({props:e})=>[(0,r.Wm)(d,(0,r.dG)({color:"primary"},e),{default:(0,r.w5)((()=>[(0,r.Uk)(" Categories ")])),_:2},1040)])),default:(0,r.w5)((()=>[(0,r.Wm)(p,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.getProductCategories(),(e=>((0,r.wg)(),(0,r.j4)(l,{key:e,onClick:t=>s.filterByCategory(e)},{default:(0,r.w5)((()=>[(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(e),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])])),_:1})])),_:1}),(0,r.Wm)(_,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.filteredProducts,(t=>((0,r.wg)(),(0,r.j4)(k,{cols:"12",sm:"6",md:"4",lg:"3",key:t.id},{default:(0,r.w5)((()=>[(0,r.Wm)(h,{class:"mx-auto","max-width":"344",hover:"",style:{border:"1px solid grey"}},{default:(0,r.w5)((()=>[(0,r._)("div",{onClick:e=>s.goToProductDetail(t.id)},[(0,r.Wm)(y,{src:t.image},null,8,["src"]),(0,r.Wm)(f,{class:"text-left"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(t.name),1)])),_:2},1024),(0,r.Wm)(v,{class:"text-left"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(t.description),1)])),_:2},1024),(0,r.Wm)(v,{class:"text-left"},{default:(0,r.w5)((()=>[(0,r.Uk)(" ₹ "+(0,a.zw)(t.price),1)])),_:2},1024)],8,x),(0,r.Wm)(w,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d,{size:"small",color:"primary",onClick:n=>e.addToCart(t)},{default:(0,r.w5)((()=>[(0,r.Uk)(" Add to cart ")])),_:2},1032,["onClick"]),(0,r.Wm)(b)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])}n(7658);var S={data(){return{searchQuery:"",sortDirection:"asc",sortField:"price",selectedCategory:""}},computed:{...(0,y.Se)(["products"]),filteredProducts(){let e=this.products;if(this.searchQuery){const t=this.searchQuery.toLowerCase();e=e.filter((e=>e.name.toLowerCase().includes(t)))}return this.selectedCategory&&(e=e.filter((e=>Array.isArray(e.categories)?e.categories.includes(this.selectedCategory):e.categories===this.selectedCategory))),e=e.sort(((e,t)=>{const n=this.getFieldValue(e,this.sortField),i=this.getFieldValue(t,this.sortField);return("asc"===this.sortDirection?1:-1)*(n-i)})),e}},created(){this.fetchProducts()},methods:{...(0,y.nv)(["fetchProducts","addToCart"]),goToProductDetail(e){this.$router.push(`/product/${e}`)},toggleSortDirection(e){this.sortField===e?this.sortDirection="asc"===this.sortDirection?"desc":"asc":(this.sortField=e,this.sortDirection="asc")},getFieldValue(e,t){return"string"===typeof e[t]?e[t].toLowerCase():e[t]},getProductCategories(){const e=new Set;return this.products.forEach((t=>{Array.isArray(t.categories)?t.categories.forEach((t=>{e.add(t)})):t.categories&&e.add(t.categories)})),Array.from(e)},filterByCategory(e){this.selectedCategory=e}}};const E=(0,v.Z)(S,[["render",_]]);var A=E;const L=[{path:"/",name:"home",component:A},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,833))},{path:"/cart",name:"mycart",component:()=>n.e(944).then(n.bind(n,1944))},{path:"/product/:id",name:"ProductDeatail",component:()=>n.e(264).then(n.bind(n,6264))}],q=(0,k.p7)({history:(0,k.r5)(),routes:L});var O=q;const M=(0,y.MT)({state:{products:[{id:1,name:"Samsung",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",price:100,review:3,categories:"Phone",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgtSEFFpil4Rg0ulT2xMbuelj9GAlyiKXkSLUZd55nrhiGiN5gOnnESq_OwEMjaR4nC8w&usqp=CAU"},{id:2,name:"Nokia",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",price:200,review:4,categories:"Phone",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgtSEFFpil4Rg0ulT2xMbuelj9GAlyiKXkSLUZd55nrhiGiN5gOnnESq_OwEMjaR4nC8w&usqp=CAU"},{id:3,name:"Apple",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",price:140,review:3,categories:"Phone",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgtSEFFpil4Rg0ulT2xMbuelj9GAlyiKXkSLUZd55nrhiGiN5gOnnESq_OwEMjaR4nC8w&usqp=CAU"},{id:4,name:"Boat",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",price:110,review:5,categories:"EarPhone",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgtSEFFpil4Rg0ulT2xMbuelj9GAlyiKXkSLUZd55nrhiGiN5gOnnESq_OwEMjaR4nC8w&usqp=CAU"},{id:5,name:"JBL",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",price:1300,review:3,categories:"EarPhone",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgtSEFFpil4Rg0ulT2xMbuelj9GAlyiKXkSLUZd55nrhiGiN5gOnnESq_OwEMjaR4nC8w&usqp=CAU"},{id:6,name:"Jazz",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",price:140,review:4,categories:"EarPhone",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgtSEFFpil4Rg0ulT2xMbuelj9GAlyiKXkSLUZd55nrhiGiN5gOnnESq_OwEMjaR4nC8w&usqp=CAU"},{id:7,name:"LG",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",price:80,review:5,categories:"EarPhone",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgtSEFFpil4Rg0ulT2xMbuelj9GAlyiKXkSLUZd55nrhiGiN5gOnnESq_OwEMjaR4nC8w&usqp=CAU"},{id:8,name:"Samsung",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",price:1100,review:3,categories:"Charger",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgtSEFFpil4Rg0ulT2xMbuelj9GAlyiKXkSLUZd55nrhiGiN5gOnnESq_OwEMjaR4nC8w&usqp=CAU"},{id:9,name:"IQue",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",price:190,review:5,categories:"Charger",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgtSEFFpil4Rg0ulT2xMbuelj9GAlyiKXkSLUZd55nrhiGiN5gOnnESq_OwEMjaR4nC8w&usqp=CAU"},{id:10,name:"Oppo",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",price:400,review:4,categories:"Charger",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgtSEFFpil4Rg0ulT2xMbuelj9GAlyiKXkSLUZd55nrhiGiN5gOnnESq_OwEMjaR4nC8w&usqp=CAU"},{id:11,name:"Vivo",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",price:230,review:3,categories:"Charger",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgtSEFFpil4Rg0ulT2xMbuelj9GAlyiKXkSLUZd55nrhiGiN5gOnnESq_OwEMjaR4nC8w&usqp=CAU"},{id:12,name:"Blackberry",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",price:260,review:5,categories:"Phone",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgtSEFFpil4Rg0ulT2xMbuelj9GAlyiKXkSLUZd55nrhiGiN5gOnnESq_OwEMjaR4nC8w&usqp=CAU"}],cartItems:[],totalPrice:0},mutations:{updateCartItems(e,t){e.cartItems=t},updateTotalPrice(e,t){e.totalPrice=t}},actions:{fetchProducts(){},addToCart({commit:e,state:t},n){const i=t.cartItems.find((e=>e.id===n.id));if(i)t.cartItems.push({...n,quantity:1}),e("updateCartItems",t.cartItems);else{const e={...n,quantity:1};t.cartItems.push(e)}t.totalPrice+=n.price,e("updateCartItems",t.cartItems),e("updateTotalPrice",t.totalPrice)},removeFromCart({commit:e,state:t},n){const i=t.cartItems.findIndex((e=>e.id===n.id));if(-1!==i){const r=t.cartItems[i];1===r.quantity?t.cartItems.splice(i,1):r.quantity--,t.totalPrice-=n.price,e("updateCartItems",t.cartItems),e("updateTotalPrice",t.totalPrice)}}},getters:{products:e=>e.products,cartItems:e=>e.cartItems,totalPrice:e=>e.totalPrice,getProductById:e=>t=>e.products.find((e=>e.id===t))}});var j=M,G=(n(9773),n(6579)),P=n(7004),R=n(6300);n(8556);const F=(0,G.Rd)({components:P,directives:R});(0,i.ri)(w).use(j).use(O).use(F).mount("#app")}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={exports:{}};return e[i].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,i,r,a){if(!i){var o=1/0;for(u=0;u<e.length;u++){i=e[u][0],r=e[u][1],a=e[u][2];for(var s=!0,c=0;c<i.length;c++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](i[c])}))?i.splice(c--,1):(s=!1,a<o&&(o=a));if(s){e.splice(u--,1);var d=r();void 0!==d&&(t=d)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[i,r,a]}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,i){return n.f[i](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(443===e?"about":e)+"."+{264:"2881701c",443:"02b831e5",944:"d2de4a9e"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{264:"74dc5f2c",944:"6e864dfd"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="wizapp:";n.l=function(i,r,a,o){if(e[i])e[i].push(r);else{var s,c;if(void 0!==a)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var l=d[u];if(l.getAttribute("src")==i||l.getAttribute("data-webpack")==t+a){s=l;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=i),e[i]=[r];var p=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var r=e[i];if(delete e[i],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,i,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=function(n){if(a.onerror=a.onload=null,"load"===n.type)i();else{var o=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=s,a.parentNode&&a.parentNode.removeChild(a),r(c)}};return a.onerror=a.onload=o,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var r=n[i],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var o=document.getElementsByTagName("style");for(i=0;i<o.length;i++){r=o[i],a=r.getAttribute("data-href");if(a===e||a===t)return r}},i=function(i){return new Promise((function(r,a){var o=n.miniCssF(i),s=n.p+o;if(t(o,s))return r();e(i,s,null,r,a)}))},r={143:0};n.f.miniCss=function(e,t){var n={264:1,944:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=i(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,i){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)i.push(r[2]);else{var a=new Promise((function(n,i){r=e[t]=[n,i]}));i.push(r[2]=a);var o=n.p+n.u(t),s=new Error,c=function(i){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,r[1](s)}};n.l(o,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,a,o=i[0],s=i[1],c=i[2],d=0;if(o.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var u=c(n)}for(t&&t(i);d<o.length;d++)a=o[d],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},i=self["webpackChunkwizapp"]=self["webpackChunkwizapp"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(9907)}));i=n.O(i)})();
//# sourceMappingURL=app.0f53a9d5.js.map