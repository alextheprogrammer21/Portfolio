(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a(27)},,,,,function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(6),l=a.n(o),i=(a(19),a(7)),c=a(5),s=a(8);a(11),a(12);function m(e){return n.a.createElement(c.a,{variant:"dark"},n.a.createElement(s.a,null,n.a.createElement(c.a.Brand,{href:"#home"},"Abhi Setia - Full-Stack Developer "),n.a.createElement(c.a.Collapse,{className:"justify-content-end"},n.a.createElement(c.a.Text,{className:"links",onClick:function(){e.onClick("portfolio")}},"Portfolio \xa0 \xa0"),n.a.createElement(c.a.Text,{className:"links",onClick:function(){e.onClick("about")}},"About \xa0 \xa0"),n.a.createElement(c.a.Text,{className:"links",onClick:function(){e.onClick("contact")}},"Contact"))))}function u(){return n.a.createElement(c.a,{variant:"dark"},n.a.createElement(s.a,null,n.a.createElement(c.a.Brand,{className:"footer",href:"mailto:abhisetia0@gmail.com"},"\xa9 2020. Made by Abhi Setia "),n.a.createElement(c.a.Collapse,{className:"justify-content-end"})))}a(23);function h(e){return n.a.createElement("div",{className:"Container"},n.a.createElement("img",{src:e.img}),n.a.createElement("div",{className:"Project"},n.a.createElement("header",null,n.a.createElement("h1",null,e.name)),n.a.createElement("p",null," ",e.description," "),n.a.createElement("h6",null,n.a.createElement("a",{href:e.url,target:"_blank"},"Visit Site")),n.a.createElement("h6",null,n.a.createElement("a",{href:e.sourceCode,target:"_blank"},"Source Code"))))}a(24);function p(){return n.a.createElement("div",{className:"about"},n.a.createElement("img",{src:"https://avatars3.githubusercontent.com/u/56317276?s=400&u=c560973e56f66a6a2ba9c49aa6e3cd6f904181a7&v=4"}),n.a.createElement("h1",null,"Welcome! I'm Abhi Setia"),n.a.createElement("br",null),n.a.createElement("h3",null,"My mission is to help startup and SMEs with web services which are robust, sustainable, and ready to scale."),n.a.createElement("br",null),n.a.createElement("p",null,"Right now I'm sure you're wondering if you've found someone that's able to quickly integrate into your workspace and work well with the team."),n.a.createElement("br",null),n.a.createElement("p",null,"I've worked at startups and SMEs in my previous career for a little over two years and have been able to quickly integrate and contribute to corporate goals immediately. Furthermore, I've spent three months, 12 hours per day learning full-stack development at Lighthouse Labs bootcamp. During the bootcamp, I learned to become proficient in Javascript, Ruby, HTML, CSS, ReactJS, NodeJS, jQuery, Ajax, Sass, PostgreSQL, Mocha and Chai, Storybook, and linux. The only reason this was possible was because we spent the three months building real-world applications with mentorship support. We were expected to write clean code and work in teams, as well as individually in order to simulate a real world working environment."),n.a.createElement("br",null),n.a.createElement("p",null," I believe by going through this experience and learning to quickly integrate into different environments and produce results immediately, I am able to save hiring costs for companies seeking a developer. "),n.a.createElement("br",null),n.a.createElement("p",null,"You can find my github with my completed projects ",n.a.createElement("a",{href:"https://www.github.com/alextheprogrammer21",target:"_blank"},"here")))}a(25);function d(){return n.a.createElement("p",null,"For all inquiries: ",n.a.createElement("a",{href:"mailto:abhisetia0@gmail.com"},"abhisetia0@gmail.com"))}a(26);var g=[{id:3,name:"Interview Scheduler",url:"https://alextheprogrammer21.github.io/Interview-Scheduler/",sourceCode:"https://github.com/alextheprogrammer21/Interview-Scheduler",description:"A scheduler that allows users to set up, edit, or delete appointments.",img:"https://raw.githubusercontent.com/alextheprogrammer21/Interview-Scheduler/master/public/images/Screenshot0.png"},{id:1,name:"Devware",url:"https://alextheprogrammer21.github.io/Devware/",sourceCode:"https://github.com/alextheprogrammer21/Devware",description:"People make software to sell to you. People make freeware to give away to you. There is also a vast sea of open source projects hidden to the average user that developers make for various reasons. I call these devwares. Devware allows users to search for and download devware applications for free.",img:"https://raw.githubusercontent.com/alextheprogrammer21/Devware/master/src/images/1.PNG"},{id:2,name:"Re:Mind",url:"https://alextheprogrammer21.github.io/Re-Mind/",sourceCode:"https://github.com/alextheprogrammer21/Re-Mind",description:"A wellness app for habit tracking.",img:"https://raw.githubusercontent.com/alextheprogrammer21/Re-Mind/master/images/1.PNG"},{id:4,name:"Food-Pickup",url:"https://github.com/alextheprogrammer21/food-pickup",sourceCode:"https://github.com/alextheprogrammer21/food-pickup",description:"An application that allows users to order food items for a specific restaurant online and receive a text when their order is confirmed and ready.",img:"https://raw.githubusercontent.com/alextheprogrammer21/food-pickup/master/Screen%20Shot%202020-06-29%20at%204.37.55%20PM.png"}];var b=function(){var e=n.a.useState("portfolio"),t=Object(i.a)(e,2),a=(t[0],t[1]),r=n.a.useState(!0),o=Object(i.a)(r,2),l=o[0],c=o[1],s=n.a.useState(!1),b=Object(i.a)(s,2),f=b[0],w=b[1],E=n.a.useState(!1),v=Object(i.a)(E,2),k=v[0],y=v[1],S=g.map((function(e){return n.a.createElement(h,{name:e.name,url:e.url,sourceCode:e.sourceCode,img:e.img,description:e.description})}));return n.a.createElement("div",{className:"App"},n.a.createElement(m,{onClick:function(e){w(!1),y(!1),c(!1),"portfolio"===e?c(!0):"about"===e?w(!0):"contact"===e&&y(!0),a(e)}}),n.a.createElement("header",{className:"App-header"},n.a.createElement("p",{className:"cards"},l?S:n.a.createElement("div",null," "),f?n.a.createElement(p,null):n.a.createElement("div",null," "),k?n.a.createElement(d,null):n.a.createElement("div",null," "))),n.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.f3b86914.chunk.js.map