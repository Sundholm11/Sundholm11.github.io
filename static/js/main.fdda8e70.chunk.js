(this["webpackJsonpfrontend-portfolio"]=this["webpackJsonpfrontend-portfolio"]||[]).push([[0],[,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/chatapp.8d5cac2e.jpg"},function(e,t,a){e.exports=a.p+"static/media/fullstackopen2019img.baac8230.jpg"},function(e,t,a){e.exports=a.p+"static/media/ilmoplaseimg.a8e8d7ef.jpg"},function(e,t,a){e.exports=a.p+"static/media/portfolio.b6bec064.jpg"},function(e,t,a){e.exports=a.p+"static/media/pp.4d3217c9.jpg"},function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(5),s=a.n(r),l=(a(16),a(4),function(){return o.a.createElement("div",{id:"home",className:"homeContainer"},o.a.createElement("h1",{className:"home"},"Daniel's Portfolio page"))}),i=(a(17),function(){return o.a.createElement("ul",{className:"navBar"},o.a.createElement("li",{className:"navBar"},o.a.createElement("a",{className:"navBar",href:"#home"},"Home")),o.a.createElement("li",{className:"navBar"},o.a.createElement("a",{className:"navBar",href:"#aboutme"},"About me")),o.a.createElement("li",{className:"navBar"},o.a.createElement("a",{className:"navBar",href:"#projects"},"Projects")),o.a.createElement("li",{className:"navBar"},o.a.createElement("a",{className:"navBar",href:"#experience"},"Experience")))}),c=a(2),m=a(1),u=(a(18),a(6)),h=a.n(u),d=a(7),p=a.n(d),f=a(8),g=a.n(f),b=a(9),v=a.n(b),y=function(){var e,t,a=Object(n.useState)([]),r=Object(m.a)(a,2),s=r[0],l=r[1],i=Object(n.useState)(),u=Object(m.a)(i,2),d=u[0],f=u[1];Object(n.useEffect)((function(){y()}),[]);var b=function(e){var t=Object(c.a)({},s[e.currentTarget.value],{active:!0}),a=s.map((function(e){return e.id===(null===d||void 0===d?void 0:d.id)?Object(c.a)({},e,{active:!1}):e})).map((function(e){return e.id===t.id?t:e}));f(t),l(a)},y=function(){var e=[{id:0,name:"Chat-app",bgImg:h.a,active:!0,description:["Fully functional chat-app. With the app, the user is able to send and receive messages from other connected users in real time, to exchange crucial information on the fly,\n\t\t\t\t\tor to share that one last juicy joke. Those who weren't online back then can recap the messages through the chat history later.","My first full fledged shot at a web project after the fullstackopen -course, and I was really happy throughout the whole development how I finally got the controls for myself. No longer tasks to follow, \n\t\t\t\t\twith super specific instructions, but that you could actually implement whatever and however you wanted right now. I started by building a rough React frontside for the project, following very quickly with \n\t\t\t\t\tredux infused state containment before moving on to the backend. For the back I wanted to go for Node.js with Express framework, that I've got to practice during the course as well, but also picking up \n\t\t\t\t\tSocket.io to handle the connections between users and the server. It took a little time to get to know Socket.io, but proved itself really worth it. As a finishing touch, I styled the frontend with some components \n\t\t\t\t\tfrom Semantic UI."],links:[{name:"Github",url:"https://github.com/Sundholm11/chat-app"},{name:"Heroku/Deploy",url:"https://incredible-chatapp.herokuapp.com/"}]},{id:1,name:"Fullstackopen 2019",bgImg:p.a,active:!1,description:["Fullstackopen 2019, organized by the University of Helsinki, was one of the heaviest courses that I've taken part of. At the start of the course, I had only a very basic understanding of how JS, CSS \n\t\t\t\t\tand HTML even work. After 125 hours of sometimes pleasant ride, but the other half being the bumpy sweat and tears ride, I can say it was totally worth it. My understanding of web development is on a \n\t\t\t\t\tcompletely new higher level, whilst my skills with the use of JS have risen incredibly. I've got to known the beauties of React and Redux, with competent use of Node.js with Express for the backend \n\t\t\t\t\tside development as well.","During the fullstackopen, I was tasked to make several smaller pages filling few requirements to show off that I've learned those things. At times I wasn't super filled with eagerness to carry out \n\t\t\t\t\tthe same things over and over again. But however inspired by this course, and shortly after it, I managed to start working on my first full project, the chat-app."],links:[{name:"Github",url:"https://github.com/Sundholm11/fullstackopen2019"}]},{id:2,name:"Ilmot-plaseeraus",bgImg:g.a,active:!1,description:["Perhaps one of the most interesting uni assignments this far that I've taken part of. We were tasked to make a project that was to be presented for all the other groups -super simple task, but to make \n\t\t\t\t\tit a slightly bit more interesting, together with my partner we thought about picking a project that would later benefit our students' association. As a first year students, we didn't have that much \n\t\t\t\t\tactual experience with coding yet, not to mention that Python wasn't our most used language by then. But after some small debates few some older students about a preferable -and doable- task, we decided \n\t\t\t\t\tto go for it.","Ilmot-plaseeraus is an automated seating generator for mainly sitz events - but cannot see a reason why one couldn't use it for other events as well with a little fine tuning. The placing algorithm, \n\t\t\t\t\tmostly created by my partner, will receive a list of persons, and return them in a sorted order for tables - taking things such as genders and friends to account. Not used for our students' association's \n\t\t\t\t\tversion, my responsibility was to create a GUI, which would allow us to present the functionality for the other groups of the course. For the GUI, I used already in Python included tkinter. I had done only \n\t\t\t\t\tsmall doodlings with GUIs on Java Swing before, thus making the task very curious to learn more about."],links:[{name:"Github",url:"https://github.com/asteriskiry/ilmot-plaseeraus"}]},{id:3,name:"Portfolio-page",bgImg:v.a,active:!1,description:["Created after I was done with the chat-app, I really felt like trying to make that own little room for myself and my projects. In my previous \n\t\t\t\t\tprojects I had also always used ready stylesheets to for the customization of looks. For my own homepages, I wanted to make it all from bottom\n\t\t\t\t\tto the top, out of scratch. I thought about familiarizing myself with TypeScript version of React for the portfolio page, but turns out the most\n\t\t\t\t\ttime consuming task would be thinking the visual layout of the page, and getting to know CSS."],links:[{name:"Github",url:"https://github.com/Sundholm11/portfolio"}]}];f(e[0]),l(s.concat(e))};return o.a.createElement("div",{id:"projects",className:"mainContainer",style:{backgroundColor:"#f8f8f8"}},o.a.createElement("div",{className:"projectsLeftContainer"},o.a.createElement("ul",{className:"projectsVertNav"},o.a.createElement("h2",{className:"projects"},"Projects"),o.a.createElement("p",{className:"descriptionProjects"},"All those fancy little things that I've spent countless of hours, day and night, to create"),o.a.createElement("hr",{className:"divider"}),s.map((function(e){return o.a.createElement("li",{key:e.id,className:"projectsVertNav",value:e.id,onClick:b},e.name,e.active?o.a.createElement("div",{className:"triangleRight"}):null)})))),o.a.createElement("div",{className:"projectsRightContainer"},o.a.createElement("div",{className:"focusedProject"},o.a.createElement("h2",{className:"focusedProject"},null===d||void 0===d?void 0:d.name),null===d||void 0===d?void 0:null===(e=d.description)||void 0===e?void 0:e.map((function(e){return o.a.createElement("div",{key:1e3*Math.random()},o.a.createElement("p",{className:"focusedDescription"},e),o.a.createElement("br",null))})),null===d||void 0===d?void 0:null===(t=d.links)||void 0===t?void 0:t.map((function(e){return o.a.createElement("a",{key:1e3*Math.random(),className:"focusedLink",href:"".concat(e.url)},e.name)}))),o.a.createElement("div",{className:"backgroundProject",style:{backgroundImage:"url(".concat(null===d||void 0===d?void 0:d.bgImg,")")}})))},E=(a(19),a(10)),w=a.n(E),k=function(){return o.a.createElement("div",{id:"aboutme",className:"mainContainer"},o.a.createElement("div",{className:"aboutLeftContainer"},o.a.createElement("img",{src:w.a,alt:"Profile of Daniel"}),o.a.createElement("div",null,o.a.createElement("ul",{className:"info"},o.a.createElement("li",{className:"info"},"Name: Daniel Sundholm"),o.a.createElement("hr",null),o.a.createElement("li",{className:"info"},"Age: 21 Years Old"),o.a.createElement("hr",null),o.a.createElement("li",{className:"info"},"Location: Turku")))),o.a.createElement("div",{className:"aboutRightContainer"},o.a.createElement("div",null,o.a.createElement("h2",{className:"about"},"About me"),o.a.createElement("p",{className:"aboutDescription"},"I'm a 21-years old lovely fella from Turku. Three years ago I graduated from the Forssa Upper Secondary school, after which I spent the next year doing my military service. Right now I'm studying Computer Science at the University of Turku for my second semester. During my free time, I enjoy hanging out with my good friends and doing all kinds of sports. But also just having that peaceful evening at home, watching Netflix or browsing the web, is pleasant."),o.a.createElement("p",{className:"aboutDescription"},"Nowadays, I'm more or less busy with courses from my studies. Some of them being very interesting, such as learning more tips and tricks for object oriented programming or threading and sockets. Some of them being not that much... eh, really wish I'd be done with my swedish course. But one thing I'm happy about, I've learned to program in a very diverse field of stuff. Say, I've done a couple of projects for courses coding GUIs, using Java and Python, but also during my free time I've had a change to practice web development using JS React."))))},N=(a(20),function(){var e=Object(n.useState)(!0),t=Object(m.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)([]),l=Object(m.a)(s,2),i=l[0],c=l[1],u=Object(n.useState)([]),h=Object(m.a)(u,2),d=h[0],p=h[1];Object(n.useEffect)((function(){b()}),[]);var f=[{name:"React",fill:"75%",bgColor:"lightskyblue"},{name:"Express",fill:"55%",bgColor:"dodgerblue"},{name:"Socket.IO",fill:"35%",bgColor:"gray"},{name:"Mongo DB",fill:"25%",bgColor:"seagreen"}],g=[{name:"JS",fill:"75%",bgColor:"#f1e05a"},{name:"Java",fill:"55%",bgColor:"darkgoldenrod"},{name:"Python",fill:"35%",bgColor:"steelblue"},{name:"HTML",fill:"35%",bgColor:"chocolate"},{name:"CSS",fill:"30%",bgColor:"darkslateblue"}],b=function(){c(f),p(g)};return o.a.createElement("div",{id:"experience",className:"mainContainer"},o.a.createElement("div",{className:"expContainer"},o.a.createElement("h2",{className:"exp"},"Education"),o.a.createElement("ul",{className:"expUl"},o.a.createElement("li",{className:"expLi"},o.a.createElement("p",{className:"exp"},"University of Turku"),o.a.createElement("p",{className:"exp"},"Bachelor of Science"),o.a.createElement("p",{className:"exp"},"2018 - present")),o.a.createElement("li",{className:"expLi"},o.a.createElement("p",{className:"exp"},"Forssa Upper Secondary"),o.a.createElement("p",{className:"exp"},"2015 - 2017")),o.a.createElement("li",{className:"expLi"},o.a.createElement("p",{className:"exp"},"Elementary School"),o.a.createElement("p",{className:"exp"},"2005 - 2015")))),o.a.createElement("div",{className:"expContainer"},o.a.createElement("h2",{className:"exp"},"Experience"),o.a.createElement("ul",{className:"expUl"},o.a.createElement("li",{className:"expLi"},o.a.createElement("p",{className:"exp"},"Lounea oy"),o.a.createElement("p",{className:"exp"},"IT Support"),o.a.createElement("p",{className:"exp"},"Summer 2019")),o.a.createElement("li",{className:"expLi"},o.a.createElement("p",{className:"exp"},"Autokeidas Forssa"),o.a.createElement("p",{className:"exp"},"Cashier / Veikkaus / Toto"),o.a.createElement("p",{className:"exp"},"Summer 2018")),o.a.createElement("li",{className:"expLi"},o.a.createElement("p",{className:"exp"},"SuperDrecksK\xebscht Luxembourg"),o.a.createElement("p",{className:"exp"},"Trainee"),o.a.createElement("p",{className:"exp"},"Spring 2017")))),o.a.createElement("div",{className:"expContainer"},o.a.createElement("h2",{className:"exp"},"Skills"),o.a.createElement("ul",{className:"skillView"},o.a.createElement("li",{className:"skillView",onClick:function(){return r(!0)}},"Webdev"),o.a.createElement("li",{className:"skillView",onClick:function(){return r(!1)}},"Languages")),a?o.a.createElement("ul",{className:"meter"},i.map((function(e){return o.a.createElement("div",{key:1e3*Math.random()},o.a.createElement("p",{className:"meter"},e.name),o.a.createElement("li",{className:"meter"},o.a.createElement("span",{style:{width:e.fill,backgroundColor:e.bgColor}})))}))):o.a.createElement("ul",{className:"meter"},d.map((function(e){return o.a.createElement("div",{key:1e3*Math.random()},o.a.createElement("p",{className:"meter"},e.name),o.a.createElement("li",{className:"meter"},o.a.createElement("span",{style:{width:e.fill,backgroundColor:e.bgColor}})))})))))}),I=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(i,null),o.a.createElement(l,null),o.a.createElement(k,null),o.a.createElement(y,null),o.a.createElement(N,null))};s.a.render(o.a.createElement(I,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.fdda8e70.chunk.js.map