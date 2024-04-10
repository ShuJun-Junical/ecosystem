import{_ as p,r as o,o as c,c as r,a as n,b as s,d as e,e as a}from"./app-lBjCfO3h.js";const i={},d=s("h1",{id:"google-analytics",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#google-analytics"},[s("span",null,"google-analytics")])],-1),g={href:"https://analytics.google.com/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://developers.google.com/analytics/devguides/collection/gtagjs",target:"_blank",rel:"noopener noreferrer"},y={href:"https://support.google.com/analytics/answer/10089681",target:"_blank",rel:"noopener noreferrer"},h=a(`<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> i</span><span style="color:#569CD6;"> -D</span><span style="color:#CE9178;"> @vuepress/plugin-google-analytics@next</span></span>
<span class="line"></span></code></pre></div><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">googleAnalyticsPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-google-analytics&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#DCDCAA;">    googleAnalyticsPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">      // 配置项</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="上报事件" tabindex="-1"><a class="header-anchor" href="#上报事件"><span>上报事件</span></a></h3>`,4),D={href:"https://support.google.com/analytics/answer/9234069",target:"_blank",rel:"noopener noreferrer"},_=s("code",null,"page_view",-1),m=s("code",null,"first_visit",-1),C=s("p",null,[e("因此，如果你只是想收集站点的一些基础数据，你只需要正确设置 "),s("a",{href:"#id"},"Measurement ID"),e(" ，不需要再额外做其他事情。")],-1),f=s("code",null,"gtag()",-1),k=s("code",null,"window",-1),b={href:"https://developers.google.com/analytics/devguides/collection/ga4/events",target:"_blank",rel:"noopener noreferrer"},v=s("h2",{id:"选项",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#选项"},[s("span",null,"选项")])],-1),x=s("h3",{id:"id",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#id"},[s("span",null,"id")])],-1),E=s("li",null,[s("p",null,[e("类型： "),s("code",null,"string")])],-1),A=s("p",null,"详情：",-1),X=s("p",null,[e("Google Analytics 4 的 Measurement ID ，应以 "),s("code",null,"'G-'"),e(" 开头。")],-1),V={href:"https://support.google.com/analytics/answer/9539598",target:"_blank",rel:"noopener noreferrer"},j=s("li",null,[s("p",null,"示例：")],-1),F=a(`<div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#DCDCAA;">    googleAnalyticsPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">      id:</span><span style="color:#CE9178;"> &#39;G-XXXXXXXXXX&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="debug" tabindex="-1"><a class="header-anchor" href="#debug"><span>debug</span></a></h3>`,2),N=s("li",null,[s("p",null,[e("类型： "),s("code",null,"boolean")])],-1),P=s("p",null,"详情：",-1),w=s("code",null,"true",-1),G={href:"https://support.google.com/analytics/answer/7201382",target:"_blank",rel:"noopener noreferrer"},I=s("li",null,[s("p",null,"示例：")],-1),z=a(`<div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#DCDCAA;">    googleAnalyticsPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">      id:</span><span style="color:#CE9178;"> &#39;G-XXXXXXXXXX&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">      debug:</span><span style="color:#569CD6;"> true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div>`,1);function M(S,T){const t=o("NpmBadge"),l=o("ExternalLinkIcon");return c(),r("div",null,[d,n(t,{package:"@vuepress/plugin-google-analytics"}),s("p",null,[e("将 "),s("a",g,[e("Google Analytics"),n(l)]),e(" 集成到 VuePress 中。")]),s("p",null,[e("该插件会通过引入 "),s("a",u,[e("gtag.js"),n(l)]),e(" 来启用 "),s("a",y,[e("Google Analytics 4"),n(l)]),e(" 。")]),h,s("p",null,[e("Google Analytics 会 "),s("a",D,[e("自动收集部分事件"),n(l)]),e(" ，比如 "),_,e(", "),m,e(" 等。")]),C,s("p",null,[e("在引入该插件之后，一个全局的 "),f,e(" 函数会被挂载到 "),k,e(" 对象上，你可以使用它进行 "),s("a",b,[e("自定义事件的上报"),n(l)]),e(" 。")]),v,x,s("ul",null,[E,s("li",null,[A,X,s("p",null,[e("你可以通过 "),s("a",V,[e("这里"),n(l)]),e(' 的指引来找到你的 Measurement ID 。注意区分 Google Analytics 4 的 Measurement ID （即 "G-" 开头的 ID） 和 Universal Analytics 的 Tracking ID （即 "UA-" 开头的 ID）。')])]),j]),F,s("ul",null,[N,s("li",null,[P,s("p",null,[e("设置为 "),w,e(" 可以向 DebugView 发送事件。"),s("a",G,[e("了解更多关于 DebugView 的信息"),n(l)]),e(" 。")])]),I]),z])}const U=p(i,[["render",M],["__file","google-analytics.html.vue"]]),Z=JSON.parse('{"path":"/zh/plugins/google-analytics.html","title":"google-analytics","lang":"zh-CN","frontmatter":{"description":"google-analytics","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://ecosystem.vuejs.press/ecosystem/plugins/google-analytics.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/zh/plugins/google-analytics.html"}],["meta",{"property":"og:site_name","content":"VuePress 生态系统"}],["meta",{"property":"og:title","content":"google-analytics"}],["meta",{"property":"og:description","content":"google-analytics"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-02-06T12:45:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-06T12:45:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"google-analytics\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-06T12:45:47.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/zh/atom.xml","title":"VuePress 生态系统 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/zh/feed.json","title":"VuePress 生态系统 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/zh/rss.xml","title":"VuePress 生态系统 RSS Feed"}]]},"headers":[{"level":2,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[{"level":3,"title":"上报事件","slug":"上报事件","link":"#上报事件","children":[]}]},{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[{"level":3,"title":"id","slug":"id","link":"#id","children":[]},{"level":3,"title":"debug","slug":"debug","link":"#debug","children":[]}]}],"git":{"updatedTime":1707223547000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"autoDesc":true,"filePathRelative":"zh/plugins/google-analytics.md"}');export{U as comp,Z as data};
