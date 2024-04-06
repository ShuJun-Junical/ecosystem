import{_ as o,r as i,o as p,c,b as e,d as l,a as t,w as a,e as s}from"./app-y4xzv_qM.js";const r={},d=e("h1",{id:"locale-config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#locale-config"},[e("span",null,"Locale Config")])],-1),u=e("p",null,"These options configure locale-related texts.",-1),h=e("p",null,"If your site is served in a different language besides English, you should set these options per locale to provide translations.",-1),g=e("h2",{id:"repolabel",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#repolabel"},[e("span",null,"repoLabel")])],-1),m=e("li",null,[e("p",null,[l("Type: "),e("code",null,"string")])],-1),f=e("p",null,"Details:",-1),y=e("p",null,"Specify the repository label of your project.",-1),b=e("p",null,[l("This will be used as the text of the "),e("em",null,"repository link"),l(", which will be displayed as the last item of the navbar.")],-1),_=e("h2",{id:"selectlanguagetext",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#selectlanguagetext"},[e("span",null,"selectLanguageText")])],-1),D=e("li",null,[e("p",null,[l("Type: "),e("code",null,"string")])],-1),v=e("p",null,"Details:",-1),x=e("p",null,[l("Specify the text of the "),e("em",null,"select language menu"),l(".")],-1),k=e("em",null,"select language menu",-1),T=s('<h2 id="selectlanguagearialabel" tabindex="-1"><a class="header-anchor" href="#selectlanguagearialabel"><span>selectLanguageAriaLabel</span></a></h2><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Specify the <code>aria-label</code> attribute of the <em>select language menu</em>.</p><p>This is mainly for a11y purpose.</p></li></ul><h2 id="selectlanguagename" tabindex="-1"><a class="header-anchor" href="#selectlanguagename"><span>selectLanguageName</span></a></h2>',3),C=e("li",null,[e("p",null,[l("Type: "),e("code",null,"string")])],-1),w=e("p",null,"Details:",-1),E=e("p",null,"Specify the name of the language of a locale.",-1),L=e("strong",null,"only take effect inside",-1),S=e("em",null,"select language menu",-1),N=e("li",null,[e("p",null,"Example:")],-1),F=s(`<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  locales:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#CE9178;">    &#39;/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">      lang:</span><span style="color:#CE9178;"> &#39;en-US&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#CE9178;">    &#39;/zh/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">      lang:</span><span style="color:#CE9178;"> &#39;zh-CN&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#9CDCFE;">  theme:</span><span style="color:#DCDCAA;"> defaultTheme</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">    locales:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#CE9178;">      &#39;/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">        selectLanguageName:</span><span style="color:#CE9178;"> &#39;English&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#CE9178;">      &#39;/zh/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">        selectLanguageName:</span><span style="color:#CE9178;"> &#39;简体中文&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">  }),</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="navbarlabel" tabindex="-1"><a class="header-anchor" href="#navbarlabel"><span>navbarLabel</span></a></h2><ul><li><p>Type: <code>null | string</code></p></li><li><p>Details:</p><p><code>aria-label</code> value for main navigation in navbar.</p></li></ul><h2 id="pagenavbarlabel" tabindex="-1"><a class="header-anchor" href="#pagenavbarlabel"><span>pageNavbarLabel</span></a></h2><ul><li><p>Type: <code>null | string</code></p></li><li><p>Details:</p><p><code>aria-label</code> value for next/previous page navigation.</p></li></ul><h2 id="editlinktext" tabindex="-1"><a class="header-anchor" href="#editlinktext"><span>editLinkText</span></a></h2><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&#39;Edit this page&#39;</code></p></li><li><p>Details:</p><p>Specify the text of the <em>edit this page</em> link.</p></li></ul><h2 id="lastupdatedtext" tabindex="-1"><a class="header-anchor" href="#lastupdatedtext"><span>lastUpdatedText</span></a></h2><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&#39;Last Updated&#39;</code></p></li><li><p>Details:</p><p>Specify the text of the <em>last updated timestamp</em> label.</p></li></ul><h2 id="contributorstext" tabindex="-1"><a class="header-anchor" href="#contributorstext"><span>contributorsText</span></a></h2><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&#39;Contributors&#39;</code></p></li><li><p>Details:</p><p>Specify the text of the <em>contributors list</em> label.</p></li></ul><h2 id="tip" tabindex="-1"><a class="header-anchor" href="#tip"><span>tip</span></a></h2>`,12),I=e("li",null,[e("p",null,[l("Type: "),e("code",null,"string")])],-1),A=e("li",null,[e("p",null,[l("Default: "),e("code",null,"'TIP'")])],-1),j=e("p",null,"Details:",-1),P=e("h2",{id:"warning",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#warning"},[e("span",null,"warning")])],-1),V=e("li",null,[e("p",null,[l("Type: "),e("code",null,"string")])],-1),z=e("li",null,[e("p",null,[l("Default: "),e("code",null,"'WARNING'")])],-1),R=e("p",null,"Details:",-1),U=e("h2",{id:"danger",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#danger"},[e("span",null,"danger")])],-1),M=e("li",null,[e("p",null,[l("Type: "),e("code",null,"string")])],-1),B=e("li",null,[e("p",null,[l("Default: "),e("code",null,"'DANGER'")])],-1),H=e("p",null,"Details:",-1),W=s('<h2 id="notfound" tabindex="-1"><a class="header-anchor" href="#notfound"><span>notFound</span></a></h2><ul><li><p>Type: <code>string[]</code></p></li><li><p>Default: <code>[&#39;Not Found&#39;]</code></p></li><li><p>Details:</p><p>Specify the messages of the 404 page.</p><p>The message will be randomly picked from the array when users enter the 404 page.</p></li></ul><h2 id="backtohome" tabindex="-1"><a class="header-anchor" href="#backtohome"><span>backToHome</span></a></h2><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&#39;Back to home&#39;</code></p></li><li><p>Details:</p><p>Specify the text of the <em>back to home</em> link in the 404 page.</p></li></ul><h2 id="openinnewwindow" tabindex="-1"><a class="header-anchor" href="#openinnewwindow"><span>openInNewWindow</span></a></h2>',5),Z=e("li",null,[e("p",null,[l("Type: "),e("code",null,"string")])],-1),G=e("li",null,[e("p",null,[l("Default: "),e("code",null,"'open in new window'")])],-1),J=e("p",null,"Details:",-1),O=e("code",null,"sr-only",-1),q=e("p",null,"This is mainly for a11y purpose.",-1),K=e("p",null,"Also see:",-1),Q=e("h2",{id:"togglecolormode",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#togglecolormode"},[e("span",null,"toggleColorMode")])],-1),X=e("li",null,[e("p",null,[l("Type: "),e("code",null,"string")])],-1),Y=e("li",null,[e("p",null,[l("Default: "),e("code",null,"'toggle color mode'")])],-1),$=e("li",null,[e("p",null,"Details:"),e("p",null,"Title text for the color mode toggle button."),e("p",null,"This is mainly for a11y purpose.")],-1),ee=e("p",null,"Also see:",-1),le=s('<h2 id="togglesidebar" tabindex="-1"><a class="header-anchor" href="#togglesidebar"><span>toggleSidebar</span></a></h2><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&#39;toggle sidebar&#39;</code></p></li><li><p>Details:</p><p>Title text for sidebar toggle button.</p><p>This is mainly for a11y purpose.</p></li></ul><h2 id="prev" tabindex="-1"><a class="header-anchor" href="#prev"><span>prev</span></a></h2><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&#39;Prev&#39;</code></p></li><li><p>Details:</p><p>Text for the previous page navigation button.</p></li></ul><h2 id="next" tabindex="-1"><a class="header-anchor" href="#next"><span>next</span></a></h2><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&#39;Next&#39;</code></p></li><li><p>Details:</p><p>Text for the next page navigation button.</p></li></ul>',6);function ne(te,ae){const n=i("RouteLink");return p(),c("div",null,[d,u,h,g,e("ul",null,[m,e("li",null,[f,y,b,e("p",null,[l("If you don't set this option explicitly, it will be automatically inferred from the "),t(n,{to:"/themes/default/config.html#repo"},{default:a(()=>[l("repo")]),_:1}),l(" option.")])])]),_,e("ul",null,[D,e("li",null,[v,x,e("p",null,[l("The "),k,l(" will appear next to the repository button in the navbar when you set multiple "),t(n,{to:"/themes/default/config.html#locales"},{default:a(()=>[l("locales")]),_:1}),l(" in your site config.")])])]),T,e("ul",null,[C,e("li",null,[w,E,e("p",null,[l("This option will "),L,l(" the "),t(n,{to:"/themes/default/config.html#locales"},{default:a(()=>[l("locales")]),_:1}),l(" of your theme config. It will be used as the language name of the locale, which will be displayed in the "),S,l(".")])]),N]),F,e("ul",null,[I,A,e("li",null,[j,e("p",null,[l("Specify the default title of the tip "),t(n,{to:"/themes/default/markdown.html#custom-containers"},{default:a(()=>[l("custom containers")]),_:1}),l(".")])])]),P,e("ul",null,[V,z,e("li",null,[R,e("p",null,[l("Specify the default title of the warning "),t(n,{to:"/themes/default/markdown.html#custom-containers"},{default:a(()=>[l("custom containers")]),_:1}),l(".")])])]),U,e("ul",null,[M,B,e("li",null,[H,e("p",null,[l("Specify the default title of the danger "),t(n,{to:"/themes/default/markdown.html#custom-containers"},{default:a(()=>[l("custom containers")]),_:1}),l(".")])])]),W,e("ul",null,[Z,G,e("li",null,[J,e("p",null,[l("Specify the "),O,l(" text of the "),t(n,{to:"/plugins/external-link-icon.html#externallinkicon"},{default:a(()=>[l("ExternalLinkIcon")]),_:1}),l(".")]),q]),e("li",null,[K,e("ul",null,[e("li",null,[t(n,{to:"/themes/default/plugin.html#themeplugins-externallinkicon"},{default:a(()=>[l("Default Theme > Plugin Config > themePlugins.externalLinkIcon")]),_:1})])])])]),Q,e("ul",null,[X,Y,$,e("li",null,[ee,e("ul",null,[e("li",null,[t(n,{to:"/themes/default/config.html#colormodeswitch"},{default:a(()=>[l("Default Theme > Config > colorModeSwitch")]),_:1})])])])]),le])}const oe=o(r,[["render",ne],["__file","locale.html.vue"]]),ie=JSON.parse('{"path":"/themes/default/locale.html","title":"Locale Config","lang":"en-US","frontmatter":{"description":"Locale Config These options configure locale-related texts. If your site is served in a different language besides English, you should set these options per locale to provide tr...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/zh/themes/default/locale.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/themes/default/locale.html"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"Locale Config"}],["meta",{"property":"og:description","content":"Locale Config These options configure locale-related texts. If your site is served in a different language besides English, you should set these options per locale to provide tr..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T11:54:39.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-25T11:54:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Locale Config\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-25T11:54:39.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"repoLabel","slug":"repolabel","link":"#repolabel","children":[]},{"level":2,"title":"selectLanguageText","slug":"selectlanguagetext","link":"#selectlanguagetext","children":[]},{"level":2,"title":"selectLanguageAriaLabel","slug":"selectlanguagearialabel","link":"#selectlanguagearialabel","children":[]},{"level":2,"title":"selectLanguageName","slug":"selectlanguagename","link":"#selectlanguagename","children":[]},{"level":2,"title":"navbarLabel","slug":"navbarlabel","link":"#navbarlabel","children":[]},{"level":2,"title":"pageNavbarLabel","slug":"pagenavbarlabel","link":"#pagenavbarlabel","children":[]},{"level":2,"title":"editLinkText","slug":"editlinktext","link":"#editlinktext","children":[]},{"level":2,"title":"lastUpdatedText","slug":"lastupdatedtext","link":"#lastupdatedtext","children":[]},{"level":2,"title":"contributorsText","slug":"contributorstext","link":"#contributorstext","children":[]},{"level":2,"title":"tip","slug":"tip","link":"#tip","children":[]},{"level":2,"title":"warning","slug":"warning","link":"#warning","children":[]},{"level":2,"title":"danger","slug":"danger","link":"#danger","children":[]},{"level":2,"title":"notFound","slug":"notfound","link":"#notfound","children":[]},{"level":2,"title":"backToHome","slug":"backtohome","link":"#backtohome","children":[]},{"level":2,"title":"openInNewWindow","slug":"openinnewwindow","link":"#openinnewwindow","children":[]},{"level":2,"title":"toggleColorMode","slug":"togglecolormode","link":"#togglecolormode","children":[]},{"level":2,"title":"toggleSidebar","slug":"togglesidebar","link":"#togglesidebar","children":[]},{"level":2,"title":"prev","slug":"prev","link":"#prev","children":[]},{"level":2,"title":"next","slug":"next","link":"#next","children":[]}],"git":{"updatedTime":1711367679000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":4}]},"autoDesc":true,"filePathRelative":"themes/default/locale.md"}');export{oe as comp,ie as data};
