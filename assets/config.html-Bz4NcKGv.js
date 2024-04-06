import{_ as a,r as l,o as t,c as o,b as e,d as s,a as p,e as r}from"./app-y4xzv_qM.js";const i={},c=e("h1",{id:"artalk-选项",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#artalk-选项"},[e("span",null,"Artalk 选项")])],-1),d=e("h2",{id:"配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#配置"},[e("span",null,"配置")])],-1),m={href:"https://artalk.js.org/guide/frontend/config.html",target:"_blank",rel:"noopener noreferrer"},u=r(`<ul><li><p><code>el</code> <code>pageTitle</code>, <code>pageKey</code> 和 <code>site</code> 选项为插件的保留选项，将从 VuePress 配置中自动推断，不可设置。</p></li><li><p><code>imgUploader</code> 和 <code>avatarURLBuilder</code> 这两个函数选项只能在客户端配置。</p></li></ul><h2 id="插件配置" tabindex="-1"><a class="header-anchor" href="#插件配置"><span>插件配置</span></a></h2><p>你可以直接在插件选项中配置可序列化的选项:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title=".vuepress/config.ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineUserConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">commentPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress-plugin-comment2&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineUserConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#DCDCAA;">    commentPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">      provider:</span><span style="color:#CE9178;"> &#39;Artalk&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#6A9955;">      // 其他选项</span></span>
<span class="line"><span style="color:#6A9955;">      // ...</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="客户端配置" tabindex="-1"><a class="header-anchor" href="#客户端配置"><span>客户端配置</span></a></h2><p>你可以使用 <code>defineArtalkConfig</code> 函数来配置 Artalk。</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title=".vuepress/client.ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/client&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineArtalkConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress-plugin-comment2/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">defineArtalkConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">  // Artalk 选项</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">  // ...</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function D(y,v){const n=l("ExternalLinkIcon");return t(),o("div",null,[c,d,e("p",null,[s("详见 "),e("a",m,[s("Artalk 配置"),p(n)]),s("。")]),u])}const C=a(i,[["render",D],["__file","config.html.vue"]]),g=JSON.parse('{"path":"/zh/plugins/comment/artalk/config.html","title":"Artalk 选项","lang":"zh-CN","frontmatter":{"description":"Artalk 选项 配置 详见 Artalk 配置。 el pageTitle, pageKey 和 site 选项为插件的保留选项，将从 VuePress 配置中自动推断，不可设置。 imgUploader 和 avatarURLBuilder 这两个函数选项只能在客户端配置。 插件配置 你可以直接在插件选项中配置可序列化的选项: 客户端配置 你可以...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://ecosystem.vuejs.press/plugins/comment/artalk/config.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/zh/plugins/comment/artalk/config.html"}],["meta",{"property":"og:site_name","content":"VuePress 生态系统"}],["meta",{"property":"og:title","content":"Artalk 选项"}],["meta",{"property":"og:description","content":"Artalk 选项 配置 详见 Artalk 配置。 el pageTitle, pageKey 和 site 选项为插件的保留选项，将从 VuePress 配置中自动推断，不可设置。 imgUploader 和 avatarURLBuilder 这两个函数选项只能在客户端配置。 插件配置 你可以直接在插件选项中配置可序列化的选项: 客户端配置 你可以..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-03-11T08:20:01.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-11T08:20:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Artalk 选项\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-11T08:20:01.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/zh/atom.xml","title":"VuePress 生态系统 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/zh/feed.json","title":"VuePress 生态系统 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/zh/rss.xml","title":"VuePress 生态系统 RSS Feed"}]]},"headers":[{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"插件配置","slug":"插件配置","link":"#插件配置","children":[]},{"level":2,"title":"客户端配置","slug":"客户端配置","link":"#客户端配置","children":[]}],"git":{"updatedTime":1710145201000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"autoDesc":true,"filePathRelative":"zh/plugins/comment/artalk/config.md"}');export{C as comp,g as data};
