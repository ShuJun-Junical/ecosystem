import{_ as i,r as n,o as p,c as r,a,b as e,d as s,e as l}from"./app-lBjCfO3h.js";const c={},d=e("h1",{id:"baidu-analytics",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#baidu-analytics"},[e("span",null,"baidu-analytics")])],-1),u={href:"https://tongji.baidu.com/",target:"_blank",rel:"noopener noreferrer"},h={class:"custom-container tip"},y=e("p",{class:"custom-container-title"},"TIP",-1),m={href:"https://tongji.baidu.com/web/help/article?id=324&type=0",target:"_blank",rel:"noopener noreferrer"},g=l(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> i</span><span style="color:#569CD6;"> -D</span><span style="color:#CE9178;"> @vuepress/plugin-baidu-analytics@next</span></span>
<span class="line"></span></code></pre></div><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">baiduAnalyticsPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-baidu-analytics&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#DCDCAA;">    baiduAnalyticsPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">      // options</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="reporting-events" tabindex="-1"><a class="header-anchor" href="#reporting-events"><span>Reporting Events</span></a></h3><p>The plugin will automatically report page view events when visiting and switching pages.</p>`,5),D=e("code",null,"hmt",-1),b=e("code",null,"window",-1),_={href:"https://tongji.baidu.com/holmes/Analytics/%E6%8A%80%E6%9C%AF%E6%8E%A5%E5%85%A5%E6%8C%87%E5%8D%97/JS%20API/JS%20API%20%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C",target:"_blank",rel:"noopener noreferrer"},v=l('<h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2><h3 id="id" tabindex="-1"><a class="header-anchor" href="#id"><span>id</span></a></h3><ul><li><p>Type: <code>string</code></p></li><li><p>Details: The ID of Baidu Analytics, which is the query of <code>hm.js</code> URL.</p></li></ul>',3);function f(E,C){const o=n("NpmBadge"),t=n("ExternalLinkIcon");return p(),r("div",null,[d,a(o,{package:"@vuepress/plugin-baidu-analytics"}),e("p",null,[s("Integrate "),e("a",u,[s("Baidu Analytics"),a(t)]),s(" into VuePress.")]),e("div",h,[y,e("p",null,[s("Do not enable "),e("a",m,[s("SPA mode in Baidu Analytics"),a(t)]),s(". The plugin will report page view events correctly.")])]),g,e("p",null,[s("Besides, a global "),D,s(" array is available on the "),b,s(" object, and you can use it for "),e("a",_,[s("custom events reporting"),a(t)]),s(".")]),v])}const x=i(c,[["render",f],["__file","baidu-analytics.html.vue"]]),A=JSON.parse('{"path":"/plugins/baidu-analytics.html","title":"baidu-analytics","lang":"en-US","frontmatter":{"description":"baidu-analytics","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/ecosystem/zh/plugins/baidu-analytics.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/plugins/baidu-analytics.html"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"baidu-analytics"}],["meta",{"property":"og:description","content":"baidu-analytics"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T07:11:23.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T07:11:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"baidu-analytics\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-25T07:11:23.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Reporting Events","slug":"reporting-events","link":"#reporting-events","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[{"level":3,"title":"id","slug":"id","link":"#id","children":[]}]}],"git":{"updatedTime":1711350683000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2},{"name":"Zihan Hu","email":"hu-zihan@foxmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"plugins/baidu-analytics.md"}');export{x as comp,A as data};
