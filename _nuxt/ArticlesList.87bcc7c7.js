import v from"./ArticlesListItem.04dc370c.js";import k from"./ProseA.5e184f32.js";import w from"./ProseCodeInline.31644805.js";import{u as g}from"./asyncData.2ad20f15.js";import{d as A,Y as I,I as S,M as n,b as a,c as r,e as o,g as i,F as C,Z as L,D as t,w as d,p as B,i as N,q as V,$ as b,X as q,k as D}from"./entry.88fca341.js";import"./date.824a539b.js";const F=e=>(B("data-v-ecce1004"),e=e(),N(),e),P={key:0,class:"articles-list"},T={class:"featured"},Y={class:"layout"},E={key:1,class:"tour"},M=F(()=>o("p",null,"Seems like there are no articles yet.",-1)),X=A({__name:"ArticlesList",props:{path:{type:String,default:"articles"}},async setup(e){let s,_;const u=e,{data:m}=([s,_]=I(async()=>g("articles",async()=>await V(b(u.path)).sort({date:-1}).find())),s=await s,_(),s),c=S(()=>m.value||[]);return(Z,$)=>{var p;const l=v,f=k,h=w;return(p=n(c))!=null&&p.length?(a(),r("div",P,[o("div",T,[i(l,{article:n(c)[0],featured:!0},null,8,["article"])]),o("div",Y,[(a(!0),r(C,null,L(n(c).slice(1),(y,x)=>(a(),q(l,{key:x,article:y},null,8,["article"]))),128))])])):(a(),r("div",E,[M,o("p",null,[t(" You can start by "),i(f,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:d(()=>[t("creating")]),_:1}),t(" one in the "),i(h,null,{default:d(()=>[t("articles")]),_:1}),t(" folder. ")])]))}}});const O=D(X,[["__scopeId","data-v-ecce1004"]]);export{O as default};
