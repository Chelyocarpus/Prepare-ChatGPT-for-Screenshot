// ==UserScript==
// @name         Prepare ChatGPT for Screenshot
// @icon         https://www.google.com/s2/favicons?domain=openai.com
// @namespace    https://github.com/Chelyocarpus/ChatGPT
// @author       ChatGPT, Goliath
// @version      1.0
// @description  Add a button to the page that removes the overflow and moves the input form (will be in the way otherwise)
// @match        https://chat.openai.com/chat*
// @grant        GM_addStyle
// @require     https://use.fontawesome.com/releases/v5.15.3/js/all.js
// ==/UserScript==

// Add custom styles to the page
GM_addStyle (`
    /* Position the button in the top-right corner */
    #remove-scrollbars-button {
        position: fixed;
        top: 20px;
        right: 20px;
    }

    /* Add some margin to the camera icon */
    .fa-camera {
    margin-right: 5px;
    }

    /* Dirty fix for nav bar */
    div.flex-col.flex-1.overflow-y-auto.border-b.border-white\\/20.-mr-2 {
        overflow: hidden !important;
    }
`);

// Add the button to the page
const button = document.createElement("button");
button.id = "remove-scrollbars-button";
button.classList.add("btn", "relative", "btn-neutral", "border-0", "md:border");
button.innerHTML = '<i class="fas fa-camera"></i> Prepare for Screenshot';
button.addEventListener("click", removeElements);
document.body.appendChild(button);

// Function to remove the overflow and move the input form
function removeElements() {
    // Find all elements with the specified classes and set overflow to visible
    const elements = document.querySelectorAll(".overflow-auto, .overflow-hidden, .overflow-x-auto, .overflow-y-auto");
    elements.forEach(element => {
        element.style.overflow = "visible";
    });

    // Find the element and change its position to relative
    const elementToRemove = document.evaluate('/html/body/div[1]/div[1]/div[1]/main/div[2]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (elementToRemove) {
        elementToRemove.style.position = "relative";
    }

    // Remove the button from the DOM
    button.remove();
}
