(this.webpackJsonpDietPedia=this.webpackJsonpDietPedia||[]).push([[0],{44:function(e,t,s){},93:function(e,t,s){"use strict";s.r(t);var c=s(0),i=s(1),a=s.n(i),n=s(32),r=s.n(n),l=(s(44),s(18)),d=s.n(l),o=s(33),h=s(34),j=s(35),u=s(38),b=s(37),m=s(2),x=s(12),O=s.n(x),p=s(13),g=s(14),v=s.n(g);var f=function(e){return Object(c.jsx)("div",{children:Object(c.jsx)("div",{class:"col-12",children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)("div",{class:"card card-article",children:Object(c.jsx)("div",{class:"card-body card-body-custom",children:Object(c.jsxs)("div",{class:"row",children:[Object(c.jsx)("div",{class:"col-4",children:Object(c.jsx)("img",{class:"img-fluid img-article",src:e.thumbnail,alt:e.title})}),Object(c.jsxs)("div",{class:"col-8 col-article",children:[Object(c.jsx)("h6",{class:"card-title",children:e.title}),Object(c.jsx)("p",{class:"card-text",children:Object(c.jsx)("small",{class:"text-muted",children:Object(c.jsxs)("i",{children:["sumber ",Object(c.jsx)("strong",{children:e.source})]})})})]})]})})},e.index)})})})};var k=function(e){return Object(c.jsx)("div",{className:"col-12",children:Object(c.jsxs)("div",{className:"card card-custom",children:[Object(c.jsx)("div",{className:"card-body",children:Object(c.jsx)("h5",{className:"card-title",children:e.item})}),Object(c.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(c.jsx)("li",{className:"list-group-item card-bg-color",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-2",children:Object(c.jsx)("a",{children:Object(c.jsx)("object",{data:"https://riskid.tech/dietPedia/img/done.png",width:"27",height:"27",children:" "})})}),Object(c.jsx)("div",{className:"col-3",children:Object(c.jsx)("a",{children:"Brand"})}),Object(c.jsx)("div",{className:"col-7",children:Object(c.jsx)("a",{children:e.brand})})]})}),Object(c.jsx)("li",{className:"list-group-item card-bg-color",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-2",children:Object(c.jsx)("object",{data:"https://riskid.tech/dietPedia/img/Steak.png",width:"27",height:"27",children:" "})}),Object(c.jsx)("div",{className:"col-3",children:Object(c.jsx)("a",{children:"Porsi"})}),Object(c.jsx)("div",{className:"col-7",children:Object(c.jsx)("a",{children:e.porsi})})]})}),Object(c.jsx)("li",{className:"list-group-item card-bg-color",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-2",children:Object(c.jsx)("object",{data:"https://riskid.tech/dietPedia/img/Pizza.png",width:"27",height:"27",children:" "})}),Object(c.jsx)("div",{className:"col-3",children:Object(c.jsx)("a",{children:"Kalori"})}),Object(c.jsx)("div",{className:"col-7",children:Object(c.jsxs)("a",{children:[e.kalori," kal"]})})]})}),Object(c.jsx)("li",{className:"list-group-item card-bg-color",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-2",children:Object(c.jsx)("object",{data:"https://riskid.tech/dietPedia/img/Love.png",width:"27",height:"27",children:" "})}),Object(c.jsx)("div",{className:"col-3",children:Object(c.jsx)("a",{children:"Lemak"})}),Object(c.jsx)("div",{className:"col-7",children:Object(c.jsxs)("a",{children:[e.lemak," mg"]})})]})})]})]},e.id)})},N=s(10);var w=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("nav",{class:"navbar shadow-nav bg-green navbar-expand fixed-bottom",children:Object(c.jsxs)("ul",{class:"navbar-nav nav-justified w-100",children:[Object(c.jsx)("li",{class:"nav-link",children:Object(c.jsx)(N.b,{class:"nav-link",to:"/dietPedia",children:Object(c.jsx)("span",{class:"material-icons size-34",children:"search"})})}),Object(c.jsx)("li",{class:"nav-link",children:Object(c.jsx)(N.b,{class:"nav-link",to:"/article",children:Object(c.jsx)("span",{class:"material-icons size-34",children:"explore"})})})]})})})};var y=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h2",{children:"Halaman Tidak Ditemukan"})})},_=function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(e){var i;return Object(h.a)(this,s),(i=t.call(this,e)).fetchSearchnutritionResults=function(){var e=arguments.length>1?arguments[1]:void 0,t="https://nutritionix-api.p.rapidapi.com/v1_1/search/".concat(e),s={method:"GET",url:t,params:{fields:"item_name,item_id,brand_name,nf_calories,nf_total_fat"},headers:{"x-rapidapi-key":"e1216e638emsh115d8a998d4d376p117e35jsnf92a3abff6ee","x-rapidapi-host":"nutritionix-api.p.rapidapi.com",useQueryString:!0}};i.cancel&&i.cancel.cancel(),i.cancel=O.a.CancelToken.source(),Object(p.trackPromise)(O.a.request(s,{cancelToken:i.cancel.token}).then((function(e){var t=e.data.hits.length?"":"Makanan Tidak Terdaftar.";i.setState({nutritionResults:e.data.hits,nutritionMessage:t,loading:!1})})).catch((function(e){(O.a.isCancel(e)||e)&&i.setState({loading:!1,nutritionMessage:"Internet Tidak Terdeteksi."})})))},i.handleOnInputChange=function(e){var t=e.target.value;t?i.setState({queryNut:t,loading:!0,nutritionMessage:""},(function(){i.fetchSearchnutritionResults(1,t)})):i.setState({queryNut:t,nutritionResults:{},nutritionMessage:""})},i.renderSearchnutritionResults=function(){var e=i.state.nutritionResults;if(Object.keys(e).length&&e.length)return Object(c.jsx)("div",{className:"hasil-search",children:Object(c.jsx)("div",{className:"row",children:e.map((function(t,s){return Object(c.jsx)(k,{id:e[s].fields._id,item:e[s].fields.item_name,brand:e[s].fields.brand_name,porsi:e[s].fields.nf_serving_size_qty,kalori:e[s].fields.nf_calories,lemak:e[s].fields.nf_total_fat})}))})})},i.getThumbnail=function(){var e={method:"GET",url:"https://google-search3.p.rapidapi.com/api/v1/images/q=diet%20food",headers:{"x-rapidapi-key":"e1216e638emsh115d8a998d4d376p117e35jsnf92a3abff6ee","x-rapidapi-host":"google-search3.p.rapidapi.com",useQueryString:!0}};O.a.request(e).then((function(e){i.setState({thumbnailResults:e.data.image_results})})).catch((function(e){console.log(e)}))},i.state={queryNut:"",nutritionResults:{},articleResults:{},thumbnailResults:{},loadingArticle:!0,nutritionMessage:"",articleMessage:""},i}return Object(j.a)(s,[{key:"getGoogleNews",value:function(){var e=Object(o.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://google-search3.p.rapidapi.com/api/v1/news/q=diet+sehat&hl=id",{method:"GET",headers:{"x-rapidapi-key":"e1216e638emsh115d8a998d4d376p117e35jsnf92a3abff6ee","x-rapidapi-host":"google-search3.p.rapidapi.com",useQueryString:!0},redirect:"follow",referrerPolicy:"no-referrer"});case 2:return t=e.sent,e.t0=this,e.next=6,t.json();case 6:e.t1=e.sent,e.t2={articleResults:e.t1,loadingArticle:!1},e.t0.setState.call(e.t0,e.t2);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderGoogleNews",value:function(){var e=this.state,t=e.articleResults,s=e.thumbnailResults,i=t.entries;if(Object.keys(t).length&&t.entries.length&&Object.keys(s).length&&s.length)return Object(c.jsx)("div",{children:i.slice(0,19).map((function(e,t){return Object(c.jsx)(f,{id:t,title:e.title,link:e.link,source:e.source.title,thumbnail:s[t].image.src})}))})}},{key:"componentDidMount",value:function(){this.getGoogleNews(),this.getThumbnail()}},{key:"render",value:function(){var e=this,t=this.state,s=t.queryNut,i=t.nutritionMessage,a=(t.articleResults,t.loadingArticle);return Object(c.jsxs)("div",{children:[Object(c.jsx)(w,{}),Object(c.jsxs)(m.c,{children:[Object(c.jsx)(m.a,{exact:!0,path:"/dietpedia",render:function(){return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-12 bagian-atas",children:Object(c.jsx)("h2",{children:"Cari Makanan"})}),Object(c.jsx)("div",{className:"col-12",children:Object(c.jsxs)("div",{class:"form-group has-search",children:[Object(c.jsx)("span",{class:"material-icons size-22 form-control-feedback",children:"search"}),Object(c.jsx)("input",{className:"form-control me-2 search-custom",type:"text",name:"queryNut",value:s,placeholder:"Search...",onChange:e.handleOnInputChange})]})}),Object(c.jsxs)("div",{className:"col-12",children:[Object(c.jsx)("br",{}),i&&Object(c.jsx)("h5",{children:i})]})]}),Object(c.jsx)(R,{}),e.renderSearchnutritionResults()]})}}),Object(c.jsx)(m.a,{path:"/article",render:function(){return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"hasil-search",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{class:"col-12 bagian-atas",children:Object(c.jsx)("h2",{children:"Artikel"})}),e.renderGoogleNews(),Object(c.jsx)(v.a,{className:a?"show-loader":"hide-loader",type:"ThreeDots",color:"#94B447",height:"100",width:"100"})]})})})})}}),Object(c.jsx)(m.a,{component:y})]})]})}}]),s}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=t.default=function(e){return Object(p.usePromiseTracker)().promiseInProgress&&Object(c.jsx)("div",{style:{width:"100%",height:"100",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(c.jsx)(v.a,{type:"ThreeDots",color:"#cbe54d",height:"100",width:"100"})})},S=Object(c.jsx)(N.a,{children:Object(c.jsx)(_,{})});r.a.render(S,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[93,1,2]]]);
//# sourceMappingURL=main.91870638.chunk.js.map