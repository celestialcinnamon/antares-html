<h1 id="ang-anchor-tag-a">Ang Anchor Tag <code>&lt;a&gt;</code></h1>
<p>Ang <strong>HTML <code>&lt;a&gt;</code> element</strong> (na tinatawag ding <em>anchor</em> element) ang ginagamit para gumawa ng <i>hyperlink</i><sup class="footnote-ref"><a href="#fn1" id="fnref1">1</a></sup> papunta sa ibang web pages,  mga bahagi ng web page ding iyon, mga email address, o iba pang URL.</p>
<h2 id="functionality">Functionality</h2>
<p>Kapag ang <code>a</code> element ay may <code>href</code> attribute, ibig sabihin, magiging hyperlink ito.</p>
<p>Kapag wala namang <code>href</code> attribute ang <code>a</code> element, magiging regular na text lang ang laman ng <code>a</code> element pero ire-represent nito ang isang part kung saan puwede sanang nagkaroon ng hyperlink kung naging relevant iyon sa nakapalibot na content ng page.</p>
<p>Ang mga attributes na <code>target</code>, <code>download</code>, <code>rel</code>, <code>rev</code>, <code>hreflang</code>, <code>type</code>, at <code>referrerpolicy</code> ay hindi dapat ilagay sa <code>a</code> element kung wala naman itong <code>href</code> attribute.</p>
<h2 id="attributes">Attributes</h2>
<h3 id="download"><code>download</code></h3>
<p>Sinasabi ng attribute na ito sa mga browser na dapat nitong i-download ang URL sa halip na mag-navigate papunta roon, kaya maglalabas ito ng prompt sa user para i-save ang URL bilang local file. Kung may value ang attribute na ito, ito ang magiging default filename ng ida-download na URL (pero siyempre, puwede pa rin itong palitan ng user kung gusto nila). Kahit na walang restrictions sa puwedeng maging values ng attribute na ito, ang mga <code>\</code> at <code>/</code> ay kino-convert ng browsers bilang underscores (<code>_</code>). Bukod pa riyan, maraming file systems ang may restrictions sa mga punctuation marks sa file names, kaya ia-adjust ng browsers ang suggested filenames ayon dito.</p>
<pre class=" language-html"><code class="prism  language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> 
<span class="token attr-name">download</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>antares-logo.png<span class="token punctuation">"</span></span>
<span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://celestialcinnamon.github.io/antares-blog/images/android-chrome-192x192.png?v=yyL3E0AWom<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
I-download ang file na ito
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>Sa example na ito, ida-download ng browser ang file na <code>android-chrome-192x192.png</code> sa halip na i-display ito. Bukod pa riyan, ang magiging default filename nito ay ang value ng <code>download</code> attribute na <code>antares-logo.png</code>.</p>
<h4 id="notes">Notes:</h4>
<ul>
<li>Gumagana lang ang attribute na ito sa mga <em>same-origin URLs</em><sup class="footnote-ref"><a href="#fn2" id="fnref2">2</a></sup></li>
<li>Kahit na kailangang <em>same-origin</em> ang mga HTTP(s) URLs, puwedeng gamitin ang mga <code>blob:</code> at <code>data:</code> URLs para puwedeng i-download ang mga content na na-generate gamit ang JavaScript, gaya halimbawa sa mga image-editing Web applications.</li>
</ul>
<h3 id="href"><code>href</code></h3>
<p>Naglalaman ng URL<sup class="footnote-ref"><a href="#fn3" id="fnref3">3</a></sup> o URL fragment<sup class="footnote-ref"><a href="#fn4" id="fnref4">4</a></sup>.</p>
<p>Ang URL fragment ay isang <em>name</em> na pinangungunahan ng isang hash mark <code>#</code>, na nagsasabi ng isang panloob na target location (samakatuwid nga, ang <code>id</code> ng isang HTML element) sa loob ng kasalukuyang document. Hindi lang HTTP ang tinatanggap na protocol ng mga browser. Halimbawa, ang <code>file:</code>, <code>ftp:</code>, at <code>mailto:</code> protocols ay gumagana sa maraming browsers.</p>
<h4 id="note">NOTE:</h4>
<p>Puwede mong gamitin ang <code>href="#top"</code> o ang <i>empty fragment</i> na <code>href="#"</code>para gumawa ng link papunta sa pinakatuktok ng kasalukuyang page. Sa katunayan, <a href="https://html.spec.whatwg.org/multipage/browsing-the-web.html#scroll-to-the-fragment-identifier" target="_blank">nakalagay ito sa HTML specification</a>.</p>
<h3 id="hreflang"><code>hreflang</code></h3>
<p>Ang attribute na ito ang nagsasabi ng wikang ginagamit sa naka-link na resource. Nakadepende lang ito sa author ng page kung ilalagay dahil wala naman itong built-in na functionality. Ang mga values na puwedeng ilagay dito ay nakalagay sa <a href="https://www.ietf.org/rfc/bcp/bcp47.txt" target="_blank">BCP47</a>.</p>
<h3 id="ping"><code>ping</code></h3>
<p>Naglalaman ng mga URLs na mano-notify kapag sinundan ang hyperlink na ito. Ang mga URL ay dapat na may space sa pagitan nila. Kapag sinundan ng reader ang link na ito, magpapadala ang browser ng <code>POST</code> request sa mga URL na ito (sa background). Karaniwan nang ginagamit ito sa tracking.</p>
<h3 id="referrerpolicy"><code>referrerpolicy</code></h3>
<p>Nagsasabi kung aling <em>referrer</em><sup class="footnote-ref"><a href="#fn5" id="fnref5">5</a></sup> ang ise-send kapag ipe-fetch na ang URL:</p>
<ul>
<li><code>no-referrer</code>
<ul>
<li>Ibig sabihin, hindi lalagyan ng <code>Referer:</code> ang request na ipapadala ng browser</li>
</ul>
</li>
<li><code>no-referrer-when-downgrade</code>
<ul>
<li>Ibig sabihin, walang <code>Referer:</code> na isasama sa request kung hindi naka-HTTPS ang URL na pupuntahan. Ito ang default.</li>
</ul>
</li>
<li><code>origin</code>
<ul>
<li>Ibig sabihin, ang magiging referrer ay ang <em>origin</em> ng page, pwero hindi kasama ang information pagkatapos ng domain.</li>
</ul>
</li>
<li><code>origin-when-cross-origin</code>
<ul>
<li>Ibig sabihin, kapag tumutukoy sa ibang Web site ang URL, tanging ang host, port, at scheme lang (e.g. <code>https://celestialcinnamon.github.io/</code>) ang isasama sa <code>Referer:</code> header ng request. Pero kung hindi naman ito lilipat ng site, kasama sa <code>Referer:</code> ang buong URL ng kasalukuyang page.</li>
</ul>
</li>
<li><code>strict-origin-when-cross-origin</code></li>
<li><code>unsafe-url</code>
<ul>
<li>Ibig sabihin, isasama sa referrer ang origin at path, pero hindi ang fragment (e.g. <code>#id</code>), password, o username.</li>
</ul>
</li>
</ul>
<h3 id="rel"><code>rel</code></h3>
<p>Nagsasabi kung ano ang kaugnayan ng URL na pupuntahan sa anchor element na ito. Ang value nito ay isang space-separated na listahan ng mga link types<sup class="footnote-ref"><a href="#fn6" id="fnref6">6</a></sup>.</p>
<h3 id="target"><code>target</code></h3>
<p>Nagsasabi kung saan idi-display ang naka-link na URL. Ito ay maaaring pangalan, o <em>keyword</em>, ng isang browsing context: isang tab, window, o <code>&lt;iframe&gt;</code>. Ang sumusunod na keywords ay may pantanging kahulugan:</p>
<ul>
<li><code>_self</code>: Ilo-load ang URL sa browsing context ding ito, samakatuwid nga, sa kaparehong tab o window na ginagamit ngayon. Ito ang default na behavior.</li>
<li><code>_blank</code>: Ilo-load ang URL sa isang bagong browsing context. Karaniwan nang bagong tab ito, pero puwede rin itong maging bagong window depende sa settings ng browser ng user.</li>
<li><code>_parent</code>: Ilo-load ang URL sa <em>parent</em> browsing context. Halimbawa, kapag ang link ay nasa loob ng isang <code>&lt;iframe&gt;</code>, bubukas ang link nito sa mismong tab ng HTML page kung nasaan ang <code>&lt;iframe&gt;</code>. Kung walang parent ang kasalukuyang browsing context, magiging gaya ito ng sa <code>_self</code>.</li>
</ul>
<h4 id="notes-1">NOTES:</h4>
<ul>
<li>Kapag ginagamit mo ang <code>target</code> na attribute, pag-isipan mo ring ilagay ang <code>rel="noreferrer"</code> para maiwasan ang pananamantala sa <code>window.opener</code> API.</li>
<li>Kapag ginagamit mo ang <code>target="_blank"</code>, bubukas ang link mo sa bagong tab, pero magra-run pa rin ito sa kaparehong process ng page mo. Kung may maraming JS operations ang bagong tab na ito, babagal ang dalawang pages mo. Para maiwasan ito, gamitin ang <code>rel="noopener"</code></li>
</ul>
<h3 id="type"><code>type</code></h3>
<p>Nagsasabi ng media type ng naka-link na URL. Gumagamit ito ng <abbr title="Ang MIME type (ngayon ay tinatawag nang &quot;media type&quot;, at kung minsan ay &quot;content type&quot;) ay isang *string* na kasamang isini-send sa mga files para malaman ang filetype nito (at para malaman ang format ng content nito, gaya halimbawa ng `audio/mp3` o `image/png`)">MIME</abbr> types. Ang paggamit nito ay nakadepende sa author ng page, yamang wala itong built-in functionality.</p>
<h2 id="mga-paalala">Mga Paalala</h2>
<h3 id="mga-security-at-privacy-concerns">Mga Security at Privacy Concerns</h3>
<p>Bagaman maraming magandang gamit ang <code>&lt;a&gt;</code> elements, puwede silang pagsamantalahan. Kung interesado ka sa mga dangers na ito (na hindi kasama sa sakop ng articles dito), puwede mong basahin ang article na <cite lang="en-US"><a hreflang="en-US" href="https://developer.mozilla.org/en-US/docs/Web/Security/Referer_header:_privacy_and_security_concerns" target="_blank">Referer header: privacy and security concerns</a></cite> mula sa MDN Web Docs.</p>
<p>Kapag ginamit mo naman ang <code>target="_blank"</code> nang hindi ginagamit ang <code>rel="noreferrer"</code> at <code>rel="noopener"</code>, magiging vulnerable ang website mo sa pananamantala sa <code>window.opener</code> API. Para sa mga potensyal na panganib at mga puwedeng solusyon dito, tingnan ang article na <cite lang="en-US"><a hreflang="en-US" href="https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/">Target="_blank"—the most underestimated vulnerability ever</a></cite> mula sa JitBit.</p>
<h3 id="mga-accessibility-concerns">Mga Accessibility Concerns</h3>
<h4 id="onclick-events"><code>onclick</code> Events</h4>
<p>Madalas abusuhin ang anchor tags sa <code>onclick</code> events para makagawa ng mga buttons. Sine-set ng ilan ang value ng <code>href</code> attribute sa <code>#</code> o <code>javascript:void(0)</code> para hindi-mag-refresh ang page kapag na-click ang “button”.</p>
<p>Hindi ito magandang idea. Nagkakaroon ng mga di-inaasahang epekto kapag kinokopya o dina-drag ang mga link, o kapag binubuksan ang mga ito sa bagong tab/window, at kapag ginagawa itong bookmark. At sa mga situwasyon kung saan dina-download pa lang ang JavaScript at na-click na ang link, nagkakaroon ito ng error. Nagbibigay din ito ng maling semantics sa mga assistive technology na gaya ng screen readers na ginagamit ng mga may kapansanan. Sa mga ganitong kaso, <em>dapat</em> mong gamitin ang <code>&lt;button&gt;</code>. Dapat mo lang gamitin ang anchor para sa pagna-navigate sa mga URL.</p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>Ang hyperlink ay sa isang web page isang reference na puwedeng piraso ng data na puwedeng sundan ng mambabasa kapag ito ay ni-click o ni-tap. <a href="#fnref1" class="footnote-backref">↩︎</a></p>
</li>
<li id="fn2" class="footnote-item"><p>Ibig sabihin nito, kailangang ang URL ng kasalukuyang Web page at ng file na ida-download ay may parehas na protocol, port, at host. Samakatuwid nga, hindi puwedeng i-download ng web page sa <code>app.antares.org</code> ang isang file galing sa <code>example.xyz</code>. <a href="#fnref2" class="footnote-backref">↩︎</a></p>
</li>
<li id="fn3" class="footnote-item"><p>Ang URL o Uniform Resource Locator ay isang paraan para mabigyan ng identification ang mga resource sa World Wide Web. Para itong <em>address</em> kung saan makikita ang iba’t ibang mga resource. <a href="#fnref3" class="footnote-backref">↩︎</a></p>
</li>
<li id="fn4" class="footnote-item"><p>Ang isang URL fragment ay isang bahagi ng URL na tumutukoy sa isang parte ng isang resource. Kung ang URL ay papunta sa isang buong Web page, isang buong file, o isang buong resource, ang fragment ay papunta sa isang bahagi lang ng Web page. Kadalasan na, ito ang bahaging kasunod ng <code>#</code> sa mga URL. <a href="#fnref4" class="footnote-backref">↩︎</a></p>
</li>
<li id="fn5" class="footnote-item"><p>Ang <code>Referer</code> ay isang request header (sa HTTP) na naglalaman ng address ng previous web page kung saan nanggaling ang link na pupuntahan ng browser. Dahil dito, nagkakaroon ang mga server ng kakayahan na malaman kung saan sila binibisita ng mga tao. Puwede itong gamitin sa analytics, logging, o optimized caching. Para sa karagdagang impormasyon, tingnan ang <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer" target="_blank">MDN article tungkol sa <code>Referer</code></a>. <a href="#fnref5" class="footnote-backref">↩︎</a></p>
</li>
<li id="fn6" class="footnote-item"><p>Ang mga link types ay <code>alternate</code>, <code>author</code>, <code>bookmark</code>,  <code>external</code>, <code>help</code>, <code>license</code>, <code>next</code>, <code>nofollow</code>, <code>noopener</code>, <code>noreferrer</code>, <code>prev</code>, <code>search</code>, at <code>tag</code>. Para sa higit pang impormasyon tungkol sa mga link types, tingnan ang <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types" target="_blank">MDN article tungkol sa mga link type</a>. <a href="#fnref6" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>

