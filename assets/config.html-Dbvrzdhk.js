import{_ as o,r as t,o as c,c as i,b as s,a,w as e,e as p,d as n}from"./app-y4xzv_qM.js";const r={},d=p('<h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h1><h2 id="插件选项" tabindex="-1"><a class="header-anchor" href="#插件选项"><span>插件选项</span></a></h2><h3 id="getinfo" tabindex="-1"><a class="header-anchor" href="#getinfo"><span>getInfo</span></a></h3>',3),D=s("li",null,[s("p",null,[n("类型: "),s("code",null,"(page: Page) => Record<string, unknown>")])],-1),y=s("li",null,[s("p",null,"必填: 否")],-1),u=s("p",null,"参考:",-1),v=s("li",null,[s("p",null,"详情："),s("p",null,"获取文章信息的函数。"),s("p",null,"获取到的信息会被稍后注入至路由元数据，以便你可以在客户端中通过组合式 API 获取。")],-1),m=s("h3",{id:"filter",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#filter"},[s("span",null,"filter")])],-1),C=s("li",null,[s("p",null,[n("类型: "),s("code",null,"(page: Page) => boolean")])],-1),g=s("li",null,[s("p",null,[n("默认值: "),s("code",null,"(page) => Boolean(page.filePathRelative) && !page.frontmatter.home")])],-1),E=s("p",null,"参考:",-1),h=s("li",null,[s("p",null,"详情："),s("p",null,"页面过滤器，此函数用于鉴别页面是否作为文章。"),s("p",null,"默认情况下，所有从 Markdown 源文件中生成的非主页页面，会被作为文章。")],-1),b=s("h3",{id:"category",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#category"},[s("span",null,"category")])],-1),B=s("li",null,[s("p",null,[n("类型: "),s("code",null,"BlogCategoryOptions[]")])],-1),A=s("li",null,[s("p",null,"必填: 否")],-1),f=s("p",null,"详情：",-1),_=s("li",null,[s("p",null,"详情："),s("p",null,[n("博客分类配置，详见 "),s("a",{href:"#%E5%8D%9A%E5%AE%A2%E5%88%86%E7%B1%BB%E9%85%8D%E7%BD%AE"},"博客分类配置"),n("。")])],-1),k=s("h3",{id:"type",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#type"},[s("span",null,"type")])],-1),x=s("li",null,[s("p",null,[n("类型: "),s("code",null,"BlogTypeOptions[]")])],-1),F=s("li",null,[s("p",null,"必填: 否")],-1),P=s("p",null,"参考：",-1),R=s("li",null,[s("p",null,"详情："),s("p",null,[n("博客分类配置，详见 "),s("a",{href:"#%E5%8D%9A%E5%AE%A2%E7%B1%BB%E5%9E%8B%E9%85%8D%E7%BD%AE"},"博客类型配置"),n("。")])],-1),T=p('<h3 id="slugify" tabindex="-1"><a class="header-anchor" href="#slugify"><span>slugify</span></a></h3><ul><li>类型: <code>(name: string) =&gt; string</code></li><li>默认值: <code>(name) =&gt; name.replace(/ _/g, &#39;-&#39;).replace(/[:?*|\\\\/&lt;&gt;]/g, &quot;&quot;).toLowerCase()</code></li><li>详情：Slugify 函数，用于转换 key 在路由中注册的形式。</li></ul><h3 id="excerpt" tabindex="-1"><a class="header-anchor" href="#excerpt"><span>excerpt</span></a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li><li>详情：是否生成摘要。</li></ul><h3 id="excerptseparator" tabindex="-1"><a class="header-anchor" href="#excerptseparator"><span>excerptSeparator</span></a></h3><ul><li>类型: <code>string</code></li><li>默认值: <code>&lt;!-- more --&gt;</code></li><li>详情：摘要分隔符。</li></ul><h3 id="excerptlength" tabindex="-1"><a class="header-anchor" href="#excerptlength"><span>excerptLength</span></a></h3>',7),w=s("li",null,[s("p",null,[n("类型: "),s("code",null,"number")])],-1),z=s("li",null,[s("p",null,[n("默认值: "),s("code",null,"300")])],-1),I=s("p",null,"参考：",-1),S=s("li",null,[s("p",null,"详情："),s("p",null,"自动生成的摘要的长度。"),s("div",{class:"custom-container tip"},[s("p",{class:"custom-container-title"},"提示"),s("p",null,[n("摘要的长度会尽可能的接近这个值。如果设置为 "),s("code",null,"0"),n("，意味着不自动生成摘要。")])])],-1),L=s("h3",{id:"excerptfilter",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#excerptfilter"},[s("span",null,"excerptFilter")])],-1),N=s("li",null,[s("p",null,[n("类型: "),s("code",null,"(page: Page) => boolean")])],-1),j=s("li",null,[s("p",null,[n("默认值: "),s("code",null,"filter"),n(" 选项")])],-1),V=s("p",null,"参考：",-1),M=s("li",null,[s("p",null,"详情： 页面过滤器，此函数用于鉴别插件是否需要生成摘要。"),s("div",{class:"custom-container tip"},[s("p",{class:"custom-container-title"},"提示"),s("p",null,[n("你可以使用此函数来跳过你不需要生成摘要的页面。例如：如果用户在 frontmatter 中设置了 "),s("code",null,"excerpt"),n(" 或 "),s("code",null,"description"),n("，你可能希望直接使用它们。")])])],-1),O=s("h3",{id:"iscustomelement",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#iscustomelement"},[s("span",null,"isCustomElement")])],-1),q=s("li",null,[s("p",null,[n("类型: "),s("code",null,"(tagName: string) => boolean")])],-1),Z=s("li",null,[s("p",null,[n("默认值: "),s("code",null,"() => false")])],-1),J=s("p",null,"参考：",-1),H=s("li",null,[s("p",null,"详情： 被认为是自定义元素的标签。"),s("p",null,"用于判断一个标签是否是自定义元素，因为在摘要中，所有的未知标签都会被移除。")],-1),U=p(`<h3 id="metascope" tabindex="-1"><a class="header-anchor" href="#metascope"><span>metaScope</span></a></h3><ul><li><p>类型: <code>string</code></p></li><li><p>默认值: <code>&quot;_blog&quot;</code></p></li><li><p>详情： 注入文章信息至路由元数据时使用的键名。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>设置为空字符串会直接注入路由元数据 (而不是一个键下)。</p></div></li></ul><h3 id="hotreload" tabindex="-1"><a class="header-anchor" href="#hotreload"><span>hotReload</span></a></h3><ul><li><p>类型: <code>boolean</code></p></li><li><p>默认值: 是否使用 <code>--debug</code> 标记</p></li><li><p>详情： 是否在开发服务器中启用实时热重载。</p><div class="custom-container tip"><p class="custom-container-title">致主题开发者</p><p>默认情况下它是禁用的，因为它确实会对具有很多分类和类别的站点产生性能影响，并且在编辑 Markdown 时会减慢热重载的速度。</p><p>如果用户正在添加或组织类别或标签，你可以告诉他们启用此功能，其余的时间最好禁用它。</p><p>此外，你可以尝试检测用户项目中的页面数并决定是否启用它。</p></div></li></ul><h2 id="博客分类配置" tabindex="-1"><a class="header-anchor" href="#博客分类配置"><span>博客分类配置</span></a></h2><p>博客分类配置应为一个数组，每一项控制一个分类规则。</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> BlogCategoryOptions</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 唯一的分类名称</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  key</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 从页面中获取分类的函数</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#DCDCAA;">  getter</span><span style="color:#D4D4D4;">: (</span><span style="color:#9CDCFE;">page</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Page</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#4EC9B0;"> string</span><span style="color:#D4D4D4;">[]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 页面排序器</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#DCDCAA;">  sorter</span><span style="color:#D4D4D4;">?: (</span><span style="color:#9CDCFE;">pageA</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Page</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">pageB</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Page</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#4EC9B0;"> number</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 待注册的页面路径图案</span></span>
<span class="line"><span style="color:#6A9955;">   *</span></span>
<span class="line"><span style="color:#6A9955;">   * </span><span style="color:#569CD6;">@description</span><span style="color:#6A9955;"> \`:key\` 将会被替换为原 key 的 slugify 结果</span></span>
<span class="line"><span style="color:#6A9955;">   *</span></span>
<span class="line"><span style="color:#6A9955;">   * </span><span style="color:#569CD6;">@default</span><span style="color:#9CDCFE;"> \`/:key/\`</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  path</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 页面布局组件名称</span></span>
<span class="line"><span style="color:#6A9955;">   *</span></span>
<span class="line"><span style="color:#6A9955;">   * </span><span style="color:#569CD6;">@default</span><span style="color:#9CDCFE;"> &#39;</span><span style="color:#9CDCFE;">Layout</span><span style="color:#9CDCFE;">&#39;</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  layout</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Front Matter 配置</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#DCDCAA;">  frontmatter</span><span style="color:#D4D4D4;">?: (</span><span style="color:#9CDCFE;">localePath</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#4EC9B0;"> Record</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 待注册的项目页面路径图案或自定义函数</span></span>
<span class="line"><span style="color:#6A9955;">   *</span></span>
<span class="line"><span style="color:#6A9955;">   * </span><span style="color:#569CD6;">@description</span><span style="color:#6A9955;"> 当填入字符串的时候, \`:key\` 和 \`:name\` 会被自动替换为原始的 key、name 的 slugify 结果。</span></span>
<span class="line"><span style="color:#6A9955;">   *</span></span>
<span class="line"><span style="color:#6A9955;">   * </span><span style="color:#569CD6;">@default</span><span style="color:#9CDCFE;"> \`/:key/:name/\`</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  itemPath</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;"> | ((</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#4EC9B0;"> string</span><span style="color:#D4D4D4;">) | </span><span style="color:#4EC9B0;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 项目页面布局组件名称</span></span>
<span class="line"><span style="color:#6A9955;">   *</span></span>
<span class="line"><span style="color:#6A9955;">   * </span><span style="color:#569CD6;">@default</span><span style="color:#9CDCFE;"> &#39;</span><span style="color:#9CDCFE;">Layout</span><span style="color:#9CDCFE;">&#39;</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  itemLayout</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 项目 Front Matter 配置</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#DCDCAA;">  itemFrontmatter</span><span style="color:#D4D4D4;">?: (</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">localePath</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#4EC9B0;"> Record</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="博客类型配置" tabindex="-1"><a class="header-anchor" href="#博客类型配置"><span>博客类型配置</span></a></h2><p>博客类型配置应为一个数组，每一项控制一个类型规则。</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> BlogTypeOptions</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 唯一的类型名称</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  key</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 一个过滤函数来决定页面是否满足此类型</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#DCDCAA;">  filter</span><span style="color:#D4D4D4;">: (</span><span style="color:#9CDCFE;">page</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Page</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#4EC9B0;"> boolean</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 页面排序器</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#DCDCAA;">  sorter</span><span style="color:#D4D4D4;">?: (</span><span style="color:#9CDCFE;">pageA</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Page</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">pageB</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Page</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#4EC9B0;"> number</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 待注册的页面路径</span></span>
<span class="line"><span style="color:#6A9955;">   *</span></span>
<span class="line"><span style="color:#6A9955;">   * </span><span style="color:#569CD6;">@default</span><span style="color:#9CDCFE;"> &#39;</span><span style="color:#9CDCFE;">/:key/</span><span style="color:#9CDCFE;">&#39;</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  path</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 页面布局组件名称</span></span>
<span class="line"><span style="color:#6A9955;">   *</span></span>
<span class="line"><span style="color:#6A9955;">   * </span><span style="color:#569CD6;">@default</span><span style="color:#9CDCFE;"> &#39;</span><span style="color:#9CDCFE;">Layout</span><span style="color:#9CDCFE;">&#39;</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  layout</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Front Matter 配置</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#DCDCAA;">  frontmatter</span><span style="color:#D4D4D4;">?: (</span><span style="color:#9CDCFE;">localePath</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#4EC9B0;"> Record</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可组合式-api" tabindex="-1"><a class="header-anchor" href="#可组合式-api"><span>可组合式 API</span></a></h2><p>你可以从 <code>@vuepress/plugin-blog/client</code> 导入下列 API:</p><ul><li><p>博客分类</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#DCDCAA;"> useBlogCategory</span><span style="color:#D4D4D4;">: &lt;</span></span>
<span class="line"><span style="color:#4EC9B0;">  T</span><span style="color:#569CD6;"> extends</span><span style="color:#4EC9B0;"> Record</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">unknown</span><span style="color:#D4D4D4;">&gt; = </span><span style="color:#4EC9B0;">Record</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">unknown</span><span style="color:#D4D4D4;">&gt;,</span></span>
<span class="line"><span style="color:#D4D4D4;">&gt;(</span></span>
<span class="line"><span style="color:#9CDCFE;">  key</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#4EC9B0;"> ComputedRef</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">BlogCategoryData</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;">&gt;&gt;</span></span>
<span class="line"></span></code></pre></div><p>参数 <code>key</code> 为需要获取的键名。如果未传入 key，会尝试使用与当前路径匹配的 key。</p></li><li><p>博客类型</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#DCDCAA;"> useBlogType</span><span style="color:#D4D4D4;">: &lt;</span></span>
<span class="line"><span style="color:#4EC9B0;">  T</span><span style="color:#569CD6;"> extends</span><span style="color:#4EC9B0;"> Record</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">unknown</span><span style="color:#D4D4D4;">&gt; = </span><span style="color:#4EC9B0;">Record</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">unknown</span><span style="color:#D4D4D4;">&gt;,</span></span>
<span class="line"><span style="color:#D4D4D4;">&gt;(</span></span>
<span class="line"><span style="color:#9CDCFE;">  key</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#4EC9B0;"> ComputedRef</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">BlogTypeData</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;">&gt;&gt;</span></span>
<span class="line"></span></code></pre></div><p>参数 <code>key</code> 为需要获取的键名。如果未传入 key，会尝试使用与当前路径匹配的 key。</p></li></ul><p>详细的返回值如下:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> Article</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">T</span><span style="color:#569CD6;"> extends</span><span style="color:#4EC9B0;"> Record</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">unknown</span><span style="color:#D4D4D4;">&gt; = </span><span style="color:#4EC9B0;">Record</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">unknown</span><span style="color:#D4D4D4;">&gt;&gt; {</span></span>
<span class="line"><span style="color:#6A9955;">  /** 文章路径 */</span></span>
<span class="line"><span style="color:#9CDCFE;">  path</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#6A9955;">  /** 文章信息 */</span></span>
<span class="line"><span style="color:#9CDCFE;">  info</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">T</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> BlogCategoryData</span><span style="color:#D4D4D4;">&lt;</span></span>
<span class="line"><span style="color:#4EC9B0;">  T</span><span style="color:#569CD6;"> extends</span><span style="color:#4EC9B0;"> Record</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">unknown</span><span style="color:#D4D4D4;">&gt; = </span><span style="color:#4EC9B0;">Record</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">unknown</span><span style="color:#D4D4D4;">&gt;,</span></span>
<span class="line"><span style="color:#D4D4D4;">&gt; {</span></span>
<span class="line"><span style="color:#6A9955;">  /** 分类路径 */</span></span>
<span class="line"><span style="color:#9CDCFE;">  path</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 仅当当前路径和某个子项目匹配时可用</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  currentItems</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">Article</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;">&gt;[]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /** 分类映射 */</span></span>
<span class="line"><span style="color:#9CDCFE;">  map</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#6A9955;">    /** 当前分类下全局唯一的 key */</span></span>
<span class="line"><span style="color:#D4D4D4;">    [</span><span style="color:#9CDCFE;">key</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">]: {</span></span>
<span class="line"><span style="color:#6A9955;">      /** 对应键值的分类路径 */</span></span>
<span class="line"><span style="color:#9CDCFE;">      path</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#6A9955;">      /** 对应键值的项目 */</span></span>
<span class="line"><span style="color:#9CDCFE;">      items</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Article</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;">&gt;[]</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> BlogTypeData</span><span style="color:#D4D4D4;">&lt;</span></span>
<span class="line"><span style="color:#4EC9B0;">  T</span><span style="color:#569CD6;"> extends</span><span style="color:#4EC9B0;"> Record</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">unknown</span><span style="color:#D4D4D4;">&gt; = </span><span style="color:#4EC9B0;">Record</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">unknown</span><span style="color:#D4D4D4;">&gt;,</span></span>
<span class="line"><span style="color:#D4D4D4;">&gt; {</span></span>
<span class="line"><span style="color:#6A9955;">  /** 类别路径 */</span></span>
<span class="line"><span style="color:#9CDCFE;">  path</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /** 当前类别下的项目 */</span></span>
<span class="line"><span style="color:#9CDCFE;">  items</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Article</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">T</span><span style="color:#D4D4D4;">&gt;[]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function G(K,Q){const l=t("RouteLink");return c(),i("div",null,[d,s("ul",null,[D,y,s("li",null,[u,s("ul",null,[s("li",null,[a(l,{to:"/zh/plugins/blog/guide.html#%E6%94%B6%E9%9B%86%E6%96%87%E7%AB%A0%E5%B9%B6%E7%94%9F%E6%88%90%E4%BF%A1%E6%81%AF"},{default:e(()=>[n("指南 → 收集文章并生成信息")]),_:1})])])]),v]),m,s("ul",null,[C,g,s("li",null,[E,s("ul",null,[s("li",null,[a(l,{to:"/zh/plugins/blog/guide.html#%E6%94%B6%E9%9B%86%E6%96%87%E7%AB%A0%E5%B9%B6%E7%94%9F%E6%88%90%E4%BF%A1%E6%81%AF"},{default:e(()=>[n("指南 → 收集文章并生成信息")]),_:1})])])]),h]),b,s("ul",null,[B,A,s("li",null,[f,s("ul",null,[s("li",null,[a(l,{to:"/zh/plugins/blog/guide.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%B1%BB%E5%88%AB%E5%92%8C%E7%B1%BB%E5%9E%8B"},{default:e(()=>[n("指南 → 自定义类别和类型")]),_:1})])])]),_]),k,s("ul",null,[x,F,s("li",null,[P,s("ul",null,[s("li",null,[a(l,{to:"/zh/plugins/blog/guide.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%B1%BB%E5%88%AB%E5%92%8C%E7%B1%BB%E5%9E%8B"},{default:e(()=>[n("指南 → 自定义类别和类型")]),_:1})])])]),R]),T,s("ul",null,[w,z,s("li",null,[I,s("ul",null,[s("li",null,[a(l,{to:"/zh/plugins/blog/guide.html#%E6%91%98%E8%A6%81%E7%94%9F%E6%88%90"},{default:e(()=>[n("指南 → 摘要生成")]),_:1})])])]),S]),L,s("ul",null,[N,j,s("li",null,[V,s("ul",null,[s("li",null,[a(l,{to:"/zh/plugins/blog/guide.html#%E6%91%98%E8%A6%81%E7%94%9F%E6%88%90"},{default:e(()=>[n("指南 → 摘要生成")]),_:1})])])]),M]),O,s("ul",null,[q,Z,s("li",null,[J,s("ul",null,[s("li",null,[a(l,{to:"/zh/plugins/blog/guide.html#%E6%91%98%E8%A6%81%E7%94%9F%E6%88%90"},{default:e(()=>[n("指南 → 摘要生成")]),_:1})])])]),H]),U])}const X=o(r,[["render",G],["__file","config.html.vue"]]),Y=JSON.parse('{"path":"/zh/plugins/blog/config.html","title":"配置","lang":"zh-CN","frontmatter":{"description":"配置 插件选项 getInfo 类型: (page: Page) => Record<string, unknown> 必填: 否 参考: 详情： 获取文章信息的函数。 获取到的信息会被稍后注入至路由元数据，以便你可以在客户端中通过组合式 API 获取。 filter 类型: (page: Page) => boolean 默认值: (page) =>...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://ecosystem.vuejs.press/plugins/blog/config.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/zh/plugins/blog/config.html"}],["meta",{"property":"og:site_name","content":"VuePress 生态系统"}],["meta",{"property":"og:title","content":"配置"}],["meta",{"property":"og:description","content":"配置 插件选项 getInfo 类型: (page: Page) => Record<string, unknown> 必填: 否 参考: 详情： 获取文章信息的函数。 获取到的信息会被稍后注入至路由元数据，以便你可以在客户端中通过组合式 API 获取。 filter 类型: (page: Page) => boolean 默认值: (page) =>..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-02-05T09:34:12.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-05T09:34:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-05T09:34:12.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/zh/atom.xml","title":"VuePress 生态系统 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/zh/feed.json","title":"VuePress 生态系统 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/zh/rss.xml","title":"VuePress 生态系统 RSS Feed"}]]},"headers":[{"level":2,"title":"插件选项","slug":"插件选项","link":"#插件选项","children":[{"level":3,"title":"getInfo","slug":"getinfo","link":"#getinfo","children":[]},{"level":3,"title":"filter","slug":"filter","link":"#filter","children":[]},{"level":3,"title":"category","slug":"category","link":"#category","children":[]},{"level":3,"title":"type","slug":"type","link":"#type","children":[]},{"level":3,"title":"slugify","slug":"slugify","link":"#slugify","children":[]},{"level":3,"title":"excerpt","slug":"excerpt","link":"#excerpt","children":[]},{"level":3,"title":"excerptSeparator","slug":"excerptseparator","link":"#excerptseparator","children":[]},{"level":3,"title":"excerptLength","slug":"excerptlength","link":"#excerptlength","children":[]},{"level":3,"title":"excerptFilter","slug":"excerptfilter","link":"#excerptfilter","children":[]},{"level":3,"title":"isCustomElement","slug":"iscustomelement","link":"#iscustomelement","children":[]},{"level":3,"title":"metaScope","slug":"metascope","link":"#metascope","children":[]},{"level":3,"title":"hotReload","slug":"hotreload","link":"#hotreload","children":[]}]},{"level":2,"title":"博客分类配置","slug":"博客分类配置","link":"#博客分类配置","children":[]},{"level":2,"title":"博客类型配置","slug":"博客类型配置","link":"#博客类型配置","children":[]},{"level":2,"title":"可组合式 API","slug":"可组合式-api","link":"#可组合式-api","children":[]}],"git":{"updatedTime":1707125652000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"autoDesc":true,"filePathRelative":"zh/plugins/blog/config.md"}');export{X as comp,Y as data};
