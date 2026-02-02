// Wait for DOM
document.addEventListener("DOMContentLoaded", () => {

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Loader Animation
    const loadTl = gsap.timeline();
    loadTl.to("#loader", {
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        onComplete: () => {
            document.querySelector("#loader").style.display = "none";
        }
    });

    // Horizontal Scroll Setup (Desktop only)
    if (window.innerWidth > 768) {
        const sections = gsap.utils.toArray("section");
        const container = document.querySelector("#content");

        // Dynamic width: set container to 100vw * Number of Sections
        gsap.set(container, { width: (sections.length * 100) + "%" });

        if (sections.length > 0) {
            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: "#content",
                    pin: true,
                    scrub: 1,
                    // Snap to each section (1 / (total - 1))
                    snap: 1 / (sections.length - 1),
                    // Define total scroll distance (e.g., 3000px extra scroll)
                    end: () => "+=" + (container.offsetWidth - window.innerWidth)
                }
            });
        }
    }
});
