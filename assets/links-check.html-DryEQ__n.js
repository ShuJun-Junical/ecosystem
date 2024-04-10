import{_ as n,r as l,o as a,c as p,a as t,b as s,e as o}from"./app-lBjCfO3h.js";const i={},c=s("h1",{id:"links-check",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#links-check"},[s("span",null,"links-check")])],-1),r=o(`<p>This plugin will check dead links in your markdown files.</p><p>This plugin has been integrated into the default theme.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> i</span><span style="color:#569CD6;"> -D</span><span style="color:#CE9178;"> @vuepress/plugin-links-check@next</span></span>
<span class="line"></span></code></pre></div><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">linksCheckPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-links-check&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#DCDCAA;">    linksCheckPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">      // options</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2><h3 id="dev" tabindex="-1"><a class="header-anchor" href="#dev"><span>dev</span></a></h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Details:</p><p>Whether check dead links in markdown in devServer</p></li></ul><h3 id="build" tabindex="-1"><a class="header-anchor" href="#build"><span>build</span></a></h3><ul><li><p>Type: <code>boolean | &#39;error&#39;</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Details:</p><p>Whether check dead links in markdown in build. If set to <code>&#39;error&#39;</code>, the build will fail if there are dead links.</p></li></ul><h3 id="exclude" tabindex="-1"><a class="header-anchor" href="#exclude"><span>exclude</span></a></h3><ul><li><p>Type: <code>(string | RegExp)[] | ((link: string, isDev: boolean) =&gt; boolean)</code></p></li><li><p>Details:</p><p>The links that should be excluded from checking. You can use a list of strings or regular expressions, or a function that returns a boolean.</p></li><li><p>Example:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">linksCheckPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">  exclude:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#6A9955;">    // exclude links by string</span></span>
<span class="line"><span style="color:#CE9178;">    &#39;/exclude-link&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#6A9955;">    // exclude links by regex</span></span>
<span class="line"><span style="color:#D16969;">    /</span><span style="color:#D7BA7D;">\\/</span><span style="color:#D16969;">exclude-link-regex/</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  // or exclude links by function</span></span>
<span class="line"><span style="color:#DCDCAA;">  exclude</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">link</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">isDev</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#C586C0;">    if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">isDev</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#C586C0;">      return</span><span style="color:#9CDCFE;"> link</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">startsWith</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;/exclude-link-dev&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#C586C0;">    return</span><span style="color:#9CDCFE;"> link</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">startsWith</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;/exclude-link-build&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,12);function d(D,u){const e=l("NpmBadge");return a(),p("div",null,[c,t(e,{package:"@vuepress/plugin-links-check"}),r])}const y=n(i,[["render",d],["__file","links-check.html.vue"]]),m=JSON.parse('{"path":"/plugins/links-check.html","title":"links-check","lang":"en-US","frontmatter":{"description":"links-check","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/ecosystem/zh/plugins/links-check.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/plugins/links-check.html"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"links-check"}],["meta",{"property":"og:description","content":"links-check"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-21T05:33:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-21T05:33:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"links-check\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-21T05:33:46.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[{"level":3,"title":"dev","slug":"dev","link":"#dev","children":[]},{"level":3,"title":"build","slug":"build","link":"#build","children":[]},{"level":3,"title":"exclude","slug":"exclude","link":"#exclude","children":[]}]}],"git":{"updatedTime":1708493626000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"autoDesc":true,"filePathRelative":"plugins/links-check.md"}');export{y as comp,m as data};
