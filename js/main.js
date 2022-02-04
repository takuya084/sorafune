'use strict';
{
  // open close
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const overlay = document.querySelector('.overlay');

    open.addEventListener('click', () => {
      overlay.classList.add('show');
      open.classList.add('hide');
    });

    close.addEventListener('click', () => {
      overlay.classList.remove('show');
      open.classList.remove('hide');
    });

  // slideshow
  function play() {
    setTimeout(() => {
      images[currentIndex].classList.remove('current');
      currentIndex++;
      if (currentIndex > images.length - 1) {
          currentIndex = 0;
      }
      images[currentIndex].classList.add('current');
      play();
    }, 5000);
  }
  const images = document.querySelectorAll('.hero img');
  let currentIndex = 0;
  play();

  //scroll(position:fixed)
  function onScrollCallback(entries){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        header.classList.add('scrolled');
      }else{
        header.classList.remove('scrolled');
      }
    });
  }
  const header = document.querySelector('.index_header');
  const onScrollObserver = new IntersectionObserver(onScrollCallback);
  onScrollObserver.observe(document.getElementById('target'));

    // toTop
  const toTop = document.getElementById('to_top');
  toTop.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  // animate
  function inViewCallback(entries, obs){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return;
      }
      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    })
  }
  const inViewObsever = new IntersectionObserver(inViewCallback, {
    threshold: 0.2,
  });
  document.querySelectorAll('.animate').forEach(el => {
    inViewObsever.observe(el);
  });



}