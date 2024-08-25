// contentScript.js

// Function to click the "Continue" button
function clickContinueButton() {
    const continueButton = document.querySelector('a.btn.btn-secondary.btn-block.redirect[rel="nofollow"]');

    if (continueButton) {
        console.log('Continue button found:', continueButton);
        continueButton.click();
    } else {
        console.log('Continue button not found');
    }
}

// Create a MutationObserver to monitor the DOM
const observer = new MutationObserver((mutations, observer) => {
    // Check if the "Continue" button is available in the DOM
    const continueButton = document.querySelector('a.btn.btn-secondary.btn-block.redirect[rel="nofollow"]');

    if (continueButton) {
        console.log('Continue button detected by observer:', continueButton);

        // Disconnect the observer once the button is found
        observer.disconnect();

        // Set a delay of 6 seconds before clicking the button
        setTimeout(clickContinueButton, 6000);
    }
});

// Start observing the document
observer.observe(document, {
    childList: true,  // Watch for added/removed children
    subtree: true,    // Watch the entire subtree
});

console.log('Script included');
