// contentScript.js

const observer = new MutationObserver((mutations, observer) => {
    const link = Array.from(document.querySelectorAll('a.dropdown-item')).find(el => el.textContent.includes('SCY · 1080p') && el.querySelector('span.badge-primary'));

    if (link) {
        console.log(link);
        link.click();
        observer.disconnect();  // Stop observing after clicking the link
    }
});

// Start observing the document
observer.observe(document, {
    childList: true,  // Watch for added/removed children
    subtree: true,    // Watch the entire subtree
});

console.log('included');
