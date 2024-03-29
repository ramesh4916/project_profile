var tl = gsap.timeline();
gsap.set(".a",{opacity:0});
tl.to(".a",{
    opacity:1,
    ease:Expo.easeInOut,
    duration:1,
    stagger:.6,
})
gsap.set(".b",{opacity:0});
tl.to(".b",{
    opacity:1,
    ease:Expo.easeInOut,
    duration:1,
    stagger:1,
})
gsap.set(".bb",{opacity:0,scale:3.5});
tl.to(".bb",{
    opacity:1,
    scale:1,
    ease:Expo.easeInOut,
    duration:1,
    stagger:1,
})
gsap.set(".c",{opacity:0,});
tl.to(".c",{
    opacity:1,
    ease:Expo.easeInOut,
    duration:1,
    stagger:.5,
    
})
gsap.set(".d",{opacity:0,});
tl.to(".d",{
    opacity:1,
    ease:Expo.easeInOut,
    duration:1,
    stagger:1,
})
gsap.set(".e",{opacity:0,});
tl.to(".e",{
    opacity:1,
    ease:Expo.easeInOut,
    duration:1,
    stagger:1,
})
gsap.set(".ee",{opacity:0, scale:-5});
tl.to(".ee",{
    opacity:1,
    scale:1,
    ease:Expo.easeInOut,
    duration:1,
    stagger:1,
})
gsap.set(".f",{opacity:0,});
tl.to(".f",{
    opacity:1,
    ease:Expo.easeInOut,
    duration:1,
    stagger:1,
})
tl.from("footer",{
    width:0,
    ease:Expo.easeInOut,
    duration:2,
})
gsap.set(".g",{opacity:0,});
tl.to(".g",{
    opacity:1,
    ease:Expo.easeInOut,
    duration:1,
    stagger:1,
})