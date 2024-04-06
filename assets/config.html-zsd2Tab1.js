import{_ as a,r as l,o,c as t,b as e,d as s,a as i,e as p}from"./app-y4xzv_qM.js";const r={},c=e("h1",{id:"artalk-options",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#artalk-options"},[e("span",null,"Artalk Options")])],-1),d=e("h2",{id:"config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#config"},[e("span",null,"Config")])],-1),m={href:"https://artalk.js.org/guide/frontend/config.html",target:"_blank",rel:"noopener noreferrer"},u=p(`<ul><li><p>The <code>el</code> <code>pageTitle</code>, <code>pageKey</code> and <code>site</code> options are reserved for plugins, they will be inferred from VuePress config.</p></li><li><p>Two function options <code>imgUploader</code> and <code>avatarURLBuilder</code> can only be set on client side.</p></li></ul><h2 id="plugin-config" tabindex="-1"><a class="header-anchor" href="#plugin-config"><span>Plugin Config</span></a></h2><p>You can directly configure serializable options in the plugin options:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title=".vuepress/config.ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineUserConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">commentPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress-plugin-comment2&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineUserConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#DCDCAA;">    commentPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">      provider:</span><span style="color:#CE9178;"> &#39;Artalk&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#6A9955;">      // other options</span></span>
<span class="line"><span style="color:#6A9955;">      // ...</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="client-config" tabindex="-1"><a class="header-anchor" href="#client-config"><span>Client Config</span></a></h2><p>You can use the <code>defineArtalkConfig</code> function to customize Artalk:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title=".vuepress/client.ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/client&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineArtalkConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress-plugin-comment2/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">defineArtalkConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">  // Artalk config</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">  // ...</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function g(f,y){const n=l("ExternalLinkIcon");return o(),t("div",null,[c,d,e("p",null,[s("See "),e("a",m,[s("Artalk Configuration"),i(n)]),s(" for details.")]),u])}const v=a(r,[["render",g],["__file","config.html.vue"]]),C=JSON.parse('{"path":"/plugins/comment/artalk/config.html","title":"Artalk Options","lang":"en-US","frontmatter":{"description":"Artalk Options Config See Artalk Configuration for details. The el pageTitle, pageKey and site options are reserved for plugins, they will be inferred from VuePress config. Two ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/zh/plugins/comment/artalk/config.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/plugins/comment/artalk/config.html"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"Artalk Options"}],["meta",{"property":"og:description","content":"Artalk Options Config See Artalk Configuration for details. The el pageTitle, pageKey and site options are reserved for plugins, they will be inferred from VuePress config. Two ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-11T08:20:01.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-11T08:20:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Artalk Options\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-11T08:20:01.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"Config","slug":"config","link":"#config","children":[]},{"level":2,"title":"Plugin Config","slug":"plugin-config","link":"#plugin-config","children":[]},{"level":2,"title":"Client Config","slug":"client-config","link":"#client-config","children":[]}],"git":{"updatedTime":1710145201000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"autoDesc":true,"filePathRelative":"plugins/comment/artalk/config.md"}');export{v as comp,C as data};
