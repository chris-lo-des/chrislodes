(function (d) {
  var config = {
      kitId: "slt4xca",
      scriptTimeout: 3000,
      async: true,
    },
    h = d.documentElement,
    t = setTimeout(function () {
      h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
    }, config.scriptTimeout),
    tk = d.createElement("script"),
    f = false,
    s = d.getElementsByTagName("script")[0],
    a;
  h.className += " wf-loading";
  tk.src = "https://use.typekit.net/" + config.kitId + ".js";
  tk.async = true;
  tk.onload = tk.onreadystatechange = function () {
    a = this.readyState;
    if (f || (a && a != "complete" && a != "loaded")) return;
    f = true;
    clearTimeout(t);
    try {
      Typekit.load(config);
    } catch (e) {}
  };
  s.parentNode.insertBefore(tk, s);
})(document);

class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <!-- nav bar-->
        <section class="nav">
          <div id="nleft">
            <a href="about.html">Info</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a id="mobhide" href="about.html">突っ込み</a>
          </div>
          <div id="ncenter">
            <a href="index.html">「&nbsp;Chris&nbsp;Lo&nbsp;」 </a>
          </div>
          <div id="nright">
            <a href="about.html">突っ込み ON</a>
          </div>
        </section>
        `;
  }
}

customElements.define("cl-header", MyHeader);
