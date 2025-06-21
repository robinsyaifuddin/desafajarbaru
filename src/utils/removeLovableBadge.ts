
// Comprehensive utility to permanently remove all Lovable badge elements and scripts
export const removeLovableBadge = () => {
  // Function to aggressively remove all badge-related elements
  const removeBadgeElements = () => {
    // Remove badge by ID
    const badgeById = document.getElementById('lovable-badge');
    if (badgeById) {
      badgeById.remove();
      console.log('Lovable badge removed by ID');
    }

    // Remove close button by ID
    const closeButton = document.getElementById('lovable-badge-close');
    if (closeButton) {
      closeButton.remove();
      console.log('Lovable badge close button removed');
    }

    // Remove any script tags containing lovable badge logic
    const scriptTags = document.querySelectorAll('script');
    scriptTags.forEach(script => {
      const scriptContent = script.textContent || script.innerText || '';
      if (
        scriptContent.includes('lovable-badge') ||
        scriptContent.includes('puppeteer') ||
        scriptContent.includes('window.self !== window.top')
      ) {
        script.remove();
        console.log('Lovable badge script removed');
      }
    });

    // Remove any elements containing lovable badge text or SVG
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
      const text = element.textContent?.toLowerCase() || '';
      const html = element.innerHTML?.toLowerCase() || '';
      const className = element.className?.toLowerCase() || '';
      const id = element.id?.toLowerCase() || '';
      
      // Check for lovable-related content
      if (
        text.includes('edit with') && 
        (html.includes('lovable') || html.includes('svg')) &&
        element.tagName === 'A'
      ) {
        element.remove();
        console.log('Lovable badge removed by content');
      }

      // Remove by class names containing lovable
      if (className.includes('lovable') || id.includes('lovable')) {
        element.remove();
        console.log('Lovable element removed by class/id');
      }

      // Remove elements with data attributes related to lovable
      if (element.hasAttribute('data-lovable') || element.hasAttribute('data-badge')) {
        element.remove();
        console.log('Lovable element removed by data attribute');
      }
    });

    // Remove elements with lovable-related attributes
    const lovableElements = document.querySelectorAll('[href*="lovable"], [src*="lovable"], [data-testid*="lovable"]');
    lovableElements.forEach(element => {
      element.remove();
      console.log('Lovable element removed by attribute');
    });

    // Remove any floating or fixed positioned elements that might be badges
    const floatingElements = document.querySelectorAll('[style*="position: fixed"], [style*="position: absolute"]');
    floatingElements.forEach(element => {
      const text = element.textContent?.toLowerCase() || '';
      if (text.includes('edit') || text.includes('lovable')) {
        element.remove();
        console.log('Floating lovable element removed');
      }
    });

    // Remove any iframes that might contain badges
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
      const src = iframe.src?.toLowerCase() || '';
      if (src.includes('lovable')) {
        iframe.remove();
        console.log('Lovable iframe removed');
      }
    });
  };

  // Function to prevent badge scripts from running
  const preventBadgeScripts = () => {
    // Override the getElementById function temporarily to prevent badge access
    const originalGetElementById = document.getElementById;
    document.getElementById = function(id) {
      if (id === 'lovable-badge' || id === 'lovable-badge-close') {
        return null; // Return null to prevent script execution
      }
      return originalGetElementById.call(document, id);
    };

    // Restore original function after a delay
    setTimeout(() => {
      document.getElementById = originalGetElementById;
    }, 5000);
  };

  // Block any attempts to create lovable badge elements
  const blockBadgeCreation = () => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              
              // Immediately remove any lovable-related elements
              if (
                element.id === 'lovable-badge' ||
                element.id === 'lovable-badge-close' ||
                element.className?.includes('lovable') ||
                element.getAttribute('href')?.includes('lovable') ||
                element.textContent?.toLowerCase().includes('edit with')
              ) {
                element.remove();
                console.log('Prevented lovable badge creation');
              }

              // Check children as well
              const lovableChildren = element.querySelectorAll('[id*="lovable"], [class*="lovable"], [href*="lovable"]');
              lovableChildren.forEach(child => {
                child.remove();
                console.log('Prevented lovable child element creation');
              });
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['id', 'class', 'href', 'src']
    });

    return observer;
  };

  // Run immediately
  removeBadgeElements();
  preventBadgeScripts();

  // Run after DOM is fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      removeBadgeElements();
      preventBadgeScripts();
    });
  }

  // Run periodically to catch any dynamically added badges
  const intervalId = setInterval(() => {
    removeBadgeElements();
  }, 500);

  // Start blocking badge creation
  const observer = blockBadgeCreation();

  // Clean up function
  return () => {
    clearInterval(intervalId);
    observer.disconnect();
  };
};

// Auto-run when module is imported
if (typeof window !== 'undefined') {
  removeLovableBadge();
  
  // Run on window load as well
  window.addEventListener('load', removeLovableBadge);
  
  // Run on focus to catch any badges added when tab was inactive
  window.addEventListener('focus', removeLovableBadge);
}
