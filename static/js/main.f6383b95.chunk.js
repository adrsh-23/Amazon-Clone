(this.webpackJsonpamazon_clone=this.webpackJsonpamazon_clone||[]).push([[0],{105:function(e,t,c){},106:function(e,t,c){},109:function(e,t,c){"use strict";c.r(t);var a=c(3),i=c.n(a),n=c(28),s=c.n(n),r=(c(64),c(51)),l=c(9),o=(c(65),c(66),c(17)),j=c(53),d=c.n(j),b=c(54),u=c.n(b),h=c(2),m=Object(a.createContext)(),O=function(e){var t=e.reducer,c=e.initialState,i=e.children;return Object(h.jsx)(m.Provider,{value:Object(a.useReducer)(t,c),children:i})},p=function(){return Object(a.useContext)(m)},x=c(37),_=x.a.initializeApp({apiKey:"AIzaSyBITGBnYMBirVKGjFH37F7Qi6vHrVY04cU",authDomain:"clone-1d08a.firebaseapp.com",projectId:"clone-1d08a",storageBucket:"clone-1d08a.appspot.com",messagingSenderId:"216960427110",appId:"1:216960427110:web:07bdedc3e14816773779a7"}).firestore(),g=x.a.auth();function v(){var e=p(),t=Object(l.a)(e,1)[0],c=t.basket,a=t.user;return Object(h.jsxs)("nav",{className:"header",children:[Object(h.jsx)(o.b,{to:"/",exact:!0,children:Object(h.jsx)("img",{src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",className:"header__logo"})}),Object(h.jsxs)("div",{className:"header__search",children:[Object(h.jsx)("input",{className:"header__searchInput"}),Object(h.jsx)(d.a,{className:"header__searchIcon"})]}),Object(h.jsxs)("div",{className:"header__nav",children:[Object(h.jsx)(o.b,{className:"header__link",to:!a&&"/login",children:Object(h.jsxs)("div",{className:"header__option",onClick:function(){a&&g.signOut()},children:[Object(h.jsxs)("span",{className:"header__optionLineOne",children:["Hello,",a?a.email:"Guest"]}),Object(h.jsx)("span",{className:"header__optionLineTwo",children:a?"Sign Out":"Sign In"})]})}),Object(h.jsx)(o.b,{className:"header__link",to:a?"/orders":"/login",children:Object(h.jsxs)("div",{className:"header__option",children:[Object(h.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(h.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]})}),Object(h.jsx)(o.b,{className:"header__link",to:"/",children:Object(h.jsxs)("div",{className:"header__option",children:[Object(h.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(h.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]})}),Object(h.jsx)(o.b,{to:"/checkout",className:"header__link",children:Object(h.jsxs)("div",{className:"header__optionBasket",children:[Object(h.jsx)(u.a,{}),Object(h.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===c||void 0===c?void 0:c.length})]})})]})]})}c(78);var f=function(e){var t=e.id,c=e.title,a=e.image,i=e.price,n=e.rating,s=p(),r=Object(l.a)(s,2),o=(r[0],r[1]);return Object(h.jsxs)("div",{className:"product",children:[Object(h.jsxs)("div",{className:"product__info",children:[Object(h.jsx)("p",{children:c}),Object(h.jsxs)("p",{className:"product__price",children:[Object(h.jsx)("small",{children:"$"}),Object(h.jsx)("strong",{children:i})]}),Object(h.jsx)("div",{className:"product__rating",children:Array(n).fill().map((function(e){return Object(h.jsx)("p",{children:"\u2b50"})}))})]}),Object(h.jsx)("img",{src:a,alt:""}),Object(h.jsx)("button",{onClick:function(){o({type:"ADD_TO_BASKET",item:{id:t,title:c,image:a,price:i,rating:n}})},children:"Add to Basket"})]})};c(79);var N=function(){return Object(h.jsxs)("div",{className:"Home",children:[Object(h.jsx)("img",{src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",className:"home__image"}),Object(h.jsxs)("div",{className:"home__row",children:[Object(h.jsx)(f,{id:"12321341",title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",price:11.96,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"}),Object(h.jsx)(f,{id:"49538094",title:"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",price:239,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"}),Object(h.jsx)(f,{id:"4903866",title:"New Apple iPhone 12 Pro (128GB) - Pacific Blue 6.1 inch Super Retina Display",price:1000.99,rating:4,image:"https://imagineonline.store/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9JYTJWNVNTSnJkbUZ5YVdGdWRITXZibmQyTTNGelpHdHdORzB4WXpSd2NqZHhZM2d3Y0ROamFHY3phQzgxTmpjNFpUVXpNVEpqTXpZM1pqZ3lPVGxtTVRZeVpqUmtOR1JsTm1JM09UYzBZV1JoWXpBNU5ERmxaV1U0WWprNU9UQmxNMlZrTVdNeU16QXdaVGhqQmpvR1JWUTZFR1JwYzNCdmMybDBhVzl1U1NKSmFXNXNhVzVsT3lCbWFXeGxibUZ0WlQwaVRVZE5WRE5JVGw5Qlh6SXVjRzVuSWpzZ1ptbHNaVzVoYldVcVBWVlVSaTA0SnlkTlIwMVVNMGhPWDBGZk1pNXdibWNHT3daVU9oRmpiMjUwWlc1MFgzUjVjR1ZKSWc1cGJXRm5aUzl3Ym1jR093WlUiLCJleHAiOiIyMDIxLTA5LTE5VDE2OjUyOjE1LjA0M1oiLCJwdXIiOiJibG9iX2tleSJ9fQ==--077bd358983fe4f4a0488996c788a1247dbceada/MGMT3HN_A_2.png?content_type=image%2Fpng&disposition=inline%3B+filename%3D%22MGMT3HN_A_2.png%22%3B+filename%2A%3DUTF-8%27%27MGMT3HN_A_2.png"})]}),Object(h.jsxs)("div",{className:"home__row",children:[Object(h.jsx)(f,{id:"4903850",title:"Fitbit FB507BKBK Versa 2 Health & Fitness Smartwatch with Heart Rate, Music, Alexa Built-in, Sleep & Swim Tracking, Black/Carbon, One Size (S & L Bands Included) (Black/Carbon)",price:199.99,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}),Object(h.jsx)(f,{id:"23445930",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,rating:5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"}),Object(h.jsx)(f,{id:"3254354345",title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:598.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"})]}),Object(h.jsx)("div",{className:"home__row",children:Object(h.jsx)(f,{id:"90829332",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:1094.98,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"})})]})},S=(c(80),c(11));var k=function(){var e=Object(S.f)(),t=Object(a.useState)(""),c=Object(l.a)(t,2),i=c[0],n=c[1],s=Object(a.useState)(""),r=Object(l.a)(s,2),j=r[0],d=r[1];return Object(h.jsxs)("div",{className:"login",children:[Object(h.jsx)(o.b,{to:"/",exact:!0,children:Object(h.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",className:"login__logo"})}),Object(h.jsxs)("div",{className:"login__container",children:[Object(h.jsx)("h1",{children:"Sign In"}),Object(h.jsxs)("form",{children:[Object(h.jsx)("h5",{children:"Email"}),Object(h.jsx)("input",{type:"email",value:i,onChange:function(e){return n(e.target.value)}}),Object(h.jsx)("h5",{children:"Password"}),Object(h.jsx)("input",{type:"password",value:j,onChange:function(e){return d(e.target.value)}}),Object(h.jsx)("button",{type:"submit",className:"login__signinButton",onClick:function(t){t.preventDefault(),g.signInWithEmailAndPassword(i,j).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},children:"Sign In"})]}),Object(h.jsx)("p",{children:"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(h.jsx)("button",{className:"login__registerButton",onClick:function(t){t.preventDefault(),g.createUserWithEmailAndPassword(i,j).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},children:"Create Your Amazon Account"})]})]})};c(81),c(82);var T=function(e){var t=e.id,c=e.title,a=e.image,i=e.price,n=e.rating,s=e.hideButton,r=void 0!==s&&s,o=p(),j=Object(l.a)(o,2),d=(j[0],j[1]);return Object(h.jsxs)("div",{className:"checkoutProduct",children:[Object(h.jsx)("img",{src:a,className:"checkoutProduct__image"}),Object(h.jsxs)("div",{className:"checkoutProduct__info",children:[Object(h.jsx)("p",{className:"checkoutProduct__title",children:c}),Object(h.jsxs)("p",{className:"checkoutProduct__price",children:[Object(h.jsx)("small",{children:"$"}),Object(h.jsx)("strong",{children:i})]}),Object(h.jsx)("div",{className:"checkoutProduct__rating",children:Array(n).fill().map((function(e){return Object(h.jsx)("p",{children:"\u2b50"})}))}),r?Object(h.jsx)(h.Fragment,{}):Object(h.jsx)("button",{onClick:function(){d({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from basket"})]})]})},y=(c(83),c(24)),B=c.n(y),A=c(38),C=c(22),E=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)};var w=function(){var e=Object(S.f)(),t=p(),c=Object(l.a)(t,2),a=c[0],i=a.basket,n=a.user;return c[1],Object(h.jsxs)("div",{className:"subtotal",children:[Object(h.jsx)(B.a,{renderText:function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{children:["Subtotal (",i.length," items ) : ",Object(h.jsx)("strong",{children:"".concat(e)})]}),Object(h.jsxs)("small",{className:"subtotal__gift",children:[Object(h.jsx)("input",{type:"checkbox"}),"This order contains a gift"]})]})},decimalScale:2,displayType:"text",thousandSeparator:!0,prefix:"$",value:E(i)}),Object(h.jsx)("button",{onClick:function(t){n?e.push("/payment"):e.push("/login")},children:"Proceed to Checkout"})]})};var M=function(){var e=p(),t=Object(l.a)(e,2),c=t[0],a=c.basket;return c.user,t[1],Object(h.jsxs)("div",{className:"checkout",children:[Object(h.jsxs)("div",{className:"checkout__left",children:[Object(h.jsx)("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"}),0===(null===a||void 0===a?void 0:a.length)?Object(h.jsx)("div",{children:Object(h.jsx)("h2",{children:" Your shopping cart is empty "})}):Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Your Shopping cart "}),Object(h.jsx)("br",{}),Object(h.jsx)("hr",{}),Object(h.jsx)("br",{}),a.map((function(e){return Object(h.jsx)(T,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(h.jsx)("div",{className:"checkout__right",children:a.length>0&&Object(h.jsx)("div",{children:Object(h.jsx)(w,{})})})]})},V=c(36),R=c.n(V),P=c(55),G=(c(86),c(25)),z=c(56);c.n(z).a.create({baseURL:"http://localhost:5001/clone-1d08a/us-central1/api"});var I=function(){var e=Object(S.f)(),t=p(),c=Object(l.a)(t,2),i=c[0],n=i.basket,s=i.user,r=c[1],j=(Object(G.useStripe)(),Object(G.useElements)(),Object(a.useState)(!1)),d=Object(l.a)(j,2),b=d[0],u=d[1],m=Object(a.useState)(""),O=Object(l.a)(m,2),x=O[0],g=O[1],v=Object(a.useState)(null),f=Object(l.a)(v,2),N=f[0],k=f[1],y=Object(a.useState)(!0),A=Object(l.a)(y,2),C=A[0],w=A[1],M=Object(a.useState)(!0),V=Object(l.a)(M,2),z=V[0];V[1],console.log("Secret is",z);var I=function(){var t=Object(P.a)(R.a.mark((function t(c){var a;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c.preventDefault(),g(!0),a=s.uid+(new Date).getTime(),_.collection("users").doc(null===s||void 0===s?void 0:s.uid).collection("orders").doc(a).set({basket:n,amount:E(n),created:(new Date).getTime()}),u(!0),k(null),g(!1),r({type:"EMPTY_BASKET"}),e.replace("/orders");case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"payment",children:Object(h.jsxs)("div",{className:"payment__container",children:[Object(h.jsxs)("h1",{children:["Checkout (",Object(h.jsxs)(o.b,{to:"/checkout",children:[null===n||void 0===n?void 0:n.length," items"]}),")"]}),Object(h.jsxs)("div",{className:"payment__section",children:[Object(h.jsx)("div",{className:"payment__title",children:Object(h.jsx)("h3",{children:"Delivery Address"})}),Object(h.jsxs)("div",{className:"payment__address",children:[Object(h.jsx)("p",{children:null===s||void 0===s?void 0:s.email}),Object(h.jsx)("p",{children:"123 Lane"}),Object(h.jsx)("p",{children:"Mumbai, India"})]})]}),Object(h.jsxs)("div",{className:"payment__section",children:[Object(h.jsx)("div",{className:"payment__title",children:Object(h.jsx)("h3",{children:"Review Items and Delivery"})}),Object(h.jsx)("div",{className:"payment__items",children:n.map((function(e){return Object(h.jsx)(T,{id:e.id,title:e.title,rating:e.rating,price:e.price,image:e.image})}))})]}),Object(h.jsxs)("div",{className:"payment__section",children:[Object(h.jsx)("div",{className:"payment__title",children:Object(h.jsx)("h3",{children:"Payment Method"})}),Object(h.jsx)("div",{className:"payment__details",children:Object(h.jsxs)("form",{onSubmit:I,children:[Object(h.jsx)(G.CardElement,{onChange:function(e){w(e.empty),k(e.error?e.error.message:"")}}),Object(h.jsxs)("div",{className:"payment__priceContainer",children:[Object(h.jsx)(B.a,{renderText:function(e){return Object(h.jsxs)("h3",{children:["Order Total: ",e]})},decimalScale:2,value:E(n),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(h.jsx)("button",{disabled:x||C||b,children:Object(h.jsx)("span",{children:x?Object(h.jsx)("p",{children:"Processing"}):"Buy Now"})})]}),N&&Object(h.jsx)("div",{children:N})]})})]})]})})},L=c(57),U=(c(105),c(106),c(58)),D=c.n(U);var F=function(e){var t,c=e.order;return Object(h.jsxs)("div",{className:"order",children:[Object(h.jsx)("h2",{children:"Order"}),Object(h.jsx)("p",{children:D.a.unix(c.data.created).format("MMMM Do YYYY, h:mma")}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("p",{className:"order__id",children:Object(h.jsxs)("small",{children:[Object(h.jsx)("b",{children:"Order Id:"})," \xa0",c.id]})}),null===(t=c.data.basket)||void 0===t?void 0:t.map((function(e){return Object(h.jsx)(T,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!0})})),Object(h.jsx)(B.a,{renderText:function(e){return Object(h.jsxs)("h3",{className:"order__total",children:["Order Total: ",e]})},decimalScale:2,value:c.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"$"})]})};var W=function(){var e=p(),t=Object(l.a)(e,2),c=t[0],i=(c.basket,c.user),n=(t[1],Object(a.useState)([])),s=Object(l.a)(n,2),r=s[0],o=s[1];return Object(a.useEffect)((function(){_.collection("users").doc(null===i||void 0===i?void 0:i.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){return o(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[i]),Object(h.jsxs)("div",{className:"orders",children:[Object(h.jsx)("h1",{children:"Your Orders"}),Object(h.jsx)("div",{className:"orders__order",children:null===r||void 0===r?void 0:r.map((function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(F,{order:e})})}))})]})},H=Object(L.a)("pk_test_51JakxlSAE95RXKJHHZOKuu1BOj7MZlP440NVPiDS9QvVdG06lLETwbHhGklQbsSNsxw6uQkbM28QsltnvkWfK56V00tYR9ngTt");var X=function(){var e=p(),t=Object(l.a)(e,2);Object(r.a)(t[0]);var c=t[1];return Object(a.useEffect)((function(){g.onAuthStateChanged((function(e){console.log(e),c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(h.jsx)(o.a,{children:Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(S.c,{children:[Object(h.jsxs)(S.a,{path:"/checkout",exact:!0,children:[Object(h.jsx)(v,{}),Object(h.jsx)(M,{})]}),Object(h.jsx)(S.a,{path:"/login",exact:!0,children:Object(h.jsx)(k,{})}),Object(h.jsxs)(S.a,{path:"/payment",exact:!0,children:[Object(h.jsx)(v,{}),Object(h.jsx)(G.Elements,{stripe:H,children:Object(h.jsx)(I,{})})]}),Object(h.jsxs)(S.a,{path:"/orders",exact:!0,children:[Object(h.jsx)(v,{}),Object(h.jsx)(W,{})]}),Object(h.jsxs)(S.a,{path:"/",children:[Object(h.jsx)(v,{}),Object(h.jsx)(N,{})]})]})})})},Y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,121)).then((function(t){var c=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,s=t.getTTFB;c(e),a(e),i(e),n(e),s(e)}))};s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(O,{initialState:{basket:[]},reducer:function(e,t){switch(t.type){case"ADD_TO_BASKET":return Object(C.a)(Object(C.a)({},e),{},{basket:[].concat(Object(A.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=Object(A.a)(e.basket),a=e.basket.findIndex((function(e){return e.id===t.id}));return a>=0?c.splice(a,1):console.log("ERROR"),Object(C.a)(Object(C.a)({},e),{},{basket:c});case"EMPTY_BASKET":return Object(C.a)(Object(C.a)({},e),{},{basket:[]});case"SET_USER":return Object(C.a)(Object(C.a)({},e),{},{user:t.user});default:return e}},children:Object(h.jsx)(X,{})})}),document.getElementById("root")),Y()},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},86:function(e,t,c){}},[[109,1,2]]]);
//# sourceMappingURL=main.f6383b95.chunk.js.map