import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 400);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <Button
        variant="primary"
        className=" position-fixed bottom-0 end-0 opacity-75 mb-3 me-3"
        style={{display: isVisible ? 'block' : 'none'}}
        onClick={scrollToTop}
      >
        В начало
      </Button>
  );
};

export default ScrollToTopButton;