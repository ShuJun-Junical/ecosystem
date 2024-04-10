import{_ as c,r as l,o as i,c as r,a,b as s,d as n,e}from"./app-lBjCfO3h.js";const d={},D=s("h1",{id:"catalog",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#catalog"},[s("span",null,"catalog")])],-1),y=e(`<p>此插件可以自动生成目录页面，也提供目录组件。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> i</span><span style="color:#569CD6;"> -D</span><span style="color:#CE9178;"> @vuepress/plugin-catalog@next</span></span>
<span class="line"></span></code></pre></div><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">catalogPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-catalog&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#DCDCAA;">    catalogPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">      // 你的选项</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><p>首先，你应该在路由元信息中设置目录信息:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title=".vuepress/config.js"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">catalogPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-catalog&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#DCDCAA;">  extendsPage</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">page</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">    // 在 routeMeta 中设置目录信息</span></span>
<span class="line"><span style="color:#9CDCFE;">    page</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">routeMeta</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#6A9955;">      // 目录标题</span></span>
<span class="line"><span style="color:#9CDCFE;">      title:</span><span style="color:#9CDCFE;"> page</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">title</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#6A9955;">      // ... 其他信息</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),u=s("code",null,"defineCatalogInfoGetter",-1),g={href:"https://vuejs.press/zh/guide/configuration.html#%E5%AE%A2%E6%88%B7%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"},C=e(`<div class="language-javascript" data-ext="js" data-title=".vuepress/client.js"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineCatalogInfoGetter</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-catalog/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">defineCatalogInfoGetter</span><span style="color:#D4D4D4;">((</span><span style="color:#9CDCFE;">meta</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">meta</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">title</span><span style="color:#D4D4D4;"> ? { </span><span style="color:#9CDCFE;">title:</span><span style="color:#9CDCFE;"> meta</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">title</span><span style="color:#D4D4D4;"> } : </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {}</span></span>
<span class="line"></span></code></pre></div><p>目录信息应包含:</p><ul><li><code>title</code>: 目录标题</li><li><code>order</code>: 目录顺序 (可选)</li><li><code>content</code>: 目录内容组件 (可选)</li></ul><div class="custom-container tip"><p class="custom-container-title">通过 order 排序</p><p>插件将按以下方式通过 <code>order</code> 对页面进行排序:</p><div class="language-text" data-ext="text" data-title="text"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span>// 从小到大依次排列正数</span></span>
<span class="line"><span>order 1 的项目</span></span>
<span class="line"><span>order 2 的项目</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>order 10 的项目</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>// 无 order 的项目</span></span>
<span class="line"><span>无 order 的项目</span></span>
<span class="line"><span>无 order 的项目</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>// 从小到大依次排列负数</span></span>
<span class="line"><span>order -10 的项目</span></span>
<span class="line"><span>// ...</span></span>
<span class="line"><span>order -2 的项目</span></span>
<span class="line"><span>order -1 的项目</span></span>
<span class="line"><span></span></span></code></pre></div></div><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2>`,5),v={id:"level",tabindex:"-1"},m={class:"header-anchor",href:"#level"},h=s("ul",null,[s("li",null,[n("类型："),s("code",null,"1 | 2 | 3")]),s("li",null,[n("默认值："),s("code",null,"3")]),s("li",null,"详情：目录项级别的最大深度。")],-1),E={id:"index",tabindex:"-1"},b={class:"header-anchor",href:"#index"},f=e(`<ul><li>类型：<code>boolean</code></li><li>默认值：<code>false</code></li><li>详情：目录是否显示索引</li></ul><h3 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter"><span>frontmatter</span></a></h3><ul><li><p>类型：<code>(path: string) =&gt; Record&lt;string, any&gt;</code></p></li><li><p>详情：生成页面的 Frontmatter 获取器。</p></li><li><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title=".vuepress/config.js"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">catalogPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-catalog&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#DCDCAA;">    catalogPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#DCDCAA;">      frontmatter</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> ({</span></span>
<span class="line"><span style="color:#6A9955;">        // 你想要的 frontmatter</span></span>
<span class="line"><span style="color:#6A9955;">        // 你可以自定义标题、作者、时间等</span></span>
<span class="line"><span style="color:#D4D4D4;">      }),</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="exclude" tabindex="-1"><a class="header-anchor" href="#exclude"><span>exclude</span></a></h3><ul><li><p>类型：<code>(RegExp | string)[]</code></p></li><li><p>默认值：<code>[]</code></p></li><li><p>详情：</p><p>生成中需要排除的目录页路径。</p><ul><li><code>&quot;/foo/&quot;</code> 意味着仅排除 <code>/foo/</code> 文件夹的目录页生成。</li><li><code>/^\\/foo\\//</code> 意味着排除 <code>/foo/</code> 文件夹及其子文件夹的目录页生成。</li></ul><div class="custom-container tip"><p class="custom-container-title">404 页面会被自动排除。</p></div></li></ul><h3 id="component" tabindex="-1"><a class="header-anchor" href="#component"><span>component</span></a></h3><ul><li>类型：<code>string</code></li><li>详情：用作目录的组件名称。</li></ul><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales"><span>locales</span></a></h3><ul><li><p>类型：<code>CatalogPluginLocaleConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> CatalogPluginLocaleData</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 目录标题</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  title</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 空目录提示</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  empty</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> CatalogPluginLocaleConfig</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  [</span><span style="color:#9CDCFE;">localePath</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">]: </span><span style="color:#4EC9B0;">CatalogPluginLocaleData</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>必填: 否</p></li><li><p>详情：目录组件国际化配置。</p></li></ul><details class="custom-container details"><summary>内置支持语言</summary><ul><li><strong>简体中文</strong> (zh-CN)</li><li><strong>繁体中文</strong> (zh-TW)</li><li><strong>英文(美国)</strong> (en-US)</li><li><strong>德语</strong> (de-DE)</li><li><strong>德语(澳大利亚)</strong> (de-AT)</li><li><strong>俄语</strong> (ru-RU)</li><li><strong>乌克兰语</strong> (uk-UA)</li><li><strong>越南语</strong> (vi-VN)</li><li><strong>葡萄牙语(巴西)</strong> (pt-BR)</li><li><strong>波兰语</strong> (pl-PL)</li><li><strong>法语</strong> (fr-FR)</li><li><strong>西班牙语</strong> (es-ES)</li><li><strong>斯洛伐克</strong> (sk-SK)</li><li><strong>日语</strong> (ja-JP)</li><li><strong>土耳其语</strong> (tr-TR)</li><li><strong>韩语</strong> (ko-KR)</li><li><strong>芬兰语</strong> (fi-FI)</li><li><strong>印尼语</strong> (id-ID)</li><li><strong>荷兰语</strong> (nl-NL)</li><li><strong>印尼语</strong> (id-ID)</li><li><strong>荷兰语</strong> (nl-NL)</li></ul></details><h2 id="客户端选项" tabindex="-1"><a class="header-anchor" href="#客户端选项"><span>客户端选项</span></a></h2><h3 id="definecataloginfogetter" tabindex="-1"><a class="header-anchor" href="#definecataloginfogetter"><span>defineCatalogInfoGetter</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> CatalogInfo</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  /** 目录标题 */</span></span>
<span class="line"><span style="color:#9CDCFE;">  title</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#6A9955;">  /** 目录顺序 */</span></span>
<span class="line"><span style="color:#9CDCFE;">  order</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">number</span></span>
<span class="line"><span style="color:#6A9955;">  /** 目录内容 */</span></span>
<span class="line"><span style="color:#9CDCFE;">  content</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">Component</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> CatalogInfoGetter</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">meta</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Record</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">unknown</span><span style="color:#D4D4D4;">&gt;) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#4EC9B0;"> CatalogInfo</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#DCDCAA;"> defineCatalogInfoGetter</span><span style="color:#D4D4D4;">: (</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">CatalogInfoGetter</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#4EC9B0;"> void</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义如何从 meta 中提取目录信息。</p><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件"><span>组件</span></a></h2><h3 id="catalog-1" tabindex="-1"><a class="header-anchor" href="#catalog-1"><span>Catalog</span></a></h3><ul><li><p>详情：</p><p>该插件默认会全局注册一个 <code>&lt;Catalog /&gt;</code> 组件（除非你设置了 <code>component</code> 选项）。</p><p>你可以在主题布局中或直接在 Markdown 文件中使用 <code>&lt;Catalog /&gt;</code>。</p><p>组件支持四个属性：</p><ul><li><code>level</code>：更改显示层次深度（最大仅支持 3 层），默认为 <code>3</code>。</li><li><code>base</code>：显示指定文件夹的目录，默认显示当前文件夹目录。</li><li><code>index</code>：为目录项添加索引号，默认无标号。</li><li><code>hideHeading</code>：隐藏组件标题，默认会显示 <code>目录</code> 标题。</li></ul></li></ul><h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式"><span>样式</span></a></h2><p>你可以通过 CSS 变量来自定义目录样式：</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D7BA7D;">:root</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  --catalog-bg-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#fff</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">  --catalog-bg-secondary-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#f8f8f8</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">  --catalog-border-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#e5e5e5</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">  --catalog-active-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#3eaf7c</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">  --catalog-hover-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#71cda3</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div>`,20);function x(k,_){const p=l("NpmBadge"),t=l("ExternalLinkIcon"),o=l("Badge");return i(),r("div",null,[D,a(p,{package:"@vuepress/plugin-catalog"}),y,s("p",null,[n("你可以之后导入 "),u,n(" 并在 "),s("a",g,[n("客户端配置文件"),a(t)]),n(" 中使用它来从元信息中提取目录信息。")]),C,s("h3",v,[s("a",m,[s("span",null,[n("level "),a(o,{text:"仅限内置组件"})])])]),h,s("h3",E,[s("a",b,[s("span",null,[n("index "),a(o,{text:"仅限内置组件"})])])]),f])}const A=c(d,[["render",x],["__file","catalog.html.vue"]]),B=JSON.parse('{"path":"/zh/plugins/catalog.html","title":"catalog","lang":"zh-CN","frontmatter":{"description":"catalog","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://ecosystem.vuejs.press/ecosystem/plugins/catalog.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/zh/plugins/catalog.html"}],["meta",{"property":"og:site_name","content":"VuePress 生态系统"}],["meta",{"property":"og:title","content":"catalog"}],["meta",{"property":"og:description","content":"catalog"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-02-27T16:53:41.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-27T16:53:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"catalog\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-27T16:53:41.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/zh/atom.xml","title":"VuePress 生态系统 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/zh/feed.json","title":"VuePress 生态系统 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/zh/rss.xml","title":"VuePress 生态系统 RSS Feed"}]]},"headers":[{"level":2,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]},{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[{"level":3,"title":"level","slug":"level","link":"#level","children":[]},{"level":3,"title":"index","slug":"index","link":"#index","children":[]},{"level":3,"title":"frontmatter","slug":"frontmatter","link":"#frontmatter","children":[]},{"level":3,"title":"exclude","slug":"exclude","link":"#exclude","children":[]},{"level":3,"title":"component","slug":"component","link":"#component","children":[]},{"level":3,"title":"locales","slug":"locales","link":"#locales","children":[]}]},{"level":2,"title":"客户端选项","slug":"客户端选项","link":"#客户端选项","children":[{"level":3,"title":"defineCatalogInfoGetter","slug":"definecataloginfogetter","link":"#definecataloginfogetter","children":[]}]},{"level":2,"title":"组件","slug":"组件","link":"#组件","children":[{"level":3,"title":"Catalog","slug":"catalog-1","link":"#catalog-1","children":[]}]},{"level":2,"title":"样式","slug":"样式","link":"#样式","children":[]}],"git":{"updatedTime":1709052821000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":4}]},"autoDesc":true,"filePathRelative":"zh/plugins/catalog.md"}');export{A as comp,B as data};
