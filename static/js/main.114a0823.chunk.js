(this["webpackJsonpburguer-builder"]=this["webpackJsonpburguer-builder"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2US69",BreadTop:"BurgerIngredient_BreadTop__3Y4-R",Seeds1:"BurgerIngredient_Seeds1__J6vUJ",Seeds2:"BurgerIngredient_Seeds2__2Ylex",Meat:"BurgerIngredient_Meat__3flwI",Cheese:"BurgerIngredient_Cheese__3rOTJ",Salad:"BurgerIngredient_Salad__KLnhy",Bacon:"BurgerIngredient_Bacon__1KK6n"}},,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-",Logo:"SideDrawer_Logo__3voUv"}},,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__O8649",Label:"BuildControl_Label__TQkTk",Less:"BuildControl_Less__3Ttg8",More:"BuildControl_More__1MY7B"}},function(e,t,n){e.exports={Input:"Input_Input__3r5Ke",Label:"Input_Label__1qyHr",InputElement:"Input_InputElement__2m88K",Invalid:"Input_Invalid__16Mis"}},,,,,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Logo:"Toolbar_Logo__3Lk47",DesktopOnly:"Toolbar_DesktopOnly__LuPaL"}},,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__1YmbS",OrderButton:"BuildControls_OrderButton___M-Du",enable:"BuildControls_enable__9xLsD"}},function(e,t,n){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},,,,,,,,,,,,,function(e,t,n){e.exports={Content:"Layout_Content__3H3X8"}},function(e,t,n){e.exports={Logo:"Logo_Logo__1N0xH"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},,function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__m405X"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},function(e,t,n){e.exports={Burger:"Burger_Burger__10T8F"}},function(e,t,n){e.exports={Modal:"Modal_Modal__1-5dN"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__1twK-",load8:"Spinner_load8__36vjM"}},function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__3PsXi"}},function(e,t,n){e.exports={ContactData:"ContactData_ContactData__20AK_"}},function(e,t,n){e.exports={Order:"Order_Order__3kYZJ"}},function(e,t,n){e.exports={Auth:"Auth_Auth__1Zul_"}},,function(e,t,n){e.exports=n(91)},,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(24),o=n.n(i),c=n(15),l=n(7),u=n(19),s=n(47),d=(n(72),n(2)),p=n(3),m=n(5),h=n(4),g=n(6),f=n(18),v=function(e){return e.children},E=n(48),b=n.n(E),_=n(28),y=n.n(_),C=n(49),k=n.n(C),S=n(50),O=n.n(S),I=function(e){return r.a.createElement("div",{className:k.a.Logo},r.a.createElement("img",{src:O.a,alt:"Burger Logo"}))},T=n(51),N=n.n(T),A=n(31),j=n.n(A),D=function(e){return r.a.createElement("li",{className:j.a.NavigationItem},r.a.createElement(c.b,{to:e.link,activeClassName:j.a.active,exact:e.exact},e.children))},B=function(e){var t=r.a.createElement(D,{link:"/auth"},"Authenticate");return e.isAuthenticated&&(t=r.a.createElement(r.a.Fragment,null,r.a.createElement(D,{link:"/orders"},"Orders"),r.a.createElement(D,{link:"/logout"},"Logout"))),r.a.createElement("ul",{className:N.a.NavigationItems},r.a.createElement(D,{link:"/",exact:!0},"Burguer Builder"),t)},R=n(53),w=n.n(R),L=function(e){return r.a.createElement("div",{className:w.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},H=function(e){return r.a.createElement("header",{className:y.a.Toolbar},r.a.createElement(L,{clicked:e.drawerToggleClicked}),r.a.createElement("div",{className:y.a.Logo},r.a.createElement(I,null)),r.a.createElement("nav",{className:y.a.DesktopOnly},r.a.createElement(B,{isAuthenticated:e.isAuth})))},x=n(20),U=n.n(x),P=n(54),F=n.n(P),M=function(e){return e.show?r.a.createElement("div",{className:F.a.Backdrop,onClick:e.clicked},e.children):null},z=function(e){var t=[U.a.SideDrawer,U.a.Close];return e.open&&(t=[U.a.SideDrawer,U.a.Open]),r.a.createElement(v,null,r.a.createElement(M,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:U.a.Logo},r.a.createElement(I,null)),r.a.createElement("nav",{onClick:e.closed},r.a.createElement(B,{isAuthenticated:e.isAuth}))))},G=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},n.sideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerToggleHandler=function(){n.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(v,null,r.a.createElement(H,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(z,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:b.a.Content},this.props.children))}}]),t}(a.Component),V=Object(l.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))(G),q=n(11),J=n(27),Y=n.n(J),K=Y.a.create({baseURL:"https://the-burguer-builder-app.firebaseio.com/"}),X=n(62),W=n(55),Z=n.n(W),$=n(17),Q=n.n($),ee=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:Q.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:Q.a.BreadTop},r.a.createElement("div",{className:Q.a.Seeds1}),r.a.createElement("div",{className:Q.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:Q.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:Q.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:Q.a.Salad});break;case"bacon":e=r.a.createElement("div",{className:Q.a.Bacon});break;default:e=null}return e}}]),t}(a.Component),te=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(X.a)(Array(e.ingredients[t])).map((function(e,n){return r.a.createElement(ee,{key:t+"_"+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients!")),r.a.createElement("div",{className:Z.a.Burger},r.a.createElement(ee,{type:"bread-top"}),t,r.a.createElement(ee,{type:"bread-bottom"}))},ne=n(34),ae=n.n(ne),re=n(22),ie=n.n(re),oe=function(e){return r.a.createElement("div",{className:ie.a.BuildControl},r.a.createElement("div",{className:ie.a.Label},e.label),r.a.createElement("button",{className:ie.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:ie.a.More,onClick:e.added},"More"))},ce=[{label:"Salad",type:"salad"},{label:"Cheese",type:"cheese"},{label:"Bacon",type:"bacon"},{label:"Meat",type:"meat"}],le=function(e){return r.a.createElement("div",{className:ae.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2),"\u20ac")),ce.map((function(t){return r.a.createElement(oe,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:ae.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},e.isAuth?"ORDER NOW":"SIGN UP TO ORDER"))},ue=n(56),se=n.n(ue),de=r.a.memo((function(e){return r.a.createElement(v,null,r.a.createElement(M,{show:e.show,clicked:e.modalClosed}),r.a.createElement("div",{className:se.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))})),pe=n(35),me=n.n(pe),he=function(e){return r.a.createElement("button",{className:[me.a.Button,me.a[e.btnType]].join(" "),onClick:e.clicked,disabled:e.disabled},e.children)},ge=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.ingredients[t])}));return r.a.createElement(v,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total price: ",e.price.toFixed(2),"\u20ac")),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(he,{btnType:"Danger",clicked:e.purchaseCancelled},"CANCEL"),r.a.createElement(he,{btnType:"Success",clicked:e.purchaseContinued},"CONTINUE"))},fe=n(57),ve=n.n(fe),Ee=function(){return r.a.createElement("div",{className:ve.a.Loader},"Loading...")},be=function(e,t){return function(n){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(g.a)(a,n),Object(p.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return r.a.createElement(v,null,r.a.createElement(de,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),a}(a.Component)},_e=function(e,t){return{type:"AUTH_SUCCESS",idToken:e,userId:t}},ye=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:"AUTH_LOGOUT"}},Ce=function(e){return function(t){setTimeout((function(){t(ye())}),1e3*e)}},ke=function(e,t,n){return function(a){a({type:"AUTH_START"});var r={email:e,password:t,returnSecureToken:!0},i="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD_yzOfZNril23UYfoTG2-4FfVQJK_ZhBY";n||(i="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD_yzOfZNril23UYfoTG2-4FfVQJK_ZhBY"),Y.a.post(i,r).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),a(_e(e.data.idToken,e.data.localId)),a(Ce(e.data.expiresIn))})).catch((function(e){a(function(e){return console.log(e),{type:"AUTH_FAIL",error:e}}(e.response.data.error))}))}},Se=function(e){return{type:"SET_AUTH_REDIRECT_PATH",path:e}},Oe=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={purchasing:!1},n.isPurchasable=function(){var e=n.props.ings;return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0},n.purchaseHandler=function(){n.props.isAuthenticated?n.setState({purchasing:!0}):(n.props.onSetAuthRedirectPath("/checkout"),n.props.history.push("/auth"))},n.purchaseCancelHandler=function(){n.setState({purchasing:!1})},n.purchaseContinuedHandler=function(){n.props.onInitPurchase(),n.props.history.push("/checkout")},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"render",value:function(){var e=Object(q.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,a=this.props.error?r.a.createElement("p",{style:{textAlign:"center"}},"Ingredients can't be loaded!"):r.a.createElement(Ee,null);return this.props.ings&&(a=r.a.createElement(v,null,r.a.createElement(te,{ingredients:this.props.ings}),r.a.createElement(le,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,price:this.props.price,purchasable:this.isPurchasable(),ordered:this.purchaseHandler,isAuth:this.props.isAuthenticated})),n=r.a.createElement(ge,{ingredients:this.props.ings,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinuedHandler,price:this.props.price})),r.a.createElement(v,null,r.a.createElement(de,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),a)}}]),t}(a.Component),Ie=Object(l.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}}),(function(e){return{onIngredientAdded:function(t){return e({type:"ADD_INGREDIENT",ingredientName:t})},onIngredientRemoved:function(t){return e({type:"REMOVE_INGREDIENT",ingredientName:t})},onInitIngredients:function(){return e((function(e){K.get("/ingredients.json").then((function(t){e({type:"SET_INGREDIENTS",ingredients:t.data})})).catch((function(t){e({type:"FETCH_INGREDIENTS_FAILED"})}))}))},onInitPurchase:function(){return e({type:"PURCHASE_INIT"})},onSetAuthRedirectPath:function(t){return e(Se(t))}}}))(be(Oe,K)),Te=n(58),Ne=n.n(Te),Ae=function(e){return r.a.createElement("div",{className:Ne.a.CheckoutSummary},r.a.createElement("h1",null,"We hope it taste well!"),r.a.createElement("div",{style:{width:"100%",margin:"auto",display:"flex"}},r.a.createElement(te,{ingredients:e.ingredients})),r.a.createElement(he,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),r.a.createElement(he,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUE"))},je=n(59),De=n.n(je),Be=n(23),Re=n.n(Be),we=function(e){var t=null,n=null,a=[Re.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&(a.push(Re.a.Invalid),n=r.a.createElement("p",null,"Please enter a valid ",e.valueType,"!")),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{className:a.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return r.a.createElement("div",{className:Re.a.Input},r.a.createElement("label",{className:Re.a.Label},e.label),t,n)},Le=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"Zip Code"},value:"",validation:{required:!0,minLength:5,maxLength:5,isNumeric:!0},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Email"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},valid:!0}},formIsValid:!1},n.orderHandler=function(e){e.preventDefault();var t={};for(var a in n.state.orderForm)t[a]=n.state.orderForm[a].value;var r={ingredients:n.props.ings,price:n.props.price,orderData:t,userId:n.props.userId};n.props.onOrderBurger(r,n.props.token)},n.inputChangedHandler=function(e,t){var a=Object(q.a)({},n.state.orderForm),r=Object(q.a)({},a[t]);r.value=e.target.value,r.valid=n.checkValidity(r.value,r.validation),r.touched=!0,a[t]=r;var i=!0;for(var o in a)i=a[o].valid&&i;n.setState({orderForm:a,formIsValid:i})},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"checkValidity",value:function(e,t){var n=!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var a=r.a.createElement("form",{onSubmit:this.orderHandler},t.map((function(t){return r.a.createElement(we,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,valueType:t.config.elementConfig.placeholder,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})})),r.a.createElement(he,{btnType:"Success",disabled:!this.state.formIsValid},"ORDER"));return this.props.loading&&(a=r.a.createElement(Ee,null)),r.a.createElement("div",{className:De.a.ContactData},r.a.createElement("h4",null,"Enter your Contact Data"),a)}}]),t}(a.Component),He=Object(l.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onOrderBurger:function(t,n){return e(function(e,t){return function(n){n({type:"PURCHASE_BURGER_START"}),K.post("/orders.json?auth="+t,e).then((function(t){n(function(e,t){return{type:"PURCHASE_BURGER_SUCCESS",orderId:e,orderData:t}}(t.data.name,e))})).catch((function(e){n(function(e){return{type:"PURCHASE_BURGER_FAIL",error:e}}(e))}))}}(t,n))}}}))(be(Object(f.g)(Le),K)),xe=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).checkoutCancelledHandler=function(){n.props.history.goBack()},n.checkoutContinuedHandler=function(){n.props.history.replace("/checkout/contact-data")},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=r.a.createElement(f.a,{to:"/"});return this.props.ings&&!this.props.purchased&&(e=r.a.createElement("div",null,r.a.createElement(Ae,{ingredients:this.props.ings,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),r.a.createElement(f.b,{path:this.props.match.path+"/contact-data",component:He}))),e}}]),t}(a.Component),Ue=Object(l.b)((function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}}))(xe),Pe=n(60),Fe=n.n(Pe),Me=function(e){var t=[];for(var n in e.ingredients)t.push({name:n,amount:e.ingredients[n]});var a=t.map((function(e){return r.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,")")}));return r.a.createElement("div",{className:Fe.a.Order},r.a.createElement("p",null,"Ingredients: ",a),r.a.createElement("p",null,"Price: ",r.a.createElement("strong",null,Number.parseFloat(e.price).toFixed(2),"\u20ac")))},ze=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=r.a.createElement(Ee,null);return this.props.loading||(e=r.a.createElement("div",null,this.props.orders.map((function(e){return r.a.createElement(Me,{key:e.id,ingredients:e.ingredients,price:e.price})})))),e}}]),t}(a.Component),Ge=Object(l.b)((function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onFetchOrders:function(t,n){return e(function(e,t){return function(n){n({type:"FETCH_ORDERS_START"});var a="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';K.get("/orders.json"+a).then((function(e){var t=[];for(var a in e.data)t.push(Object(q.a)({id:a},e.data[a]));n({type:"FETCH_ORDERS_SUCCESS",orders:t})})).catch((function(e){n({type:"FETCH_ORDERS_FAIL",error:e})}))}}(t,n))}}}))(be(ze,K)),Ve=n(26),qe=n(61),Je=n.n(qe),Ye=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"E-Mail"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:8},valid:!1,touched:!1}},isSignup:!0},n.inputChangedHandler=function(e,t){var a=Object(q.a)({},n.state.controls,Object(Ve.a)({},t,Object(q.a)({},n.state.controls[t],{value:e.target.value,valid:n.checkValidity(e.target.value,n.state.controls[t].validation),touched:!0})));n.setState({controls:a})},n.submitHandler=function(e){e.preventDefault(),n.props.onAuth(n.state.controls.email.value,n.state.controls.password.value,n.state.isSignup)},n.switchAuthModeHandler=function(){n.setState((function(e){return{isSignup:!e.isSignup}}))},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"checkValidity",value:function(e,t){var n=!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var a=t.map((function(t){return r.a.createElement(we,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,valueType:t.config.elementConfig.placeholder,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})}));this.props.loading&&(a=r.a.createElement(Ee,null));var i=null;this.props.error&&(i=r.a.createElement("p",null,this.props.error.message));var o=null;return this.props.isAuthenticated&&(o=r.a.createElement(f.a,{to:this.props.authRedirectPath})),r.a.createElement("div",{className:Je.a.Auth},o,i,r.a.createElement("form",{onSubmit:this.submitHandler},a,r.a.createElement(he,{btnType:"Success"},"SUBMIT")),r.a.createElement(he,{btnType:"Danger",clicked:this.switchAuthModeHandler},"SWITCH TO ",this.state.isSignup?"SIGNIN":"SIGNUP"))}}]),t}(a.Component),Ke=Object(l.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,authRedirectPath:e.auth.authRedirectPath,buildingBurger:e.burgerBuilder.building}}),(function(e){return{onAuth:function(t,n,a){return e(ke(t,n,a))},onSetAuthRedirectPath:function(){return e(Se("/"))}}}))(Ye),Xe=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return r.a.createElement(f.a,{to:"/"})}}]),t}(a.Component),We=Object(l.b)(null,(function(e){return{onLogout:function(){return e(ye())}}}))(Xe),Ze=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=r.a.createElement(f.d,null,r.a.createElement(f.b,{path:"/auth",component:Ke}),r.a.createElement(f.b,{path:"/",exact:!0,component:Ie}),r.a.createElement(f.a,{to:"/"}));return this.props.isAuthenticated&&(e=r.a.createElement(f.d,null,r.a.createElement(f.b,{path:"/checkout",component:Ue}),r.a.createElement(f.b,{path:"/orders",component:Ge}),r.a.createElement(f.b,{path:"/logout",component:We}),r.a.createElement(f.b,{path:"/auth",component:Ke}),r.a.createElement(f.b,{path:"/",exact:!0,component:Ie}),r.a.createElement(f.a,{to:"/"}))),r.a.createElement("div",null,r.a.createElement(V,null,e))}}]),t}(a.Component),$e=Object(f.g)(Object(l.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onTryAutoSignup:function(){return e((function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(ye());else{var a=localStorage.getItem("userId");e(_e(t,a)),e(Ce((n.getTime()-(new Date).getTime())/1e3))}}else e(ye())}))}}}))(Ze));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Qe={salad:.5,cheese:.4,bacon:.7,meat:1.3},et={ingredients:null,totalPrice:4,error:!1,building:!1},tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0,n=JSON.parse(JSON.stringify(e));switch(t.type){case"ADD_INGREDIENT":n=nt(e,t,n);break;case"REMOVE_INGREDIENT":n=at(e,t,n);break;case"SET_INGREDIENTS":n=rt(e,t,n);break;case"FETCH_INGREDIENTS_FAILED":n=it(e,t,n);break;default:console.log("[BurgerBuilder Reducer] Action default case")}return n},nt=function(e,t,n){return n.ingredients[t.ingredientName]=e.ingredients[t.ingredientName]+1,n.totalPrice=e.totalPrice+Qe[t.ingredientName],n.building=!0,n},at=function(e,t,n){return n.ingredients[t.ingredientName]=e.ingredients[t.ingredientName]-1,n.totalPrice=e.totalPrice-Qe[t.ingredientName],n.building=!0,n},rt=function(e,t,n){var a=4;for(var r in t.ingredients)a+=Qe[r]*t.ingredients[r];return n.ingredients={salad:t.ingredients.salad,cheese:t.ingredients.cheese,bacon:t.ingredients.bacon,meat:t.ingredients.meat},n.totalPrice=a,n.error=!1,n.building=!1,n},it=function(e,t,n){return n.error=!0,n},ot={orders:[],loading:!1,purchased:!1},ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,t=arguments.length>1?arguments[1]:void 0,n=JSON.parse(JSON.stringify(e));switch(t.type){case"PURCHASE_INIT":n=lt(e,t,n);break;case"PURCHASE_BURGER_START":n=ut(e,t,n);break;case"PURCHASE_BURGER_SUCCESS":n=st(e,t,n);break;case"PURCHASE_BURGER_FAIL":n=dt(e,t,n);break;case"FETCH_ORDERS_START":n=pt(e,t,n);break;case"FETCH_ORDERS_SUCCESS":n=mt(e,t,n);break;case"FETCH_ORDERS_FAIL":n=ht(e,t,n);break;default:console.log("[Order Reducer] Action default case")}return n},lt=function(e,t,n){return n.purchased=!1,n},ut=function(e,t,n){return n.loading=!0,n},st=function(e,t,n){var a=Object(q.a)({id:t.orderId},t.orderData);return n.loading=!1,n.purchased=!0,n.orders=e.orders.concat(a),n},dt=function(e,t,n){return n.loading=!1,n},pt=function(e,t,n){return n.loading=!0,n},mt=function(e,t,n){return n.loading=!1,n.orders=t.orders,n},ht=function(e,t,n){return n.loading=!1,n},gt={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},ft=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:gt,t=arguments.length>1?arguments[1]:void 0,n=JSON.parse(JSON.stringify(e));switch(t.type){case"AUTH_START":n=vt(e,t,n);break;case"AUTH_SUCCESS":n=Et(e,t,n);break;case"AUTH_FAIL":n=bt(e,t,n);break;case"AUTH_LOGOUT":n=_t(e,t,n);break;case"SET_AUTH_REDIRECT_PATH":n=yt(e,t,n);break;default:console.log("[Auth Reducer] Action default case")}return n},vt=function(e,t,n){return n.error=null,n.loading=!0,n},Et=function(e,t,n){return n.token=t.idToken,n.userId=t.userId,n.error=null,n.loading=!1,n},bt=function(e,t,n){return n.error=t.error,n.loading=!1,n},_t=function(e,t,n){return n.token=null,n.userId=null,n},yt=function(e,t,n){return n.authRedirectPath=t.path,n},Ct=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,kt=Object(u.c)({burgerBuilder:tt,order:ct,auth:ft}),St=Object(u.e)(kt,Ct(Object(u.a)(s.a))),Ot=r.a.createElement(l.a,{store:St},r.a.createElement(c.a,{basename:"/burguer-builder/"},r.a.createElement($e,null)));o.a.render(Ot,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[63,1,2]]]);
//# sourceMappingURL=main.114a0823.chunk.js.map