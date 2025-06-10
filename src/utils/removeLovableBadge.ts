
// Utility to remove Lovable badge from the page
export const removeLovableBadge = () => {
  // Function to remove badge elements
  const removeBadgeElements = () => {
    // Remove badge by ID
    const badgeById = document.getElementById('lovable-badge');
    if (badgeById) {
      badgeById.remove();
      console.log('Lovable badge removed by ID');
    }

    // Remove any elements containing lovable badge text or SVG
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
      const text = element.textContent?.toLowerCase() || '';
      const html = element.innerHTML?.toLowerCase() || '';
      
      // Check for lovable-related content
      if (
        text.includes('edit with') && 
        (html.includes('lovable') || html.includes('svg')) &&
        element.tagName === 'A'
      ) {
        element.remove();
        console.log('Lovable badge removed by content');
      }
    });

    // Remove elements with lovable-related attributes
    const lovableElements = document.querySelectorAll('[href*="lovable"]');
    lovableElements.forEach(element => {
      if (element.textContent?.includes('Edit with')) {
        element.remove();
        console.log('Lovable badge removed by href');
      }
    });
  };

  // Run immediately
  removeBadgeElements();

  // Run after DOM is fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', removeBadgeElements);
  }

  // Run periodically to catch dynamically added badges
  const intervalId = setInterval(removeBadgeElements, 1000);

  // Use MutationObserver to watch for DOM changes
  const observer = new MutationObserver((mutations) => {
    let shouldCheck = false;
    
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            // Check if the added node or its children contain lovable badge
            if (
              element.id === 'lovable-badge' ||
              element.querySelector('#lovable-badge') ||
              (element.tagName === 'A' && element.getAttribute('href')?.includes('lovable'))
            ) {
              shouldCheck = true;
            }
          }
        });
      }
    });

    if (shouldCheck) {
      setTimeout(removeBadgeElements, 100);
    }
  });

  // Start observing
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Clean up function
  return () => {
    clearInterval(intervalId);
    observer.disconnect();
  };
};

// Auto-run when module is imported
if (typeof window !== 'undefined') {
  removeLovableBadge();
}
