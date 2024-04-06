import{_ as a,r as s,o as n,c as o,b as e,d as t,a as p,w as r,e as l}from"./app-y4xzv_qM.js";const d={},c=l('<h1 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>Config</span></a></h1><h2 id="hostname" tabindex="-1"><a class="header-anchor" href="#hostname"><span>hostname</span></a></h2><ul><li><p>Type: <code>string</code></p></li><li><p>Required: Yes</p></li><li><p>Details:</p><p>The domain name where the current site is deployed, the plugin needs this option to work.</p></li></ul><h2 id="extraurls" tabindex="-1"><a class="header-anchor" href="#extraurls"><span>extraUrls</span></a></h2><ul><li><p>Type: <code>string[]</code></p></li><li><p>Details:</p><p>Extra link to be included.</p><p>If you have some links not including in VuePress Router (normally in public directory or generated by other tools directly), you may need this option.</p></li><li><p>Example: <code>[&#39;/about.html&#39;, &#39;/api/&#39;]</code></p></li></ul><h2 id="excludepaths" tabindex="-1"><a class="header-anchor" href="#excludepaths"><span>excludePaths</span></a></h2><ul><li><p>Type: <code>string[]</code></p></li><li><p>Default: <code>[&#39;/404.html&#39;]</code></p></li><li><p>Details:</p><p>Urls excluding from sitemap, starting with absolute path.</p><p>By default, all the urls generated by VuePress (excluding 404 page) will be added into sitemap.</p></li></ul><h2 id="devserver" tabindex="-1"><a class="header-anchor" href="#devserver"><span>devServer</span></a></h2><ul><li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>false</code></p></li><li><p>Details:</p><p>Whether enabled in devServer.</p></li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>For performance reasons, we do not provide hot reload. Reboot your devServer to sync your changes.</p></div><h2 id="devhostname" tabindex="-1"><a class="header-anchor" href="#devhostname"><span>devHostname</span></a></h2><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&quot;http://localhost:${port}&quot;</code></p></li><li><p>Details:</p><p>Hostname to use in devServer</p></li></ul><h2 id="sitemapfilename" tabindex="-1"><a class="header-anchor" href="#sitemapfilename"><span>sitemapFilename</span></a></h2><ul><li><p>Type: <code>string</code></p></li><li><p>Default value: <code>&quot;sitemap.xml&quot;</code></p></li><li><p>Details:</p><p>The output filename, relative to output directory.</p></li></ul><h2 id="sitemapxslfilename" tabindex="-1"><a class="header-anchor" href="#sitemapxslfilename"><span>sitemapXSLFilename</span></a></h2><ul><li><p>Type: <code>string</code></p></li><li><p>Default value: <code>&quot;sitemap.xsl&quot;</code></p></li><li><p>Details:</p><p>Output xsl filename, relative to dest folder.</p></li></ul><h2 id="sitemapxsltemplate" tabindex="-1"><a class="header-anchor" href="#sitemapxsltemplate"><span>sitemapXSLTemplate</span></a></h2><ul><li><p>Type: <code>string</code></p></li><li><p>Default value: <code>&quot;@vuepress/plugin-sitemap/templates/sitemap.xsl&quot;</code></p></li><li><p>Details:</p><p>XSL content used as template.</p></li></ul><h2 id="changefreq" tabindex="-1"><a class="header-anchor" href="#changefreq"><span>changefreq</span></a></h2>',19),h=e("li",null,[e("p",null,[t("Type: "),e("code",null,'"always" | "hourly" | "daily" | "weekly" |"monthly" | "yearly" | "never"')])],-1),m=e("li",null,[e("p",null,[t("Default value: "),e("code",null,'"daily"')])],-1),u=e("p",null,"Details:",-1),g=l('<h2 id="priority" tabindex="-1"><a class="header-anchor" href="#priority"><span>priority</span></a></h2><ul><li><p>Type: <code>number</code></p></li><li><p>Default: <code>0.5</code></p></li><li><p>Details:</p><p>Page priority, from <code>0</code> to <code>1</code>.</p></li></ul><h2 id="modifytimegetter" tabindex="-1"><a class="header-anchor" href="#modifytimegetter"><span>modifyTimeGetter</span></a></h2><ul><li><p>Type: <code>(page: Page, app: App) =&gt; string</code></p></li><li><p>Details:</p><p>Last modify time getter. By default, the plugin will use the timestamp generated by git plugin.</p></li></ul>',4);function f(y,v){const i=s("RouteLink");return n(),o("div",null,[c,e("ul",null,[h,m,e("li",null,[u,e("p",null,[t("Page default update frequency, will be overridden by "),p(i,{to:"/plugins/sitemap/frontmatter.html#sitemap-changefreq"},{default:r(()=>[t("sitemap.changefreq")]),_:1}),t(" in Frontmatter.")])])]),g])}const T=a(d,[["render",f],["__file","config.html.vue"]]),b=JSON.parse('{"path":"/plugins/sitemap/config.html","title":"Config","lang":"en-US","frontmatter":{"description":"Config hostname Type: string Required: Yes Details: The domain name where the current site is deployed, the plugin needs this option to work. extraUrls Type: string[] Details: E...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/zh/plugins/sitemap/config.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/plugins/sitemap/config.html"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"Config"}],["meta",{"property":"og:description","content":"Config hostname Type: string Required: Yes Details: The domain name where the current site is deployed, the plugin needs this option to work. extraUrls Type: string[] Details: E..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-31T17:59:51.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-31T17:59:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Config\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-31T17:59:51.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"hostname","slug":"hostname","link":"#hostname","children":[]},{"level":2,"title":"extraUrls","slug":"extraurls","link":"#extraurls","children":[]},{"level":2,"title":"excludePaths","slug":"excludepaths","link":"#excludepaths","children":[]},{"level":2,"title":"devServer","slug":"devserver","link":"#devserver","children":[]},{"level":2,"title":"devHostname","slug":"devhostname","link":"#devhostname","children":[]},{"level":2,"title":"sitemapFilename","slug":"sitemapfilename","link":"#sitemapfilename","children":[]},{"level":2,"title":"sitemapXSLFilename","slug":"sitemapxslfilename","link":"#sitemapxslfilename","children":[]},{"level":2,"title":"sitemapXSLTemplate","slug":"sitemapxsltemplate","link":"#sitemapxsltemplate","children":[]},{"level":2,"title":"changefreq","slug":"changefreq","link":"#changefreq","children":[]},{"level":2,"title":"priority","slug":"priority","link":"#priority","children":[]},{"level":2,"title":"modifyTimeGetter","slug":"modifytimegetter","link":"#modifytimegetter","children":[]}],"git":{"updatedTime":1706723991000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":3}]},"autoDesc":true,"filePathRelative":"plugins/sitemap/config.md"}');export{T as comp,b as data};
