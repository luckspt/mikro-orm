"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7226],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15051:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={title:"Entity Generator"},s=void 0,c={unversionedId:"entity-generator",id:"entity-generator",title:"Entity Generator",description:"To generate entities from existing database schema, you can use EntityGenerator helper.",source:"@site/docs/entity-generator.md",sourceDirName:".",slug:"/entity-generator",permalink:"/docs/next/entity-generator",draft:!1,editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/entity-generator.md",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1656100872,formattedLastUpdatedAt:"6/24/2022",frontMatter:{title:"Entity Generator"},sidebar:"docs",previous:{title:"Schema Generator",permalink:"/docs/next/schema-generator"},next:{title:"Naming Strategy",permalink:"/docs/next/naming-strategy"}},p={},u=[{value:"Advanced",id:"advanced",level:2},{value:"Current limitations",id:"current-limitations",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To generate entities from existing database schema, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityGenerator")," helper. "),(0,a.kt)("p",null,"You can use it via CLI: "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"To work with the CLI, first install ",(0,a.kt)("inlineCode",{parentName:"p"},"@mikro-orm/cli")," package locally.\nThe version needs to be aligned with the ",(0,a.kt)("inlineCode",{parentName:"p"},"@mikro-orm/core")," package.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx mikro-orm generate-entities --dump  # Dumps all generated entities\nnpx mikro-orm generate-entities --save --path=./my-entities  # Saves entities into given directory\n")),(0,a.kt)("p",null,"Or you can create simple script where you initialize MikroORM like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./generate-entities.ts"',title:'"./generate-entities.ts"'},"import { MikroORM } from '@mikro-orm/core';\n\n(async () => {\n  const orm = await MikroORM.init({\n    discovery: {\n      // we need to disable validation for no entities \n      warnWhenNoEntities: false,\n    },\n    dbName: 'your-db-name',\n    // ...\n  });\n  const generator = orm.getEntityGenerator();\n  const dump = await generator.generate({ \n    save: true,\n    baseDir: process.cwd() + '/my-entities',\n  });\n  console.log(dump);\n  await orm.close(true);\n})();\n")),(0,a.kt)("p",null,"Then run this script via ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-node")," (or compile it to plain JS and use ",(0,a.kt)("inlineCode",{parentName:"p"},"node"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ ts-node generate-entities\n")),(0,a.kt)("h2",{id:"advanced"},"Advanced"),(0,a.kt)("p",null,"By default, the ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityGenerator")," generates only owning sides of relations (e.g. M:1). We can configure it via ",(0,a.kt)("inlineCode",{parentName:"p"},"entityGenerator: { bidirectionalRelations: true }")," to generate also the inverse sides for them. To generate M:1 and 1:1 relations as wrapped references, use ",(0,a.kt)("inlineCode",{parentName:"p"},"entityGenerator: { identifiedReferences: true }"),"."),(0,a.kt)("h2",{id:"current-limitations"},"Current limitations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"in mysql, tinyint columns will be defined as boolean properties")))}d.isMDXComponent=!0}}]);