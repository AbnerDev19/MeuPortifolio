/* design-plus.js — StrokeText (React Bits, versão JS puro) + efeitos extras. Requer GSAP. */
(function () {
  const NS = "http://www.w3.org/2000/svg";
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const el = (n, a = {}) => { const e = document.createElementNS(NS, n); for (const k in a) e.setAttribute(k, a[k]); return e; };

  function StrokeText(root, o = {}) {
    const c = Object.assign({
      text: root.dataset.strokeText || root.textContent.trim(),
      strokeColor: "#a7a8ff", fillColor: "currentColor", strokeWidth: 1.4,
      drawDuration: 1.6, fillDelay: 0.2, stagger: 0.05, ease: "power2.out",
      fontSize: 112, fontWeight: 800, letterSpacing: -3, hoverRedraw: true
    }, o);
    const chars = Array.from(c.text);
    const id = "st" + Math.random().toString(36).slice(2, 8);
    const font = `font-family:inherit;white-space:pre;font-size:${c.fontSize}px;font-weight:${c.fontWeight};letter-spacing:${c.letterSpacing}px`;

    const svg = el("svg", { class: "stroke-text__svg", "aria-hidden": "true", preserveAspectRatio: "xMidYMid meet", viewBox: `0 ${-c.fontSize} 600 ${c.fontSize * 1.3}` });
    svg.style.visibility = "hidden";
    const rect = el("rect");
    const clip = el("clipPath", { id, clipPathUnits: "userSpaceOnUse" });
    clip.appendChild(rect);
    const defs = el("defs"); defs.appendChild(clip);

    const mk = (cls, attrs) => {
      const t = el("text", Object.assign({ x: 0, y: 0, class: cls, style: font }, attrs));
      chars.forEach(ch => { const s = el("tspan"); s.textContent = ch; t.appendChild(s); });
      return t;
    };
    const stroke = mk("stroke-text__stroke", { fill: "none", stroke: c.strokeColor, "stroke-width": c.strokeWidth, "stroke-linejoin": "round", "stroke-linecap": "round" });
    const fill = mk("stroke-text__fill", { fill: c.fillColor, stroke: "none", "clip-path": `url(#${id})` });
    svg.append(defs, stroke, fill);

    root.classList.add("stroke-text");
    root.setAttribute("role", "img");
    root.setAttribute("aria-label", c.text);
    root.textContent = "";
    root.appendChild(svg);

    const strokes = Array.from(stroke.querySelectorAll("tspan"));
    const dash = Math.max(c.fontSize * 7, 200);
    let box = null;

    function measure() {
      let b; try { b = stroke.getBBox(); } catch (e) { return false; }
      if (!b || !b.width) return false;
      const pad = Math.max(c.strokeWidth, c.fontSize * 0.1);
      box = { x: b.x - pad, y: b.y - pad, width: b.width + pad * 2, height: b.height + pad * 2 };
      svg.setAttribute("viewBox", `${box.x} ${box.y} ${box.width} ${box.height}`);
      root.style.setProperty("--stroke-text-width", box.width + "px");
      rect.setAttribute("x", box.x); rect.setAttribute("y", box.y);
      rect.setAttribute("height", box.height); rect.setAttribute("width", box.width);
      svg.style.visibility = "visible";
      return true;
    }

    function play() {
      if (!window.gsap || reduce) return; // estado final já está visível
      gsap.killTweensOf([strokes, rect]);
      gsap.set(strokes, { strokeDasharray: dash, strokeDashoffset: dash, strokeOpacity: 1 });
      gsap.set(rect, { attr: { width: 0 } });
      const fillDur = Math.max(0.4, c.drawDuration * 0.5);
      gsap.timeline()
        .to(strokes, { strokeDashoffset: 0, duration: c.drawDuration, ease: c.ease, stagger: c.stagger }, 0)
        .to(rect, { attr: { width: box.width }, duration: fillDur, ease: "power2.inOut" }, c.drawDuration + c.fillDelay);
    }

    function start() { if (measure()) play(); }
    start();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(start);

    if (c.hoverRedraw && window.gsap && !reduce) {
      let busy = false;
      root.addEventListener("pointerenter", () => {
        if (busy || !box) return; busy = true;
        gsap.timeline({ onComplete: () => (busy = false) })
          .to(strokes, { strokeOpacity: 0, duration: 0.2 })
          .set(strokes, { strokeDashoffset: dash, strokeOpacity: 1 })
          .to(strokes, { strokeDashoffset: 0, duration: c.drawDuration * 0.8, ease: c.ease, stagger: c.stagger });
      });
    }
    return { replay: start };
  }
  window.StrokeText = StrokeText;

  document.addEventListener("DOMContentLoaded", () => {
    // 1) Título com StrokeText
    const t = document.getElementById("hero-stroke");
    if (t) window.heroStroke = StrokeText(t);

    // 2) Holofote (spotlight) que segue o mouse nos cards
    document.addEventListener("pointermove", e => {
      const c = e.target.closest && e.target.closest(".proj-card, .channel, .tl-item");
      if (!c) return;
      const r = c.getBoundingClientRect();
      c.style.setProperty("--mx", e.clientX - r.left + "px");
      c.style.setProperty("--my", e.clientY - r.top + "px");
    }, { passive: true });

    // 3) Barra de progresso de rolagem
    const bar = document.createElement("div");
    bar.className = "scroll-progress";
    document.body.appendChild(bar);
    const upd = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      bar.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
    };
    addEventListener("scroll", upd, { passive: true }); upd();

    // 4) Botões magnéticos (desktop)
    if (window.gsap && !reduce && matchMedia("(hover:hover)").matches) {
      document.querySelectorAll(".hero-actions .btn, .cv-print").forEach(b => {
        b.addEventListener("pointermove", e => {
          const r = b.getBoundingClientRect();
          gsap.to(b, { x: (e.clientX - r.left - r.width / 2) * 0.18, y: (e.clientY - r.top - r.height / 2) * 0.3, duration: 0.3 });
        });
        b.addEventListener("pointerleave", () => gsap.to(b, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1,.5)" }));
      });
    }

    // 5) Reanima o título ao voltar para a aba Projetos
    document.querySelectorAll('[data-view="projetos"]').forEach(b =>
      b.addEventListener("click", () => setTimeout(() => window.heroStroke && window.heroStroke.replay(), 120)));
  });
})();
