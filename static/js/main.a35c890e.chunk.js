(this["webpackJsonpburguer-builder"]=this["webpackJsonpburguer-builder"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2US69",BreadTop:"BurgerIngredient_BreadTop__3Y4-R",Seeds1:"BurgerIngredient_Seeds1__J6vUJ",Seeds2:"BurgerIngredient_Seeds2__2Ylex",Meat:"BurgerIngredient_Meat__3flwI",Cheese:"BurgerIngredient_Cheese__3rOTJ",Salad:"BurgerIngredient_Salad__KLnhy",Bacon:"BurgerIngredient_Bacon__1KK6n"}},,,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-",Logo:"SideDrawer_Logo__3voUv"}},,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__O8649",Label:"BuildControl_Label__TQkTk",Less:"BuildControl_Less__3Ttg8",More:"BuildControl_More__1MY7B"}},function(e,t,n){e.exports={Input:"Input_Input__3r5Ke",Label:"Input_Label__1qyHr",InputElement:"Input_InputElement__2m88K",Invalid:"Input_Invalid__16Mis"}},function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Logo:"Toolbar_Logo__3Lk47",DesktopOnly:"Toolbar_DesktopOnly__LuPaL"}},,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__1YmbS",OrderButton:"BuildControls_OrderButton___M-Du",enable:"BuildControls_enable__9xLsD"}},function(e,t,n){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},,,,,,,,,,,,function(e,t,n){e.exports={Content:"Layout_Content__3H3X8"}},function(e,t,n){e.exports={Logo:"Logo_Logo__1N0xH"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},,,function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__m405X"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},,function(e,t,n){e.exports={Burger:"Burger_Burger__10T8F"}},function(e,t,n){e.exports={Modal:"Modal_Modal__1-5dN"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__1twK-",load8:"Spinner_load8__36vjM"}},function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__3PsXi"}},function(e,t,n){e.exports={ContactData:"ContactData_ContactData__20AK_"}},function(e,t,n){e.exports={Order:"Order_Order__3kYZJ"}},,function(e,t,n){e.exports=n(82)},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(37),l=n.n(o),i=n(13),c=(n(59),n(12)),s=n(2),u=n(3),d=n(5),p=n(4),m=n(6),h=function(e){return e.children},g=n(38),f=n.n(g),v=n(20),b=n.n(v),y=n(39),E=n.n(y),_=n(40),O=n.n(_),C=function(e){return r.a.createElement("div",{className:E.a.Logo},r.a.createElement("img",{src:O.a,alt:"Burger Logo"}))},j=n(41),k=n.n(j),w=n(22),S=n.n(w),N=function(e){return r.a.createElement("li",{className:S.a.NavigationItem},r.a.createElement(i.b,{to:e.link,activeClassName:S.a.active,exact:e.exact},e.children))},B=function(){return r.a.createElement("ul",{className:k.a.NavigationItems},r.a.createElement(N,{link:"/",exact:!0},"Burguer Builder"),r.a.createElement(N,{link:"/orders"},"Orders"))},D=n(44),I=n.n(D),x=function(e){return r.a.createElement("div",{className:I.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},P=function(e){return r.a.createElement("header",{className:b.a.Toolbar},r.a.createElement(x,{clicked:e.drawerToggleClicked}),r.a.createElement("div",{className:b.a.Logo},r.a.createElement(C,null)),r.a.createElement("nav",{className:b.a.DesktopOnly},r.a.createElement(B,null)))},T=n(16),L=n.n(T),H=n(45),M=n.n(H),A=function(e){return e.show?r.a.createElement("div",{className:M.a.Backdrop,onClick:e.clicked},e.children):null},F=function(e){var t=[L.a.SideDrawer,L.a.Close];return e.open&&(t=[L.a.SideDrawer,L.a.Open]),r.a.createElement(h,null,r.a.createElement(A,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:L.a.Logo},r.a.createElement(C,null)),r.a.createElement("nav",null,r.a.createElement(B,null))))},q=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},n.sideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerToggleHandler=function(){n.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(h,null,r.a.createElement(P,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(F,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:f.a.Content},this.props.children))}}]),t}(a.Component),R=n(15),V=n(46),U=n.n(V).a.create({baseURL:"https://the-burguer-builder-app.firebaseio.com/"}),K=n(53),Y=n(47),X=n.n(Y),J=n(11),W=n.n(J),z=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:W.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:W.a.BreadTop},r.a.createElement("div",{className:W.a.Seeds1}),r.a.createElement("div",{className:W.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:W.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:W.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:W.a.Salad});break;case"bacon":e=r.a.createElement("div",{className:W.a.Bacon});break;default:e=null}return e}}]),t}(a.Component),Z=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(K.a)(Array(e.ingredients[t])).map((function(e,n){return r.a.createElement(z,{key:t+"_"+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients!")),r.a.createElement("div",{className:X.a.Burger},r.a.createElement(z,{type:"bread-top"}),t,r.a.createElement(z,{type:"bread-bottom"}))},Q=n(25),$=n.n(Q),G=n(18),ee=n.n(G),te=function(e){return r.a.createElement("div",{className:ee.a.BuildControl},r.a.createElement("div",{className:ee.a.Label},e.label),r.a.createElement("button",{className:ee.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:ee.a.More,onClick:e.added},"More"))},ne=[{label:"Salad",type:"salad"},{label:"Cheese",type:"cheese"},{label:"Bacon",type:"bacon"},{label:"Meat",type:"meat"}],ae=function(e){return r.a.createElement("div",{className:$.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2),"\u20ac")),ne.map((function(t){return r.a.createElement(te,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:$.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},"ORDER NOW"))},re=n(48),oe=n.n(re),le=r.a.memo((function(e){return r.a.createElement(h,null,r.a.createElement(A,{show:e.show,clicked:e.modalClosed}),r.a.createElement("div",{className:oe.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))})),ie=n(26),ce=n.n(ie),se=function(e){return r.a.createElement("button",{className:[ce.a.Button,ce.a[e.btnType]].join(" "),onClick:e.clicked,disabled:e.disabled},e.children)},ue=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.ingredients[t])}));return r.a.createElement(h,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total price: ",e.price.toFixed(2),"\u20ac")),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(se,{btnType:"Danger",clicked:e.purchaseCancelled},"CANCEL"),r.a.createElement(se,{btnType:"Success",clicked:e.purchaseContinued},"CONTINUE"))},de=n(49),pe=n.n(de),me=function(){return r.a.createElement("div",{className:pe.a.Loader},"Loading...")},he=function(e,t){return function(n){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(m.a)(a,n),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return r.a.createElement(h,null,r.a.createElement(le,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),a}(a.Component)};function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(n),!0).forEach((function(t){Object(R.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ve={salad:.5,cheese:.4,bacon:.7,meat:1.3},be=he(function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:null,totalPrice:5,purchasable:!1,purchasing:!1,error:!1},n.updatePurchaseState=function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);n.setState({purchasable:t>0})},n.addIngredientHandler=function(e){var t=n.state.ingredients[e]+1,a=fe({},n.state.ingredients);a[e]=t;var r=n.state.totalPrice+ve[e];n.setState({ingredients:a,totalPrice:r}),n.updatePurchaseState(a)},n.removeIngredientHandler=function(e){var t=n.state.ingredients[e];if(!(t<=0)){var a=t-1,r=fe({},n.state.ingredients);r[e]=a;var o=n.state.totalPrice-ve[e];n.setState({ingredients:r,totalPrice:o}),n.updatePurchaseState(r)}},n.purchaseHandler=function(){n.setState({purchasing:!0})},n.purchaseCancelHandler=function(){n.setState({purchasing:!1})},n.purchaseContinuedHandler=function(){var e=[];for(var t in n.state.ingredients)e.push(encodeURIComponent(t)+"="+encodeURIComponent(n.state.ingredients[t]));e.push("price="+n.state.totalPrice);var a=e.join("&");n.props.history.push({pathname:"/checkout",search:a})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;U.get("/ingredients.json").then((function(t){var n=t.data,a=e.state.totalPrice;for(var r in n)a+=ve[r]*n[r];e.setState({ingredients:n,totalPrice:a})})).catch((function(t){e.setState({error:!0})}))}},{key:"render",value:function(){var e=fe({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var n=null,a=this.state.error?r.a.createElement("p",{style:{textAlign:"center"}},"Ingredients can't be loaded!"):r.a.createElement(me,null);return this.state.ingredients&&(a=r.a.createElement(h,null,r.a.createElement(Z,{ingredients:this.state.ingredients}),r.a.createElement(ae,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,price:this.state.totalPrice,purchasable:this.state.purchasable,ordered:this.purchaseHandler})),n=r.a.createElement(ue,{ingredients:this.state.ingredients,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinuedHandler,price:this.state.totalPrice})),r.a.createElement(h,null,r.a.createElement(le,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),a)}}]),t}(a.Component),U),ye=n(50),Ee=n.n(ye),_e=function(e){return r.a.createElement("div",{className:Ee.a.CheckoutSummary},r.a.createElement("h1",null,"We hope it taste well!"),r.a.createElement("div",{style:{width:"100%",margin:"auto",display:"flex"}},r.a.createElement(Z,{ingredients:e.ingredients})),r.a.createElement(se,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),r.a.createElement(se,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUE"))},Oe=n(51),Ce=n.n(Oe),je=n(19),ke=n.n(je),we=function(e){var t=null,n=null,a=[ke.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&(a.push(ke.a.Invalid),n=r.a.createElement("p",null,"Please enter a valid ",e.valueType,"!")),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{className:a.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return r.a.createElement("div",{className:ke.a.Input},r.a.createElement("label",{className:ke.a.Label},e.label),t,n)};function Se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Se(Object(n),!0).forEach((function(t){Object(R.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Be=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"Zip Code"},value:"",validation:{required:!0,minLength:5,maxLength:5},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Email"},value:"",validation:{required:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},valid:!0}},formIsValid:!1,loading:!1},n.orderHandler=function(e){e.preventDefault(),n.setState({loading:!0});var t={};for(var a in n.state.orderForm)t[a]=n.state.orderForm[a].value;var r={ingredients:n.props.ingredients,price:n.props.price,orderData:t};U.post("/orders.json",r).then((function(e){console.log(e),n.setState({loading:!1}),n.props.history.push("/")})).catch((function(e){console.log(e),n.setState({loading:!1})}))},n.inputChangedHandler=function(e,t){var a=Ne({},n.state.orderForm),r=Ne({},a[t]);r.value=e.target.value,r.valid=n.checkValidity(r.value,r.validation),r.touched=!0,a[t]=r;var o=!0;for(var l in a)o=a[l].valid&&o;n.setState({orderForm:a,formIsValid:o})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"checkValidity",value:function(e,t){var n=!0;return t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),n}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var a=r.a.createElement("form",{onSubmit:this.orderHandler},t.map((function(t){return r.a.createElement(we,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,valueType:t.config.elementConfig.placeholder,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})})),r.a.createElement(se,{btnType:"Success",disabled:!this.state.formIsValid},"ORDER"));return this.state.loading&&(a=r.a.createElement(me,null)),r.a.createElement("div",{className:Ce.a.ContactData},r.a.createElement("h4",null,"Enter your Contact Data"),a)}}]),t}(a.Component),De=Object(c.f)(Be),Ie=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:"",totalPrice:0},n.checkoutCancelledHandler=function(){n.props.history.goBack()},n.checkoutContinuedHandler=function(){n.props.history.replace("/checkout/contact-data")},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=new URLSearchParams(this.props.location.search),t={},n=0,a=!0,r=!1,o=void 0;try{for(var l,i=e.entries()[Symbol.iterator]();!(a=(l=i.next()).done);a=!0){var c=l.value;"price"===c[0]?n=c[1]:t[c[0]]=+c[1]}}catch(s){r=!0,o=s}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}this.setState({ingredients:t,totalPrice:n})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(_e,{ingredients:this.state.ingredients,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),r.a.createElement(c.a,{path:this.props.match.path+"/contact-data",component:function(){return r.a.createElement(De,{ingredients:e.state.ingredients,price:e.state.totalPrice})}}))}}]),t}(a.Component),xe=n(52),Pe=n.n(xe),Te=function(e){var t=[];for(var n in e.ingredients)t.push({name:n,amount:e.ingredients[n]});var a=t.map((function(e){return r.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,")")}));return r.a.createElement("div",{className:Pe.a.Order},r.a.createElement("p",null,"Ingredients: ",a),r.a.createElement("p",null,"Price: ",r.a.createElement("strong",null,Number.parseFloat(e.price).toFixed(2),"\u20ac")))};function Le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function He(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Le(Object(n),!0).forEach((function(t){Object(R.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Me=he(function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={orders:[],loading:!0},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;U.get("/orders.json").then((function(t){var n=[];for(var a in t.data)n.push(He({id:a},t.data[a]));e.setState({loading:!1,orders:n})})).catch((function(t){e.setState({loading:!1})}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.orders.map((function(e){return r.a.createElement(Te,{key:e.id,ingredients:e.ingredients,price:e.price})})))}}]),t}(a.Component),U);var Ae=function(){return r.a.createElement("div",null,r.a.createElement(q,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/checkout",component:Ie}),r.a.createElement(c.a,{path:"/orders",component:Me}),r.a.createElement(c.a,{path:"/",component:be}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Fe=r.a.createElement(i.a,{basename:"/burguer-builder/"},r.a.createElement(Ae,null));l.a.render(Fe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[54,1,2]]]);
//# sourceMappingURL=main.a35c890e.chunk.js.map