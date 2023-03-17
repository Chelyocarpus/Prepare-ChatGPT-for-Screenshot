# Prepare-ChatGPT-for-Screenshot

## Technical Description
This script adds a button to the page that removes the overflow and moves the input form, making it easier to take a screenshot of the whole chat interface/conversation. It uses the GM_addStyle function to add custom CSS styles to the page, including positioning the button in the top-right corner and adding some margin to the camera icon.

When the button is clicked, the removeElements function is called, which finds all elements with the specified classes and sets their overflow to visible. It then finds the element to remove (using an XPath expression) from the DOM and changes its position to relative. Finally, it removes the button from the DOM.

## Requirements
* Tampermonkey (or something equivalent)

## Installation
https://github.com/Chelyocarpus/Prepare-ChatGPT-for-Screenshot/raw/main/Prepare-ChatGPT-for-Screenshot.user.js

## Usage
Click the button, then use the built-in screenshot function (whole page) of your favorite browser.

## Affected Pages
* https: //chat.openai.com/chat*

## Permissions
* GM_addStyle

## Issues
This is a personal script so provided as-is. Still, you can report issues [here](https://github.com/Chelyocarpus/Prepare-ChatGPT-for-Screenshot/issues).
