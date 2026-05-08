// 1. Loader Logic
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        // Reduced to 1500ms per your request for a snappier feel
        setTimeout(() => {
            loader.classList.add('fade-out');
            // Trigger a reveal check immediately after loader disappears
            reveal(); 
        }, 1500);
    }
});

// 2. Dark Mode Toggle
function toggleMode() {
    // This triggers the CSS transitions for the TUKLAS spread and video zoom
    document.body.classList.toggle('dark-mode');
}

// 3. Awesome Scroll Transitions
const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        
        // Triggering when the element is 50px into the viewport
        if (elementTop < windowHeight - 50) {
            el.classList.add("active");
        } else {
            // Optional: Remove 'active' to reset animations when scrolling back up
            // el.classList.remove("active"); 
        }
    });
};

// Listen for scroll events
window.addEventListener("scroll", reveal);

// Initial check on load (in case user starts halfway down the page)
window.addEventListener("load", reveal);