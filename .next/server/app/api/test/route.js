"use strict";(()=>{var e={};e.id=329,e.ids=[329],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},1296:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>m,patchFetch:()=>h,requestAsyncStorage:()=>c,routeModule:()=>p,serverHooks:()=>l,staticGenerationAsyncStorage:()=>d});var s={};r.r(s),r.d(s,{GET:()=>u});var n=r(9303),a=r(8716),o=r(670),i=r(2663);async function u(){try{return await i.Z.$connect(),Response.json({success:"✅ Connected to the database successfully!"})}catch(e){return Response.json({"❌ Failed to connect":e})}finally{await i.Z.$disconnect()}return Response.json({message:"success"})}let p=new n.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/test/route",pathname:"/api/test",filename:"route",bundlePath:"app/api/test/route"},resolvedPagePath:"/home/hamz/Projects/next/mini/app/api/test/route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:c,staticGenerationAsyncStorage:d,serverHooks:l}=p,m="/api/test/route";function h(){return(0,o.patchFetch)({serverHooks:l,staticGenerationAsyncStorage:d})}},2663:(e,t,r)=>{r.d(t,{Z:()=>n});let s=new(require("@prisma/client")).PrismaClient;global;let n=s},9303:(e,t,r)=>{e.exports=r(517)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948],()=>r(1296));module.exports=s})();