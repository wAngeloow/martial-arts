gsap.registerPlugin(ScrollTrigger);

//Header
const entryTimeline = gsap.timeline();

entryTimeline
    .from("header button[aria-label='Reproduzir vídeo da academia']", {
        x: -200,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
    })
    .from("header .text-white", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    }, "-=0.5")
    .from("header a[href='#']", {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)"
    }, "-=0.3");


//Modalities
const modalityCards = document.querySelectorAll("#modalidades > div > div, #modalidades > div > a");

if (modalityCards.length > 0) {
    gsap.from(modalityCards, {
        scrollTrigger: {
            trigger: "#modalidades",
            start: "top 85%",
        },
        y: (i) => i * -40,
        opacity: 0,
        scale: 0.9,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out"
    });
}


//Coaches
gsap.from("#equipe .relative", {
    scrollTrigger: {
        trigger: "#equipe",
        start: "top 85%",
    },
    x: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
});


//Prices
const planosCards = document.querySelectorAll("#planos > div > div");
if (planosCards.length > 0) {
    gsap.from(planosCards, {
        scrollTrigger: {
            trigger: "#planos",
            start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
    });
}


//FAQ
const faqContainer = document.querySelector("#faq .flex-col.gap-5");
const faqItems = faqContainer ? faqContainer.children : [];

if (faqItems.length > 0) {
    gsap.from(faqItems, {
        scrollTrigger: {
            trigger: "#faq",
            start: "top 85%",
        },
        y: (i) => i * -30,
        scale: 0.95,
        opacity: 0,
        duration: 0.3,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "all"
    });
}


//Marquee
const marqueeContainers = document.querySelectorAll('.marquee-container');
marqueeContainers.forEach((container) => {
    const content = container.querySelector('.marquee-content');
    gsap.to(content, {
        xPercent: -20,
        ease: "none",
        scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
        }
    });
});


//Titles (H2)
gsap.utils.toArray("h2").forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: "top 90%",
        },
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.out"
    });
});