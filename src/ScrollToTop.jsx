import React from 'react';

/**
 * ScrollToTop component scrolls the window to the top when rendered.
 * 
 * This component does not render any visible content.
 * It is useful for resetting the scroll position when navigating between routes.
 */
export default function ScrollToTop() {
    window.scrollTo(0, 0);
    return null;
}