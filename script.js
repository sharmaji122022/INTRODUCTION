var t1 =gsap.timeline()
t1.from("#h3", {
    y: -150,
    opacity: 0,
    delay: 0.4,
    stagger:0.5,
    duration:0.8
});
t1.from("h1", {
    x: -150,
    opacity: 0,
    delay: 0.4,
    stagger:0.5,
    duration:0.8
});
t1.from("img", {
    x: 150,
    opacity: 0,
    delay: 0.4,
    stagger:0.5,
    rotate:45,
    duration:0.8
});