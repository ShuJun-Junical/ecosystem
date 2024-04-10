import{_ as o,r as t,o as p,c as r,a,b as e,d as s,e as i}from"./app-lBjCfO3h.js";const c={},d=e("h1",{id:"prismjs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prismjs"},[e("span",null,"prismjs")])],-1),m={href:"https://prismjs.com/",target:"_blank",rel:"noopener noreferrer"},h=i(`<p>This plugin has been integrated into the default theme.</p><p>Notice that this plugin would only tokenize the code fence without adding styles. When using it with a custom theme, you may need to choose and import Prism.js style theme yourself.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> i</span><span style="color:#569CD6;"> -D</span><span style="color:#CE9178;"> @vuepress/plugin-prismjs@next</span></span>
<span class="line"></span></code></pre></div><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">prismjsPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-prismjs&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#DCDCAA;">    prismjsPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">      // options</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2><h3 id="preloadlanguages" tabindex="-1"><a class="header-anchor" href="#preloadlanguages"><span>preloadLanguages</span></a></h3>`,7),u=e("li",null,[e("p",null,[s("Type: "),e("code",null,"string[]")])],-1),g=e("li",null,[e("p",null,[s("Default: "),e("code",null,"['markdown', 'jsdoc', 'yaml']")])],-1),y=e("p",null,"Details:",-1),D=e("p",null,"Languages to preload.",-1),_=e("p",null,"By default, languages will be loaded on demand when parsing markdown files.",-1),f={href:"https://github.com/PrismJS/prism/issues/2716",target:"_blank",rel:"noopener noreferrer"};function j(k,v){const l=t("NpmBadge"),n=t("ExternalLinkIcon");return p(),r("div",null,[d,a(l,{package:"@vuepress/plugin-prismjs"}),e("p",null,[s("This plugin will enable syntax highlighting for markdown code fence with "),e("a",m,[s("Prism.js"),a(n)]),s(".")]),h,e("ul",null,[u,g,e("li",null,[y,D,_,e("p",null,[s("However, Prism.js has "),e("a",f,[s("some potential issues"),a(n)]),s(" about loading languages dynamically. To avoid them, you can preload languages via this option.")])])])])}const C=o(c,[["render",j],["__file","prismjs.html.vue"]]),b=JSON.parse('{"path":"/plugins/prismjs.html","title":"prismjs","lang":"en-US","frontmatter":{"description":"prismjs","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/ecosystem/zh/plugins/prismjs.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/plugins/prismjs.html"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"prismjs"}],["meta",{"property":"og:description","content":"prismjs"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-30T09:08:43.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-30T09:08:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"prismjs\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-30T09:08:43.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[{"level":3,"title":"preloadLanguages","slug":"preloadlanguages","link":"#preloadlanguages","children":[]}]}],"git":{"updatedTime":1706605723000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"autoDesc":true,"filePathRelative":"plugins/prismjs.md"}');export{C as comp,b as data};
