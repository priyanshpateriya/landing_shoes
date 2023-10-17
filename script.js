var tl = gsap.timeline()

tl.from("#loader img",{
    scale:1,
    opacity:0,
    duration:1,
    delay:1,
})
tl.to("#loader",{
    top:"-100%",
    duration:1,
})
tl.from("#right",{
    y:"100%",
    duration: 1,
})
tl.from("#nav",{
     top:"-10%",
     duration: 1,
     opacity:0,
     delay:1,
})

tl.from("#left #left-inner h2",{
    x :"-70%",
    duration:1,

})
tl.from("#left #left-inner h1",{
    x :"-150%",
    duration:1,

})
tl.from("#left #left-inner #icon",{
    x :"-100%",
    duration:1,

})
tl.from("#left #left-inner p",{
    x :"-150%",
    duration:1,

})
tl.from("#left #left-inner button",{
    x :"-250%",
    duration:1,

})
tl.from("#footer",{
    y:"150%",
    duration:1,
})
tl.from("#main>img",{
    rotate:560,
    opacity:0,
    // x:"150%",
    duration:1,
})