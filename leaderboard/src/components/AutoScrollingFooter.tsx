// src/components/AutoScrollingFooter.tsx
import React, { useEffect, useRef } from 'react';

const AutoScrollingFooter: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (footer) {
      footer.scrollTop = footer.scrollHeight;
      const interval = setInterval(() => {
        footer.scrollTop += 1;
      }, 50);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div ref={footerRef} className="auto-scrolling-footer">
      <img src="/assets/footer-image.jpg" alt="Footer" />
    </div>
  );
};

export default AutoScrollingFooter;
