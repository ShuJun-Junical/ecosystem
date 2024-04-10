import{_ as r,r as n,o as p,c,a,b as e,d as s,e as t}from"./app-lBjCfO3h.js";const i={},d=e("h1",{id:"active-header-links",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#active-header-links"},[e("span",null,"active-header-links")])],-1),h=t(`<p>该插件会监听页面滚动事件。当页面滚动至某个 <em>标题锚点</em> 后，如果存在对应的 <em>标题链接</em> ，那么该插件会将路由 Hash 更改为该 <em>标题锚点</em> 。</p><p>该插件主要用于开发主题，并且已经集成到默认主题中。大部分情况下你不需要直接使用它。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> i</span><span style="color:#569CD6;"> -D</span><span style="color:#CE9178;"> @vuepress/plugin-active-header-links@next</span></span>
<span class="line"></span></code></pre></div><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">activeHeaderLinksPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-active-header-links&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#DCDCAA;">    activeHeaderLinksPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">      // 配置项</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h2><h3 id="headerlinkselector" tabindex="-1"><a class="header-anchor" href="#headerlinkselector"><span>headerLinkSelector</span></a></h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值： <code>&#39;a.sidebar-item&#39;</code></p></li><li><p>详情：</p><p><em>标题链接</em> 的选择器。</p><p>如果一个 <em>标题锚点</em> 没有对应的 <em>标题链接</em> ，那么即使滚动到这个 <em>标题锚点</em> ，该插件也不会更改路由 Hash 。</p></li></ul><h3 id="headeranchorselector" tabindex="-1"><a class="header-anchor" href="#headeranchorselector"><span>headerAnchorSelector</span></a></h3>`,9),m=e("li",null,[e("p",null,[s("类型： "),e("code",null,"string")])],-1),u=e("li",null,[e("p",null,[s("默认值： "),e("code",null,"'.header-anchor'")])],-1),k=e("p",null,"详情：",-1),y=e("p",null,[e("em",null,"标题锚点"),s(" 的选择器。")],-1),f={href:"https://vuejs.press/zh/reference/config.html#markdown-anchor",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/valeriangalliat/markdown-it-anchor#readme",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"permalinkClass",-1),v=e("p",null,"参考：",-1),D={href:"https://vuejs.press/zh/guide/markdown.html#%E6%A0%87%E9%A2%98%E9%94%9A%E7%82%B9",target:"_blank",rel:"noopener noreferrer"},x=t('<h3 id="delay" tabindex="-1"><a class="header-anchor" href="#delay"><span>delay</span></a></h3><ul><li><p>类型： <code>number</code></p></li><li><p>默认值： <code>200</code></p></li><li><p>详情：</p><p>滚动事件监听器的 Debounce 延迟。</p></li></ul><h3 id="offset" tabindex="-1"><a class="header-anchor" href="#offset"><span>offset</span></a></h3><ul><li><p>类型： <code>number</code></p></li><li><p>默认值： <code>5</code></p></li><li><p>详情：</p><p>即便直接点击 <em>标题锚点</em> 的链接， <code>scrollTop</code> 也可能不会完全等于 <em>标题锚点</em> 的 <code>offsetTop</code> ，所以我们添加一个 Offset 偏移量来避免这个误差。</p></li></ul>',4);function C(b,E){const o=n("NpmBadge"),l=n("ExternalLinkIcon");return p(),c("div",null,[d,a(o,{package:"@vuepress/plugin-active-header-links"}),h,e("ul",null,[m,u,e("li",null,[k,y,e("p",null,[s("你通常不需要设置该选项，除非你通过 "),e("a",f,[s("markdown.anchor"),a(l)]),s(" 修改了 "),e("a",g,[s("markdown-it-anchor"),a(l)]),s(" 的 "),_,s(" 选项。")])]),e("li",null,[v,e("ul",null,[e("li",null,[e("a",D,[s("指南 > Markdown > 语法扩展 > 标题锚点"),a(l)])])])])]),x])}const j=r(i,[["render",C],["__file","active-header-links.html.vue"]]),z=JSON.parse('{"path":"/zh/plugins/active-header-links.html","title":"active-header-links","lang":"zh-CN","frontmatter":{"description":"active-header-links","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://ecosystem.vuejs.press/ecosystem/plugins/active-header-links.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/zh/plugins/active-header-links.html"}],["meta",{"property":"og:site_name","content":"VuePress 生态系统"}],["meta",{"property":"og:title","content":"active-header-links"}],["meta",{"property":"og:description","content":"active-header-links"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-02-21T05:33:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-21T05:33:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"active-header-links\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-21T05:33:46.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/zh/atom.xml","title":"VuePress 生态系统 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/zh/feed.json","title":"VuePress 生态系统 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/zh/rss.xml","title":"VuePress 生态系统 RSS Feed"}]]},"headers":[{"level":2,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]},{"level":2,"title":"配置项","slug":"配置项","link":"#配置项","children":[{"level":3,"title":"headerLinkSelector","slug":"headerlinkselector","link":"#headerlinkselector","children":[]},{"level":3,"title":"headerAnchorSelector","slug":"headeranchorselector","link":"#headeranchorselector","children":[]},{"level":3,"title":"delay","slug":"delay","link":"#delay","children":[]},{"level":3,"title":"offset","slug":"offset","link":"#offset","children":[]}]}],"git":{"updatedTime":1708493626000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"autoDesc":true,"filePathRelative":"zh/plugins/active-header-links.md"}');export{j as comp,z as data};
