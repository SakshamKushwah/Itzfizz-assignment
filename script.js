gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

tl.from(".eyebrow", {
  y: 18,
  opacity: 0,
  duration: 0.6,
})
  .from(
    ".headline span:not(.gap)",
    {
      yPercent: 80,
      opacity: 0,
      duration: 0.7,
      stagger: 0.035,
    },
    "-=0.2"
  )
  .from(
    ".stat-card",
    {
      y: 24,
      opacity: 0,
      duration: 0.6,
      stagger: 0.12,
    },
    "-=0.28"
  )
  .from(
    ".hero-visual",
    {
      y: 30,
      opacity: 0,
      rotate: -2,
      duration: 0.9,
    },
    "-=0.4"
  );

gsap.to("#heroVisual", {
  xPercent: 22,
  yPercent: 12,
  rotate: 8,
  scale: 1.08,
  ease: "none",
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "bottom top",
    scrub: 0.8,
  },
});

gsap.to(".visual-glow", {
  scale: 1.4,
  opacity: 0.45,
  ease: "none",
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "bottom top",
    scrub: 1,
  },
});
