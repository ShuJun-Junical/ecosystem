import{_ as o}from"./extending-a-theme-01-Dz55t8d0.js";import{_ as t,r as p,o as c,c as r,b as e,d as s,a,e as l}from"./app-y4xzv_qM.js";const i={},d=l(`<h1 id="extending" tabindex="-1"><a class="header-anchor" href="#extending"><span>Extending</span></a></h1><p>VuePress default theme is widely used by users, so it is designed to be extendable, allowing users to make their own customization with ease.</p><h2 id="layout-slots" tabindex="-1"><a class="header-anchor" href="#layout-slots"><span>Layout Slots</span></a></h2><p>Default theme&#39;s <code>Layout</code> provides some slots:</p><ul><li><code>navbar</code></li><li><code>navbar-before</code></li><li><code>navbar-after</code></li><li><code>sidebar</code></li><li><code>sidebar-top</code></li><li><code>sidebar-bottom</code></li><li><code>page</code></li><li><code>page-top</code></li><li><code>page-bottom</code></li><li><code>page-content-top</code></li><li><code>page-content-bottom</code></li></ul><p>With the help of them, you can add or replace content easily. Here comes an example to introduce how to extend default theme with layout slots.</p><p>Firstly, create a client config file <code>.vuepress/client.ts</code>:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/client&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#9CDCFE;"> Layout</span><span style="color:#C586C0;"> from</span><span style="color:#CE9178;"> &#39;./layouts/Layout.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">  layouts:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    Layout</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre></div><p>Next, create the <code>.vuepress/layouts/Layout.vue</code>, and make use of the slots that provided by the <code>Layout</code> of default theme:</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#9CDCFE;"> setup</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#9CDCFE;"> ParentLayout</span><span style="color:#C586C0;"> from</span><span style="color:#CE9178;"> &#39;@vuepress/theme-default/layouts/Layout.vue&#39;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">ParentLayout</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">    &lt;</span><span style="color:#569CD6;">template</span><span style="color:#D4D4D4;"> #</span><span style="color:#9CDCFE;">page-bottom</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">      &lt;</span><span style="color:#569CD6;">div</span><span style="color:#9CDCFE;"> class</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;my-footer&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">This is my custom page footer</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">    &lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;/</span><span style="color:#569CD6;">ParentLayout</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">style</span><span style="color:#9CDCFE;"> lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;css&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D7BA7D;">.my-footer</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  text-align</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">center</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">style</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then the default <code>Layout</code> layout has been overridden by your own local layout, which will add a custom footer to every normal pages in default theme (excluding homepage):</p><p><img src="`+o+'" alt="extending-a-theme"></p><h2 id="components-replacement" tabindex="-1"><a class="header-anchor" href="#components-replacement"><span>Components Replacement</span></a></h2><p>The layout slots are useful, but sometimes you might find it&#39;s not flexible enough. Default theme also provides the ability to replace a single component.</p>',14),D={href:"https://v2.vuepress.vuejs.org/plugin-api.html#alias",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/vuepress/ecosystem/tree/main/themes/theme-default/src/client/components",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"@theme",-1),u=e("code",null,"HomeFooter.vue",-1),C=e("code",null,"@theme/HomeFooter.vue",-1),v=l(`<p>Then, if you want to replace the <code>HomeFooter.vue</code> component, just override the alias in your config file <code>.vuepress/config.ts</code>:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defaultTheme</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/theme-default&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">getDirname</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/utils&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineUserConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> __dirname</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">getDirname</span><span style="color:#D4D4D4;">(</span><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">meta</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">url</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineUserConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">  theme:</span><span style="color:#DCDCAA;"> defaultTheme</span><span style="color:#D4D4D4;">(),</span></span>
<span class="line"><span style="color:#9CDCFE;">  alias:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#CE9178;">    &#39;@theme/HomeFooter.vue&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#9CDCFE;"> path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span></span>
<span class="line"><span style="color:#9CDCFE;">      __dirname</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &#39;./components/MyHomeFooter.vue&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    ),</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="developing-a-child-theme" tabindex="-1"><a class="header-anchor" href="#developing-a-child-theme"><span>Developing a Child Theme</span></a></h2><p>Instead of extending the default theme directly in <code>.vuepress/config.ts</code> and <code>.vuepress/client.ts</code>, you can also develop your own theme extending the default theme:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defaultTheme</span><span style="color:#D4D4D4;">, </span><span style="color:#C586C0;">type</span><span style="color:#9CDCFE;"> DefaultThemeOptions</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/theme-default&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#C586C0;"> type</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">Theme</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/core&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">getDirname</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/utils&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> __dirname</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">getDirname</span><span style="color:#D4D4D4;">(</span><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">meta</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">url</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#569CD6;"> const</span><span style="color:#DCDCAA;"> childTheme</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">DefaultThemeOptions</span><span style="color:#D4D4D4;">): </span><span style="color:#4EC9B0;">Theme</span><span style="color:#569CD6;"> =&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#C586C0;">  return</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    name:</span><span style="color:#CE9178;"> &#39;vuepress-theme-child&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    extends:</span><span style="color:#DCDCAA;"> defaultTheme</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">    // override layouts in child theme&#39;s client config file</span></span>
<span class="line"><span style="color:#6A9955;">    // notice that you would build ts to js before publishing to npm,</span></span>
<span class="line"><span style="color:#6A9955;">    // so this should be the path to the js file</span></span>
<span class="line"><span style="color:#9CDCFE;">    clientConfigFile:</span><span style="color:#9CDCFE;"> path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;./client.js&#39;</span><span style="color:#D4D4D4;">),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">    // override component alias</span></span>
<span class="line"><span style="color:#9CDCFE;">    alias:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#CE9178;">      &#39;@theme/HomeFooter.vue&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#9CDCFE;"> path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span></span>
<span class="line"><span style="color:#9CDCFE;">        __dirname</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">        &#39;./components/MyHomeFooter.vue&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      ),</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function h(g,b){const n=p("ExternalLinkIcon");return c(),r("div",null,[d,e("p",null,[s("Default theme has registered "),e("a",D,[s("alias"),a(n)]),s(" for every "),e("a",y,[s("non-global components"),a(n)]),s(" with a "),m,s(" prefix. For example, the alias of "),u,s(" is "),C,s(".")]),v])}const F=t(i,[["render",h],["__file","extending.html.vue"]]),x=JSON.parse('{"path":"/themes/default/extending.html","title":"Extending","lang":"en-US","frontmatter":{"description":"Extending VuePress default theme is widely used by users, so it is designed to be extendable, allowing users to make their own customization with ease. Layout Slots Default them...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/zh/themes/default/extending.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/themes/default/extending.html"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"Extending"}],["meta",{"property":"og:description","content":"Extending VuePress default theme is widely used by users, so it is designed to be extendable, allowing users to make their own customization with ease. Layout Slots Default them..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://ecosystem.vuejs.press/images/cookbook/extending-a-theme-01.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-30T14:33:01.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-30T14:33:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Extending\\",\\"image\\":[\\"https://ecosystem.vuejs.press/images/cookbook/extending-a-theme-01.png\\"],\\"dateModified\\":\\"2024-01-30T14:33:01.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"Layout Slots","slug":"layout-slots","link":"#layout-slots","children":[]},{"level":2,"title":"Components Replacement","slug":"components-replacement","link":"#components-replacement","children":[]},{"level":2,"title":"Developing a Child Theme","slug":"developing-a-child-theme","link":"#developing-a-child-theme","children":[]}],"git":{"updatedTime":1706625181000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"autoDesc":true,"filePathRelative":"themes/default/extending.md"}');export{F as comp,x as data};
