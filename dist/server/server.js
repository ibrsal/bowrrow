!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=5)}([function(e,n){e.exports=require("express")},function(e,n){e.exports=require("sqlstring")},function(e,n){e.exports=require("path")},function(e,n){e.exports=require("body-parser")},function(e,n){e.exports=require("mysql2")},function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),s=t(2),u=t.n(s),i=t(3),a=t.n(i),c=t(1),d=t.n(c),f=t(4),l=t.n(f),p=process.env.DATABASE_URL||"mysql://hyf:password@127.0.0.1:3306/hyf_thread",v=l.a.createConnection(p);var g=r.a.Router();g.get("/",function(e,n){var t=d.a.format("SELECT * FROM customers WHERE is_active=?",[!0]);console.log(t),v.execute(t,function(e,t){e?n.status(500).send(e):n.send(t)})}),g.post("/",function(e,n){var t=e.body,o=d.a.format("INSERT INTO customers SET ?",t);console.log(o),v.execute(o,function(e,t){e?n.status(500).send(e):(console.log(t),n.send("success"))})}),g.get("/:id",function(e,n){var t=e.params.id,o=d.a.format("SELECT * FROM customers WHERE id = ? AND is_active = ?",[t,!0]);console.log(o),v.execute(o,function(e,t){e?n.status(500).send(e):0!==t.length?n.send(t[0]):n.status(404).send("Not Found")})}),g.put("/:id",function(e,n){var t=e.params.id,o=e.body,r=d.a.format("UPDATE customers SET ? WHERE id = ?",[o,t]);console.log(r),v.execute(r,function(e,t){e?n.status(500).send(e):t.affectedRows?n.send("success"):n.status(404).send("Not Found")})}),g.delete("/:id",function(e,n){var t=e.params.id,o=d.a.format("UPDATE customers SET ? WHERE id = ?",[{is_active:!1},t]);console.log(o),v.execute(o,function(e,t){e?n.status(500).send(e):t.affectedRows?n.send("success"):n.status(404).send("Not Found")})});var E=g,m=r.a.Router();m.get("/",function(e,n){n.send({hello:"world"})}),m.use("/customers",E),m.use(function(e,n,t){var o=new Error("Not found.");o.status=404,t(o)});var y=m,x=r()();x.use(a.a.urlencoded({extended:!1})),x.use(a.a.json()),x.use("/api",y),x.use(r.a.static(u.a.resolve(__dirname,"..","client"))),x.get("*",function(e,n){n.sendFile(u.a.resolve(__dirname,"..","client","index.html"))});var b=process.env.PORT||8080;x.listen(b,function(){console.log("Server is running on ".concat(b))})}]);