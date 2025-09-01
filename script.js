
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transition = 'opacity 1s';
  });

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight;
    sections.forEach(sec => {
      if(scrollPos > sec.offsetTop + 100) {
        sec.style.opacity = 1;
      }
    });
  });
});
