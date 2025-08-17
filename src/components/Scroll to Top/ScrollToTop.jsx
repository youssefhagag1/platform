import React, { useEffect, useRef } from 'react';
import ScrollToTopStyles from './ScrollToTop.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function ScrollToTop() {
  const wrapperRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          const doc = document.documentElement;
          const scrollTop = window.scrollY || doc.scrollTop;
          const max = doc.scrollHeight - window.innerHeight;
          const progress = max > 0 ? (scrollTop / max) * 100 : 0;

          if (scrollTop > 100) {
            wrapperRef.current?.classList.add(ScrollToTopStyles.active);
          } else {
            wrapperRef.current?.classList.remove(ScrollToTopStyles.active);
          }

          if (btnRef.current) {
            btnRef.current.style.setProperty('--progress', progress + '%');
          }

          ticking = false;
        });
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={ScrollToTopStyles.top} ref={wrapperRef}>
      <button
        onClick={scrollToTop}
        ref={btnRef}
        aria-label="Scroll to top"
        type="button"
      >
        <span className={ScrollToTopStyles.iconWrap}>
          <FontAwesomeIcon icon={faArrowUp} />
        </span>
      </button>
    </div>
  );
}

export default ScrollToTop;
