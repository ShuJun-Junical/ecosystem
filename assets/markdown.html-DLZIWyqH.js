import{_ as r,r as l,o as d,c as u,a as e,b as s,d as n,w as a,e as i}from"./app-y4xzv_qM.js";const m={},D=s("h1",{id:"markdown",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markdown"},[s("span",null,"Markdown")])],-1),v=s("h2",{id:"custom-containers",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#custom-containers"},[s("span",null,"Custom Containers")])],-1),y=i(`<p>Usage:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">::: </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">type</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;"> [</span><span style="color:#CE9178;">title</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">[</span><span style="color:#CE9178;">content</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span></code></pre></div><p>The <code>type</code> is required, and the <code>title</code> and <code>content</code> are optional.</p><p>Supported <code>type</code> :</p>`,4),h=s("li",null,[s("code",null,"tip")],-1),g=s("li",null,[s("code",null,"warning")],-1),b=s("li",null,[s("code",null,"danger")],-1),k=s("li",null,[s("code",null,"details")],-1),_=s("ul",null,[s("li",null,[s("code",null,"code-group")]),s("li",null,[s("code",null,"code-group-item")])],-1),C=s("li",null,[s("p",null,"Example 1 (default title):")],-1),E=i(`<p><strong>Input</strong></p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">::: tip</span></span>
<span class="line"><span style="color:#D4D4D4;">This is a tip</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">::: warning</span></span>
<span class="line"><span style="color:#D4D4D4;">This is a warning</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">::: danger</span></span>
<span class="line"><span style="color:#D4D4D4;">This is a dangerous warning</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">::: details</span></span>
<span class="line"><span style="color:#D4D4D4;">This is a details block</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>This is a tip</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This is a warning</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>This is a dangerous warning</p></div><details class="custom-container details"><p>This is a details block</p></details><ul><li>Example 2 (custom title):</li></ul><p><strong>Input</strong></p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">::: danger STOP</span></span>
<span class="line"><span style="color:#D4D4D4;">Danger zone, do not proceed</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">::: details Click me to view the code</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`ts</span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;Hello, VuePress!&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p><div class="custom-container danger"><p class="custom-container-title">STOP</p><p>Danger zone, do not proceed</p></div><details class="custom-container details"><summary>Click me to view the code</summary><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;Hello, VuePress!&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span></code></pre></div></details><ul><li>Example 3 (code group alias):</li></ul><p><strong>Input</strong></p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">:::: code-group</span></span>
<span class="line"><span style="color:#D4D4D4;">::: code-group-item FOO</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`ts</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> foo</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;foo&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">::: code-group-item BAR</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`ts</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> bar</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;bar&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"><span style="color:#D4D4D4;">::::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p>`,17),f=s("div",{class:"language-typescript","data-ext":"ts","data-title":"ts"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E",color:"#D4D4D4"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"const"),s("span",{style:{color:"#4FC1FF"}}," foo"),s("span",{style:{color:"#D4D4D4"}}," = "),s("span",{style:{color:"#CE9178"}},"'foo'")]),n(`
`),s("span",{class:"line"})])])],-1),w=s("div",{class:"language-typescript","data-ext":"ts","data-title":"ts"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E",color:"#D4D4D4"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"const"),s("span",{style:{color:"#4FC1FF"}}," bar"),s("span",{style:{color:"#D4D4D4"}}," = "),s("span",{style:{color:"#CE9178"}},"'bar'")]),n(`
`),s("span",{class:"line"})])])],-1);function x(F,T){const p=l("NpmBadge"),o=l("RouteLink"),t=l("CodeGroupItem"),c=l("CodeGroup");return d(),u("div",null,[D,e(p,{package:"@vuepress/theme-default"}),v,s("ul",null,[s("li",null,[y,s("ul",null,[h,g,b,k,s("li",null,[n("Alias of "),e(o,{to:"/themes/default/components.html#codegroup"},{default:a(()=>[n("CodeGroup")]),_:1}),n(" and "),e(o,{to:"/themes/default/components.html#codegroupitem"},{default:a(()=>[n("CodeGroupItem")]),_:1}),n(": "),_])])]),C]),E,e(c,null,{default:a(()=>[e(t,{title:"FOO"},{default:a(()=>[f]),_:1}),e(t,{title:"BAR"},{default:a(()=>[w]),_:1})]),_:1})])}const A=r(m,[["render",x],["__file","markdown.html.vue"]]),O=JSON.parse('{"path":"/themes/default/markdown.html","title":"Markdown","lang":"en-US","frontmatter":{"description":"Markdown","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/zh/themes/default/markdown.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/themes/default/markdown.html"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"Markdown"}],["meta",{"property":"og:description","content":"Markdown"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-30T09:08:43.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-30T09:08:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Markdown\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-30T09:08:43.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"Custom Containers","slug":"custom-containers","link":"#custom-containers","children":[]}],"git":{"updatedTime":1706605723000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"autoDesc":true,"filePathRelative":"themes/default/markdown.md"}');export{A as comp,O as data};
