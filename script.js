
function cursorEffect()
{
    var page1Content = document.querySelector("#page1-content")
var cursor = document.querySelector("#cursor")

page1Content.addEventListener("mousemove", function(dets){
    gsap.to(cursor, {
        x:dets.x,
        y:dets.y
    })
})  

page1Content.addEventListener("mouseenter", function() {
    gsap.to(cursor, { scale: 1, opacity: 1 });
});

page1Content.addEventListener("mouseleave", function() {
    gsap.to(cursor, { scale: 0 , opacity: 0});
});

}
cursorEffect()

function page2Animation(){
    gsap.from("#page2-center p", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger:{
            trigger: "#page2",
            scroller: "body",
            start: "top 40%",
            end: "top 37%",
            // markers:  true,
            scrub: 2
        }
    })
    gsap.from("#page2-top-left h5", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger:{
            trigger: "#page2",
            scroller: "body",
            start: "top 40%",
            end: "top 37%",
            // markers:  true,
            scrub: 2
        }
    })

    gsap.from("#page2-top-right h5", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger:{
            trigger: "#page2",
            scroller: "body",
            start: "top 40%",
            end: "top 37%",
            // markers:  true,
            scrub: 2
        }
    })
}
page2Animation()