(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(e){e.exports={a:[{name:"Amanpreet Singh",organization:"Facebook AI Research",website:"https://apsdehal.in",img_url:"https://visualqa.org/static/img/aman.jpg"},{name:"Vivek Natarajan",organization:"",website:"",img_url:"https://visualqa.org/static/img/vivek.jpg"},{name:"Meet Shah",organization:"Facebook AI Research",website:"https://meetshah1995.github.io",img_url:"https://visualqa.org/static/img/meet.jpg"},{name:"Tina Jiang",organization:"Facebook AI Research",website:"",img_url:"https://avatars3.githubusercontent.com/u/7904758?s=460&v=4"},{name:"Xinlei Chen",organization:"Facebook AI Research",website:"https://xinlei.xyz",img_url:"https://visualqa.org/static/img/xinlei.jpg"},{name:"Dhruv Batra",organization:"Facebook AI Research, Georgia Tech",website:"https://www.cc.gatech.edu/~dbatra/",img_url:"https://visualqa.org/static/img/dhruv.jpg"},{name:"Devi Parikh",organization:"Facebook AI Research, Georgia Tech",website:"https://www.cc.gatech.edu/~parikh/",img_url:"https://visualqa.org/static/img/devi.jpg"},{name:"Marcus Rohrbach",organization:"Facebook AI Research",website:"rohrbach.vision",img_url:"https://visualqa.org/static/img/marcus.jpg"}]}},262:function(e,t,a){e.exports=a(446)},267:function(e,t,a){},443:function(e,t,a){},446:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(23),s=a.n(i),o=(a(267),a(29)),l=a(30),c=a(32),m=a(31),h=a(33),u=a(18),d=a(448),p=a(449),g=a(62),f=a.n(g),w=a(63),v=a.n(w),E=a(8),b=a.n(E),y=a(25),x=a.n(y),k=a(20),C=a.n(k),j=Object(u.createMuiTheme)({palette:{primary:{light:"#9ccc65",main:"#7cb342",dark:"#33691e",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}},typography:{useNextVariants:!0}}),O={root:{width:"100%",flexGrow:1},grow:{flexGrow:1},buttonLink:{color:j.palette.primary.contrastText,textDecoration:"none"}};var _=Object(u.withStyles)(O)(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(f.a,{position:"static",color:"primary"},r.a.createElement(v.a,null,r.a.createElement(b.a,{variant:"h6",color:"inherit",align:"left",className:t.grow},r.a.createElement(C.a,{className:t.buttonLink,href:"/"},"TextVQA")),r.a.createElement(C.a,{className:t.buttonLink,href:"/explore"},r.a.createElement(x.a,{color:"inherit"},"Explore")))))}),I=a(70),A=a(44),S=a.n(A),N=a(43),B=a.n(N),q=a(67),R=a.n(q),M=a(42),T=a.n(M),z=a(26),F=a(3),Q=a.n(F),V=a(45),H=a(53),L=a(64),W=a.n(L),D=a(65),J=a.n(D),P=a(51),G=a.n(P),X=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).colors=["#e6194B","#3cb44b","#ffe119","#4363d8","#42d4f4","#f032e6","#469990","#9A6324","#800000","#aaffc3","#000075","#000000","#911eb4"],a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"getColor",value:function(e){var t=e.charCodeAt(0)%this.colors.length;return this.colors[t]}},{key:"fitToContainer",value:function(e){e.style.width="100%",e.width=e.offsetWidth}},{key:"componentDidMount",value:function(){var e=this,t=this.refs.canvas;this.fitToContainer(t);var a=t.getContext("2d"),n=new Image;n.src=this.props.imageUrl,n.onload=function(){var t=e.drawImageScaled(n,a);if(a.globalAlpha=1,e.props.showBoxes){var r=t.centerShiftX,i=t.centerShiftY,s=t.newWidth,o=t.newHeight;for(var l in a.font="12px Lato",e.props.boxes){var c=e.props.boxes[l];c.coords[0]*=s,c.coords[1]*=o,c.coords[2]*=s,c.coords[3]*=o,c.coords[0]+=r,c.coords[1]+=i,a.fillStyle=e.getColor(c.word),a.strokeStyle=a.fillStyle,a.rotate(c.rotation*Math.pi/180),a.strokeRect.apply(a,Object(H.a)(c.coords)),a.fillText(c.word,c.coords[0],c.coords[1])}}}}},{key:"drawImageScaled",value:function(e,t){var a=t.canvas,n=a.width/e.width,r=n*e.height;a.style.height=r,a.height=r;var i=a.height/e.height,s=Math.min(n,i),o=(a.width-e.width*s)/2,l=(a.height-e.height*s)/2;return t.clearRect(0,0,a.width,a.height),t.drawImage(e,0,0,e.width,e.height,o,l,e.width*s,e.height*s),this.props.showBoxes&&(t.fillStyle="rgba(0, 0, 0, 0.2)",t.fillRect(o,l,e.width*s,e.height*s)),{centerShiftX:o,centerShiftY:l,newWidth:e.width*s,newHeight:e.height*s}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("canvas",{ref:"canvas"}))}}]),t}(n.Component),U=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).seed=Math.round(1e4*Math.random()),a.vars={nChunks:null,originalChunks:[],originalLen:0},a.getWidthForColumn=function(){var e={xs:"100",sm:"50",md:"33",lg:"20"},t="100";return Object.keys(e).forEach(function(n){Object(P.isWidthUp)(n,a.props.width)&&(t=e[n])}),t},a.chunkArray=function(e,t){if(a.vars.nChunks!==t){a.vars.nChunks=t,a.vars.originalChunks=[];for(var n=0;n<t;n++)a.vars.originalChunks.push([])}for(var r=Math.ceil((e.length-a.vars.originalLen)/t),i=0,s=a.vars.originalChunks,o=a.vars.originalLen;o<e.length;o+=r)s[i]=s[i].concat(e.slice(o,o+r)),i++;return a.vars.originalChunks=s,a.vars.originalLen=e.length,a.vars.nChunks=t,s},a.renderCardComponents=function(e){if(0===e.length)return"";var t=[].concat(Object(H.a)(e.results),Object(H.a)(e.streamResults)).map(function(e,t){return a.renderCardComponent(e,t)}),n=a.getWidthForColumn(),i=Math.floor(100/n),s=a.chunkArray(t,i).map(function(e,t){return r.a.createElement("div",{key:t,style:{width:n+"%",float:"left"}},e)});return r.a.createElement("div",null,s)},a.getMaxAnswer=function(e){var t={};if(!e)return"";var a=e[0],n=1;for(var r in e){var i=e[r];t[i]?t[i]+=1:t[i]=1,t[i]>n&&(n=t[i],a=i)}return a},a.renderCardComponent=function(e,t){var n=[];for(var i in e.ocr_info){var s=e.ocr_info[i],o={coords:[s.bounding_box.top_left_x,s.bounding_box.top_left_y,s.bounding_box.width,s.bounding_box.height],rotation:s.bounding_box.rotation,word:s.word};n.push(o)}var l=a.getMaxAnswer(e.answers);return r.a.createElement("div",{key:t,className:a.props.classes.gridItem},r.a.createElement(W.a,{key:t,className:a.props.classes.card},r.a.createElement(X,{showBoxes:a.props.showOCRBoxes,imageUrl:e.flickr_300k_url,boxes:n}),r.a.createElement(J.a,{className:a.props.classes.cardContent},a.props.showQuestions?r.a.createElement(b.a,{variant:"subtitle1"},e.question):"",a.props.showAnswers&&l.length>0?r.a.createElement(b.a,{variant:"caption"},l):"")))},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(Q.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(z.d,{componentId:"result",dataField:"question",title:"Results",from:0,size:this.props.size||25,pagination:this.props.pagination||!1,showResultStats:this.props.showResultStats,loader:this.props.loader,react:this.props.reactValues,renderAllData:this.renderCardComponents,style:this.props.style||{}}))}}]),t}(n.Component),Y=G()()(Object(u.withStyles)(function(e){return{gridItem:{padding:.5*e.spacing.unit,position:"relative",width:"100%",display:"inline-block"},cardContent:{paddingBottom:"4px !important"},card:{padding:2*e.spacing.unit,textAlign:"center"}}})(U)),$=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).seed=Math.round(1e4*Math.random()),a.state={showOCRBoxes:!0,showQuestions:!0,showAnswers:!0,anchorEl:null},a.reactValues={and:["searchbox","set_name","image_classes","ocr_tokens","answers"]},a.updateQuery=function(e){var t=e.body;t=t.split("\n");var n=JSON.parse(t[1]);return n.query={function_score:{query:n.query,random_score:{seed:a.seed}}},t[1]=JSON.stringify(n),t=(t=(t=t.join("\n")).replace('"field":"set_name"','"field":"set_name.keyword"')).replace('"field":"image_classes"','"field":"image_classes.keyword"'),e.body=t,e},a.handleCheckboxChange=function(e){return function(t){a.setState(Object(I.a)({},e,t.target.checked))}},a.handleMenuButtonClick=function(e){a.setState({anchorEl:e.currentTarget})},a.handleMenuClose=function(){a.setState({anchorEl:null})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(z.c,{app:V.a,url:V.b,transformRequest:this.updateQuery},r.a.createElement(Q.a,{container:!0,direction:"row",className:this.props.classes.root,justify:"center",alignItems:"center"},r.a.createElement(Q.a,{item:!0,xs:12,md:6,lg:4},r.a.createElement(z.a,{componentId:"searchbox",dataField:"question",categoryField:"question",placeholder:"Search for questions",style:{padding:"5px"}})),r.a.createElement(Q.a,{item:!0,xs:12,md:2,lg:1},r.a.createElement(z.b,{componentId:"set_name",dataField:"set_name",placeholder:"Choose set",showSearch:!1})),r.a.createElement(Q.a,{item:!0,xs:12,md:2,lg:2},r.a.createElement(z.b,{componentId:"image_classes",dataField:"image_classes",placeholder:"Choose classes",showSearch:!1})),r.a.createElement(Q.a,{item:!0,xs:12,md:2,lg:1},r.a.createElement(x.a,{variant:"contained",color:"primary",className:this.props.classes.optionsMenuButton,"aria-owns":this.state.anchorEl?"simple-menu":void 0,"aria-haspopup":"true",onClick:this.handleMenuButtonClick},"Options"),r.a.createElement(R.a,{anchorEl:this.state.anchorEl,open:Boolean(this.state.anchorEl),onClose:this.handleMenuClose},r.a.createElement(T.a,null,r.a.createElement(B.a,{control:r.a.createElement(S.a,{checked:this.state.showOCRBoxes,onChange:this.handleCheckboxChange("showOCRBoxes"),value:"showOCRBoxes"}),label:"Show OCR boxes"})),r.a.createElement(T.a,null,r.a.createElement(B.a,{control:r.a.createElement(S.a,{checked:this.state.showQuestions,onChange:this.handleCheckboxChange("showQuestions"),value:"showQuestions"}),label:"Show questions"})),r.a.createElement(T.a,null,r.a.createElement(B.a,{control:r.a.createElement(S.a,{checked:this.state.showAnswers,onChange:this.handleCheckboxChange("showAnswers"),value:"showAnswers"}),label:"Show answers"})))),r.a.createElement(Q.a,{item:!0,xs:12,md:6,lg:2},r.a.createElement(z.a,{componentId:"ocr_tokens",dataField:"ocr_tokens",categoryField:"ocr_tokens",placeholder:"Search for OCR tokens",style:{padding:"5px"}})),r.a.createElement(Q.a,{item:!0,xs:12,md:6,lg:2},r.a.createElement(z.a,{componentId:"answers",dataField:"answers",categoryField:"answers",placeholder:"Search for Answers",style:{padding:"5px"}})),r.a.createElement(Y,{showOCRBoxes:this.state.showOCRBoxes,showAnswers:this.state.showAnswers,showQuestions:this.state.showQuestions,reactValues:this.reactValues,showResultStats:!0,pagination:!1,size:25,style:{width:"90%",textAlign:"center"}})))}}]),t}(n.Component),K=Object(u.withStyles)(function(e){return{root:{flexGrow:1},optionsMenuButton:{width:"100%"}}})($),Z=a(155),ee=a(37),te=a.n(ee),ae=a(52),ne=a(156),re=a(68),ie=a.n(re),se=Object(u.withStyles)(function(e){return{avatar:{width:100,height:100,margin:"0 auto"},gridItem:{padding:2*e.spacing.unit}}})(function(e){var t=ne.a.map(function(t){var a=Math.random();return r.a.createElement(Q.a,{item:!0,key:a,xs:12,sm:6,md:3,lg:2},r.a.createElement(C.a,{href:t.website},r.a.createElement(ie.a,{className:e.classes.avatar,src:t.img_url})),r.a.createElement(ae.a,{variant:"subtitle1"},t.name),r.a.createElement(ae.a,{variant:"caption"},t.organization))});return r.a.createElement(Q.a,{container:!0,direction:"row",justify:"center",alignItems:"flex-start",spacing:16},t)}),oe=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={checked:!1},a.updateQuery=function(e){var t=e.body;t=t.split("\n");var n=JSON.parse(t[1]);return n.query={function_score:{query:n.query,random_score:{seed:a.seed}}},t[1]=JSON.stringify(n),t=(t=(t=t.join("\n")).replace('"field":"set_name"','"field":"set_name.keyword"')).replace('"field":"image_classes"','"field":"image_classes.keyword"'),e.body=t,e},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(Q.a,{container:!0,className:e.mainContainer,direction:"row",justify:"center",alignItems:"center",style:{position:"relative"}},r.a.createElement("div",{style:{height:"50vh",backgroundColor:"rgba(0, 0, 0, 0.4)",width:"100%",zIndex:-10,position:"absolute"}}),r.a.createElement(z.c,{app:V.a,url:V.b,transformRequest:this.updateQuery,style:{height:"50vh",overflow:"auto",position:"relative"}},r.a.createElement(Y,{showOCRBoxes:!0,showAnswers:!0,showResultStats:!1,showQuestions:!0,reactValues:{},pagination:!0,loader:"",size:15,style:{height:"50vh",zIndex:-20,size:10,position:"absolute",top:0,overflow:"hidden"}})),r.a.createElement(Q.a,{container:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},justify:"center",alignItems:"center"},r.a.createElement(Q.a,{item:!0,xs:10,sm:9,md:8,lg:6,style:{position:"relative"}},r.a.createElement(te.a,{className:e.paper,elevation:1},r.a.createElement(b.a,{variant:"h2"},"TextVQA"),r.a.createElement(b.a,{variant:"subtitle1"},"A dataset to benchmark visual reasoning based on text in images."),r.a.createElement(Q.a,{style:{marginTop:"10px"},container:!0,direction:"row",justify:"center",alignItems:"center",spacing:16},r.a.createElement(Q.a,{item:!0,xs:12,sm:6,md:3},r.a.createElement(C.a,{href:"explore"},r.a.createElement(x.a,{variant:"contained",color:"primary"},"Explore"))),r.a.createElement(Q.a,{item:!0,xs:12,sm:6,md:3},r.a.createElement(C.a,{href:"paper"},r.a.createElement(x.a,{variant:"contained",color:"primary"},"Paper"))),r.a.createElement(Q.a,{item:!0,xs:12,sm:6,md:3},r.a.createElement(C.a,{href:"challenge"},r.a.createElement(x.a,{variant:"contained",color:"primary"},"Challenge"))),r.a.createElement(Q.a,{item:!0,xs:12,sm:6,md:3},r.a.createElement(C.a,{href:"download"},r.a.createElement(x.a,{variant:"contained",color:"primary"},"Download")))))))),r.a.createElement(Q.a,{container:!0,className:this.props.classes.people},r.a.createElement(Q.a,{item:!0,xs:12,lg:6},r.a.createElement(Q.a,{container:!0,justify:"flex-start",spacing:16},r.a.createElement(Q.a,{item:!0,xs:12,className:e.gridItem},r.a.createElement(b.a,{className:e.sectionHeader,variant:"h4",gutterBottom:!0,align:"left"},"Overview")),r.a.createElement(Q.a,{item:!0,xs:12,className:e.gridItem},r.a.createElement(b.a,{className:e.sectionHeader,variant:"subtitle1",gutterBottom:!0,align:"left"},"TextVQA requires models to read and reason about questions based on text in images. Specifically, given an image, model will be provided a question which will require reading and reasoning on text present in it. Current state-of-the-art visual question answering (VQA) fail at doing this task.")))),r.a.createElement(Q.a,{item:!0,xs:12,lg:6},r.a.createElement(Q.a,{container:!0,justify:"flex-start",spacing:16},r.a.createElement(Q.a,{item:!0,xs:12,className:e.gridItem},r.a.createElement(b.a,{className:e.sectionHeader,variant:"h4",gutterBottom:!0,align:"left"},"Statistics"))),r.a.createElement(Q.a,{container:!0,justify:"flex-start",spacing:16},r.a.createElement(Q.a,{item:!0,xs:12,className:e.gridItem},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(b.a,{variant:"subtitle1",align:"left"},"28408 images from OpenImages")),r.a.createElement("li",null,r.a.createElement(b.a,{variant:"subtitle1",align:"left"},"45336 questions")),r.a.createElement("li",null,r.a.createElement(b.a,{variant:"subtitle1",align:"left"},"453360 ground truth answers"))))))),r.a.createElement("div",{className:this.props.classes.people},r.a.createElement(Q.a,{container:!0,justify:"flex-start",spacing:16},r.a.createElement(Q.a,{item:!0,xs:12,className:e.gridItem},r.a.createElement(b.a,{className:e.sectionHeader,variant:"h4",align:"left",gutterBottom:!0},"Citation")),r.a.createElement(Q.a,{item:!0,xs:12,className:e.gridItem},r.a.createElement(b.a,{variant:"subtitle1",align:"left",gutterBottom:!0},"Please cite using ",r.a.createElement(C.a,{href:"bibtex.txt"},"this BiBTeX")," if you use TextVQA in your work.")))),r.a.createElement("div",{className:this.props.classes.people},r.a.createElement(Q.a,{container:!0,justify:"flex-start",spacing:16},r.a.createElement(Q.a,{item:!0,xs:12,className:e.gridItem},r.a.createElement(b.a,{className:e.sectionHeader,variant:"h4",align:"left",gutterBottom:!0},"People"))),r.a.createElement("div",{className:e.container}),r.a.createElement(se,null)))}}]),t}(r.a.Component),le=Object(u.withStyles)(function(e){return{paper:Object(Z.a)({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit}),mainContainer:{backgroundImage:"radial-gradient( "+e.palette.primary.light+" 20% ,"+e.palette.primary.dark+" 100%)",opacity:.9,height:"50vh"},people:{width:"60%",margin:"0 auto",marginTop:"2em"},root:{},divider:{color:"#888",width:"100%"},gridItem:{padding:2*e.spacing.unit},sectionHeader:{marginTop:"0.35em"},container:{padding:2*e.spacing.unit}}})(oe),ce=(a(443),function(e){return r.a.createElement(Q.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(Q.a,{item:!0,xs:12},r.a.createElement(b.a,{variant:"subtitle1"},"Challenge is coming out soon.")))}),me=function(e){return r.a.createElement(Q.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(Q.a,{item:!0,xs:12},r.a.createElement(b.a,{variant:"subtitle1"},"Download is coming out soon.")))},he=function(e){return r.a.createElement(Q.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(Q.a,{item:!0,xs:12},r.a.createElement(b.a,{variant:"subtitle1"},"Paper is coming out soon.")))},ue=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(u.MuiThemeProvider,{theme:j},r.a.createElement(d.a,{basename:"/TextVQA/"},r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(_,null)),r.a.createElement("div",null,r.a.createElement(p.a,{path:"/",exact:!0,component:le}),r.a.createElement(p.a,{path:"/explore",component:K}),r.a.createElement(p.a,{path:"/challenge",component:ce}),r.a.createElement(p.a,{path:"/download",component:me}),r.a.createElement(p.a,{path:"/paper",component:he})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},45:function(e){e.exports={b:"https://wv0rowsql4.execute-api.us-east-1.amazonaws.com/dev",a:"textvqa"}}},[[262,2,1]]]);
//# sourceMappingURL=main.6fc83c03.chunk.js.map