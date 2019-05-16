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
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>Ang hyperlink ay sa isang web page isang reference na puwedeng piraso ng data na puwedeng sundan ng mambabasa kapag ito ay ni-click o ni-tap. <a href="#fnref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>

