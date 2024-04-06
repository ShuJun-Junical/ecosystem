import{_ as e,r as a,o as l,c as p,a as o,b as s,e as i}from"./app-y4xzv_qM.js";const t={},r=s("h1",{id:"reading-time",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#reading-time"},[s("span",null,"reading-time")])],-1),c=i(`<p>This plugin will generate word count and estimated reading time for each page.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> i</span><span style="color:#569CD6;"> -D</span><span style="color:#CE9178;"> @vuepress/plugin-reading-time@next</span></span>
<span class="line"></span></code></pre></div><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">readingTimePlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-reading-time&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#DCDCAA;">    readingTimePlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">      // options</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><p>The plugin will inject reading time information into the <code>readingTime</code> of the page data, where:</p><ul><li><code>readingTime.minutes</code>: estimated reading time (minutes) <code>number</code></li><li><code>readingTime.words</code>: word count <code>number</code></li></ul><h3 id="getting-data-on-node-side" tabindex="-1"><a class="header-anchor" href="#getting-data-on-node-side"><span>Getting data on Node Side</span></a></h3><p>For any page, you can get estimated reading time and word count from <code>page.data.readingTime</code>:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#9CDCFE;">page</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">data</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">readingTime</span><span style="color:#6A9955;"> // { minutes: 3.2, words: 934 }</span></span>
<span class="line"></span></code></pre></div><p>You can access it for further processing in the <code>extendsPage</code> lifecycle and other lifecycle:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  // ...</span></span>
<span class="line"><span style="color:#DCDCAA;">  extendsPage</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">page</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    page</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">data</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">readingTime</span><span style="color:#6A9955;"> // { minutes: 3.2, words: 934 }</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">  onInitialized</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    app</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">pages</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">map</span><span style="color:#D4D4D4;">((</span><span style="color:#9CDCFE;">page</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">      page</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">data</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">readingTime</span><span style="color:#6A9955;"> // { minutes: 3.2, words: 934 }</span></span>
<span class="line"><span style="color:#D4D4D4;">    })</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getting-data-on-client-side" tabindex="-1"><a class="header-anchor" href="#getting-data-on-client-side"><span>Getting data on Client Side</span></a></h3><p>You can import <code>useReadingTimeData</code> and <code>useReadingTimeLocale</code> from <code>@vuepress/plugin-reading-time/client</code> to get the reading time data and locale data of the current page:</p><div class="language-vue" data-ext="vue" data-title="vue"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#9CDCFE;"> setup</span><span style="color:#9CDCFE;"> lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;ts&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  useReadingTimeData</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">  useReadingTimeLocale</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">} </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-reading-time/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> readingTimeData</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">useReadingTimeData</span><span style="color:#D4D4D4;">() </span><span style="color:#6A9955;">// { minutes: 1.1, words: 100 }</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> readingTimeLocale</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">useReadingTimeLocale</span><span style="color:#D4D4D4;">() </span><span style="color:#6A9955;">// { time: &quot;1 minute&quot;, words: &quot;100 words&quot; }</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2><h3 id="wordperminute" tabindex="-1"><a class="header-anchor" href="#wordperminute"><span>wordPerMinute</span></a></h3><ul><li>Type: <code>number</code></li><li>Default: <code>300</code></li><li>Details: Reading speed (words per minute)</li></ul><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales"><span>locales</span></a></h3><ul><li><p>Type: <code>ReadingTimePluginLocaleConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> ReadingTimePluginLocaleData</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Word template, \`$word\` will be automatically replaced by actual words</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  word</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Text for less than one minute</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  less1Minute</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Time template</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  time</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> ReadingTimePluginLocaleConfig</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  [</span><span style="color:#9CDCFE;">localePath</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">]: </span><span style="color:#4EC9B0;">ReadingTimePluginLocaleData</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Required: No</p></li><li><p>Details:</p><p>Locales config for reading-time plugin.</p></li></ul><details class="custom-container details"><summary>Built-in Supported Languages</summary><ul><li><strong>Simplified Chinese</strong> (zh-CN)</li><li><strong>Traditional Chinese</strong> (zh-TW)</li><li><strong>English (United States)</strong> (en-US)</li><li><strong>German</strong> (de-DE)</li><li><strong>German (Australia)</strong> (de-AT)</li><li><strong>Russian</strong> (ru-RU)</li><li><strong>Ukrainian</strong> (uk-UA)</li><li><strong>Vietnamese</strong> (vi-VN)</li><li><strong>Portuguese (Brazil)</strong> (pt-BR)</li><li><strong>Polish</strong> (pl-PL)</li><li><strong>French</strong> (fr-FR)</li><li><strong>Spanish</strong> (es-ES)</li><li><strong>Slovak</strong> (sk-SK)</li><li><strong>Japanese</strong> (ja-JP)</li><li><strong>Turkish</strong> (tr-TR)</li><li><strong>Korean</strong> (ko-KR)</li><li><strong>Finnish</strong> (fi-FI)</li><li><strong>Indonesian</strong> (id-ID)</li><li><strong>Dutch</strong> (nl-NL)</li></ul></details><h2 id="client-api" tabindex="-1"><a class="header-anchor" href="#client-api"><span>Client API</span></a></h2><p>You can import and use these APIs from <code>@vuepress/plugin-reading-time/client</code>:</p><div class="custom-container tip"><p class="custom-container-title">These APIs won&#39;t throw even you disable the plugin.</p></div><h3 id="usereadingtimedata" tabindex="-1"><a class="header-anchor" href="#usereadingtimedata"><span>useReadingTimeData</span></a></h3><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> ReadingTime</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  /** Expect reading time in minute unit */</span></span>
<span class="line"><span style="color:#9CDCFE;">  minutes</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">number</span></span>
<span class="line"><span style="color:#6A9955;">  /** Words count of content */</span></span>
<span class="line"><span style="color:#9CDCFE;">  words</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">number</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#DCDCAA;"> useReadingTimeData</span><span style="color:#D4D4D4;">: () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#4EC9B0;"> ComputedRef</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">ReadingTime</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">null</span><span style="color:#D4D4D4;">&gt;</span></span>
<span class="line"></span></code></pre></div><p><code>null</code> is returned when the plugin is disabled.</p><h3 id="usereadingtimelocale" tabindex="-1"><a class="header-anchor" href="#usereadingtimelocale"><span>useReadingTimeLocale</span></a></h3><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> ReadingTimeLocale</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  /** Expect reading time text in locale */</span></span>
<span class="line"><span style="color:#9CDCFE;">  time</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#6A9955;">  /** Word count text in locale */</span></span>
<span class="line"><span style="color:#9CDCFE;">  words</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#DCDCAA;"> useReadingTimeLocale</span><span style="color:#D4D4D4;">: () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#4EC9B0;"> ComputedRef</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">ReadingTimeLocale</span><span style="color:#D4D4D4;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="advanced-usage" tabindex="-1"><a class="header-anchor" href="#advanced-usage"><span>Advanced Usage</span></a></h2><p>This plugin is targeting plugin and theme developers mostly, so we provide a &quot;Use API&quot;:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="your plugin or theme entry"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">useReadingTimePlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-reading-time&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#DCDCAA;">  useReadingTimePlugin</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">, {</span></span>
<span class="line"><span style="color:#6A9955;">    // your options</span></span>
<span class="line"><span style="color:#D4D4D4;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">  return</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    name:</span><span style="color:#CE9178;"> &#39;vuepress-plugin-xxx&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#6A9955;">// or vuepress-theme-xxx</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Why you should use &quot;Use API&quot;</p><ol><li>When you register a plugin multiple times, vuepress will gives you warning about that telling you only the first one takes effect. The <code>useReadingTimePlugin</code> automatically detects if the plugin is registered and avoid registering multiple times.</li><li>If you access reading time data in <code>extendsPage</code> lifecycle, then <code>@vuepress/plugin-reading-time</code> must be called before your theme or plugin, otherwise you will get <code>undefined</code> for <code>page.data.readingTime</code>. The <code>useReadingTimePlugin</code> ensures that <code>@vuepress/plugin-reading-time</code> is called before your theme or plugin.</li></ol></div><p>We also provides a <code>removeReadingTimePlugin</code> api to remove the plugin.You can use this to ensure your call take effect or clear the plugin:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="your plugin or theme entry"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">useReadingTimePlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-reading-time&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  // this removes any existing reading time plugin at this time</span></span>
<span class="line"><span style="color:#DCDCAA;">  removeReadingTimePlugin</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  // so this will take effect even if there is a reading time plugin registered before</span></span>
<span class="line"><span style="color:#DCDCAA;">  useReadingTimePlugin</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">, {</span></span>
<span class="line"><span style="color:#6A9955;">    // your options</span></span>
<span class="line"><span style="color:#D4D4D4;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">  return</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    name:</span><span style="color:#CE9178;"> &#39;vuepress-plugin-xxx&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#6A9955;">// or vuepress-theme-xxx</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34);function d(D,u){const n=a("NpmBadge");return l(),p("div",null,[r,o(n,{package:"@vuepress/plugin-reading-time"}),c])}const g=e(t,[["render",d],["__file","reading-time.html.vue"]]),m=JSON.parse('{"path":"/plugins/reading-time.html","title":"reading-time","lang":"en-US","frontmatter":{"description":"reading-time","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/zh/plugins/reading-time.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/plugins/reading-time.html"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"reading-time"}],["meta",{"property":"og:description","content":"reading-time"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-18T16:44:22.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-18T16:44:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"reading-time\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-18T16:44:22.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Getting data on Node Side","slug":"getting-data-on-node-side","link":"#getting-data-on-node-side","children":[]},{"level":3,"title":"Getting data on Client Side","slug":"getting-data-on-client-side","link":"#getting-data-on-client-side","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[{"level":3,"title":"wordPerMinute","slug":"wordperminute","link":"#wordperminute","children":[]},{"level":3,"title":"locales","slug":"locales","link":"#locales","children":[]}]},{"level":2,"title":"Client API","slug":"client-api","link":"#client-api","children":[{"level":3,"title":"useReadingTimeData","slug":"usereadingtimedata","link":"#usereadingtimedata","children":[]},{"level":3,"title":"useReadingTimeLocale","slug":"usereadingtimelocale","link":"#usereadingtimelocale","children":[]}]},{"level":2,"title":"Advanced Usage","slug":"advanced-usage","link":"#advanced-usage","children":[]}],"git":{"updatedTime":1708274662000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"autoDesc":true,"filePathRelative":"plugins/reading-time.md"}');export{g as comp,m as data};
