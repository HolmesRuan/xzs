(self.webpackChunkxzs_docs=self.webpackChunkxzs_docs||[]).push([[803],{9252:(e,l,s)=>{"use strict";s.r(l),s.d(l,{data:()=>i});const i={key:"v-745beb88",path:"/guide/develop.html",title:"项目开发",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"开发说明",slug:"开发说明",children:[]},{level:3,title:"后端开发",slug:"后端开发",children:[]},{level:3,title:"前端开发",slug:"前端开发",children:[]},{level:3,title:"微信小程序开发",slug:"微信小程序开发",children:[]}],filePathRelative:"guide/develop.md",git:{updatedTime:1624545746e3,contributors:[{name:"mindskip",email:"mindskip@qq.com",commits:3}]}}},8889:(e,l,s)=>{"use strict";s.r(l),s.d(l,{default:()=>b});var i=s(6252);const n=(0,i.uE)('<h1 id="项目开发"><a class="header-anchor" href="#项目开发">#</a> 项目开发</h1><h3 id="开发说明"><a class="header-anchor" href="#开发说明">#</a> 开发说明</h3><ul><li>redis 安装</li><li>进群获取到数据库脚本，创建表初始化数据，数据库名称为xzs</li><li>代码分为 postgresql 版本，配合相应的数据库使用</li><li>安装postgresql ，导入xzx-postgresql.sql脚本</li><li>学生端默认账号：student / 123456</li><li>管理端默认账号：admin / 123456</li></ul><h3 id="后端开发"><a class="header-anchor" href="#后端开发">#</a> 后端开发</h3>',4),a=(0,i.Wm)("li",null,"/uexam/source/xzs为后台代码，建议使用IntelliJ IDEA打开",-1),r=(0,i.Wm)("li",null,"打开application-dev.yml文件中，配置好postgesql、redis的服务地址",-1),t=(0,i.Wm)("li",null,"去七牛云官网申请好对象存储账号，修改application.yml中的qn相关的配置，七牛云主要用于文件存储。",-1),d=(0,i.Wm)("li",null,"启动后台程序,默认端口为8000。",-1),u=(0,i.Uk)("学生系统地址："),p={href:"http://ip:8000/student",target:"_blank",rel:"noopener noreferrer"},m=(0,i.Uk)("http://ip:8000/student"),c=(0,i.Uk)("管理端地址："),o={href:"http://ip:8000/admin",target:"_blank",rel:"noopener noreferrer"},h=(0,i.Uk)("http://ip:8000/admin"),g=(0,i.uE)('<h3 id="前端开发"><a class="header-anchor" href="#前端开发">#</a> 前端开发</h3><ul><li>前端使用webstorm或者vscode，分别打开文件夹打开源代码\\source\\vue\\xzs-student和source\\vue\\xzs-admin</li><li>执行下面2个命令，安装node_module：</li></ul><div class="language-npm ext-npm line-numbers-mode"><pre class="language-npm"><code>npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/\nnpm install --registry https://registry.npm.taobao.org  \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>执行下面命令，启动前端代码</li></ul><div class="language-npm ext-npm line-numbers-mode"><pre class="language-npm"><code>npm run serve\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>打包命名</li></ul><div class="language-npm ext-npm line-numbers-mode"><pre class="language-npm"><code>npm run build\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="微信小程序开发"><a class="header-anchor" href="#微信小程序开发">#</a> 微信小程序开发</h3><ul><li>去腾讯小程序官网注册账号，拿到appid和secret信息</li><li>下载好微信小程序开发工具</li><li>打开工具，导入代码 \\source\\wx\\xzs-student</li><li>修改application.yml文件里的wx配置下面的appid和secret</li><li>启动小程序开发工具</li></ul>',9),b={render:function(e,l){const s=(0,i.up)("OutboundLink");return(0,i.wg)(),(0,i.j4)(i.HY,null,[n,(0,i.Wm)("ul",null,[a,r,t,d,(0,i.Wm)("li",null,[u,(0,i.Wm)("a",p,[m,(0,i.Wm)(s)])]),(0,i.Wm)("li",null,[c,(0,i.Wm)("a",o,[h,(0,i.Wm)(s)])])]),g],64)}}}}]);