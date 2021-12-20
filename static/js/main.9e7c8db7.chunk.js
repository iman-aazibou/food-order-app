(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3MY83",summary:"CartItem_summary__xPm89",price:"CartItem_price__29Nnm",amount:"CartItem_amount__30Txm",actions:"CartItem_actions__2E3m3"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__vzHa0",total:"Cart_total__2eGro",actions:"Cart_actions__1WjU2","button--alt":"Cart_button--alt__2HE6d",button:"Cart_button__UFFpv"}},,,,function(e,t,n){e.exports={button:"HeaderCartButton_button__eQtbq",icon:"HeaderCartButton_icon__lWm7V",badge:"HeaderCartButton_badge__2hlQF",bump:"HeaderCartButton_bump__32TLn"}},function(e,t,n){e.exports={meal:"MealItem_meal__IMlXn",description:"MealItem_description__3Ff9C",price:"MealItem_price__2ct5w"}},,function(e,t,n){e.exports={header:"Header_header__1cM8q","main-image":"Header_main-image__1RoZ3"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__2znzX",modal:"Modal_modal__2QgxK","slide-down":"Modal_slide-down__Y0TjC"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__1BTNU"}},function(e,t,n){e.exports={card:"Card_card__2N-0v"}},function(e,t,n){e.exports={input:"Input_input__3Lg_X"}},function(e,t,n){e.exports={form:"MealItemForm_form__2GhM6"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__1PggW","meals-appear":"AvailableMeals_meals-appear__1hJEd"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(6),r=n.n(i),o=(n(24),n(3)),s=c.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),l=n(0),d=function(){return Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(l.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},m=n(9),u=n.n(m),j=function(e){var t=Object(a.useContext)(s).items.reduce((function(e,t){return e+t.amount}),0);return Object(l.jsxs)("button",{className:u.a.button,onClick:e.onClick,children:[Object(l.jsx)("span",{className:u.a.icon,children:Object(l.jsx)(d,{})}),Object(l.jsx)("span",{children:"Your Cart"}),Object(l.jsx)("span",{className:u.a.badge,children:t})]})},b=n.p+"static/media/food.2663bdd2.jpeg",x=n(12),O=n.n(x),_=function(e){return Object(l.jsxs)(c.a.Fragment,{children:[Object(l.jsxs)("header",{className:O.a.header,children:[Object(l.jsx)("h1",{children:"ReactMeals"}),Object(l.jsx)(j,{onClick:e.onShowCart})]}),Object(l.jsx)("div",{className:O.a["main-image"],children:Object(l.jsx)("img",{src:b,alt:"delicious food on the table"})})]})},h=n(15),p=n.n(h),f=function(){return Object(l.jsxs)("section",{className:p.a.summary,children:[Object(l.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(l.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(l.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(16),C=n.n(v),g=function(e){return Object(l.jsx)("div",{className:C.a.card,children:e.children})},A=n(2),N=n(17),I=n.n(N),M=c.a.forwardRef((function(e,t){return Object(l.jsxs)("div",{className:I.a.input,children:[Object(l.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(l.jsx)("input",Object(A.a)({ref:t},e.input))]})})),y=n(18),F=n.n(y),T=function(e){var t=Object(a.useState)(!0),n=Object(o.a)(t,2),c=n[0],i=n[1],r=Object(a.useRef)();return Object(l.jsxs)("form",{className:F.a.form,onSubmit:function(t){t.preventDefault();var n=r.current.value,a=+n;0===n.trim().length||n<1||n>5?i(!1):e.onAddToCart(a)},children:[Object(l.jsx)(M,{ref:r,label:"Amount",input:{id:"amount"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(l.jsx)("button",{children:"+ Add"}),!c&&Object(l.jsx)("p",{children:"Please enter a valid amount."})]})},w=n(10),R=n.n(w),H=function(e){var t=Object(a.useContext)(s),n="".concat(e.price.toFixed(2),"\u20ac");return Object(l.jsxs)("li",{className:R.a.meal,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:e.name}),Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:R.a.description,children:e.description})}),Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:R.a.price,children:n})})]}),Object(l.jsx)("div",{children:Object(l.jsx)(T,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})},id:e.id})})]})},k=n(19),E=n.n(k),B=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],S=function(){var e=B.map((function(e){return Object(l.jsx)(H,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(l.jsx)("section",{className:E.a.meals,children:Object(l.jsx)(g,{children:Object(l.jsx)("ul",{children:e})})})},D=function(){return Object(l.jsxs)(c.a.Fragment,{children:[Object(l.jsx)(f,{}),Object(l.jsx)(S,{})]})},P=n(13),z=n.n(P),L=function(e){return Object(l.jsx)("div",{className:z.a.backdrop,onClick:e.onClose})},V=function(e){return Object(l.jsx)("div",{className:z.a.modal,children:Object(l.jsx)("div",{children:e.children})})},Y=document.getElementById("overlays"),q=function(e){return Object(l.jsxs)(c.a.Fragment,{children:[r.a.createPortal(Object(l.jsx)(L,{onClose:e.onClose}),Y),r.a.createPortal(Object(l.jsx)(V,{children:e.children}),Y)]})},G=n(4),J=n.n(G),Q=function(e){var t="".concat(e.price.toFixed(2)," \u20ac");return Object(l.jsxs)("li",{className:J.a["cart-item"],children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:e.name}),Object(l.jsxs)("div",{className:J.a.summary,children:[Object(l.jsx)("span",{className:J.a.price,children:t}),Object(l.jsxs)("span",{className:J.a.amount,children:["x ",e.amount]})]})]}),Object(l.jsxs)("div",{className:J.a.actions,children:[Object(l.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(l.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},U=n(5),W=n.n(U);console.log("hello");var X=function(e){var t=Object(a.useContext)(s),n="".concat(t.totalAmount.toFixed(2)," \u20ac"),c=t.items.length>0,i=function(e){t.removeItem(e)},r=function(e){t.addItem(Object(A.a)(Object(A.a)({},e),{},{amount:1}))},o=Object(l.jsx)("ul",{className:W.a["cart-items"],children:t.items.map((function(e){return Object(l.jsx)(Q,{name:e.name,amount:e.amount,price:e.price,onRemove:i.bind(null,e.id),onAdd:r.bind(null,e)},e.id)}))});return Object(l.jsxs)(q,{onClose:e.onClose,children:[o,Object(l.jsxs)("div",{className:W.a.total,children:[Object(l.jsx)("span",{children:"Total Amount"}),Object(l.jsx)("span",{children:n})]}),Object(l.jsxs)("div",{className:W.a.actions,children:[Object(l.jsx)("button",{className:W.a["button--alt"],onClick:e.onClose,children:"Close"}),c&&Object(l.jsx)("button",{className:W.a.button,children:"Order"})]})]})},K=n(14),Z={items:[],totalAmount:0},$=function(e,t){if("ADD_ITEM_TO_CART"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(A.a)(Object(A.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(K.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE_ITEM_FROM_CART"===t.type){var o,s=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[s],d=e.totalAmount-l.price;if(1===l.amount)o=e.items.filter((function(e){return e.id!==t.id}));else{var m=Object(A.a)(Object(A.a)({},l),{},{amount:l.amount-1});(o=Object(K.a)(e.items))[s]=m}return{items:o,totalAmount:d}}return Z},ee=function(e){var t=Object(a.useReducer)($,Z),n=Object(o.a)(t,2),c=n[0],i=n[1],r={items:c.items,totalAmount:c.totalAmount,addItem:function(e){i({type:"ADD_ITEM_TO_CART",item:e})},removeItem:function(e){i({type:"REMOVE_ITEM_FROM_CART",id:e})}};return Object(l.jsx)(s.Provider,{value:r,children:e.children})};var te=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)(ee,{children:[n&&Object(l.jsx)(X,{onClose:function(){c(!1)}}),Object(l.jsx)(_,{onShowCart:function(){c(!0)}}),Object(l.jsx)(D,{})]})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(te,{})}),document.getElementById("root")),ne()}],[[26,1,2]]]);
//# sourceMappingURL=main.9e7c8db7.chunk.js.map