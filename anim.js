/* Interlinkz Variant 2 animation layer.
   Desktop only. Content is fully visible without this file.
   D2 frame sequence: the hero link-up. The Z swoosh under the word
   "linked" draws itself stroke by stroke while the two hatched Z
   corners slide in from the page edges, so the mark links up on load. */
(function () {
  var DESKTOP = window.matchMedia("(min-width: 1024px)").matches;
  if (!DESKTOP || !window.gsap) return;
  gsap.registerPlugin(ScrollTrigger);

  /* D2 frame sequence: hero link-up */
  var swoosh = document.querySelectorAll(".swoosh .sw-p");
  if (swoosh.length) {
    swoosh.forEach(function (p) {
      var len = p.getTotalLength();
      p.style.strokeDasharray = len;
      p.style.strokeDashoffset = len;
    });
    var tl = gsap.timeline({ delay: 0.25, defaults: { ease: "power2.out" } });
    tl.to(swoosh, { strokeDashoffset: 0, duration: 0.55, stagger: 0.28, ease: "power1.inOut" });
    var corners = document.querySelectorAll(".hero2 .hz");
    if (corners.length) {
      gsap.from(corners, { x: function (i, el) { return el.dataset.dir === "r" ? 90 : -90; }, opacity: 0, duration: 0.9, ease: "power3.out", delay: 0.15 });
    }
  }

  /* Hatched Z corners on inner pages slide in */
  document.querySelectorAll(".hz-in").forEach(function (el) {
    gsap.from(el, { x: el.dataset.dir === "r" ? 70 : -70, opacity: 0, duration: 0.9, ease: "power3.out", delay: 0.15 });
  });

  /* Services Z band slides in behind the cards */
  var band = document.querySelector(".zband2");
  if (band) {
    gsap.from(band, {
      scaleX: 0.2, opacity: 0, duration: 1.0, ease: "power3.out",
      scrollTrigger: { trigger: band, start: "top 88%" }
    });
  }

  /* Gentle rise for blocks (motion only, content already visible) */
  gsap.utils.toArray("[data-rise]").forEach(function (el) {
    gsap.from(el, {
      y: 26, duration: 0.7, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 92%" }
    });
  });

  /* Chain joins: icons pop in sequence, then a pulse travels the row */
  gsap.utils.toArray("[data-joins]").forEach(function (row) {
    var icons = row.querySelectorAll(".jn");
    if (!icons.length) return;
    ScrollTrigger.create({
      trigger: row, start: "top 90%", once: true,
      onEnter: function () {
        gsap.fromTo(icons, { scale: 0.4, opacity: 0.2 }, { scale: 1, opacity: 1, duration: 0.4, stagger: 0.16, ease: "back.out(2.5)" });
        gsap.to(icons, { scale: 1.22, duration: 0.3, stagger: 0.22, delay: 0.9, yoyo: true, repeat: 1, ease: "sine.inOut" });
      }
    });
  });
})();
