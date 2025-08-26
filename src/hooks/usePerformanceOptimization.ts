import { useEffect } from 'react';

export const usePerformanceOptimization = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/lovable-uploads/033b9631-2244-47e9-85e8-3b8e5684eadc.png',
        '/lovable-uploads/9c7be8ee-1e8a-47a8-ba8d-c5387a5e2e4e.png'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize font loading
    const optimizeFontLoading = () => {
      const fontLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
      fontLinks.forEach(link => {
        if (link instanceof HTMLLinkElement) {
          link.crossOrigin = 'anonymous';
        }
      });
    };

    // Add resource hints
    const addResourceHints = () => {
      const hints = [
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
      ];

      hints.forEach(hint => {
        const existing = document.querySelector(`link[rel="${hint.rel}"][href="${hint.href}"]`);
        if (!existing) {
          const link = document.createElement('link');
          link.rel = hint.rel;
          link.href = hint.href;
          if (hint.crossOrigin) {
            link.crossOrigin = hint.crossOrigin;
          }
          document.head.appendChild(link);
        }
      });
    };

    // Defer non-critical JavaScript
    const deferNonCriticalJS = () => {
      const scripts = document.querySelectorAll('script[src]');
      scripts.forEach(script => {
        if (script instanceof HTMLScriptElement && !script.defer && !script.async) {
          script.defer = true;
        }
      });
    };

    // Run optimizations
    preloadCriticalResources();
    optimizeFontLoading();
    addResourceHints();
    deferNonCriticalJS();

    // Service Worker registration
    if ('serviceWorker' in navigator && 'production' === import.meta.env.MODE) {
      navigator.serviceWorker.register('/sw.js', { scope: '/' });
    }

    // Performance monitoring
    if ('performance' in window) {
      const perfObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            const fidEntry = entry as any;
            console.log('FID:', fidEntry.processingStart - entry.startTime);
          }
          if (entry.entryType === 'layout-shift') {
            const clsEntry = entry as any;
            console.log('CLS:', clsEntry.value);
          }
        }
      });

      try {
        perfObserver.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      } catch (e) {
        // Fallback for unsupported browsers
        console.log('Performance observer not supported');
      }
    }
  }, []);
};