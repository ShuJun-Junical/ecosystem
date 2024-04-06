import{_ as c,r as e,o as r,c as i,a as n,b as s,d as a,w as d,e as l}from"./app-y4xzv_qM.js";const D={},y=s("h1",{id:"search",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#search"},[s("span",null,"search")])],-1),h=l(`<p>为你的文档网站提供本地搜索能力。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>当你正确配置该插件后，默认主题会把搜索框添加到导航栏。</p><p>该插件不一定能在其他主题中直接使用，因此你应参考主题本身的文档来获取更多信息。</p></div><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> i</span><span style="color:#569CD6;"> -D</span><span style="color:#CE9178;"> @vuepress/plugin-search@next</span></span>
<span class="line"></span></code></pre></div><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">searchPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-search&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#DCDCAA;">    searchPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">      // 配置项</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="本地搜索索引" tabindex="-1"><a class="header-anchor" href="#本地搜索索引"><span>本地搜索索引</span></a></h2><p>该插件会根据你的页面，在本地生成搜索索引，然后在用户访问站点时加载搜索索引文件。换句话说，这是一个轻量级的内置搜索能力，不会进行任何外部请求。</p>`,7),u=l(`<h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h2><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales"><span>locales</span></a></h3><ul><li><p>类型： <code>Record&lt;string, { placeholder: string }&gt;</code></p></li><li><p>详情：</p><p>搜索框在不同 locales 下的文字。</p><p>如果没有指定该配置项，它会降级使用默认文字。</p></li><li><p>示例：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#DCDCAA;">    searchPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">      locales:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#CE9178;">        &#39;/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">          placeholder:</span><span style="color:#CE9178;"> &#39;Search&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#CE9178;">        &#39;/zh/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">          placeholder:</span><span style="color:#CE9178;"> &#39;搜索&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),v={href:"https://vuejs.press/zh/guide/i18n.html",target:"_blank",rel:"noopener noreferrer"},m=l(`<h3 id="hotkeys" tabindex="-1"><a class="header-anchor" href="#hotkeys"><span>hotKeys</span></a></h3><ul><li>类型： <code>(string | HotKeyOptions)[]</code></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#569CD6;"> interface</span><span style="color:#4EC9B0;"> HotKeyOptions</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">    /**</span></span>
<span class="line"><span style="color:#6A9955;">     * Value of \`event.key\` to trigger the hot key</span></span>
<span class="line"><span style="color:#6A9955;">     */</span></span>
<span class="line"><span style="color:#9CDCFE;">    key</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#6A9955;">    /**</span></span>
<span class="line"><span style="color:#6A9955;">     * Whether to press \`event.altKey\` at the same time</span></span>
<span class="line"><span style="color:#6A9955;">     *</span></span>
<span class="line"><span style="color:#6A9955;">     * </span><span style="color:#569CD6;">@default</span><span style="color:#9CDCFE;"> false</span></span>
<span class="line"><span style="color:#6A9955;">     */</span></span>
<span class="line"><span style="color:#9CDCFE;">    alt</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">boolean</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#6A9955;">    /**</span></span>
<span class="line"><span style="color:#6A9955;">     * Whether to press \`event.ctrlKey\` at the same time</span></span>
<span class="line"><span style="color:#6A9955;">     *</span></span>
<span class="line"><span style="color:#6A9955;">     * </span><span style="color:#569CD6;">@default</span><span style="color:#9CDCFE;"> false</span></span>
<span class="line"><span style="color:#6A9955;">     */</span></span>
<span class="line"><span style="color:#9CDCFE;">    ctrl</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">boolean</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#6A9955;">    /**</span></span>
<span class="line"><span style="color:#6A9955;">     * Whether to press \`event.shiftKey\` at the same time</span></span>
<span class="line"><span style="color:#6A9955;">     *</span></span>
<span class="line"><span style="color:#6A9955;">     * </span><span style="color:#569CD6;">@default</span><span style="color:#9CDCFE;"> false</span></span>
<span class="line"><span style="color:#6A9955;">     */</span></span>
<span class="line"><span style="color:#9CDCFE;">    shift</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">boolean</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),C=s("li",null,[s("p",null,[a("默认值： "),s("code",null,"['s', '/']")])],-1),g=s("p",null,"详情：",-1),b={href:"http://keycode.info/",target:"_blank",rel:"noopener noreferrer"},E=s("p",null,"当按下热键时，搜索框会被聚焦。",-1),f=s("p",null,"将该配置项设为空数组可以禁用热键功能。",-1),x=l(`<h3 id="maxsuggestions" tabindex="-1"><a class="header-anchor" href="#maxsuggestions"><span>maxSuggestions</span></a></h3><ul><li><p>类型： <code>number</code></p></li><li><p>默认值： <code>5</code></p></li><li><p>详情：</p><p>指定搜索结果的最大条数。</p></li></ul><h3 id="issearchable" tabindex="-1"><a class="header-anchor" href="#issearchable"><span>isSearchable</span></a></h3><ul><li><p>类型： <code>(page: Page) =&gt; boolean</code></p></li><li><p>默认值： <code>() =&gt; true</code></p></li><li><p>详情：</p><p>一个函数，用于判断一个页面是否应该被包含在搜索索引中。</p><ul><li>返回 <code>true</code> 来包含该页面。</li><li>返回 <code>false</code> 来排除该页面。</li></ul></li><li><p>示例：</p></li></ul><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#DCDCAA;">    searchPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">      // 排除首页</span></span>
<span class="line"><span style="color:#DCDCAA;">      isSearchable</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">page</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#9CDCFE;"> page</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> !== </span><span style="color:#CE9178;">&#39;/&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="getextrafields" tabindex="-1"><a class="header-anchor" href="#getextrafields"><span>getExtraFields</span></a></h3><ul><li><p>类型： <code>(page: Page) =&gt; string[]</code></p></li><li><p>默认值： <code>() =&gt; []</code></p></li><li><p>详情：</p><p>一个函数，用于在页面的搜索索引中添加额外字段。</p><p>默认情况下，该插件会将页面标题和小标题作为搜索索引。该配置项可以帮助你添加更多的可搜索字段。</p></li><li><p>示例：</p></li></ul><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#DCDCAA;">    searchPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">      // 允许搜索 Frontmatter 中的 \`tags\`</span></span>
<span class="line"><span style="color:#DCDCAA;">      getExtraFields</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">page</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#9CDCFE;"> page</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">frontmatter</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">tags</span><span style="color:#D4D4D4;"> ?? [],</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式"><span>样式</span></a></h2><p>你可以通过 CSS 变量来自定义搜索框的样式：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D7BA7D;">:root</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  --search-bg-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#ffffff</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">  --search-accent-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#3eaf7c</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">  --search-text-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#2c3e50</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">  --search-border-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#eaecef</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">  --search-item-text-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#5d81a5</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">  --search-item-focus-bg-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#f3f4f5</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">  --search-input-width</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">8rem</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">  --search-result-width</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">20rem</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件"><span>组件</span></a></h2><h3 id="searchbox" tabindex="-1"><a class="header-anchor" href="#searchbox"><span>SearchBox</span></a></h3><ul><li><p>详情：</p><p>该插件会全局注册一个 <code>&lt;SearchBox /&gt;</code> 组件，你可以不传入任何 Props 来使用它。</p><p>将该组件放置在你想要显示搜索框的地方。例如，默认主题将这个组件放在了导航栏的末尾。</p></li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><p>该组件主要用于主题开发。在大多数情况下你不需要直接使用该组件。</p></div>`,15);function k(_,F){const o=e("NpmBadge"),t=e("RouteLink"),p=e("ExternalLinkIcon");return r(),i("div",null,[y,n(o,{package:"@vuepress/plugin-search"}),h,s("p",null,[a("然而，当你的站点包含大量页面时，搜索索引文件也会变得非常大，它可能会拖慢你的页面加载速度。在这种情况下，我们建议你使用更成熟的解决方案 - "),n(t,{to:"/zh/plugins/docsearch.html"},{default:d(()=>[a("docsearch")]),_:1}),a(" 。")]),u,s("ul",null,[s("li",null,[a("参考： "),s("ul",null,[s("li",null,[s("a",v,[a("指南 > 多语言支持"),n(p)])])])])]),m,s("ul",null,[C,s("li",null,[g,s("p",null,[a("指定热键的 "),s("a",b,[a("event.key"),n(p)]),a(" 。")]),E,f])]),x])}const S=c(D,[["render",k],["__file","search.html.vue"]]),B=JSON.parse('{"path":"/zh/plugins/search.html","title":"search","lang":"zh-CN","frontmatter":{"description":"search","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://ecosystem.vuejs.press/plugins/search.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/zh/plugins/search.html"}],["meta",{"property":"og:site_name","content":"VuePress 生态系统"}],["meta",{"property":"og:title","content":"search"}],["meta",{"property":"og:description","content":"search"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-02-21T05:33:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-21T05:33:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"search\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-21T05:33:46.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/zh/atom.xml","title":"VuePress 生态系统 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/zh/feed.json","title":"VuePress 生态系统 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/zh/rss.xml","title":"VuePress 生态系统 RSS Feed"}]]},"headers":[{"level":2,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]},{"level":2,"title":"本地搜索索引","slug":"本地搜索索引","link":"#本地搜索索引","children":[]},{"level":2,"title":"配置项","slug":"配置项","link":"#配置项","children":[{"level":3,"title":"locales","slug":"locales","link":"#locales","children":[]},{"level":3,"title":"hotKeys","slug":"hotkeys","link":"#hotkeys","children":[]},{"level":3,"title":"maxSuggestions","slug":"maxsuggestions","link":"#maxsuggestions","children":[]},{"level":3,"title":"isSearchable","slug":"issearchable","link":"#issearchable","children":[]},{"level":3,"title":"getExtraFields","slug":"getextrafields","link":"#getextrafields","children":[]}]},{"level":2,"title":"样式","slug":"样式","link":"#样式","children":[]},{"level":2,"title":"组件","slug":"组件","link":"#组件","children":[{"level":3,"title":"SearchBox","slug":"searchbox","link":"#searchbox","children":[]}]}],"git":{"updatedTime":1708493626000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"autoDesc":true,"filePathRelative":"zh/plugins/search.md"}');export{S as comp,B as data};
