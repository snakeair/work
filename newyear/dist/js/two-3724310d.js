import{_ as a,d as s,i as e,j as l,r as t,c as n,a as o,l as c,v as i,b as u,w as r,m as v,e as d,t as p,C as m,x as b,o as f,p as k,f as w}from"../default/default-5704fa67.js";const _=a=>(k("data-v-28b8c786"),a=a(),w(),a),y={class:"common-pages que-one"},g=_((()=>o("h3",{class:"page-title"},"第二题",-1))),z=["innerHTML"],h=_((()=>o("div",{class:"img-box"},[o("img",{src:"",class:"img",alt:""})],-1))),x={class:"reply-box"},j={class:"cloud"},q={class:"layer layer-ok"},C=_((()=>o("div",{class:"iconfont icon-close2"},null,-1))),L=_((()=>o("p",{class:"info"},"回答错误",-1))),H={class:"layer layer-up"},I=_((()=>o("div",{class:"iconfont icon-dui3"},null,-1))),M=_((()=>o("p",{class:"info"},"恭喜！回答正确",-1))),T={class:"info"},D={class:"size"};var F=a(s({__name:"two",setup(a){const{isLoginFn:s}=e();s();let k=l(""),w=l(""),_=0,F=l("");(async()=>{let a=await m("/api.php/puzzle/subject",{});w.value=a.data.title,setInterval((function(){_++}),1e3)})();let U=l(0);const V=async()=>{let a={puzzle_id:2,answer:F.value,use_seconds:_},s=await b("/api.php/puzzle/answer-subject",a);0==s.code?(k.value="ok",U.value=s.data.rank):k.value="error"},A=()=>{k.value=""};return(a,s)=>{const e=t("router-link");return f(),n("div",y,[g,o("p",{class:"page-take",innerHTML:w.value},null,8,z),h,o("div",x,[c(o("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=a=>F.value=a),class:"input",placeholder:"请输入你的答案"},null,512),[[i,F.value]]),o("div",{class:"up-btn common-btn",btn:"",onClick:V},"立即提交")]),u(e,{class:"to-rank",to:"/question/rank"},{default:r((()=>[d("查看答题排行榜")])),_:1}),c(o("div",j,null,512),[[v,""!==k.value]]),c(o("div",q,[C,L,o("div",{class:"close-btn common-btn",onClick:A,btn:""},"重新答题")],512),[[v,"error"==k.value]]),c(o("div",H,[I,M,o("p",T,[d("你是第"),o("em",D,p(U.value),1),d("个回答正确的人")]),u(e,{to:"/question/three",class:"close-btn common-btn",btn:""},{default:r((()=>[d("下一题")])),_:1})],512),[[v,"ok"==k.value]])])}}}),[["__scopeId","data-v-28b8c786"],["__file","D:/work/html/work/work/src/views/question/two.vue"]]);export{F as default};