import{_ as o,r as n,o as i,c as t,a as l,b as s,d as c,e as a}from"./app-y4xzv_qM.js";const r={},D=s("h1",{id:"photo-swipe",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#photo-swipe"},[s("span",null,"photo-swipe")])],-1),d=a(`<p>This plugin will make the pictures in the body of the page enter the preview mode when clicked.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> i</span><span style="color:#569CD6;"> -D</span><span style="color:#CE9178;"> @vuepress/plugin-photo-swipe@next</span></span>
<span class="line"></span></code></pre></div><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">photoSwipePlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-photo-swipe&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#DCDCAA;">    photoSwipePlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">      // options</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><p>In preview mode, you can:</p><ul><li>Swipe left and right to preview other pictures on the page in order</li><li>View the description of the picture</li><li>Zoom in and zoom out the picture</li><li>View pictures in full screen</li><li>Download pictures</li><li>Share pictures</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li>Besides clicking &quot;×&quot; in the upper right corner to exit the preview mode, scrolling up and down more than a certain distance will also exit preview mode.</li><li>On mobile devices, or using the PC trackpad, you can use pan and zoom gestures to pan and zoom in the preview mode.</li></ul></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2><h3 id="selector" tabindex="-1"><a class="header-anchor" href="#selector"><span>selector</span></a></h3><ul><li>Type: <code>string | string[]</code></li><li>Default: <code>&quot;.theme-default-content :not(a) &gt; img:not([no-view])&quot;</code></li><li>Details: Image selector</li></ul><h3 id="scrolltoclose" tabindex="-1"><a class="header-anchor" href="#scrolltoclose"><span>scrollToClose</span></a></h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li><li>Details: Whether close the current image when scrolling.</li></ul><h3 id="delay" tabindex="-1"><a class="header-anchor" href="#delay"><span>delay</span></a></h3><ul><li><p>Type: <code>number</code></p></li><li><p>Default: <code>800</code></p></li><li><p>Details:</p><p>The delay of operating dom, in ms.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If the theme you are using has a switching animation, it is recommended to configure this option to <code>Switch animation duration + 200</code>.</p></div></li></ul><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales"><span>locales</span></a></h3><ul><li><p>Type: <code>PhotoSwipePluginLocaleConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> PhotoSwipePluginLocaleData</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Close button label text</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  close</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Full screen button label text</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  fullscreen</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Share button label text</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  share</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Zoom button label text</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  zoom</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Previous image button label text</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  prev</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Next image button label text</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  next</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Share button config</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  buttons</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">PhotoSwipeDefaultUI</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">ShareButtonData</span><span style="color:#D4D4D4;">[]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> PhotoSwipePluginLocaleConfig</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  [</span><span style="color:#9CDCFE;">localePath</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">]: </span><span style="color:#4EC9B0;">PhotoSwipePluginLocaleData</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Details: Locales config for photo-swipe plugin.</p></li><li><p>Example:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineUserConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">photoSwipePlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-photo-swipe&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineUserConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">  locales:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#CE9178;">    &#39;/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">      // this is a supported language</span></span>
<span class="line"><span style="color:#9CDCFE;">      lang:</span><span style="color:#CE9178;"> &#39;en-US&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#CE9178;">    &#39;/xx/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">      // the plugin does not support this language</span></span>
<span class="line"><span style="color:#9CDCFE;">      lang:</span><span style="color:#CE9178;"> &#39;mm-NN&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#DCDCAA;">    photoSwipePlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">      locales:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#CE9178;">        &#39;/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">          // Override share label text</span></span>
<span class="line"><span style="color:#9CDCFE;">          share:</span><span style="color:#CE9178;"> &#39;Share with friends&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CE9178;">        &#39;/xx/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">          // Complete locale config for \`mm-NN\` language here</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><details class="custom-container details"><summary>Built-in Supported Languages</summary><ul><li><strong>Simplified Chinese</strong> (zh-CN)</li><li><strong>Traditional Chinese</strong> (zh-TW)</li><li><strong>English (United States)</strong> (en-US)</li><li><strong>German</strong> (de-DE)</li><li><strong>German (Australia)</strong> (de-AT)</li><li><strong>Russian</strong> (ru-RU)</li><li><strong>Ukrainian</strong> (uk-UA)</li><li><strong>Vietnamese</strong> (vi-VN)</li><li><strong>Portuguese (Brazil)</strong> (pt-BR)</li><li><strong>Polish</strong> (pl-PL)</li><li><strong>French</strong> (fr-FR)</li><li><strong>Spanish</strong> (es-ES)</li><li><strong>Slovak</strong> (sk-SK)</li><li><strong>Japanese</strong> (ja-JP)</li><li><strong>Turkish</strong> (tr-TR)</li><li><strong>Korean</strong> (ko-KR)</li><li><strong>Finnish</strong> (fi-FI)</li><li><strong>Indonesian</strong> (id-ID)</li><li><strong>Dutch</strong> (nl-NL)</li></ul></details><h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter"><span>Frontmatter</span></a></h2><h3 id="photoswipe" tabindex="-1"><a class="header-anchor" href="#photoswipe"><span>photoSwipe</span></a></h3><ul><li>Type: <code>string | false</code></li><li>Details:</li></ul><p>Image selector for the current page, or <code>false</code> to disable photo-swipe in current page.</p><h2 id="client-config" tabindex="-1"><a class="header-anchor" href="#client-config"><span>Client Config</span></a></h2><h3 id="definephotoswipeconfig" tabindex="-1"><a class="header-anchor" href="#definephotoswipeconfig"><span>definePhotoSwipeConfig</span></a></h3>`,23),y={href:"http://photoswipe.com/",target:"_blank",rel:"noopener noreferrer"},u=s("code",null,"photo-swipe",-1),v=a(`<div class="language-typescript" data-ext="ts" data-title=".vuepress/client.ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">definePhotoSwipeConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-photo-swipe/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">definePhotoSwipeConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">  // set photoswipe options here</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {}</span></span>
<span class="line"></span></code></pre></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h2><p>You can also call photoswipe with apis.</p><p><code>createPhotoSwipe</code> allows you to programmatically view images links with PhotoSwipe:</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#9CDCFE;"> setup</span><span style="color:#9CDCFE;"> lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;ts&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">onMounted</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">onUnmounted</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vue&#39;</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">createPhotoSwipe</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &quot;@vuepress/plugin-photo-swipe/client&quot;</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">let</span><span style="color:#9CDCFE;"> state</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">PhotoSwipeState</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">null</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">null</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#DCDCAA;"> openPhotoSwipe</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">index</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  state</span><span style="color:#D4D4D4;">?.</span><span style="color:#DCDCAA;">open</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">index</span><span style="color:#D4D4D4;"> - </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">onMounted</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">async</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  // create a new photoswipe instance with image links</span></span>
<span class="line"><span style="color:#9CDCFE;">  state</span><span style="color:#D4D4D4;">=  </span><span style="color:#C586C0;">await</span><span style="color:#DCDCAA;"> createPhotoSwipe</span><span style="color:#D4D4D4;">(</span></span>
<span class="line"><span style="color:#D4D4D4;">    [</span></span>
<span class="line"><span style="color:#CE9178;">      &#39;https://exmaple.com/image1.png&#39;</span></span>
<span class="line"><span style="color:#CE9178;">      &#39;https://exmaple.com/image2.png&#39;</span></span>
<span class="line"><span style="color:#CE9178;">      &#39;https://exmaple.com/image3.png&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">    ],</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#6A9955;">      // photoswipe options</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  );</span></span>
<span class="line"><span style="color:#D4D4D4;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">onUnmounted</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  state</span><span style="color:#D4D4D4;">?.</span><span style="color:#DCDCAA;">destroy</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">button</span><span style="color:#C586C0;"> v-for</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">i</span><span style="color:#569CD6;"> in</span><span style="color:#B5CEA8;"> 3</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#D4D4D4;"> @</span><span style="color:#9CDCFE;">click</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#DCDCAA;">openPhotoSwipe</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">)</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">open photo {{ </span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;"> }}</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">button</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>registerPhotoSwipe</code> allows you to register photoswipe for the given image elements:</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#9CDCFE;"> setup</span><span style="color:#9CDCFE;"> lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;ts&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">onMounted</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">onUnmounted</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vue&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">registerPhotoSwipe</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-photo-swipe/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">let</span><span style="color:#DCDCAA;"> destroy</span><span style="color:#D4D4D4;">: () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#4EC9B0;"> void</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">null</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">onMounted</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">async</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#C586C0;">  await</span><span style="color:#DCDCAA;"> nextTick</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">  const</span><span style="color:#4FC1FF;"> images</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">Array</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">from</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">document</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">querySelectorAll</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;img&#39;</span><span style="color:#D4D4D4;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  // create a new photoswipe instance on image elements</span></span>
<span class="line"><span style="color:#9CDCFE;">  state</span><span style="color:#D4D4D4;"> = </span><span style="color:#C586C0;">await</span><span style="color:#DCDCAA;"> registerPhotoSwipe</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">images</span><span style="color:#D4D4D4;">, {</span></span>
<span class="line"><span style="color:#6A9955;">    // photoswipe options</span></span>
<span class="line"><span style="color:#D4D4D4;">  })</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">onUnmounted</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#DCDCAA;">  destroy</span><span style="color:#D4D4D4;">?.()</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="styles" tabindex="-1"><a class="header-anchor" href="#styles"><span>Styles</span></a></h2><p>You can customize the style via CSS variables:</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D7BA7D;">:root</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  --photo-swipe-bullet</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#fff</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">  --photo-swipe-bullet-active</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#3eaf7c</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div>`,10);function m(C,h){const e=n("NpmBadge"),p=n("ExternalLinkIcon");return i(),t("div",null,[D,l(e,{package:"@vuepress/plugin-photo-swipe"}),d,s("p",null,[c("Options passed to "),s("a",y,[u,l(p)])]),v])}const b=o(r,[["render",m],["__file","photo-swipe.html.vue"]]),E=JSON.parse('{"path":"/plugins/photo-swipe.html","title":"photo-swipe","lang":"en-US","frontmatter":{"description":"photo-swipe","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/zh/plugins/photo-swipe.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/plugins/photo-swipe.html"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"photo-swipe"}],["meta",{"property":"og:description","content":"photo-swipe"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-21T03:54:27.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-21T03:54:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"photo-swipe\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-21T03:54:27.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[{"level":3,"title":"selector","slug":"selector","link":"#selector","children":[]},{"level":3,"title":"scrollToClose","slug":"scrolltoclose","link":"#scrolltoclose","children":[]},{"level":3,"title":"delay","slug":"delay","link":"#delay","children":[]},{"level":3,"title":"locales","slug":"locales","link":"#locales","children":[]}]},{"level":2,"title":"Frontmatter","slug":"frontmatter","link":"#frontmatter","children":[{"level":3,"title":"photoSwipe","slug":"photoswipe","link":"#photoswipe","children":[]}]},{"level":2,"title":"Client Config","slug":"client-config","link":"#client-config","children":[{"level":3,"title":"definePhotoSwipeConfig","slug":"definephotoswipeconfig","link":"#definephotoswipeconfig","children":[]}]},{"level":2,"title":"API","slug":"api","link":"#api","children":[]},{"level":2,"title":"Styles","slug":"styles","link":"#styles","children":[]}],"git":{"updatedTime":1708487667000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":4}]},"autoDesc":true,"filePathRelative":"plugins/photo-swipe.md"}');export{b as comp,E as data};
